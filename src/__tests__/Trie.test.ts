import { test, expect } from 'vitest'
import { Trie } from 'data structures/Trie'

test('trie', () => {
	const trie = new Trie()

	trie.insert('foo')
	trie.insert('fool')
	trie.insert('foolish')
	trie.insert('bar')
	expect(trie.search('fo')).toEqual(['foo', 'fool', 'foolish'])
	trie.remove('fool')
	expect(trie.search('fo')).toEqual(['foo', 'foolish'])
	trie.remove('bar')
	expect(trie.search('')).toEqual(['foo', 'foolish'])
	trie.remove('fooz')
	expect(trie.search('')).toEqual(['foo', 'foolish'])
	expect(trie.search('fooz')).toEqual([])
})
