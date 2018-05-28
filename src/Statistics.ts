import * as service from "./service"

export class Statistics {
	constructor(
		readonly directProfit: number,
		readonly ps: number,
		readonly dividendShare: number,
		readonly dividendProfit: number,
		readonly assetValuePerShare: number,
		readonly profitPerShare: number,
		readonly dividendAsset: number,
		readonly pe: number) {
	}
	static load(url: string): Promise<Statistics> {
		return fetch(url).then(async response => await response.json() as service.Statistics).then(data => new Statistics(data.directProfit, data.ps, data.dividendShare, data.dividendProfit, data.assetValuePerShare, data.profitPerShare, data.dividendAsset, data.pe))
	}
}
