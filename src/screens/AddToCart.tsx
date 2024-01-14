import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ADD_CART_URL, CART_URL, DELETE_CART_URL } from '../constant/constant';

export default function AddToCart() {
  const [cartList,setCartList]=useState<String[]>([])
  
  const cartItem = async() => {
    let userId=await AsyncStorage.getItem('userId')
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: CART_URL,
      headers: {'Content-Type': 'application/json'},
      data:{"userID":userId}
    };

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        setCartList(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const deleteCartItem= async(id:string)=>{
    let userId=await AsyncStorage.getItem('userId')
    console.log(userId,'userid')
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${DELETE_CART_URL}/${id}`,
      headers: {'Content-Type': 'application/json'},
      data:{"userID":userId}
    };
    console.log(config,'config')
    axios
      .request(config)
      .then(response => {
        console.log('successfully')
        setCartList(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
 
  useEffect(()=>{
   cartItem();
  },[])
  return (
    <View>
       <Text style={{ color: 'red',
              textAlign: 'center',
              fontFamily: 'serif',
              fontWeight: '800',
              marginTop: 50,
              fontSize: 20,
              marginBottom:50,}}>Add To Cart </Text>

      <ScrollView>
    
        {
          cartList.map((item:any)=>{
            console.log(item,'item');
            return(
              <View style={{margin:10,padding:10}}>
                <Text>Title:{item?.detail?.title}</Text>
                <Text>Rating{item?.detail?.rating}</Text>
                <Text>Title:{item?.detail?.title}</Text>
                <Text>Title:{item?.title}</Text>
                <Text onPress={()=>{deleteCartItem(item._id)}}>Delete</Text>
              </View>
            )
          })
        }

      </ScrollView>
      
     
    </View>
  )
}

const styles = StyleSheet.create({
  cardItem:{
    backgroundColor:"lightgray",
    width:320,
    height:180,
    marginVertical:20,
    margin:40,
    marginTop:20,
    borderRadius:14    
  }
})

