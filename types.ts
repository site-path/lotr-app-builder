// Fix: Populated types file to resolve module errors and provide strong typing.
export enum ArmyAlignment {
  GOOD = 'Good',
  EVIL = 'Evil',
}

export enum UnitType {
  HERO = 'Hero',
  WARRIOR = 'Warrior',
  INDEPENDENT_HERO = 'Independent Hero',
  HERO_OF_LEGEND = 'Hero of Legend',
  HERO_OF_VALOUR = 'Hero of Valour',
  HERO_OF_FORTITUDE = 'Hero of Fortitude',
  MINOR_HERO = 'Minor Hero',
  SIEGE_ENGINE = 'Siege Engine',
  MONSTER = 'Monster',
}

export interface UnitOption {
    id: string;
    name: string;
    points: number | 'Free';
    description?: string;
}

export interface MagicalPower {
    name: string;
    range: string;
    casting: string;
}

export interface UnitStats {
    mv?: string;
    f?: string;
    s?: string;
    d?: string;
    a?: string;
    w?: string | number;
    c?: string;
    i?: string;
    might?: number;
    will?: number;
    fate?: number;
    range?: string; // For siege engines
}

export interface Unit {
    id: string;
    name: string;
    type: UnitType;
    points: number;
    stats: UnitStats;
    wargear: string[];
    options?: UnitOption[];
    heroicActions?: string[];
    specialRules?: string[];
    keywords?: string[];
    magicalPowers?: MagicalPower[];
    isPlaceholder?: boolean;
}

export interface Army {
    id: string;
    name: string;
    alignment: ArmyAlignment;
    units: Unit[];
}
