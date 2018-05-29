import * as service from "./service"
import { Intervall } from "./Intervall"

export class Status extends Intervall {
	constructor(
		open: number,
		high: number,
		low: number,
		close: number,
		readonly tick: number,
		readonly time: number,
		readonly bid: { price: number, volume: number },
		readonly ask: { price: number, volume: number },
		readonly last: { price: number, volume: number },
		readonly averagePrice: number,
		readonly turnover: { amount: number, volume: number },
		readonly lotSize: number) {
		super(open, high, low, close)
	}
	static load(url: string): Promise<Status> {
		return fetch(url).then(async response => await response.json() as service.Status).then(data => new Status(data.open, data.high, data.low, data.close, data.tick, data.time, data.bid, data.ask, data.last, data.averagePrice, data.turnover, data.lotSize))
	}
}
