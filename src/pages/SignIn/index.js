import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {colors} from '../../utils';

const SignIn = () => {
  return (
    <View style={styles.ContainerSignIn}>
      <Header Headertitle="Sign In" Headerdesc="Find your best ever meal" />
      <View style={styles.WrapperContentSignIn}>
        <TextInput Label="Email Address" />
        <Gap height={16} />
        <TextInput Label="Password" />
        <Gap height={24} />
        <Button text="Login" />
        <Gap height={12} />
        <Button color="#8D92A3" text="Create New Account" textColor="white" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  ContainerSignIn: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  WrapperContentSignIn: {
    marginTop: 36,
    // backgroundColor: 'red',
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});
