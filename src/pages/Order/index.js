import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, HomeProfile, HomeTabSection} from '../../components';

const Order = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
      <View style={styles.page}>
        <HomeProfile />
        <Gap height={30} />
        <HomeProfile />
        <Gap height={30} />
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
        <Gap height={30} />
        <HomeProfile />
        <Gap height={30} />
      </View>
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'red',
  },
  tabContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
});
