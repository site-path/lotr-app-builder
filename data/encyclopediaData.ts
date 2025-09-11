import { EncyclopediaItem } from '../types';

export const encyclopediaData: EncyclopediaItem[] = [
  // Magical Powers
  {
    name: 'Commanding Aura',
    category: 'Magical Power',
    type: 'Exhaustion',
    description: `This Magical Power targets the caster. While this power is active, the caster and all friendly models within 6" of them automatically pass all Courage tests they are required to take.`
  },
  {
    name: 'Aura of Dismay',
    category: 'Magical Power',
    type: 'Exhaustion',
    description: `This Magical Power targets the caster. Enemy models within 6" of the caster suffer a -1 penalty to any Courage tests they are required to take.`
  },
  {
    name: 'Banishment',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy Spirit model within range. The target immediately suffers 1 Wound. If this Magical Power targets a Cavalry model, the caster must choose whether the target is the rider or the Mount.`
  },
  {
    name: 'Black Dart',
    category: 'Magical Power',
    type: 'Instant',
    description: `A sinister dark force leaps from the caster's hand, penetrating the victim's flesh and reaching their heart.\nThis Magical Power targets an enemy model within range. The target immediately suffers a Strength 6 hit. If this Magical Power targets a Cavalry model, the caster must choose whether the target is the rider or the Mount.`
  },
  {
    name: 'Bladewrath',
    category: 'Magical Power',
    type: 'Temporary',
    description: `This Magical Power targets a friendly model within range. In the next Combat phase, all Hits made by the target are resolved with a Strength of 6, regardless of any other modifier.`
  },
  {
    name: 'Blessing of the Valar',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets a friendly model within range. The target immediately recovers 1 Fate point previously spent in the battle.`
  },
  {
    name: 'Blinding Light',
    category: 'Magical Power',
    type: 'Temporary',
    description: `This Magical Power targets the caster. While this power is active, the area within 6" of the caster is always considered daylight (perfect if you are playing a night battle). Additionally, while this power is active, enemy models making a Shooting Attack that targets a model within 6" of the caster will only hit on a To Hit roll of 6. Models cannot benefit from this Magical Power if there is a piece of impassable terrain, like a wall or building, directly between all parts of the model and the source of light.`
  },
  {
    name: 'Call the Winds',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy model within range. The target is immediately pushed D3+3" directly away from the caster in a straight line. If the model comes into contact with another model or a piece of terrain, it will stop immediately. After being pushed back, the target is knocked Prone. If the target was Engaged in Combat, the effect is the same and they can be pushed out of Combat.`
  },
  {
    name: 'Soothed Soul',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy model within range. The target immediately suffers 1 Wound. If this Magical Power targets a Cavalry model, the caster must choose whether the target is the rider or the Mount.`
  },
  {
    name: 'Collapse Rocks',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy model within range that is inside a ruin, a stone or brick building, a cave, a pile of rocks, or any other terrain where the caster could split the rock from under their feet or from above. The target suffers a Strength 7 hit and is knocked Prone. If the target was a Cavalry model, it will automatically be considered as if it had suffered a Thrown Rider result on the Thrown Rider Chart.`
  },
  {
    name: 'Compel',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy model within range. The caster can Move the target up to half of its Move value, even if the target has already moved this turn. They cannot Move the target out of Combat, make them perform a Jump, Climb, Leap or Swim test, dismount them, or make them dismount. They can, however, make them Move into Difficult Terrain or Charge an enemy model (if possible), in which case no Courage test would be required to Charge an enemy with the Terror special rule. They can make the target drop an Object they are carrying as part of a Scenario (but not Equipment) or wear the One Ring if they have it. Once the target has been Moved, they cannot Move further that turn for any reason, but can otherwise act normally. If the model influenced by this Magical Power would normally have to Charge as part of its Movement, it is not obligated to do so when under the influence of this Magical Power.`
  },
  {
    name: 'Curse',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy model within range. The target immediately loses 1 Fate point. If this Magical Power targets a Cavalry model, the caster must choose whether the target is the rider or the Mount.`
  },
  {
    name: 'Drain Courage',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy model within range. The target immediately worsens its Courage value by 1 for the rest of the game; so a model with a Courage of 5+ that is influenced by this Magical Power will then have a Courage of 6+. A model can be influenced by this Magical Power multiple times during the battle, worsening its Courage value each time. If this Magical Power targets a Cavalry model, the caster must choose whether the target is the rider or the Mount.`
  },
  {
    name: 'Enchant Blades',
    category: 'Magical Power',
    type: 'Temporary',
    description: `This Magical Power targets a friendly model within range. In the next Combat Phase, the target can re-roll all failed To Wound rolls when making Strikes.`
  },
  {
    name: 'Infuriate Beast',
    category: 'Magical Power',
    type: 'Temporary',
    description: `This Magical Power targets a friendly Beast model within range. The target increases its Fight, Strength, and Attacks values by 2 and gains the Fearless special rule, until the Final Phase of the turn, at which point the target will immediately suffer 1 Wound.`
  },
  {
    name: 'Crackling Flame',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy model within range. The target immediately suffers a Strength 6 hit. This is a fire-based attack, so if a model is immune to fire-based attacks, it is immune to this Magical Power.`
  },
  {
    name: 'Fog of Disarray',
    category: 'Magical Power',
    type: 'Exhaustion',
    description: `This Magical Power targets the caster. Enemy models within 6" of the caster suffer a -1 penalty to all Intelligence tests they are required to take.`
  },
  {
    name: 'Magic of the Blade',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy model within range. The caster can choose a Magical Power Cast by the target with an Exhaustion duration currently in play. That Magical Power ends immediately.`
  },
  {
    name: 'Fortify Spirit',
    category: 'Magical Power',
    type: 'Exhaustion',
    description: `This Magical Power targets a friendly model within range. Each time the target becomes the target of a Magical Power Cast by an enemy model, it gets an additional free die to attempt to Resist. This free die can still be rolled even if the target has no Will points or chooses not to use any from its reserve.`
  },
  {
    name: 'Fury (X)',
    category: 'Magical Power',
    type: 'Exhaustion',
    description: `This Magical Power targets the caster. Friendly models within 6" of the caster that have the same keyword as those shown in parentheses will automatically pass all Courage tests they are required to take.`
  },
  {
    name: 'Instill Fear',
    category: 'Magical Power',
    type: 'Temporary',
    description: `This Magical Power targets the caster. Enemy models within 6" of the caster are considered to have the Fearful special rule.`
  },
  {
    name: 'Nature\'s Wrath',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets all enemy models within range, even if they are not in the caster's Line of Sight. All targeted models are immediately knocked to the ground Prone. Cavalry models are automatically considered as if they had suffered a Thrown Rider result on the Thrown Rider Chart.`
  },
  {
    name: 'Panic Steed',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy Cavalry model within range. The rider is dismounted and the Mount immediately flees and is removed as a casualty. The rider is automatically considered as if they had suffered a Thrown Rider result on the Dismounted Rider Chart.`
  },
  {
    name: 'Paralyze',
    category: 'Magical Power',
    type: 'Exhaustion',
    description: `This Magical Power targets an enemy model within range. The target immediately becomes Paralyzed. A Paralyzed model immediately becomes Prone and can do nothing until it recovers. This includes Activating, making Shooting Attacks, declaring Heroic Actions, or using Active abilities. If a Paralyzed model is Engaged in Combat, it cannot contribute to the Duel roll and does not provide its Fight value; furthermore, it cannot make Strikes or stand up if it loses the duel. If a Paralyzed model is the only model on its side involved in a Combat, it automatically loses the Duel roll: no dice are rolled.\nAt the end of the Final Phase of each turn, a Paralyzed model can roll a D6. On a 6, the model recovers (it can use Might to improve this roll). Additionally, after this roll is made, any friendly model in base contact with a Paralyzed model can roll a D6 at a time. If a model gets a 6, the Paralyzed model recovers immediately (a Hero model can use its own Might to improve this result).\nIf a Paralyzed model is in water or on an element at the end of the Movement Phase, it must take a Swim test to see if it sinks.`
  },
  {
    name: 'Protection of the Valar',
    category: 'Magical Power',
    type: 'Temporary',
    description: `This Magical Power targets a friendly model within range. The target cannot be chosen as the target of enemy Magical Powers or enemy special rules that specifically target a model. Additionally, enemy models that target the protected model will suffer a -1 penalty to their to-hit roll.`
  },
  {
    name: 'Renew',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets a friendly model within range. The target immediately recovers 1 Wound previously lost in the battle. If this Magical Power targets a Cavalry model, the caster must choose whether the target is the rider or the Mount.`
  },
  {
    name: 'Sorcerous Blast',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy model within range. The target immediately suffers a Strength 5 hit. If it survives, it is immediately knocked to the ground Prone. If the target was a Cavalry model, it will be automatically considered as if it had suffered a "Thrown Rider" result on the Thrown Rider Chart.\nIf the target was Engaged in Combat, any other model Engaged in the same Combat will also be knocked to the ground Prone if it has a Strength equal to or less than 5: make sure to Pair Off Combats before establishing which models are knocked to the ground Prone in this way.`
  },
  {
    name: 'Strengthen Will',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets a friendly model within range. The target immediately recovers a single Will point previously spent in the battle. If this Magical Power targets a Cavalry model, the caster must choose whether the target is the rider or the Mount.`
  },
  {
    name: 'Terrifying Aura',
    category: 'Magical Power',
    type: 'Exhaustion',
    description: `This Magical Power targets the caster. While this Magical Power is active, the caster has the Terror special rule.`
  },
  {
    name: 'Transfix',
    category: 'Magical Power',
    type: 'Temporary',
    description: `This Magical Power targets an enemy model within range. Until the Final Phase of the turn, the target cannot Activate, declare Heroic Actions, use Active Abilities or make Shooting Attacks. If the target wins a Duel roll, it cannot make Strikes. If the target has a piece of equipment with an Active ability, it keeps that piece of equipment but cannot use the ability associated with it.`
  },
  {
    name: 'Tremor',
    category: 'Magical Power',
    type: 'Instant',
    description: `Draw an imaginary line 1 mm thick that extends for D3+3" directly from the caster in a direction chosen by the caster. This Magical Power targets every model (friend or foe) that is under the line. Each target immediately suffers a Strength 4 hit and is knocked to the ground Prone; if the target was a Cavalry model, it will be automatically considered as if it had suffered the Thrown Rider result on the Thrown Rider Chart. If a target is Engaged in Combat, any other model Engaged in the same Combat is considered a target: make sure to Pair Off Combats before establishing which models are targets.\nModels with the Fly special rule can never be targets of this Magical Power under any circumstances.`
  },
  {
    name: 'Wither',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy model within range. The target immediately reduces its Strength value by 1 for the rest of the game. A model can be influenced by this Magical Power multiple times during the battle, reducing its Strength value each time. If a model should ever see its Strength reduced to 0, it is immediately killed and removed as a casualty. If this Magical Power targets a Cavalry model, the caster must choose whether the target is the rider or the mount.`
  },
  {
    name: 'Wrath of Bruinen',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets all enemy models within range, even if they are not in the caster's Line of Sight. All targeted models immediately suffer a Strength 2 hit and are knocked Prone. Cavalry models are automatically considered as if they had suffered a Thrown Rider result on the Thrown Rider Chart. If a target is inside a water feature, it will suffer a Strength 8 hit instead of a Strength 2 hit.`
  },
  {
    name: 'Writhing Vines',
    category: 'Magical Power',
    type: 'Temporary',
    description: `This Magical Power targets the caster. Position a 25mm Vine Marker entirely within 3" of the caster. Enemy models that enter the area within 3" of the Vine Marker are considered in Difficult Terrain. Remove the Vine Marker during the Final Phase.`
  },
  {
    name: 'Your Staff is Broken',
    category: 'Magical Power',
    type: 'Instant',
    description: `This Magical Power targets an enemy model that has a Staff of Power within range. The target's Staff of Power is immediately destroyed: remove it from its equipment.`
  },
  // Special Rules
  {
    name: 'Ancient Enemies (X)',
    category: 'Special Rule',
    type: 'Active',
    description: `A model with this special rule must re-roll To Wound rolls with a natural result of 1 when making Strikes against a model with the keyword listed in parentheses in that model's profile. So, a model with the special rule Ancient Enemies (Elves) would re-roll To Wound rolls with a natural result of 1 against Elf models.`
  },
  {
    name: 'Plunging Fire',
    category: 'Special Rule',
    type: 'Passive',
    description: `A Siege Engine that shoots with an Archery Shot does not need Line of Sight to its target, or to a model on which its shot would scatter, as long as another friendly model has Line of Sight to the initial target. After determining the actual target, a Siege Engine with an Archery Shot does not perform In The Way tests for intervening models and terrain (the shot passes over them). However, anything that is clearly taller than the actual target and is above it when the shot lands will incur an In The Way test. This could include elements like trees, ledges, or rocks protruding from rock walls; in this case, some common sense will be needed: an entire tree would provide this In The Way, but a single branch would not!\nThis also applies when a Siege Engine with an Archery Shot hits a War Beast with a Howdah, as the Howdah is above the War Beast and will therefore provide an In The Way test.`
  },
  {
    name: 'Traitors',
    category: 'Special Rule',
    type: 'Active',
    description: `This model receives a +1 bonus to Wound when it strikes a Trapped model.`
  },
  {
    name: 'Bane of Kings',
    category: 'Special Rule',
    type: 'Active',
    description: `This model must re-roll all failed to-wound rolls when making strikes or shooting attacks.`
  },
  {
    name: 'Bane Weapons',
    category: 'Special Rule',
    type: 'Active',
    description: `A Bane Weapon will be presented as X-bane, where X is a specific keyword of a Race. For each successful Hit with a Bane Weapon (i.e., a Bane Weapon that causes an unprevented Wound), the Bane Weapon will inflict D3 Wounds instead of 1 if the target of the Hit has the same keyword as the Bane Weapon. So, a weapon with the Orc-bane rule will inflict D3 Wounds instead of 1 against Orc models.`
  },
  {
    name: 'Blades of the Dead',
    category: 'Special Rule',
    type: 'Active',
    description: `Models with this special rule do not roll to Wound when they make a Strike in the same way. Instead, when a model with this special rule makes a Strike, the target counts its Defence value as 10 minus the numerical value of its Courage. So, a model with a Courage of 8+ would consider its Defence as 2 (10-8) when a model with Blades of the Dead makes a Strike against it.`
  },
  {
    name: 'Bodyguard',
    category: 'Special Rule',
    type: 'Passive',
    description: `All models with this special rule in an Army must choose a Hero to protect; this will automatically be the General if they have the same Faction keyword as this model. If the General does not have the same Faction keyword as this model, then they will protect the Hero with the highest Heroic Tier among those who have the same Faction keyword (if there are multiple models of the same Heroic Tier, you can choose which one will be protected). All models of the same type must choose the same Hero to protect. As long as the protected Hero is alive and on the battlefield, all models protecting that Hero will automatically pass all Courage tests they are required to take.`
  },
  {
    name: 'Burly',
    category: 'Special Rule',
    type: 'Passive',
    description: `A model with this special rule does not suffer the -1 penalty to the Duel roll for using a two-handed weapon. Additionally, a model with this special rule can still Move its full Movement value while carrying a Heavy Object.`
  },
  {
    name: 'Cave Dweller',
    category: 'Special Rule',
    type: 'Active',
    description: `A model with this special rule applies a +1 modifier to all Jump, Leap, and Climb tests it performs. Additionally, a model with this special rule does not suffer a penalty to its visual distance when fighting in the dark.`
  },
  {
    name: 'Direct Shot',
    category: 'Special Rule',
    type: 'Passive',
    description: `A Siege Engine that shoots with a Direct Shot will need a Line of Sight to the initial target. Additionally, if the shot propagates to another target, the Siege Engine must have a Line of Sight to this target for it to be selected as the actual target. In both cases, this Line of Sight is traced from the firing point of the Siege Engine, so from the tip of a ballista or a siege bow, for example.\nAfter determining the actual target, a Siege Engine with a Direct Shot will perform In The Way tests in the same way as any other Shooting Attack.`
  },
  {
    name: 'Dominant (X)',
    category: 'Special Rule',
    type: 'Passive',
    description: `This model counts as the number of models shown in parentheses when calculating how many models are within range of an objective, in a specific area of the board, or when calculating how many models have fled the battlefield. So, a model with Dominant (3) would count as three models within range of an objective, or in a specific area of the board, or three models when calculating how many models have fled the battlefield. If a model gains this special rule while within range of another model or in a specific area of the board, and then moves off the board, it will not gain the benefit of this special rule once it has left the board.`
  },
  {
    name: 'Expert Rider',
    category: 'Special Rule',
    type: 'Active',
    description: `A Cavalry model with this special rule can re-roll the die roll in any Jump, Swim or Thrown Rider test, and can pick up Light Objects without having to Dismount. Additionally, a model with this special rule that carries both a bow and a shield will still get the +1 bonus to Defence for having a shield while on horseback.`
  },
  {
    name: 'Expert Shot',
    category: 'Special Rule',
    type: 'Active',
    description: `A model with this special rule can make two Shooting Attacks in the Shooting Phase instead of one. These Shooting Attacks are made one at a time and do not necessarily have to target the same enemy model, although both must be made with the same Ranged Weapon.`
  },
  {
    name: 'Fearful',
    category: 'Special Rule',
    type: 'Passive',
    description: `If a model with this special rule wishes to Charge, it must take a Courage test at the start of its Movement. If the test fails, the model cannot Move that turn, but can act normally.`
  },
  {
    name: 'Fearless',
    category: 'Special Rule',
    type: 'Passive',
    description: `A model with this special rule automatically passes any Courage test it is required to take.`
  },
  {
    name: 'Fell Sight',
    category: 'Special Rule',
    type: 'Passive',
    description: `A model with this special rule does not need to have a Line of Sight to be able to Charge an enemy model. Additionally, a model with this special rule can Charge or target an enemy model with the Stalk Unseen special rule without any penalty. If a mount has this special rule, the rider can benefit from it as long as they remain in the saddle.`
  },
  {
    name: 'Flaming Ammunition',
    category: 'Special Rule',
    type: 'Passive',
    description: `A Siege Engine enhancement with Flaming Ammunition can re-roll any failed to-Wound roll against a Siege Target.`
  },
  {
    name: 'Fly',
    category: 'Special Rule',
    type: 'Active',
    description: `A model with this special rule ignores intervening models and terrain when it moves, flying over buildings, woods, and so on, and ignoring vertical distance during movement.\nA model moving in this way cannot end its movement overlapping another model, inside a wooded terrain, or on any surface on which it cannot balance safely (flat rocks and hills are fine, but do not try to perch a model on a sloping roof, for example). Additionally, a model moving in this way cannot end its movement on terrain impossible for the enemy to reach, such as on top of a sheer rock wall with no way out, or on top of one or more terrains that would allow other models to move under it.\nIf a model wishes to do something during its movement while flying (like casting a magical power), it must land to do so. When a model lands, there cannot be any model under it and, if it lands in the control zone of an enemy model, it must charge that enemy model.\nA model with this special rule can choose not to Fly, and in that case, it will consider its Movement value as 4" instead of as indicated in its profile (usually 12"). In that case, it does not get any of the benefits of the Fly special rule, although it can enter a wooded terrain; however, if it enters a wooded terrain, it cannot choose to Fly again until it has completely left the woods.\nA model that chooses to Fly will ignore enemy Control Zones while it Moves. A model that wishes to Charge while in Flight can Charge any model in whose Control Zone its Movement ends. If a Flying model wishes to Charge a model that is already Engaged in Combat (or has otherwise lost its Control Zone), it can only do so if it can land in a position where it is not inside the Control Zones of other enemy models.`
  },
  {
    name: 'Foul Temper',
    category: 'Special Rule',
    type: 'Passive',
    description: `The Mûmak has 4 attacks, but suffers a -1 penalty to its courage tests when it checks if it can bolt.`
  },
  {
    name: 'General Hunter',
    category: 'Special Rule',
    type: 'Active',
    description: `If this model kills the enemy General in a Combat, it immediately recovers a single point of Might previously spent in the battle.`
  },
  {
    name: 'Gnarled Hide',
    category: 'Special Rule',
    type: 'Passive',
    description: `The Mûmak has a Defence of 8 instead of 7.`
  },
  {
    name: 'Harbinger of Evil (X)',
    category: 'Special Rule',
    type: 'Passive',
    description: `An enemy model within the range indicated in parentheses in this model's profile suffers a -1 penalty to all Courage tests it is required to take. This rule is not cumulative with other special rules that provide a similar effect. A model with this special rule is not affected by the "Harbinger of Evil" special rule of enemy models.`
  },
  {
    name: 'Hatred (X)',
    category: 'Special Rule',
    type: 'Active',
    description: `A model with this special rule gets a +1 bonus to Wound when it strikes a model with the same keyword as that shown in parentheses. So, a model with the special rule Hatred (Man) would get a +1 bonus to Wound when it strikes a Man model.`
  },
  {
    name: 'Horse Lord',
    category: 'Special Rule',
    type: 'Passive',
    description: `Each time the mount of a model with this special rule suffers a wound, roll a D6 with a natural 6 and the wound is ignored. Additionally, a model with this special rule can use its own Fate points to prevent wounds inflicted on its mount.`
  },
  {
    name: 'Invisible',
    category: 'Special Rule',
    type: 'Passive',
    description: `An Invisible model cannot be targeted by Magical Powers, Shooting Attacks, or special rules, and other models cannot trace a Line of Sight to it.\nAn Invisible model does not have a Control Zone and models (from both sides) can Move through it as if it were not there, although they cannot end their Movement overlapping the Invisible model. An Invisible model can Move through other models (from both sides) and can ignore enemy Control Zones; however, it cannot end its Movement overlapping another model.\nIf a model wishes to Charge an Invisible model, it must take an Intelligence test, suffering a -1 penalty to the test for every full 1" of distance of the Invisible model from it. If this Intelligence test fails, the model cannot Charge the Invisible model for that turn, but can Charge a different target if it wishes.\nAn Invisible model can declare Heroic Actions, but friendly models can never benefit from its Heroic Actions. So, an Invisible model cannot shout With Me, To the Double, Break Ranks or Take Aim, and if it declares a Heroic Combat, other friendly models cannot Move as part of it. An Invisible model cannot even provide a Resistance.\nDuring the Combat Phase, if an Invisible model is Engaged in Combat and has no other friendly models as part of the Combat, it will halve the Fight value of all enemy models with which it is Engaged in Combat. A friendly model cannot Support an Invisible model and models cannot Support a model that is fighting only against an Invisible model.\nNone of the above applies to models of Sauron or Ringwraith (see the Will of Evil special rule) for further details.`
  },
  {
    name: 'Large Target',
    category: 'Special Rule',
    type: 'Passive',
    description: `When a model makes a Shooting Attack that targets a model with this special rule, when determining the models that are on the Trajectory, ignore models (both friendly and enemy) that do not have any of the following keywords: Monster, Siege Engine, War Beast. If the target model is Engaged in Combat, the Engagement test to Shoot in Combat is still applied regardless of the model with which the target model is Engaged in Combat.`
  },
  {
    name: 'Leader (X)',
    category: 'Special Rule',
    type: 'Passive',
    description: `A model with this special rule can include Warrior models of the type listed in parentheses in its own warband.`
  },
  {
    name: 'Master of Battle (X)',
    category: 'Special Rule',
    type: 'Active',
    description: `Each time an enemy Hero declares a Heroic Action within 6" of this model, this model can roll a D6. If the result of the die is equal to or greater than the number shown in parentheses, then this model can immediately declare a Heroic Action of the same type without spending a point of Might. This can still be done if this model has no remaining Might points, or normally would not be able to declare that Heroic Action. If the roll fails, this model can still declare a Heroic Action if it wishes (even if not one it normally could not declare), at the usual cost of one point of Might.`
  },
  {
    name: 'Mighty Blow',
    category: 'Special Rule',
    type: 'Active',
    description: `For each successful Hit from this model (for example one that causes a Wound that is not prevented), the target will suffer 2 Wounds instead of 1.`
  },
  {
    name: 'Mighty Hero',
    category: 'Special Rule',
    type: 'Passive',
    description: `A model with this special rule gets a free point of Might at the start of each turn (even if its Might reserve is full). If this free point of Might is not spent by the end of the turn, it is lost.`
  },
  {
    name: 'Monstrous Charge',
    category: 'Special Rule',
    type: 'Active',
    description: `If a model with this special rule Charges in Combat, it will increase its Attacks characteristic by 1 during the subsequent Combat Phase. Additionally, if this model Charges and subsequently wins the Duel roll, all enemy models involved in the Combat with a lower Strength characteristic than this model will be immediately knocked Prone before this model makes Strikes. Cavalry models will be automatically considered as if they had suffered the Thrown Rider result on the Thrown Rider Chart.`
  },
  {
    name: 'Mountain Dweller',
    category: 'Special Rule',
    type: 'Active',
    description: `A model with this special rule can Move through areas of rocky terrain classified as Difficult Terrain as if it were Open Terrain. If a Cavalry model has this special rule, but its Mount does not, then this rule does not apply to the Mount. If a Mount has this special rule, it will still maintain its Cavalry Charge bonuses when it Charges, even if the rider does not have this special rule. Additionally, a model with this special rule can re-roll any Jump, Leap or Climb test.`
  },
  {
    name: 'Poisoned Attacks (X)',
    category: 'Special Rule',
    type: 'Active',
    description: `A model with this special rule must re-roll all To Wound rolls with a natural result of 1 when making Shooting Attacks or Strikes. Sometimes, a particular weapon will be described as benefiting from this special rule. In that case, only the To Wound rolls made for that weapon can re-roll To Wound rolls with a natural result of 1.`
  },
  {
    name: 'Rappel Lines',
    category: 'Special Rule',
    type: 'Passive',
    description: `Models in the Howdah can attempt to dismount during their Activation by rolling a D6. On a 2+, the model dismounts and is placed in base contact with the Mûmak. However, on a 1 the model suffers Fall Damage: if it survives, it is placed in base contact with the Mûmak. A model that successfully dismounts can then continue its Activation normally, even Charging if it wishes, but cannot make a shooting attack that turn.`
  },
  {
    name: 'Resistant to Magic',
    category: 'Special Rule',
    type: 'Passive',
    description: `Each time this model is targeted by a Magical Power, it gets an additional free die when it performs a Resist test, even if it has no more Will points or decides not to use them. This is cumulative with other rules that grant a similar effect.`
  },
  {
    name: 'Rocks',
    category: 'Special Rule',
    type: 'Active',
    description: `If they do not move during their activation, models in the Howdah can make a shooting attack with a range of 8" and Strength 6 instead of using a different shooting attack.`
  },
  {
    name: 'Set Ablaze',
    category: 'Special Rule',
    type: 'Passive',
    description: `A model can be set on fire in several ways. During the Final Phase of a turn, any model on fire will immediately suffer a Strength 5 hit. A model on fire can extinguish the flames by lying down and crawling 2.5 cm, or by entering a fountain. If one of these situations occurs, the model is no longer considered on fire. If a model is immune to fire-based attacks, it cannot be set on fire under any circumstances.`
  },
  {
    name: 'Severed Heads',
    category: 'Special Rule',
    type: 'Passive',
    description: `If a Mordor War Catapult chooses to shoot Severed Heads, determine the actual target as usual. Then, instead of rolling to Wound, the actual target and all enemy models within 3" of it must each take a Courage test. If the test fails, the model flees and is removed as a casualty.`
  },
  {
    name: 'Sharpshooter',
    category: 'Special Rule',
    type: 'Active',
    description: `When a model with this special rule makes a Shooting Attack that targets a Cavalry model, it can choose the rider or the Mount as the target. Additionally, if a model with this special rule hits a Cavalry model it had targeted with a Shooting Attack, it does not need to perform the In The Way test to see which part of the model it hits: it will automatically hit the part of the model it had targeted, whether it was the rider or the Mount.`
  },
  {
    name: 'Shieldwall',
    category: 'Special Rule',
    type: 'Active',
    description: `If this model carries a shield, while it is in base contact with two or more friendly models that have this special rule and carry a shield, this model receives an additional +1 bonus to its Defence. In Combat, this bonus is calculated before the model recoils.\nModels that are Prone or have the Cavalry keyword cannot benefit from this special rule, nor provide it to an ally.`
  },
  {
    name: 'Sigils of Defiance',
    category: 'Special Rule',
    type: 'Passive',
    description: `The Mûmak and all models in the Howdah get Resistance to Magic and each time they suffer a Wound they can roll a D6. On a natural 6, the Wound is prevented.`
  },
  {
    name: 'Spectral Walk',
    category: 'Special Rule',
    type: 'Passive',
    description: `A model with this special rule is never slowed by Difficult Terrain. Additionally, a model with this special rule always counts as if it had rolled a 6 for any Climb, Jump, Leap or Swim test.`
  },
  {
    name: 'Stalk Unseen',
    category: 'Special Rule',
    type: 'Passive',
    description: `An infantry model with this special rule that is partially hidden from view by a piece of terrain cannot be seen at distances greater than 6". This means that enemy models cannot target this model with shooting attacks, magical powers, special rules or anything else that requires a line of sight unless they have a completely clear view of this model.`
  },
  {
    name: 'Static',
    category: 'Special Rule',
    type: 'Passive',
    description: `If a siege engine has the Static special rule, then it can be moved or rotated.`
  },
  {
    name: 'Survival Instinct',
    category: 'Special Rule',
    type: 'Active',
    description: `Each time a model with this special rule suffers an unprevented Wound, it must take a Courage test. If the Courage test fails, the model flees and is removed from the board as a casualty. This is an exception to performing multiple Courage tests of the same type in the same turn.`
  },
  {
    name: 'Swift Movement',
    category: 'Special Rule',
    type: 'Active',
    description: `A model with this special rule is never slowed by Difficult Terrain, except for the characteristics of water. It can also ignore Obstacles while it Moves, being able to Move at any angle without having to perform a Climb or Jump test, although it will still count any vertical distance traveled for the purposes of its Movement value. A model with this special rule must end its Movement as flat as possible with respect to the playing surface: no model can end up upside down, halfway up a wall or diagonally, for example!`
  },
  {
    name: 'Sworn Protector (X)',
    category: 'Special Rule',
    type: 'Passive',
    description: `Models with this special rule will have a specific model listed in parentheses as part of the special rule. As long as the named model is alive and on the battlefield, this model automatically passes all Courage tests it is required to take.`
  },
  {
    name: 'Terror',
    category: 'Special Rule',
    type: 'Passive',
    description: `If a model wishes to Charge a model with this special rule, it must take a Courage test at the start of its Movement. If the test is passed, the model can Charge normally. If the test is failed, the model cannot Move that turn, but can act normally.\nSometimes a situation may offer the possibility for a model to Charge a model with Terror during its Movement, such as moving a different model with magic or killing something in its path with a throwing weapon. In such cases, the model must take the Courage test only at the moment the model that caused Terror becomes able to be Charged. If a model that performs a Jump, Climb or Leap test ends up within the Control Zone of an enemy with Terror and would normally be able to Charge, it will perform its Courage test after performing its Jump, Climb or Leap test.\nSometimes, a model can cause Terror only in certain enemies. In these cases, a keyword will follow Terror in parentheses and only models with that keyword will have to perform a Courage test to Charge the model. So, a model with Terror (Orc) will cause Terror only in Orc models.`
  },
  {
    name: 'Throw Stones (X)',
    category: 'Special Rule',
    type: 'Active',
    description: `If this model does not move during the Movement Phase, it can make a Shooting Attack during the subsequent Shooting Phase. The Strength and Range of this Shooting Attack will be shown in the model's profile.`
  },
  {
    name: 'Timid',
    category: 'Special Rule',
    type: 'Passive',
    description: `If a mount has this special rule, each time it wishes to charge an enemy model it must take a Courage test. It can use its rider's Courage value, but can never benefit from special rules or Magical Powers that would allow it to automatically pass a Courage test. If the test fails, the model cannot Move that turn, but can act normally. A model with this special rule does not get bonuses to the Cavalry Charge.`
  },
  {
    name: 'Tusk Weapons',
    category: 'Special Rule',
    type: 'Active',
    description: `When the Mûmak tramples, it inflicts 4 impact hits of Strength 9 instead of 3.`
  },
  {
    name: 'Unbending Combat Stance',
    category: 'Special Rule',
    type: 'Active',
    description: `If this model were to be knocked Prone for any reason, roll a D6. With a result of 4+, the model maintains its balance and is not knocked Prone. If this model is in the saddle and passes this roll, it will still be separated from its mount, but will count as a 6 on the Thrown Rider Chart. If this model would normally automatically suffer the Thrown Rider result, it can still make this roll and, if successful, will consider the result as a 6 on the Thrown Rider Chart.`
  },
  {
    name: 'Venom',
    category: 'Special Rule',
    type: 'Active',
    description: `This model must re-roll all failed To Wound rolls when making Strikes. Additionally, at the end of a Combat that involves this model, choose an enemy model that was wounded by this model but not killed and roll a D6. On a natural 6, the model suffers an additional Wound.`
  },
  {
    name: 'Will of Evil',
    category: 'Special Rule',
    type: 'Passive',
    description: `Some spectral creatures are kept alive only by the pure will of the Dark Lord. If they were to be disconnected from Sauron's power, they would vanish like smoke in the breeze. This model must give up 1 point of Will during the Final Phase if it has been involved in one or more Combats that turn; if it is in base contact with an enemy model, it is involved in that Combat - it cannot choose not to fight! If this model were to be reduced to 0 Will points, it is immediately banished and removed as a casualty. A model with this special rule cannot use its last point of Will to Cast a Magical Power or use a special rule if doing so would reduce it to 0 Will points.\nAdditionally, this model ignores the Invisible special rule and, if it has been involved in a Combat with an Invisible model that turn, does not give up a point of Will during the Final Phase.`
  },
  {
    name: 'Woodland Creature',
    category: 'Special Rule',
    type: 'Active',
    description: `A model with this special rule can move through woods and forests classified as Difficult Terrain as if they were Open Terrain. If a Cavalry model has this special rule, but its Mount does not, then this rule does not apply to the Mount. If a Mount has this special rule, it will still get its Cavalry Charge bonuses when it Charges, even if the rider does not have this special rule.`
  },
  // Heroic Actions
  {
    name: 'Heroic Accuracy',
    category: 'Heroic Action',
    type: 'Shooting Phase',
    description: `When a Hero declares a Heroic Accuracy, they gain the Sharpshooter special rule until the Final Phase of the turn, if they do not already possess it. Additionally, the Hero can re-roll any failed In The Way test when making a Shooting Attack. This includes any failed In The Way test when targeting a Cavalry model with a Shooting Attack to determine which part of the target model was hit.\nA Hero cannot declare a Heroic Accuracy if they are Engaged in Combat or otherwise rendered unable to Activate.`
  },
  {
    name: 'Heroic Challenge',
    category: 'Heroic Action',
    type: 'Combat Phase',
    description: `When a Hero declares a Heroic Challenge, they must also declare an enemy Hero within 6" of them, with the same Heroic Tier or higher, as the target of the Heroic Challenge. If there is no enemy Hero within 6" with the same Heroic Tier or higher, the Hero cannot declare a Heroic Challenge.\nWhile engaged in Combat with their target, the Hero gets a +1 Attack bonus (both in the Duel roll and when making Strikes) and a +1 bonus to Wound when making Strikes against their target. Additionally, if they kill their target (i.e., inflict the last Wound that removes them as a casualty), the Hero immediately gets 1 point of Might, even if this takes them beyond their initial limit.\nThe target of the Heroic Challenge can choose to accept or refuse the challenge. If they accept, they get the same benefits as the Hero who declared the Heroic Challenge, as listed above (as if the Hero who declared the Heroic Challenge were their target). Additionally, if the target chooses to accept, when one of the two Heroes Activates, they must Charge each other, if possible. A Hero who accepts a Heroic Challenge cannot declare a Heroic Challenge in turn until the Hero who challenged them is killed. If a Hero accepts a Heroic Challenge, no other Hero can declare a Heroic Challenge against one of the Heroes involved in the Heroic Challenge until one of the two is killed.\nIf the target refuses, they do not get any of the listed benefits, although the Hero who declared the Heroic Challenge will still get them. Additionally, if the target refuses, they cannot declare a Heroic Challenge against the Hero against whom they refused.\nA Hero who has already launched a Heroic Challenge against a target cannot declare another until their target has been removed as a casualty.`
  },
  {
    name: 'Heroic Channeling',
    category: 'Heroic Action',
    type: 'Movement Phase',
    description: `A hero who declares heroic channeling will consider the result of their next casting test this turn as a 6. Consequently, they will not have to roll the dice for the casting test, but will still have to spend a point of will to cast the magical power normally.`
  },
  {
    name: 'Heroic Combat',
    category: 'Heroic Action',
    type: 'Combat Phase',
    description: `When a Hero declares a Heroic Combat, their Combat is resolved first, before all others. Additionally, if the Hero wins their Combat and all enemy models involved in that Combat are removed as casualties, then the Hero and all friendly models involved in that Combat (except for any War Beast or Chariot models) can immediately Move in the same way they would have during the Movement Phase - however, the only things they can do are Move or Charge. If they Charge, they will fight again in the normal way, i.e., in the order chosen by the player with Priority.\nIf models Charge during this Movement, the way Combats must be divided can be modified. In this situation, the player with Priority re-associates the Combats after each successful Heroic Combat.\nA model can benefit from only one Heroic Combat per turn; so, if a model that was involved in a Heroic Combat moves to join another Combat that is also a Heroic Combat, which then succeeds, the model can no longer Move as part of the second Heroic Combat.\nA situation could arise where two opposing Hero models in the same Combat both declare a Heroic Combat. In this case, if one of the two factions causes the removal of all enemy models as casualties, they are considered to have successfully completed a Heroic Combat and can Move as described above, regardless of the choice of Heroic Combat of the player.`
  },
  {
    name: 'Heroic Defence',
    category: 'Heroic Action',
    type: 'Combat Phase',
    description: `A Hero model that declares a Heroic Defence will suffer a Wound only on a natural 6 in the roll in the subsequent Combat Phase, regardless of any special rules, modifiers, Brutal Power Attacks or the use of Might. If the Hero would normally be wounded on a 6+/4+, 6+/5+ or 6+/6+, then they will be wounded only if both rolls are a natural 6. The Heroic Defence does not grant its Mount to a Hero model if it has one.`
  },
  {
    name: 'Heroic March',
    category: 'Heroic Action',
    type: 'Movement Phase',
    description: `A Hero who declares a Heroic March adds 3" to their Movement value for the duration of the Movement Phase if they have the Infantry, Chariot or War Beast keyword; if they have the Cavalry keyword or the Fly special rule, then they add 5" to their Movement value. Additionally, the Hero cannot Charge under any circumstances during the same Movement Phase.\nIf a Hero who has declared a Heroic March is Charged and Engaged in Combat, or rendered unable to Activate in some other way, their Heroic March is canceled and the point of Might spent is lost.\n**To the Double** - A Hero who is performing a Heroic March can choose to shout "To the Double" as soon as they are Activated. In that case, note their starting position before Activating. All friendly models within 6" of the Hero when they shout "To the Double" are automatically influenced and, after the Hero's model has Activated, they get the following benefit: an influenced model adds 3" to its Movement value for the duration of the Movement Phase if it has the Infantry, Chariot or War Beast keyword; if it has the Cavalry keyword or the Fly special rule, it adds 5" instead to its Movement value. Additionally, the model cannot Charge under any circumstances during the same Movement Phase.\nInfluenced models by "To the Double" must end their Activation within 6" of the Hero who shouted "To the Double". If the model attempts to end its Activation within 6" of the Hero, but fails a roll (like a Courage test, a Jump test or a Climbing roll) that makes it impossible, it simply stops where it is. A model that fails to end its Activation within 6" of the Hero who shouted "To the Double" must give up its Activation and cannot be Activated later in the same Movement Phase. Models can choose not to Activate when they are influenced by a Heroic March, in which case they will also give up their own Activation.\nIf the Hero is removed as a casualty for any reason (like fleeing or fall damage), their Heroic March and "To the Double" will be immediately canceled.\nModels can only be influenced by the "To the Double" of one Hero model each turn: it is not possible to accumulate multiple Heroic Marches together!\nIf a Hero who has shouted "To the Double" moves off the board, then all friendly models that are influenced by their "To the Double" can also move off the board if possible; however, if they cannot, they must choose to give up their own Activation.`
  },
  {
    name: 'Heroic Move',
    category: 'Heroic Action',
    type: 'Movement Phase',
    description: `A Heroic Move allows a Hero to Activate before the other models, essentially challenging the usual Priority system. The Hero can then Activate exactly as usual and do everything they would normally be able to do when they Activate. The Hero cannot then be Activated again later in the Movement Phase.\nThis Heroic Action can prove extremely valuable and often, when the player without Priority declares a Heroic Move, their opponent will also declare one to try to maintain the initiative.\nIf a Hero who has declared a Heroic Move is Charged and Engaged in Combat, or rendered unable to Activate in some other way, their Heroic Move is canceled and the point of Might spent is lost.\n**With Me** - A Hero who is performing a Heroic Move can choose to shout "With Me" as soon as they are Activated. In that case, note their starting position before Activating. All friendly models within 6" of the Hero when they shout With Me are automatically influenced and, after the Hero has finished their Activation, they must choose to do one of two things:\n- Activate normally in the order chosen by the player who controls them. Any model that Activates as part of a With Me must end its Activation within 6" of the Hero who shouted With Me. If the model attempts to end its Activation within 6" of the Hero, but fails a roll (like a Courage test, a Jump test or a Climbing roll) that makes it impossible, it simply stops where it is.\n- Give up its Activation, in which case it does not Activate and cannot do so later in the Movement Phase. A model that cannot end its Activation within 6" of the Hero who shouted With Me must choose this option.\nIn both cases, influenced models cannot be Activated again later in the Movement Phase for any reason.\nA Hero who shouts With Me is not obligated to Move as part of their Activation, and since With Me is shouted at the start of their Activation, if something renders them unable to Move as part of their Activation (like failing a Courage test to Charge an enemy with the Terror special rule), they will still shout With Me. However, if the Hero were to be removed as a casualty for any reason (like fleeing or fall damage), their Heroic Movement and With Me will be immediately canceled.`
  },
  {
    name: 'Heroic Resolve',
    category: 'Heroic Action',
    type: 'Movement Phase',
    description: `When a Hero declares a Heroic Resolve, it has two effects, the first of which is resolved as soon as the Heroic Action is declared. Friendly models within 6" of a Hero who has declared a Heroic Resolve get an additional free die when they perform Resist tests until the Final Phase of the turn. Note that for models that do not have Will points (or none remaining), this allows them to perform a Resist test with one die instead of none.\nAdditionally, a Hero who declares a Heroic Resolve will automatically pass all Courage tests they are required to take that turn due to the Rout of their Army. If a Hero who has declared a Heroic Resolve is Charged and Engaged in Combat before they can Activate, they can still Activate only to provide a Resistance, even if they normally would not be able to (although this is the only thing they can do in this Activation). However, a Hero who has been rendered unable to Activate for other reasons (like being Transfixed) cannot provide a Resistance normally.`
  },
  {
    name: 'Heroic Shoot',
    category: 'Heroic Action',
    type: 'Shooting Phase',
    description: `A Heroic Shoot allows a Hero to Shoot before all other models in the Shooting Phase. A Hero does not need to have a Ranged Weapon to declare a Heroic Shoot, but cannot declare a Heroic Shoot if they are Engaged in Combat.\n**Break Ranks** - A Hero who is performing a Heroic Shoot can choose to shout "Break Ranks". The Hero is not required to Shoot first (or at all if they do not wish) when they shout Break Ranks.\nIf they do, all friendly models within 6" of the Hero when they shout Break Ranks are automatically influenced and can also Shoot at the same time as the Hero, in the order chosen by the player who controls them.\nFriendly models influenced by the Break Ranks of a friendly Hero do not necessarily have to target the same enemy model and can Shoot normally. However, any model influenced by the Break Ranks of a friendly Hero model that chooses not to Shoot as part of it cannot do so later in the Shooting Phase.`
  },
  {
    name: 'Heroic Strength',
    category: 'Heroic Action',
    type: 'Combat Phase',
    description: `A hero who declares a Heroic Strength will consider their Strength characteristic as double (up to a maximum of 10) when they make attacks until the final phase of the turn.`
  },
  {
    name: 'Heroic Strike',
    category: 'Heroic Action',
    type: 'Combat Phase',
    description: `A Hero who declares a Heroic Strike will add D3 to their Fight value for the duration of the Combat Phase (up to a maximum of 10). This D3 is rolled at the start of the first Combat in which the Hero is involved in that Combat Phase and will last for the entire duration of the Combat Phase. This bonus is always applied after any other effect that could influence a model's Fight value.`
  }
];
