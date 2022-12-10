import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '3%',
    }}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood image={FoodDummy4} title="Cherry Healthy" />
        <ItemListFood image={FoodDummy1} title="Soup Bumil" />
        <ItemListFood image={FoodDummy2} title="Cappucino Latte" />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood image={FoodDummy4} title="Cherry Healthy" />
        <ItemListFood image={FoodDummy1} title="Soup Bumil" />
        <ItemListFood image={FoodDummy2} title="Cappucino Latte" />
        <ItemListFood image={FoodDummy3} title="Iced Caramel" />
      </View>
    </ScrollView>
  );
};

const Recomended = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood image={FoodDummy4} title="Cherry Healthy" />
        <ItemListFood image={FoodDummy1} title="Soup Bumil" />
      </View>
    </ScrollView>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recomended,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
