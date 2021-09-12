import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {IlSuccessSignUp} from '../../assets/Ilustration';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const SuccesSignUp = () => {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <IlSuccessSignUp />
        <Gap height={30} />
        <Text style={styles.title}>Yeay! Completed</Text>
        <Gap height={6} />
        <Text style={styles.subTitle}>Now you are able to order</Text>
        <Text style={styles.subTitle}>some foods as a self-reward</Text>
        <Gap height={30} />
        <View style={styles.succesButton}>
          <Button text="Find Foods" />
        </View>
      </View>
    </ScrollView>
  );
};

export default SuccesSignUp;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.text.primary,
  },
  subTitle: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.secondary,
  },
  succesButton: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
