import { Army, ArmyAlignment, Unit, UnitType } from '../../types';

export const trolls: Army = {
    id: 'the-trolls',
    name: 'The Trolls',
    alignment: ArmyAlignment.EVIL,
    units: [
        {
            id: 'bill-the-troll',
            name: 'Bill the Troll',
            type: UnitType.HERO,
            points: 150,
            stats: { mv: '6"', f: '6/4+', s: '7', d: '7', a: '3', w: '3', c: '6+', i: '7+', might: 3, will: 1, fate: 1 },
            wargear: ['Hand weapon'],
            heroicActions: ['Heroic Strength'],
            specialRules: ["'Keep 'em for Later' - Active - If this model wins a Duel Roll, they may choose to have a friendly model within 6\" of them immediately take a Courage test. If this test is passed, they may immediately move up to their Move allowance, so long as they end their move as close as possible to the slain model.", "Stupidly Brave - Active - If this model is in base contact with an enemy model that has the Cavalry keyword, it automatically passes any Courage tests it is required to take. Additionally, if this model is in base contact with an enemy model that has the Cavalry keyword, it is not removed as a casualty, and any wounds suffered will be doubled.", 'Large Target', 'Terror', 'Throw Stones (range 12", Strength 8)'],
            keywords: ['TROLL', 'MISTY MOUNTAINS', 'HERO', 'INFANTRY', 'MONSTER', 'UNIQUE'],
        },
        {
            id: 'bert-the-troll',
            name: 'Bert the Troll',
            type: UnitType.HERO,
            points: 130,
            stats: { mv: '6"', f: '7/4+', s: '7', d: '7', a: '3', w: '3', c: '6+', i: '7+', might: 2, will: 1, fate: 1 },
            wargear: ['Hand weapon'],
            heroicActions: ['Heroic Strength'],
            specialRules: ["'Keep 'em for Later' - Active - If this model wins a Duel Roll, they may choose to have a friendly model within 6\" of them immediately take a Courage test. If this test is passed, they may immediately move up to their Move allowance, so long as they end their move as close as possible to the slain model.", "Stupidly Brave - Active - If this model is in base contact with an enemy model that has the Cavalry keyword, it automatically passes any Courage tests it is required to take. Additionally, if this model is within 6\" of a Campfire, Bert may choose a single enemy model involved in the combat with himself or a friendly model in base contact with a friendly model that is within 6\" of a Campfire, and is immediately set Ablaze.", 'Large Target', 'Terror', 'Throw Stones (range 12", Strength 8)'],
            keywords: ['TROLL', 'MISTY MOUNTAINS', 'HERO', 'INFANTRY', 'MONSTER', 'UNIQUE'],
        },
    ],
};
