import { test, expect } from 'vitest'
import { DoublyLinkedList } from '../data structures/linked lists/DoublyLinkedList'
import { SinglyLinkedList } from '../data structures/linked lists/SinglyLinkedList'
import type { LinkedList } from '../data structures/linked lists/LinkedList'

const linkedListTest = (list: LinkedList<number>) => {
	list.append(5)
	list.append(7)
	list.append(9)
	expect(list.get(2)).toBe(9)
	expect(list.remove(1)).toBe(7)
	expect(list).toHaveLength(2)
	expect(list.remove(1)).toBe(9)
	expect(list.remove(-1)).toBe(undefined)
	expect(list.remove(0)).toBe(5)
	list.prepend(5)
	list.prepend(7)
	list.prepend(9)
	expect(list.get(1)).toBe(7)
	expect(() => list.insert(11, 4)).toThrowError('Index out of bounds.')
	list.insert(11, 0)
	list.insert(4, 1)
	list.insert(6, 5)
	expect(list.remove(0)).toBe(11)
	expect(list.get(0)).toBe(4)
}

test('singly linked list', () => {
	linkedListTest(new SinglyLinkedList<number>())
})

test('doubly linked list', () => {
	linkedListTest(new DoublyLinkedList<number>())
})
