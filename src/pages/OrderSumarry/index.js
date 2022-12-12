import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy4} from '../../assets';

const OrderSummary = () => {
  return (
    <View>
      <Header
        title="Payment"
        subTitle="You deserved better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>OrderSummary Page</Text>
        <ItemListFood image={FoodDummy4} items={14} />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.800.390" />
        <ItemValue
          label="Total Price"
          value="IDR 390.803.000"
          colorValue="#1ABC9C"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to</Text>
        <ItemValue label="Name" value="Chaerul Umam" />
        <ItemValue label="Phone No." value="0813 1174 5927" />
        <ItemValue label="Address" value="Chicago" />
        <ItemValue label="House No." value="24 VTK" />
        <ItemValue label="City" value="LA Galaxy" />
      </View>

      <View style={styles.button}>
        <Button text="Checkout now" />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
