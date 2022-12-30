import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Number from '../Number';

const ItemValue = ({label, value, colorValue = '#020202', type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.lavel}>{label}</Text>
      {type === 'currency' ? (
        <Number number={value} style={styles.value(colorValue)} />
      ) : (
        <Text style={styles.value(colorValue)}>{value}</Text>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  label: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  value: color => ({fontSize: 14, fontFamily: 'Poppins-Regular', color: color}),
});
