import { Resource } from "./Resource"
import { Level } from "./Level"

export interface Depth extends Resource {
	readonly tick: number
	readonly bids: ReadonlyArray<Level>
	readonly asks: ReadonlyArray<Level>
}
