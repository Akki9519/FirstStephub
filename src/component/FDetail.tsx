import { View, Text,Image ,FlatList,StyleSheet,Dimensions} from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ADD_CART_URL} from '../constant/constant';
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function FDetail({lists,cheeku,kullu}:any) {
  const navigation:any=useNavigation();
 

  const addCartItem= async(item:any)=>{
    let userId:any=await AsyncStorage.getItem('userId');
    const data={"userID":userId,"detail":item}
    console.log(data,'cart data')
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: ADD_CART_URL,
      headers: {'Content-Type': 'application/json'},
      data:data
    };

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  return (
  <>
  {lists && <View>
    <Text style={{color:"red",textAlign:"center",fontFamily:"serif",fontSize:20,fontStyle:"italic",paddingTop:20}}>{lists.title}</Text>
    <View style={{alignItems:"center",marginTop:20}}>
    <Image style={{height:250,width:250}} source={{uri:lists.image}}/>
   
    </View>
    <View>
    <Text style={{fontSize:20,color:"red",paddingLeft:20,marginTop:10}}>Description:</Text>
    <Text style={{textAlign:"center",paddingHorizontal:14,fontFamily:"serif",color:"black"}}>{lists.description}</Text>
    </View>
    
   <View style={{marginTop:10}}>
    <View style={styles.a}>
    <Text style={{fontSize:20,color:"red",paddingLeft:20,fontFamily:"sans"}}  >Price:</Text>
    <Text style={{fontSize:20,color:"black",paddingLeft:2,fontFamily:"serif"}}>{lists.price}$</Text>
    </View>
    <View style={styles.a}>
    <Text style={{fontSize:20,color:"red",paddingLeft:20,fontFamily:"sans"}}  >Rating:</Text>
    <Text style={{fontSize:20,color:"black",paddingLeft:2,fontFamily:"serif"}}>{lists.rating.rate}</Text>
    </View>
    </View>
   
    <TouchableOpacity >
      <View style={styles.d}>
    <View style={styles.b}>
      <Text style={{textAlign:"center",color:"white",fontWeight:"700",fontFamily:"serif",backgroundColor:"purple",borderRadius:12,padding:10}}  onPress={()=>{navigation.navigate("Booking Summary",{ lists:lists})}} >Buy Now</Text>
    </View>
    <View style={styles.c}>
      <Text style={{textAlign:"center",color:"white",fontWeight:"700",fontFamily:"serif",backgroundColor:"purple",borderRadius:12,padding:10}} onPress={()=>{addCartItem(lists)}}>Add To Cart</Text>
    </View>
    </View>
   
    </TouchableOpacity>
    </View>}



    {kullu && <View>
      <Text style={{color:"red",textAlign:"center",fontFamily:"serif",fontSize:20,fontStyle:"italic",paddingTop:20}}>{kullu.title}</Text>
    <View style={{alignItems:"center",marginTop:20}}>
    <Image style={{height:250,width:200}} source={kullu.image}/>
   
    </View>
    <View>
    <Text style={{fontSize:20,color:"red",paddingLeft:20,marginTop:10}}>Description:</Text>
    <Text style={{textAlign:"center",paddingHorizontal:14,fontFamily:"serif",color:"black"}}>{kullu.description}</Text>
    </View>
    
   <View style={{marginTop:10}}>
    <View style={styles.a}>
    <Text style={{fontSize:20,color:"red",paddingLeft:20,fontFamily:"sans"}}  >Price:</Text>
    <Text style={{fontSize:20,color:"black",paddingLeft:2,fontFamily:"serif"}}>{kullu.price}$</Text>
    </View>
    <View style={styles.a}>
    <Text style={{fontSize:20,color:"red",paddingLeft:20,fontFamily:"sans"}}  >Rating:</Text>
    <Text style={{fontSize:20,color:"black",paddingLeft:2,fontFamily:"serif"}}>{kullu.rating}</Text>
    </View>
    </View>
    
        <TouchableOpacity >
      <View style={styles.d}>
    <View style={styles.b}>
      <Text style={{textAlign:"center",color:"white",fontWeight:"700",fontFamily:"serif",backgroundColor:"purple",borderRadius:12,padding:10}}  onPress={()=>{navigation.navigate("Booking Summary",{ kullu:kullu})}} >Buy Now</Text>
    </View>
    <View style={styles.c}>
   
      <Text style={{textAlign:"center",color:"white",fontWeight:"700",fontFamily:"serif",backgroundColor:"purple",borderRadius:12,padding:10}} onPress={()=>{addCartItem(kullu)}}>Add To Cart</Text>
    </View>
    </View>

    
    </TouchableOpacity>
    </View>

     
    }



     {cheeku && <View>
      <Text style={{color:"red",textAlign:"center",fontFamily:"serif",fontSize:20,fontStyle:"italic",paddingTop:20}}>{cheeku.title}</Text>
    <View style={{alignItems:"center",marginTop:20}}>
    <Image style={{height:250,width:200}} source={cheeku.image}/>
   
    </View>
    <View>
    <Text style={{fontSize:20,color:"red",paddingLeft:20,marginTop:10}}>Description:</Text>
    <Text style={{textAlign:"center",paddingHorizontal:14,fontFamily:"serif",color:"black"}}>{cheeku.description}</Text>
    </View>
    
   <View style={{marginTop:10}}>
    <View style={styles.a}>
    <Text style={{fontSize:20,color:"red",paddingLeft:20,fontFamily:"sans"}}  >Price:</Text>
    <Text style={{fontSize:20,color:"black",paddingLeft:2,fontFamily:"serif"}}>{cheeku.price}$</Text>
    </View>
    <View style={styles.a}>
    <Text style={{fontSize:20,color:"red",paddingLeft:20,fontFamily:"sans"}}  >Rating:</Text>
    <Text style={{fontSize:20,color:"black",paddingLeft:2,fontFamily:"serif"}}>{cheeku.rating}</Text>
    </View>
    </View>
    
        <TouchableOpacity >
      <View style={styles.d}>
    <View style={styles.b}>
      <Text style={{textAlign:"center",color:"white",fontWeight:"700",fontFamily:"serif",backgroundColor:"purple",borderRadius:12,padding:10}}  onPress={()=>{navigation.navigate("Booking Summary",{ cheeku:cheeku})}} >Buy Now</Text>
    </View>
    <View style={styles.c}>
      <Text style={{textAlign:"center",color:"white",fontWeight:"700",fontFamily:"serif",backgroundColor:"purple",borderRadius:12,padding:10}} onPress={()=>{addCartItem(cheeku)}}>Add To Cart</Text>
    </View>
    </View>
    </TouchableOpacity>
    </View>

     
    }
    </>
  )
}

const styles = StyleSheet.create({
  a:{
    flexDirection: 'row',
    
  },
  b:{
    width:Dimensions.get('window').width*.4,
    marginLeft:30,
    color:"white"
  },
  c:{
    
    width:Dimensions.get('window').width*.4,
    marginLeft:20,
    color:"white"
  },
  d:{
    flexDirection:'row',
    marginTop:25
  }
})