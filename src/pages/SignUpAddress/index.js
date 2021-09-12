import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import Select from '../../components/atoms/Select';
import {colors} from '../../utils';

const SignUpAddress = props => {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.SignUpAddress}>
        <Header
          Headertitle="Sign Up"
          Headerdesc="Register and eat"
          onBack={() => props.navigation.goBack()}
        />
        <View style={styles.WrapperContentSignIn}>
          <Gap height={26} />
          <TextInput
            Label="Phone Number"
            placeholder="Type your phone number"
          />
          <Gap height={16} />
          <TextInput Label="Address" placeholder="Type your address" />
          <Gap height={16} />
          <TextInput
            Label="House Number"
            placeholder="Type your house number"
          />
          <Gap height={24} />
          {/* <TextInput Label="City" placeholder="Type your city" /> */}
          <Select label="City" />
          <Gap height={24} />
          <Button
            text="Sign Up Now"
            onPress={() => props.navigation.navigate('SuccesSignUp')}
          />
          <Gap height={45} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  SignUpAddress: {
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
