import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack} from '../../../assets/Icon';
import {colors, fonts} from '../../../utils';

const Header = props => {
  return (
    <View style={styles.Header}>
      {props.onBack && (
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.HeaderBack}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}

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
    alignItems: 'center',
  },
  HeaderBack: {
    // backgroundColor: 'pink',
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
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
