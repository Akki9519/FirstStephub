import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useEffect ,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Card({route, navigation}: any) {
  // const[set,setData]=useState<String[]>([])

  const kullu = route.params.kullu;
  const cheeku = route.params.cheeku;
  const lists = route.params.lists;
  console.log(cheeku);
  console.log(kullu);
const getData=async ()=>{
  let email:any=await AsyncStorage.getItem('email')
  let name:any=await AsyncStorage.getItem('name')
      console.log(email,name)
  // setData([email,name]);
}



  useEffect(()=>{
getData();
  },[])
  return (
    <>


      {kullu && (
        <View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 20,
                fontFamily: 'serif',
                fontSize: 20,
              }}>
              Booking Summary
            </Text>
          </View>

          <View

        
            style={{
              height: 180,
              width: 350,
              backgroundColor: 'lightgray',
              borderRadius: 8,
              margin: 20,
              padding: 15,
            }}>
             
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Name:
            </Text>
            
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Email:
            </Text>
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Title:{kullu.title}
            </Text>
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Price:{kullu.price}
            </Text>

            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Grand Total Price:{kullu.price}
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: '700',
                fontFamily: 'serif',
                backgroundColor: 'purple',
                borderRadius: 12,
                padding: 10,
                marginHorizontal: 80,
              }}
              onPress={() => {
                navigation.navigate('Calender');
              }}>
              Pay Now
            </Text>
          </View>
        </View>
      )}
      {cheeku && (
        <View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 20,
                fontFamily: 'serif',
                fontSize: 20,
              }}>
              Booking Summary
            </Text>
          </View>
          <View
            style={{
              height: 180,
              width: 350,
              backgroundColor: 'lightgray',
              borderRadius: 8,
              margin: 20,
              padding: 15,
            }}>
            <Text
              style={{
                fontFamily: 'serif',
                fontWeight: '600',
                fontSize: 15,
                color: 'red',
              }}>
              Name:
            </Text>
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Email:
            </Text>
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Category:{cheeku.title}
            </Text>
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Price:{cheeku.id}
            </Text>
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Date:
            </Text>
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Time:
            </Text>
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Grand Total Price:
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: '700',
                fontFamily: 'serif',
                backgroundColor: 'purple',
                borderRadius: 12,
                padding: 10,
                marginHorizontal: 80,
              }}
              onPress={() => {
                navigation.navigate('Calender');
              }}>
            Pay Now
            </Text>
          </View>
        </View>
      )}
      {lists && (
        <View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 20,
                fontFamily: 'serif',
                fontSize: 20,
              }}>
              Booking Summary
            </Text>
          </View>
          <View
            style={{
              height: 180,
              width: 350,
              backgroundColor: 'lightgray',
              borderRadius: 8,
              margin: 20,
              padding: 15,
            }}>
            <Text
              style={{
                fontFamily: 'serif',
                fontWeight: '600',
                fontSize: 15,
                color: 'red',
              }}>
              Name:
            </Text>
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Email:
            </Text>
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Title:{lists.title}
            </Text>
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Price:{lists.price}
            </Text>
            
            <Text
              style={{fontFamily: 'serif', fontWeight: '600', fontSize: 15}}>
              Grand Total Price:{lists.price}
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: '700',
                fontFamily: 'serif',
                backgroundColor: 'purple',
                borderRadius: 12,
                padding: 10,
                marginHorizontal: 80,
              }}
              onPress={() => {
                navigation.navigate('Calender');
              }}>
             Pay Now
            </Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
