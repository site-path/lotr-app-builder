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
  name:string;
  points: number | 'Free';
  description?: string;
}

// FIX: Added optional 'range' property for siege engines and fixed formatting.
export interface UnitStats {
  mv?: string;
  range?: string;
  f?: string;
  s?: string;
  d?: string;
  a?: string;
  w?: string;
  c?: string;
  i?: string;
  might?: number;
  will?: number;
  fate?: number;
}

export interface MagicalPower {
  name: string;
  range: string;
  casting: string;
}

export interface Unit {
  id:string;
  name: string;
  points: number; // Base points for the unit
  type: UnitType;
  stats?: UnitStats;
  wargear?: string[];
  heroicActions?: string[];
  specialRules?: string[];
  magicalPowers?: MagicalPower[];
  options?: UnitOption[];
  imageUrl?: string;
  keywords?: string[];
  isPlaceholder?: boolean;
}

// Represents a single instance of a unit before grouping, or for detailed view
export interface SelectedUnit extends Unit {
  selectedOptions: UnitOption[];
  totalPoints: number; // Points for this single configured unit
  instanceId: string; // Unique ID for this instance if needed before grouping or for specific interactions
}

// Represents a group of identical units (same base unit + same options)
export interface ArmyItemGroup {
  itemGroupId: string; // Unique ID for the group (e.g., unitId + sortedOptionIds)
  unit: Unit; // The base unit
  selectedOptions: UnitOption[];
  quantity: number;
  pointsPerModel: number; // Points for one model with these options
  totalPoints: number; // pointsPerModel * quantity
}

// FIX: Add the exported 'SavedList' interface to resolve the import error in SavedListsPanel.tsx.
export interface SavedList {
  timestamp: number;
  name: string;
  factionName: string | null;
  alignment: ArmyAlignment;
  totalPoints: number;
  armyBuild: ArmyItemGroup[];
  selectedArmyListId: string | null;
}

export interface Army {
  id: string;
  name: string;
  alignment: ArmyAlignment;
  units: Unit[];
  // FIX: Added optional armyBonus property to the Army interface.
  armyBonus?: string;
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export interface SortCriteria {
  field: 'name' | 'pointsPerModel' | 'type';
  direction: SortDirection;
}

export interface EncyclopediaItem {
  name: string;
  category: 'Magical Power' | 'Special Rule' | 'Heroic Action';
  type?: string; 
  description: string;
}