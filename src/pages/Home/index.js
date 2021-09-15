import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets';
import {Gap} from '../../components';
import FoodCard from '../../components/molecules/FoodCard';
import {colors, fonts} from '../../utils';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperProfile}>
        <View style={styles.textProfile}>
          <Text style={styles.nameProfile}>FoodMarket</Text>
          <Text style={styles.descProfile}>Let's get some foods</Text>
        </View>
        <Image source={ProfileDummy} style={styles.imgProfile} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.foodCard}>
          {/* <Gap width={24} /> */}
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <Gap width={24} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    // flex: 1,
  },
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
  foodCard: {
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 24,
  },
});
