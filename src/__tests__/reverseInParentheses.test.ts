import { test, expect } from 'vitest'
import { reverseInParentheses } from 'algorithms/reverseInParentheses'

test('reverse in parentheses', () => {
	expect(reverseInParentheses('(bar)')).toBe('rab')
	expect(reverseInParentheses('foo(bar)baz')).toBe('foorabbaz')
	expect(reverseInParentheses('foo(bar)baz(blim)')).toBe('foorabbazmilb')
	expect(reverseInParentheses('foo(bar(baz))blim')).toBe('foobazrabblim')
	expect(reverseInParentheses('()')).toBe('')
	expect(reverseInParentheses('(abc)d(efg)')).toBe('cbadgfe')
})
