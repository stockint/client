import { Resource } from "./Resource"
import { Intervall } from "./Intervall"

export interface Status extends Resource, Intervall {
	readonly tick: number
	readonly time: number
	readonly bid: { price: number, volume: number }
	readonly ask: { price: number, volume: number }
	readonly last: { price: number, volume: number }
	readonly averagePrice: number
	readonly turnover: { amount: number, volume: number }
	readonly lotSize: number
}
