import * as service from "./service"

export class Trade {
	constructor(
		readonly market: number,
		readonly seller: string,
		readonly buyer: string,
		readonly volume: number,
		readonly price: number,
		readonly type: string,
		readonly time: number,
		readonly tick: number) {
		}
	static load(url: string): Promise<ReadonlyArray<Trade>> {
		return fetch(url).then(async response => await response.json() as service.Trade[]).then(data => data.map(trade => new Trade(trade.market, trade.seller, trade.buyer, trade.volume, trade.price, trade.type, trade.time, trade.tick)))
	}
}
