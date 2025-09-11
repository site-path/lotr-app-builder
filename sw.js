const CACHE_NAME = 'middle-earth-armies-builder-v1';
const REPO_PATH = '/lotr-army-builder'; // Define repository path

const urlsToCache = [
  REPO_PATH + '/',
  REPO_PATH + '/index.html',
  REPO_PATH + '/index.tsx',
  REPO_PATH + '/manifest.json',
  REPO_PATH + '/icons/icon-192x192.png',
  REPO_PATH + '/icons/icon-512x512.png',
  'https://cdn.tailwindcss.com',
  'https://esm.sh/react@^19.1.0',
  'https://esm.sh/react-dom@^19.1.0/client',
  'https://esm.sh/react-router-dom@^7.6.1'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Attempt to cache all essential URLs.
        // For CDN URLs, use a no-cors request as a fallback if direct add fails,
        // accepting that responses might be opaque but still useful for offline.
        const promises = urlsToCache.map(url => {
          const request = (url.startsWith('http') || url.startsWith('https')) ? new Request(url, { mode: 'no-cors' }) : url;
          return cache.add(request).catch(error => {
            console.warn(`Failed to cache ${url} during install: ${error}`);
            // Do not attempt retry here to keep install logic simpler; fetch handler will deal with it.
          });
        });
        return Promise.all(promises);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Determine if the response is valid for caching.
            // For specific CDN URLs in urlsToCache, we accept opaque responses.
            // For other responses, they must be 'ok' (status 200-299).
            let isValidForCaching = response.ok;
            if (response.type === 'opaque' && urlsToCache.includes(event.request.url)) {
              isValidForCaching = true; // Allow caching trusted opaque responses
            }

            if (!response || !isValidForCaching) {
              if (response) {
                console.warn(`Fetch for ${event.request.url} returned type ${response.type}, status ${response.status}. Won't cache.`);
              } else {
                console.warn(`Fetch for ${event.request.url}: No response. Won't cache.`);
              }
              return response;
            }
            
            // Determine if this successfully fetched response should be cached.
            const shouldCacheThisFetchedResponse = urlsToCache.includes(event.request.url) || 
                               (event.request.url.startsWith(self.location.origin + REPO_PATH) && !event.request.url.includes('sockjs-node'));

            if (shouldCacheThisFetchedResponse) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            return response;
          }
        ).catch(error => {
          console.error(`Fetch failed for ${event.request.url}; returning offline page or error`, error);
          // Optionally, return a fallback offline page for navigation requests:
          // if (event.request.mode === 'navigate' && event.request.method === 'GET') {
          //   return caches.match(REPO_PATH + '/index.html');
          // }
        });
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
