import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {colors, fonts} from '../../utils';

export default function SignUp(props) {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.ContainerSignIn}>
        <Header
          Headertitle="Sign Up"
          Headerdesc="Register and eat"
          onBack={() => props.navigation.goBack()}
        />
        <View style={styles.WrapperContentSignIn}>
          <Gap height={26} />
          <View style={styles.ContainerPhoto}>
            <View style={styles.borderPhoto}>
              <View style={styles.photo}>
                <Text style={styles.textPhoto}>Add Photo</Text>
              </View>
            </View>
          </View>
          <Gap height={16} />
          <TextInput Label="Full Name" placeholder="Type your full name" />
          <Gap height={16} />
          <TextInput
            Label="Email Address"
            placeholder="Type your email address"
          />
          <Gap height={16} />
          <TextInput Label="Password" placeholder="Type your password" />
          <Gap height={24} />
          <Button
            text="Continue"
            onPress={() => props.navigation.navigate('SignUpAddress')}
          />
          <Gap height={45} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {flexGrow: 1},
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
  borderPhoto: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  ContainerPhoto: {
    alignItems: 'center',
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: colors.white2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPhoto: {
    color: colors.text.secondary,
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
  },
});
