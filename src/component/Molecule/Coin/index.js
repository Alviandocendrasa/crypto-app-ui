import { StyleSheet, Text, View, Image } from 'react-native';
import { SvgUri } from 'react-native-svg'
import React from 'react';

const Coin = ({name, currency, price, percentage, image}) => {

  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.contentCoin}>
                <View style={styles.logo}>
                    <SvgUri
                        width="59.5%"
                        height="59.5%"
                        uri={image}
                    />

                </View>

                <View style={{width: 12}}/>

                <View>
                    <Text style={{fontSize: 18, color: "white"}}>{name}</Text>
                    <Text style={{fontSize: 15, color: "white"}}>{currency}</Text>
                </View>
            </View>
            <View style={styles.priceWrapper}>
                <Text style={{fontSize: 15, color: "white"}}>$ {price}</Text>
                <Text style={styles.coinPercentage(percentage)}>{percentage >= 0 ? "+"+percentage+"%" : percentage+"%"}</Text>
            </View>
        </View>

    </View>
  );
};

export default Coin;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        height: 73,
        backgroundColor: "#4C5969",
        borderRadius: 10,
        marginBottom: 8
    },

    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
    },

    contentCoin: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    logo: {
        backgroundColor: "#667A94",
        width: 47,
        height: 47,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },

    priceWrapper: {
        alignItems: "flex-end"
    },

    image: {
        width: 28,
        height: 28
    },

    coinPercentage: (percentage) => ({
        color: percentage >= 0 ? "#34C759" : "#E96565",
        fontSize: 12
    }),


});
