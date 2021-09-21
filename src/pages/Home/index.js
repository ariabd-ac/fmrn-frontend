import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Gap, HomeProfile, HomeTabSection} from '../../components';
import FoodCard from '../../components/molecules/FoodCard';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCard}>
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <Gap width={24} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foodCard: {
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
