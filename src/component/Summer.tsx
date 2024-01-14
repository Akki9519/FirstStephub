import { StyleSheet, Text, View ,FlatList,TouchableOpacity,Image,Dimensions} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
const {width, height} = Dimensions.get('window')
const CARD_WIDTH = width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + 24;
export default function Summer({kullu}:any) {
  const navigation:any=useNavigation();
  
  return (
    <FlatList
    data={kullu}
    horizontal= {false}
    snapToInterval={CARD_WIDTH_SPACING}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={i => i.id}
        renderItem={({item}:any)=>{
          return(
            <TouchableOpacity 
            onPress={()=>{navigation.navigate('Details',{kullu:item})}}
             style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }} >
             
            <View style={[styles.card]}>
              <View style={styles.imageBox}>
              <Image
                source={item.image}
                style={styles.image}
            />
              </View>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
          )
        }}
  /> 

  )
}

const styles = StyleSheet.create({

      card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10,
  },
  favorite: {
    position: 'absolute',
    top: 18,
    right: 18,
    zIndex: 1,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
  },
  titleBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 50,
    left: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#ffffff",
  },
  location: {
    fontSize: 18,
    color: "#ffffff",
  },
});

