import { Resource } from "./Resource"
import { Depth } from "./Depth"
import { Price } from "./Price"
import { Returns } from "./Returns"
import { Statistics } from "./Statistics"
import { Status } from "./Status"
import { Trade } from "./Trade"

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
