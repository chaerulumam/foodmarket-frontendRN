import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Helo Food Market</Text>
      </SafeAreaView>
    </View>
  );
};

export default App;
