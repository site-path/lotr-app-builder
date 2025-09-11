
import { Army, ArmyAlignment, Unit, UnitType } from '../../types';

export const deadOfDunharrow: Army = {
  id: 'dead-of-dunharrow',
  name: 'The Dead of Dunharrow',
  alignment: ArmyAlignment.GOOD,
  units: [
    {
        id: 'king-of-the-dead',
        name: 'King of the Dead',
        type: UnitType.HERO,
        points: 100,
        stats: { mv: '8"', f: '6/4+', s: '4', d: '8', a: '2', w: '3', c: '3+', i: '5+', might: 1, will: 6, fate: 3 },
        wargear: ['Armour', 'Hand weapon'],
        heroicActions: ['Heroic March', 'Heroic Strike'],
        specialRules: ["Drain Soul - Active - Any model that suffers a Wound from the King of the Dead automatically suffers an additional Wound with no Fate saves allowed.", "The Dead and the Living - Passive - Only friendly Dunharrow models may benefit from the King of the Dead's Stand Fast.", 'Blades of the Dead', 'Terror', 'Spectral Walk'],
        keywords: ['SPIRIT', 'DUNHARROW', 'HERO', 'INFANTRY', 'UNIQUE'],
    },
    {
        id: 'herald-of-the-dead',
        name: 'Herald of the Dead',
        type: UnitType.HERO,
        points: 70,
        stats: { mv: '8"', f: '5/4+', s: '4', d: '8', a: '2', w: '2', c: '4+', i: '5+', might: 0, will: 3, fate: 2 },
        wargear: ['Armour', 'Shield', 'Hand weapon', 'Spear'],
        heroicActions: [],
        specialRules: ["Pennant of the Dead - Passive - Friendly Dunharrow models within 3\" of a Herald of the Dead gain a bonus of +1 to their Fight value.", "The King's Counsel - Passive - If the King of the Dead is within 3\", he may use the Herald of the Dead's Might points to declare Heroic Actions, instead of using his own Might points.", 'Blades of the Dead', 'Terror', 'Spectral Walk'],
        keywords: ['SPIRIT', 'DUNHARROW', 'HERO', 'INFANTRY'],
    },
    {
        id: 'rider-of-the-dead',
        name: 'Rider of the Dead',
        type: UnitType.WARRIOR,
        points: 25,
        stats: { mv: '8"', f: '3/4+', s: '3', d: '5', a: '1', w: '1', c: '4+', i: '6+' },
        wargear: ['Armour', 'Hand weapon', 'Shield', 'Spectral Steed'],
        specialRules: ['Blades of the Dead', 'Terror', 'Spectral Walk', 'Spectral Steed (Mv 12", Fv 2, Sv 6+, D 3, A 0, W 1, C 5+, I 7+)'],
        keywords: ['SPIRIT', 'DUNHARROW', 'WARRIOR', 'INFANTRY'],
    },
    {
        id: 'warrior-of-the-dead',
        name: 'Warrior of the Dead',
        type: UnitType.WARRIOR,
        points: 14,
        stats: { mv: '8"', f: '3/4+', s: '3', d: '7', a: '1', w: '1', c: '4+', i: '6+' },
        options: [
            { id: 'warrior-dead-banner', name: 'Banner', points: 25 },
            { id: 'warrior-dead-spear', name: 'Spear', points: 1 },
            { id: 'warrior-dead-shield', name: 'Shield', points: 1 },
        ],
        wargear: ['Armour', 'Hand weapon'],
        specialRules: ['Blades of the Dead', 'Terror', 'Spectral Walk'],
        keywords: ['SPIRIT', 'DUNHARROW', 'WARRIOR', 'INFANTRY'],
    },
  ]
};
