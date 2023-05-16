import { test, expect } from 'vitest'
import { DnDCharacter } from 'algorithms/DnDCharacter'

test('ability modifier', () => {
	expect(DnDCharacter.getModifierFor(3)).toBe(-4)
	expect(DnDCharacter.getModifierFor(4)).toBe(-3)
	expect(DnDCharacter.getModifierFor(5)).toBe(-3)
	expect(DnDCharacter.getModifierFor(6)).toBe(-2)
	expect(DnDCharacter.getModifierFor(7)).toBe(-2)
	expect(DnDCharacter.getModifierFor(8)).toBe(-1)
	expect(DnDCharacter.getModifierFor(9)).toBe(-1)
	expect(DnDCharacter.getModifierFor(10)).toBe(0)
	expect(DnDCharacter.getModifierFor(11)).toBe(0)
	expect(DnDCharacter.getModifierFor(12)).toBe(1)
	expect(DnDCharacter.getModifierFor(13)).toBe(1)
	expect(DnDCharacter.getModifierFor(14)).toBe(2)
	expect(DnDCharacter.getModifierFor(15)).toBe(2)
	expect(DnDCharacter.getModifierFor(16)).toBe(3)
	expect(DnDCharacter.getModifierFor(17)).toBe(3)
	expect(DnDCharacter.getModifierFor(18)).toBe(4)
})

test('ability generator', () => {
	const abilityScore = DnDCharacter.generateAbilityScore()
	expect(abilityScore).toBeGreaterThanOrEqual(3)
	expect(abilityScore).toBeLessThanOrEqual(18)
})

test('character creation', () => {
	const character = new DnDCharacter()

	expect(character.hitpoints).toBe(10 + DnDCharacter.getModifierFor(character.constitution))
	expect(character.strength).toBeGreaterThanOrEqual(3)
	expect(character.strength).toBeLessThanOrEqual(18)
	expect(character.dexterity).toBeGreaterThanOrEqual(3)
	expect(character.dexterity).toBeLessThanOrEqual(18)
	expect(character.constitution).toBeGreaterThanOrEqual(3)
	expect(character.constitution).toBeLessThanOrEqual(18)
	expect(character.intelligence).toBeGreaterThanOrEqual(3)
	expect(character.intelligence).toBeLessThanOrEqual(18)
	expect(character.wisdom).toBeGreaterThanOrEqual(3)
	expect(character.wisdom).toBeLessThanOrEqual(18)
	expect(character.charisma).toBeGreaterThanOrEqual(3)
	expect(character.charisma).toBeLessThanOrEqual(18)
})
