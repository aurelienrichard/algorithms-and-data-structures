import { expect, test } from 'vitest'
import { LRU } from 'data structures/LRU'

test('least recently used cache', () => {
	const cache = new LRU<string, number>(3) as LRU<string, number>

	expect(cache.get('foo')).toBe(undefined)
	cache.set('foo', 8)
	expect(cache.get('foo')).toBe(8)
	cache.set('bar', 17)
	expect(cache.get('bar')).toBe(17)
	cache.set('baz', 3)
	expect(cache.get('baz')).toBe(3)
	cache.set('ball', 11)
	expect(cache.get('ball')).toBe(11)
	expect(cache.get('foo')).toBe(undefined)
	cache.set('foo', 22)
	cache.set('foo', 34)
	expect(cache.get('foo')).toBe(34)
	expect(cache.get('bar')).toBe(undefined)
})
