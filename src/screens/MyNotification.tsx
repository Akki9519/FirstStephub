import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { ADD_NOTIFICATION_URL, DELETE_NOTIFICATION_URL, NOTIFICATION_URL } from '../constant/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NotifyMessage {
  _id:string;
 userID: string;
 message: string;
 timeStamps: string;
}
export default function MyNotification({navigation}:any) {
  const [notificationList, setNotificationList] = useState<NotifyMessage[]>([]);

  

   const notification=async()=>{
      let userId=await AsyncStorage.getItem('userId')
      const data={"userID":userId}
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: NOTIFICATION_URL,
        headers: {'Content-Type': 'application/json'},
        data:data
      };
  
      axios
        .request(config)
        .then(response => {
          console.log(JSON.stringify(response.data));
          setNotificationList(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
   }
   const addNotification=async()=>{
    let userId=await AsyncStorage.getItem('userId')
    const data={"userID":userId,"message":"Your order is shipped soon!!!","timeStamp":new Date().toLocaleString()}
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: ADD_NOTIFICATION_URL,
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

 const deleteNotification=(id:string)=>{
  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: `${DELETE_NOTIFICATION_URL}/${id}`,
    headers: {'Content-Type': 'application/json'},
  };

  axios
    .request(config)
    .then(response => {
      console.log(JSON.stringify(response.data));
      setNotificationList(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
}
   
   useEffect(()=>{
    notification();
   },[])
  return (
    <View style={styles.container}>
    <Text style={styles.title} onPress={()=>{addNotification();}}> Notifications</Text>
 

    {notificationList.length==0 && <Text style={styles.title1}>There is no Notification here.</Text>}
    <View style={styles.notificationContainer}>
      {notificationList.map((item, key) => (
        <View style={styles.notificationItem} key={key}>
          <Text style={styles.notificationText} >{item?.message}</Text>
          
          <TouchableOpacity style={styles.deleteButton} key={key}> 
            <Text style={styles.deleteButtonText}   onPress={()=>{deleteNotification(item._id)}}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
   
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
    color:"black",
  },
  title1: {
    fontSize: 28,
   
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
    color:"purple",
  },
  notificationContainer: {
    marginTop: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
    
    borderRadius:5,
    marginRight:10,
    marginTop:10,
    fontFamily:"serif"
,
padding:5,

  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    padding:5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
})