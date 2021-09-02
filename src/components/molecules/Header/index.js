import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcBack} from '../../../assets/Icon';
import {colors, fonts} from '../../../utils';

const Header = props => {
  return (
    <View style={styles.Header}>
      <View>{/* <IcBack /> */}</View>
      <View>
        <Text style={styles.HeaderTitle}>{props.Headertitle}</Text>
        <Text style={styles.HeaderDesc}>{props.Headerdesc}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
  },
  HeaderTitle: {
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    fontSize: 22,
  },
  HeaderDesc: {
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    fontSize: 14,
  },
});
