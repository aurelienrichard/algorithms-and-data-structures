import { test, expect } from 'vitest'
import { isPangram } from 'algorithms/isPangram'

test('pangram', () => {
	expect(isPangram('')).toBe(false)
	expect(isPangram('abcdefghijklmnopqrstuvwxyz')).toBe(true)
	expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true)
	expect(isPangram('a quick movement of the enemy will jeopardize five gunboats')).toBe(false)
	expect(isPangram('five boxing wizards jump quickly at it')).toBe(false)
	expect(isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog')).toBe(true)
	expect(isPangram('the 1 quick brown fox jumps over the 2 lazy dogs')).toBe(true)
	expect(isPangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')).toBe(false)
	expect(isPangram('"Five quacking Zephyrs jolt my wax bed."')).toBe(true)
	expect(isPangram('abcdefghijklm ABCDEFGHIJKLM')).toBe(false)
})
