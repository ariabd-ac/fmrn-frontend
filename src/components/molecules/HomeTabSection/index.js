import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
// import {ItemListFood, Rating} from '..';
import ItemListFood from '../ItemListFood';
import {FoodDummy1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: fonts.primary[500],
          color: focused ? colors.text.primary : colors.secondary,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  return (
    <View style={styles.containerNewTaste}>
      <ItemListFood />
      <ItemListFood />
      <ItemListFood />
      <ItemListFood />
      <ItemListFood />
      <ItemListFood />
      <ItemListFood />
      <ItemListFood />
      <ItemListFood />
      <ItemListFood />
      <ItemListFood />
      <ItemListFood />
    </View>
  );
};

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  1: NewTaste,
  2: SecondRoute,
  3: NewTaste,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Teaste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
      style={styles.tabView}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  tabView: {flex: 1, backgroundColor: colors.white},
  indicator: {
    width: '20%',
    backgroundColor: colors.border,
    height: 3,
    marginRight: '5%',
  },
  tabBarStyle: {
    backgroundColor: colors.white,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  containerNewTaste: {paddingTop: 8, paddingHorizontal: 24},
});
