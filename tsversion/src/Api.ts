const BASE_URL = "https://api.coinpaprika.com/v1"

export function fetchCoins (){
    return fetch(`${BASE_URL}/coins`)
    .then(response => response.json());
  
}

export function InfoFetcher(coinId:string){
    return fetch(`${BASE_URL}/coins/${coinId}`)
    .then(response => response.json());
}

export function TickerFetcher(coinId:string){
    return fetch(`${BASE_URL}/tickers/${coinId}`)
    .then(response => response.json());
}

export function ChartFetcher(coinId:string){
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?${coinId}`)
    .then(response=> response.json());
}