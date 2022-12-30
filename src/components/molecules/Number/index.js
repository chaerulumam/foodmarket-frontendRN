import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {NumericFormat as NumberFormat} from 'react-number-format';

const Number = ({number, type, style}) => {
  if (type === 'decimal') {
    return (
      <NumberFormat
        value={number}
        displayType="text"
        decimalSeparator="."
        decimalScale={1}
        fixedDecimalScale
        renderText={value => <Text style={style}>{value}</Text>}
      />
    );
  }

  return (
    <NumberFormat
      value={number}
      thousandSeparator="."
      displayType="text"
      prefix="IDR "
      decimalSeparator=","
      renderText={value => <Text style={style}>{value}</Text>}
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
