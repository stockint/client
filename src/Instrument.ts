import * as service from "./service"
import { Statistics } from "./Statistics"

export class Instrument {
	readonly name: string
	readonly symbol: string
	readonly isin: string
	readonly list: string
	readonly currency: string
	private loadStatistics: string | Promise<Statistics>
	get statistics(): Promise<Statistics> { return typeof(this.loadStatistics) == "string" ? Statistics.load(this.loadStatistics) : this.loadStatistics }
	private constructor(data: service.Instrument | Instrument) {
		this.name = data.name
		this.symbol = data.symbol
		this.isin = data.isin
		this.list = data.list
		this.currency = data.currency
		this.loadStatistics = data instanceof Instrument ? data.loadStatistics : data.statistics
	}
	static load(url: string): Promise<Instrument> {
		return fetch(url).then(async response => await response.json() as service.Instrument).then(data => new Instrument(data))
	}
}
