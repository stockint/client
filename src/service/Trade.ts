export interface Trade {
	readonly market: number
	readonly seller: string
	readonly buyer: string
	readonly volume: number
	readonly price: number
	readonly type: string
	readonly time: number
	readonly tick: number
}
