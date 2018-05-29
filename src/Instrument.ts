import * as service from "./service"
import { Depth } from "./Depth"
import { Status } from "./Status"
import { Price } from "./Price"
import { Returns } from "./Returns"
import { Statistics } from "./Statistics"
import { Trade } from "./Trade"

export class Instrument {
	get depth(): Promise<Depth> { return typeof(this.depthData) == "string" ? Depth.load(this.depthData) : this.depthData }
	get status(): Promise<Status> { return typeof(this.statusData) == "string" ? Status.load(this.statusData) : this.statusData }
	get prices(): Promise<ReadonlyArray<Price>> { return typeof(this.pricesData) == "string" ? Price.load(this.pricesData) : this.pricesData }
	get returns(): Promise<Returns> { return typeof(this.returnsData) == "string" ? Returns.load(this.returnsData) : this.returnsData }
	get statistics(): Promise<Statistics> { return typeof(this.statisticsData) == "string" ? Statistics.load(this.statisticsData) : this.statisticsData }
	get trades(): Promise<ReadonlyArray<Trade>> { return typeof(this.tradesData) == "string" ? Trade.load(this.tradesData) : this.tradesData }
	private constructor(
		readonly name: string,
		readonly symbol: string,
		readonly isin: string,
		readonly list: string,
		readonly currency: string,
		private depthData: string | Promise<Depth>,
		private statusData: string | Promise<Status>,
		private pricesData: string | Promise<ReadonlyArray<Price>>,
		private returnsData: string | Promise<Returns>,
		private statisticsData: string | Promise<Statistics>,
		private tradesData: string | Promise<ReadonlyArray<Trade>>,
	) {
	}
	static load(url: string): Promise<Instrument> {
		return fetch(url).then(async response => await response.json() as service.Instrument).then(data => new Instrument(data.name, data.symbol, data.isin, data.list, data.currency, data.depth, data.status, data.prices, data.returns, data.statistics, data.trades))
	}
}
