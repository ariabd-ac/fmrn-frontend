import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Rating} from '..';
import {FoodDummy1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ItemListFood = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <Image source={FoodDummy1} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Soup Bumil</Text>
          <Text style={styles.price}>IDR 299.000</Text>
        </View>
        <Rating />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {flex: 1},
  title: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  price: {
    fontFamily: fonts.primary[500],
    fontSize: 13,
    color: '#8D92A3',
  },
});
