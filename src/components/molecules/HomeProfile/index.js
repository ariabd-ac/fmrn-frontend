import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.wrapperProfile}>
      <View style={styles.textProfile}>
        <Text style={styles.nameProfile}>FoodMarket</Text>
        <Text style={styles.descProfile}>Let's get some foods</Text>
      </View>
      <Image source={ProfileDummy} style={styles.imgProfile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  wrapperProfile: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 26,
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  nameProfile: {
    fontFamily: fonts.primary[500],
    fontSize: 22,
    color: colors.text.primary,
  },
  descProfile: {
    fontFamily: fonts.primary.light,
    fontSize: 14,
    color: colors.text.secondary,
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
