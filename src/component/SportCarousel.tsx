import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  
} from 'react-native';

import {useNavigation} from '@react-navigation/native';


const {width, height} = Dimensions.get('window')
const CARD_WIDTH = width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + 24;

const SportsCarousel = ({list }: any) => {
  const navigation: any = useNavigation();
  return (
<FlatList
  data={list}
  horizontal
  snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id}
      renderItem={({item, index}:any)=>{
        return(
          <TouchableOpacity  onPress={() => {
            if(item.title === "Summer"){
              navigation.navigate('Summer');
            } else if(item.title === "Winter"){
              navigation.navigate('Winter');
            } else if(item.title === "Fashion") {
              navigation.navigate('Fashion');
            }
          }} style={{
            marginLeft: 24,
            marginRight: index === list.length - 1 ? 24 : 0,
          }} >

          <View style={[styles.card]}>
            <View style={styles.imageBox}>
            <Image
              // source={require('../assets/clothing-rack-with-floral-hawaiian-shirts-hangers-hat.jpg')}
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
  );
};

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
    top: CARD_HEIGHT - 80,
    left: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "black",
  },
  location: {
    fontSize: 18,
    color: "#ffffff",
  },
});

export default SportsCarousel;

