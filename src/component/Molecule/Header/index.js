import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { DummyPhoto2 } from '../../../asset';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.textPrimary}>Welcome Back</Text>
            <Text style={styles.textSecondary}>{title}</Text>
        </View>

        <Image source={DummyPhoto2} style={styles.image}/>
      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 52,
    },

    textPrimary: {
        fontSize: 16,
        color: "white"
    },

    textSecondary: {
        fontSize: 20,
        color: "white"
    },

    image: {
        width: 51,
        height: 51,
        borderRadius: 25.5
    }
});
