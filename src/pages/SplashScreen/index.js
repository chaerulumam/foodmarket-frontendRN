import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFC700',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 38}} />
      <Text style={{fontSize: 32, color: '#020202'}}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;
