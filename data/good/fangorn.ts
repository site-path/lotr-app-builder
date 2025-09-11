
import { Army, ArmyAlignment, Unit, UnitType } from '../../types';

export const fangorn: Army = {
  id: 'fangorn',
  name: 'Fangorn',
  alignment: ArmyAlignment.GOOD,
  units: [
    {
        id: 'treebeard',
        name: 'Treebeard',
        type: UnitType.HERO,
        points: 190,
        stats: { mv: '6"', f: '8/4+', s: '8', d: '8', a: '4', w: '4', c: '3+', i: '4+', might: 4, will: 3, fate: 3 },
        options: [{ id: 'treebeard-merry-pippin', name: 'Merry & Pippin', points: 10 }],
        wargear: ['Mighty branches (hand weapon)'],
        heroicActions: ['Heroic Strength', 'Heroic March'],
        specialRules: ["Merry & Pippin - Passive - See pg 26 of Armies of LOTR book for full details. Additionally, Merry & Pippin will not be targeted by shooting attacks whilst they are on Treebeard. They cannot be dismounted and do not add any penalty for moving - see pg 26 of Armies of LOTR book for full details.", "Naturally Unhasty - Active - Treebeard may choose a single enemy model that is a Monster, Chariot or War Beast. If the chosen model is Engaged in Combat with a friendly model, then Treebeard must always Charge these types of models and may re-roll To Wound rolls against the target. Both suffer a S8 hit. If the chosen model is a Monster, Chariot or War Beast, if the chosen model is Engaged in Combat with a friendly model, then Treebeard must always Charge these types of models and may re-roll To Wound rolls against the target. Both suffer a S8 hit. If the chosen model is a Monster, Chariot or War Beast, if the chosen model is Engaged in Combat with a friendly model, then Treebeard must always Charge these types of models and may re-roll To Wound rolls against the target.", 'Fearless', 'Large Target', 'Throw Stones (range 18", Strength 10)', 'Woodland Creature'],
        keywords: ['ENT', 'HERO', 'INFANTRY', 'MONSTER', 'UNIQUE'],
    },
    {
        id: 'beechbone',
        name: 'Beechbone',
        type: UnitType.HERO,
        points: 150,
        stats: { mv: '6"', f: '7/4+', s: '8', d: '8', a: '3', w: '3', c: '3+', i: '4+', might: 2, will: 3, fate: 0 },
        wargear: ['Mighty branches (hand weapon)'],
        heroicActions: ['Heroic Strength'],
        specialRules: ["Deep-rooted Hatred - Active - Must re-roll failed To Wound rolls when making Strikes against Orc models.", "Naturally Unhasty - Active - Beechbone may choose a single enemy model that is a Monster, Chariot or War Beast. If the chosen model is Engaged in Combat with a friendly model, then Beechbone must always Charge these types of models if able to do so.", 'Fearless', 'Large Target', 'Throw Stones (range 18", Strength 10)', 'Woodland Creature'],
        keywords: ['ENT', 'HERO', 'INFANTRY', 'MONSTER', 'UNIQUE'],
    },
    {
        id: 'birchseed',
        name: 'Birchseed',
        type: UnitType.HERO,
        points: 150,
        stats: { mv: '6"', f: '7/4+', s: '8', d: '8', a: '3', w: '3', c: '3+', i: '4+', might: 1, will: 3, fate: 3 },
        wargear: ['Mighty branches (hand weapon)'],
        heroicActions: ['Heroic Strength'],
        specialRules: ["Naturally Unhasty - Active - Birchseed gets a free Heroic Move in the Move phase if it can end its move in a wooded area. The controlling player must choose to have Priority themselves that turn.", 'Fearless', 'Large Target', 'Throw Stones (range 18", Strength 10)', 'Woodland Creature'],
        keywords: ['ENT', 'HERO', 'INFANTRY', 'MONSTER', 'UNIQUE'],
    },
    {
        id: 'ent',
        name: 'Ent',
        type: UnitType.WARRIOR,
        points: 100,
        stats: { mv: '6"', f: '7/4+', s: '8', d: '8', a: '3', w: '3', c: '4+', i: '5+' },
        wargear: ['Mighty branches (hand weapon)'],
        specialRules: ["Bludgeon - Brutal Power Attack - Choose one enemy model as a casualty and roll a D6. On a 4+, the target is hurled D6\" in a random direction (in which case that model is knocked Prone). The bludgeon cannot be used if there are any friendly models within 1\" of the target model.", 'Fearless', 'Large Target', 'Throw Stones (range 18", Strength 10)', 'Woodland Creature'],
        keywords: ['ENT', 'FANGORN', 'WARRIOR', 'INFANTRY', 'MONSTER'],
    },
  ]
};
