import { Army } from '../types';

// Forces of Good
import { arnor } from './good/arnor';
import { dale } from './good/dale';
import { deadOfDunharrow } from './good/deadOfDunharrow';
import { dwarves } from './good/dwarves';
import { fangorn } from './good/fangorn';
import { fellowship } from './good/fellowship';
import { fiefdoms } from './good/fiefdoms';
import { lothlorien } from './good/lothlorien';
import { minasTirith } from './good/minasTirith';
import { numenor } from './good/numenor';
import { rivendell } from './good/rivendell';
import { rohan } from './good/rohan';
import { shire } from './good/shire';
import { thranduilsHalls } from './good/thranduilsHalls';
import { wanderers } from './good/wanderers';
import { whiteCouncil } from './good/whiteCouncil';

// Forces of Evil
import { angmar } from './evil/angmar';
import { dolGuldur } from './evil/dolGuldur';
import { dunland } from './evil/dunland';
import { fallenRealms } from './evil/fallenRealms';
import { gundabad } from './evil/gundabad';
import { hillTribes } from './evil/hillTribes';
import { isengard } from './evil/isengard';
import { mistyMountains } from './evil/mistyMountains';
import { mordor } from './evil/mordor';
import { moria } from './evil/moria';
import { trolls } from './evil/trolls';


export const FORCES_OF_GOOD_DATA: Army[] = [
    arnor,
    dale,
    deadOfDunharrow,
    dwarves,
    fangorn,
    fellowship,
    fiefdoms,
    lothlorien,
    minasTirith,
    numenor,
    rivendell,
    rohan,
    shire,
    thranduilsHalls,
    wanderers,
    whiteCouncil,
];

export const FORCES_OF_EVIL_DATA: Army[] = [
    angmar,
    dolGuldur,
    dunland,
    fallenRealms,
    gundabad,
    hillTribes,
    isengard,
    mistyMountains,
    mordor,
    moria,
    trolls
];
