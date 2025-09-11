
import { Army, ArmyAlignment, Unit, UnitType } from '../../types';

export const numenor: Army = {
  id: 'numenor',
  name: 'Númenor',
  alignment: ArmyAlignment.GOOD,
  units: [
    {
        id: 'elendil-high-king-of-gondor-and-arnor',
        name: 'Elendil, High King of Gondor and Arnor',
        type: UnitType.HERO,
        points: 175,
        stats: { mv: '6"', f: '7/4+', s: '4', d: '7', a: '3', w: '3', c: '4+', i: '4+', might: 3, will: 3, fate: 1 },
        wargear: ['Heavy armour', 'Narsil'],
        heroicActions: ['Heroic Strength', 'Heroic Challenge'],
        specialRules: ["Narsil - Active - Elven hand-and-a-half weapon that may be used as either a spear or a two-handed weapon. When using Narsil as a two-handed weapon, Elendil may choose to have any friendly models within 6\" of him that are carrying this weapon may call a Heroic Combat each turn for free.", "High King of the Elves and Men - Active - The range of Elendil's Stand Fast is 12\" rather than 6\".", 'Resistant to Magic'],
        keywords: ['MAN', 'NUMENOR', 'HERO', 'INFANTRY', 'UNIQUE'],
    },
    {
        id: 'isildur',
        name: 'Isildur',
        type: UnitType.HERO,
        points: 130,
        stats: { mv: '6"', f: '7/4+', s: '5', d: '7', a: '3', w: '3', c: '4+', i: '5+', might: 3, will: 2, fate: 2 },
        options: [
            { id: 'isildur-the-one-ring', name: 'The One Ring', points: 20 },
            { id: 'isildur-horse', name: 'Horse', points: 0 },
        ],
        wargear: ['Heavy armour', 'Hand-and-a-half weapon'],
        heroicActions: ['Heroic Strength', 'Heroic Challenge'],
        specialRules: ["The Shards of Narsil - Active - If your army also contains Elendil and Isildur is within 3\" of him at the start of any turn, then until the next friendly player's Activation, Isildur gains the Shards of Narsil. This is a Master-forged hand-and-a-half weapon which never needs more than a 4+ To Wound, or a 3+ if fighting with a two-handed weapon. Additionally, when making strikes in a Combat.", 'Resistant to Magic'],
        keywords: ['MAN', 'NUMENOR', 'HERO', 'INFANTRY', 'UNIQUE'],
    },
    {
        id: 'captain-of-numenor',
        name: 'Captain of Numenor',
        type: UnitType.HERO,
        points: 70,
        stats: { mv: '6"', f: '5/4+', s: '4', d: '6', a: '2', w: '2', c: '6+', i: '5+', might: 2, will: 1, fate: 1 },
        wargear: ['Armour', 'Shield', 'Hand weapon'],
        heroicActions: ['Heroic March'],
        keywords: ['MAN', 'NUMENOR', 'HERO', 'INFANTRY'],
    },
    {
        id: 'warrior-of-numenor',
        name: 'Warrior of Numenor',
        type: UnitType.WARRIOR,
        points: 9,
        stats: { mv: '6"', f: '4/4+', s: '3', d: '5', a: '1', w: '1', c: '7+', i: '4+' },
        options: [
            { id: 'won-shield-spear', name: 'Shield and spear', points: 2 },
            { id: 'won-longbow', name: 'Longbow', points: 1 },
        ],
        wargear: ['Armour', 'Hand weapon'],
        keywords: ['MAN', 'NUMENOR', 'WARRIOR', 'INFANTRY'],
    },
    {
        id: 'king-of-men-numenor',
        name: 'King of Men (Numenor)',
        type: UnitType.HERO,
        points: 75,
        stats: { mv: '6"', f: '5/4+', s: '5', d: '5', a: '2', w: '2', c: '4+', i: '5+', might: 2, will: 2, fate: 2 },
        options: [
            { id: 'komn-horse', name: 'Horse', points: 10 },
            { id: 'komn-heavy-armour', name: 'Exchange armour for heavy armour', points: 5 },
            { id: 'komn-lance', name: 'Lance', points: 5 },
            { id: 'komn-shield', name: 'Shield', points: 5 },
        ],
        wargear: ['Armour', 'Hand weapon'],
        heroicActions: ['Heroic March', 'Heroic Strike', 'Heroic Resolve'],
        specialRules: ['Resistant to Magic'],
        keywords: ['MAN', 'NUMENOR', 'HERO', 'INFANTRY'],
    },
  ]
};
