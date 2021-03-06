import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Rating} from '..';
import {FoodDummy1} from '../../../assets';
import {colors} from '../../../utils';

const FoodCard = () => {
  return (
    <View style={styles.food}>
      <Image source={FoodDummy1} style={styles.foodImg} />
      <View style={styles.foodDescContainer}>
        <Text style={styles.foodText}>Cheery Healthy</Text>
        <Rating />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  food: {
    backgroundColor: colors.white,
    height: 210,
    width: 200,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginLeft: 24,
  },
  foodImg: {
    height: 140,
    width: 200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  foodDescContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
