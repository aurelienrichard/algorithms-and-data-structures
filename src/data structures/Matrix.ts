export class Matrix {
	readonly rows: number[][]
	readonly columns: number[][]

	constructor(str: string) {
		this.rows = str.split('\n').map((row) => row.split(' ').map(Number))
		this.columns = this.rows[0].map((_, i) => this.rows.map((row) => row[i]))
	}
}
