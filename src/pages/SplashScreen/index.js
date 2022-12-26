import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import {Logo} from '../../assets';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        console.log('token', res);
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, []);

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
      <Text
        style={{
          fontSize: 32,
          color: '#020202',
          fontFamily: 'Poppins-Medium',
        }}>
        FoodMarket
      </Text>
    </View>
  );
};

export default SplashScreen;
