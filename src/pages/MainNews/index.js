import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DummyNews1, DummyNews2 } from '../../asset'
import { Coin, Header, News } from '../../component'

const MainNews = ({navigation}) => {

    const axios = require("axios")
    const API_KEY = "(API_KEY_KAMU)"
    const URL = "https://api.nomics.com/v1/currencies/ticker?key=" + API_KEY

    const [BTC, setBTC] = useState(
        {
            Name: "",
            Currency: "",
            Price: 0,
            Percentage: 0,
            Image: ""
        }
    );

    const [BNB, setBNB] = useState(
        {
            Name: "",
            Currency: "",
            Price: 0,
            Percentage: 0,
            Image: ""
        }
    );

    const [ETH, setETH] = useState(
        {
            Name: "",
            Currency: "",
            Price: 0,
            Percentage: 0,
            Image: ""
        }
    );

    const [LTC, setLTC] = useState(
        {
            Name: "",
            Currency: "",
            Price: 0,
            Percentage: 0,
            Image: ""
        }
    );

    const [DOGE, setDOGE] = useState(
        {
            Name: "",
            Currency: "",
            Price: 0,
            Percentage: 0,
            Image: ""
        }
    );

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(URL, {
                params: {
                    format: "json",
                    interval: "1d",
                    ids: "BTC,BNB,ETH,LTC,DOGE"
                }
              })
              .then(function (response) { 
                response.data.map(items => {
                    const price = (parseFloat(items.price)).toFixed(3)
                    const percentage = items["1d"].price_change_pct

                    if(items.currency === "BTC"){
                        setBTC({
                            Name: items.name,
                            Currency: items.currency,
                            Price: price,
                            Percentage: percentage,
                            Image: items.logo_url
                        })
                    }

                    else if(items.currency === "BNB"){
                        setBNB({
                            Name: items.name,
                            Currency: items.currency,
                            Price: price,
                            Percentage: percentage,
                            Image: items.logo_url
                        })
                    }

                    else if(items.currency === "ETH"){
                        setETH({
                            Name: items.name,
                            Currency: items.currency,
                            Price: price,
                            Percentage: percentage,
                            Image: items.logo_url
                        })
                    }

                    else if(items.currency === "LTC"){    
                        setLTC({
                            Name: items.name,
                            Currency: items.currency,
                            Price: price,
                            Percentage: percentage,
                            Image: items.logo_url
                        })
                    }

                    else if(items.currency === "DOGE"){
                        setDOGE({
                            Name: items.name,
                            Currency: items.currency,
                            Price: price,
                            Percentage: percentage,
                            Image: items.logo_url
                        })
                    }
        
                })
            })
                .catch(function (error) {
                    console.log("EROR");
                });
        }, 1000);
        
    }, []);
    

    return (
        <ScrollView style={styles.container}>
            <View style={{height: 40}}/>
            <Header title="Michael Cianata"/>

            <View style={{height: 30}}/>

            <Text style={styles.titlePrimary}>Lastest News</Text>

            <View style={{height: 15}}/>

            <ScrollView horizontal>
                <News title="Bitcoin Breaks $7,500 Point After a week of solid growth" image={DummyNews1}/>
                <View style={{width: 10}}/>
                <News title="Bots Are Overrunning Crypto Networks Like Solana as They ..." image={DummyNews2}/>
            </ScrollView>

            <View style={{height: 30}}/>

            <Text style={styles.titlePrimary}>Top Trending Crypto</Text>

            <View style={{height: 15}}/>

            <Coin name={BTC.Name} currency={BTC.Currency} price={BTC.Price} percentage={BTC.Percentage} image={BTC.Image}/>
            <Coin name={ETH.Name} currency={ETH.Currency} price={ETH.Price} percentage={ETH.Percentage} image={ETH.Image}/>
            <Coin name={BNB.Name} currency={BNB.Currency} price={BNB.Price} percentage={BNB.Percentage} image={BNB.Image}/>
            <Coin name={LTC.Name} currency={LTC.Currency} price={LTC.Price} percentage={LTC.Percentage} image={LTC.Image}/>
            <Coin name={DOGE.Name} currency={DOGE.Currency} price={DOGE.Price} percentage={DOGE.Percentage} image={DOGE.Image}/>

            <View style={{height: 40}}/>
            

        </ScrollView>
    )
}

export default MainNews

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#30363D",
        paddingHorizontal: "5%"
    },

    title: {
        fontSize: 20,
        color: "white"
    },

    titlePrimary: {
        fontSize: 20,
        color: "white"
    }
})
