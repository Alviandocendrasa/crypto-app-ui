import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const News = ({title,image}) => {
  return (
      <ImageBackground source={image} style={styles.image} imageStyle={{borderRadius: 10}}>
          <Text style={styles.textPrimary}>{title}</Text>
      </ImageBackground>
  );
};

export default News;

const styles = StyleSheet.create({
  image: {
    flexDirection: "column-reverse",
    padding: 12,
    width: 254,
    height: 149,
  },

  textPrimary: {
    maxWidth: 223,
    fontSize: 15,
    color: "white"
  }
});
