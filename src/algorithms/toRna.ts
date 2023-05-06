// TORNA
//
// Given a DNA strand, return its RNA complement (per RNA transcription).
// Both DNA and RNA strands are a sequence of nucleotides.
// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
// G -> C
// C -> G
// T -> A
// A -> U

const complements: Map<string, string> = new Map([
	['G', 'C'],
	['C', 'G'],
	['T', 'A'],
	['A', 'U']
])

export const toRna = (dna: string) =>
	[...dna].reduce((rna, nuc) => {
		if (!complements.has(nuc)) throw Error('Invalid input DNA.')
		return rna + complements.get(nuc)
	}, '')
