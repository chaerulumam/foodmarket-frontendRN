import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
    }}
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

const InProgress = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          name="Cherry Healthy"
          type="in-progress"
          items={3}
          price="2.000.000"
        />
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          name="Soup Bumil"
          type="in-progress"
          items={3}
          price="2.000.000"
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          name="Cappucino Latte"
          type="in-progress"
          items={3}
          price="2.000.000"
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          name="Iced Caramel"
          type="in-progress"
          items={3}
          price="2.000.000"
        />
      </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          name="Cherry Healthy"
          type="past-orders"
          items={3}
          price="2.000.000"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          name="Soup Bumil"
          type="past-orders"
          items={3}
          price="2.000.000"
          date="Jun 12, 14:00"
          status="Cancelled"
        />
      </View>
    </ScrollView>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
