import { Resource } from "./Resource"

export interface Instrument extends Resource {
	readonly name: string
	readonly symbol: string
	readonly isin: string
	readonly list: string
	readonly currency: string
	readonly depth: string
	readonly prices: string
	readonly returns: string
	readonly statistics: string
	readonly status: string
	readonly trades: string
}
