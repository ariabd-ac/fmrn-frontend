import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';

const index = () => {
  return (
    <View style={styles.foodDesc}>
      <View style={styles.foodStar}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOff />
      </View>
      <Text style={styles.textRating}>4.5</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  foodDesc: {
    flexDirection: 'row',
  },
  foodStar: {
    flexDirection: 'row',
    marginRight: 4,
  },
  textRating: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
});
