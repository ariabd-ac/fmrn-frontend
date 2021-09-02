import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Logo} from '../../assets/Ilustration';
import {Gap} from '../../components';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <View style={styles.Container}>
      <Logo />
      <Gap height={30} />
      <Text style={styles.TextCenter}>FoodMarket</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFC700',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextCenter: {
    fontSize: 32,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
});

export default SplashScreen;
