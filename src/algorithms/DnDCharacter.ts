// DNDCHARACTER
//
// For a game of Dungeons & Dragons, each player starts by generating a character they can play with. This character has, among other things, six abilities; strength, dexterity, constitution, intelligence, wisdom and charisma. These six abilities have scores that are determined randomly. You do this by rolling four 6-sided dice and record the sum of the largest three dice. You do this six times, once for each ability.
// Your character's initial hitpoints are 10 + your character's constitution modifier. You find your character's constitution modifier by subtracting 10 from your character's constitution, divide by 2 and round down.
// Write a random character generator that follows the rules above.
// For example, the six throws of four dice may look like:
// 5, 3, 1, 6: You discard the 1 and sum 5 + 3 + 6 = 14, which you assign to strength.
// 3, 2, 5, 3: You discard the 2 and sum 3 + 5 + 3 = 11, which you assign to dexterity.
// 1, 1, 1, 1: You discard the 1 and sum 1 + 1 + 1 = 3, which you assign to constitution.
// 2, 1, 6, 6: You discard the 1 and sum 2 + 6 + 6 = 14, which you assign to intelligence.
// 3, 5, 3, 4: You discard the 3 and sum 5 + 3 + 4 = 12, which you assign to wisdom.
// 6, 6, 6, 6: You discard the 6 and sum 6 + 6 + 6 = 18, which you assign to charisma.
// Because constitution is 3, the constitution modifier is -4 and the hitpoints are 6.

export class DnDCharacter {
	readonly strength: number
	readonly dexterity: number
	readonly constitution: number
	readonly intelligence: number
	readonly wisdom: number
	readonly charisma: number
	readonly hitpoints: number

	constructor() {
		this.strength = DnDCharacter.generateAbilityScore()
		this.dexterity = DnDCharacter.generateAbilityScore()
		this.constitution = DnDCharacter.generateAbilityScore()
		this.intelligence = DnDCharacter.generateAbilityScore()
		this.wisdom = DnDCharacter.generateAbilityScore()
		this.charisma = DnDCharacter.generateAbilityScore()
		this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
	}

	static generateAbilityScore(): number {
		const dice = Array.from({ length: 4 }, () => DnDCharacter.throwDie())

		return dice
			.sort((a, b) => a - b)
			.slice(1)
			.reduce((sum, die) => sum + die, 0)
	}

	static getModifierFor(abilityValue: number): number {
		return Math.floor((abilityValue - 10) / 2)
	}

	private static throwDie() {
		return Math.floor(Math.random() * 6 + 1)
	}
}
