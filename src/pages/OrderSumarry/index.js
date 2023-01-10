import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../components';
import {Gap} from '../../components';
import Axios from 'axios';
import {getData} from '../../utils';
import {API_HOST} from '../../config';
import WebView from 'react-native-webview';
import {ScrollView} from 'react-native-gesture-handler';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.id,
      total: transaction.total,
      status: 'PENDING',
    };
    getData('token').then(resToken => {
      Axios.post(`${API_HOST.url}/checkout`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then(res => {
          console.log('checkout success: ', res.data);
          setIsPaymentOpen(true);
          setPaymentURL(res.data.data.payment_url);
        })
        .catch(err => {
          console.log('error checkout: ', err);
        });
      // navigation.replace('SuccessOrder');
    });
  };

  const onNavChange = state => {
    console.log('Nav: ', state);
    const urlSuccess =
      'https://c04c-182-3-42-76.ap.ngrok.io/midtrans/success?order_id=32&status_code=201&transaction_status=pending';
    const titleWeb = 'Laravel';
    if ((state.title = titleWeb)) {
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          back={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }
  return (
    <ScrollView>
      <Header
        title="Order Summary"
        subTitle="You deserved better meal"
        back={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>OrderSummary Page</Text>
        <ItemListFood
          type="order-summary"
          price={item.price}
          name={item.name}
          items={transaction.totalItem}
          image={{uri: item.picturePath}}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue
          label={item.name}
          value={transaction.totalPrice}
          type="currency"
        />
        <ItemValue label="Driver" value={transaction.driver} type="currency" />
        <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
        <ItemValue
          label="Total Price"
          value={transaction.total}
          type="currency"
          colorValue="#1ABC9C"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to</Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No." value={userProfile.phoneNumber} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No." value={userProfile.houseNumber} />
        <ItemValue label="City" value={userProfile.city} />
      </View>

      <View style={styles.button}>
        <Button text="Checkout now" onPress={onCheckout} />
      </View>
      <Gap height={40} />
    </ScrollView>
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
