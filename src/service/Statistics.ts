import { Resource } from "./Resource"

export interface Statistics extends Resource {
	readonly directProfit: number
	readonly ps: number
	readonly dividendShare: number
	readonly dividendProfit: number
	readonly assetValuePerShare: number
	readonly profitPerShare: number
	readonly dividendAsset: number
	readonly pe: number
}
