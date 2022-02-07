import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconHome, IconMarket, IconWallet } from '../../../asset'

const Tabitem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === "Home"){
            return active ? <IconHome/> : <IconHome/>
        }
        if(title === "Market"){
            return active ? <IconMarket/> : <IconMarket/>
        }
        if(title === "Wallet"){
            return active ? <IconWallet/> : <IconWallet/>
        }

        return <IconHome/>
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Tabitem

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },

    text: (active) => ({
        color: active ? "#819FC3" : "#4C5969",
    })
})
