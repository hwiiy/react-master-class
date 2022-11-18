import {useQuery} from 'react-query';
import { ChartFetcher } from '../Api';

interface IChart{
    coinId : string;
}

function Chart ({coinId}:IChart){
const {isLoading,data}=useQuery(["ohlcv",coinId],()=>{
    ChartFetcher(coinId);
})
    return <>
    <h1>Chart</h1>
    </>
}

export default Chart;