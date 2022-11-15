import styled from "styled-components";
import { Theme } from "../theme";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Title = styled.h1`
    color : ${props =>props.theme.accentColor};
    font-size : 50px;
    text-align: center;
   
`

const Container = styled.div `
padding: 0px 20px;
max-width : 480px;
margin : 0 auto;
`;
const Header = styled.header``;
const CoinsList = styled.ul`
`;
const Coin = styled.li`
height:20px;
background-color: white;
color :  ${(props) => props.theme.bgColor};
padding: 10px;
margin:10px;
display:flex;

align-items: center;
border-radius: 10px;
 &:hover{
     color : ${(props)=>props.theme.accentColor};
 }
`
const Loader = styled.span`
text-align: center;
font-size:40px;
`
const Img = styled.img`
    width : 25px;
    height:25px;
    margin-right:10px;
`

interface CoinInterface{
    "id": string,
    "name": string,
    "symbol": string,
    "rank": number,
    "is_new": boolean,
    "is_active": boolean,
    "type": string,
}

function Coins(){
    const [coins,setCoins]= useState<CoinInterface[]>([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
       (async()=>{
           const response = await fetch("https://api.coinpaprika.com/v1/coins")
            const json = await response.json();
            setCoins(json.slice(0,100));
            setLoading(false);
        })(); 
    },[])

   

    return <Container>
        <Header>
            <Title>Coins!!</Title>
        </Header>

        {loading ? (<Loader>"Loading..."</Loader>):(
        <CoinsList>
            {coins.map(coin=> 
                <Link 
                style={{ textDecoration: "none" }} 
                to={{
                     pathname: `/${coin.id}`,
                     state : {name : coin.name}
                    }}>
                    <Coin key={coin.id}>
                        <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                    {coin.name} 
                    (${coin.type}) &rarr;
                    </Coin>
                </Link>
                )}
        </CoinsList>
        )}

    </Container>
}
export default Coins;