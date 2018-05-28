import * as service from "./service"

export class Instrument {
	readonly name: string
	readonly symbol: string
	readonly isin: string
	readonly list: string
	readonly currency: string
	private constructor(data: service.Instrument | Instrument) {
		this.name = data.name
		this.symbol = data.symbol
		this.isin = data.isin
		this.list = data.list
		this.currency = data.currency
	}
	static load(url: string): Promise<Instrument> {
		return fetch(url).then(async response => await response.json() as service.Instrument).then(instrument => new Instrument(instrument))
	}
}
