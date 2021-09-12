import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import {colors, fonts} from '../../../utils';

const TextInput = props => {
  return (
    <View>
      <Text style={styles.label}>{props.Label}</Text>
      <TextInputRN style={styles.textInput} placeholder={props.placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    marginBottom: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
