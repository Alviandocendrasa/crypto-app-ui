import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Wallet = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Akun</Text>
        </View>
    )
}

export default Wallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})
