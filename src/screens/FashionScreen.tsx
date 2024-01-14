import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Button,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 36;
const CARD_HEIGHT = 220;
import React, {useEffect, useState} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
export default function FashionScreen({navigation}: any) {
  const [requiredVenues, setRequiredVenues] = useState<any[]>([]);
 
  const api = async () => {
    try {
      console.log('atul1234')
      const res = await fetch('https://fakestoreapi.com/products');
      const result = await res.json();
      console.log(result);
      setRequiredVenues(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    api();
  },[]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          {requiredVenues.map((item: any) => {
            return (
              <TouchableOpacity
                onPress={() => {
             
                  navigation.navigate('Details',{ requiredVenues:item}, {
                   
                    
                    
                  });
                }}
                style={styles.cardContainer}
                key={item.id}>
                <View style={[styles.card, styles.shadow]}>
                  <View style={styles.imageBox}>
                    <Image style={styles.image} source={{uri: item.image}} />
                  </View>
                  <View style={styles.footer}>
                    <View style={styles.titleBox}>
                      <Text style={styles.title}>Price:{item.price}</Text>

                      <Text style={styles.location}>
                        Rating:{item.rating.rate}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    marginLeft: 24,
    marginBottom: 24,
    marginTop:24
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'ffffff',
    borderRadius: 16,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#070f18',
  },
  location: {
    fontSize: 14,
    color: 'black',
  },
  shadow: {
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         justifyContent:"space-between",
//         alignItems: 'center',
//         marginLeft:10,
//         marginRight:10,
//       },
//     card: {
//         width: CARD_WIDTH,
//         height: CARD_HEIGHT,
//         marginVertical: 5,
//         paddingTop:5,
//         backgroundColor:"#ffffff",
//         shadowColor: '#888888',
//         shadowOffset: {width: -2, height: 4},
//         shadowOpacity: 0.2,
//         shadowRadius: 5,

//     },
//     favorite: {
//         position: 'absolute',
//         top: 18,
//         right: 18,
//         zIndex: 1,
//         backgroundColor:"green",
//         borderRadius:4,
//         padding:5

//     },
//     favoriteText: {
//         color:"#ffffff"
//     },
//     imageBox: {
//         width: CARD_WIDTH-10,
//         height: CARD_HEIGHT-50,
//         overflow: 'hidden',
//         marginLeft:'auto',
//         marginRight:'auto'
//     },
//     image: {
//         width: CARD_WIDTH,
//         height: CARD_HEIGHT,
//         resizeMode: 'cover',
//     },
//     titleBox: {
//         position: 'absolute',
//         top: CARD_HEIGHT - 40,
//         left: 10,
//     },
//     title: {
//         fontSize: 22,
//         fontWeight: '600',
//         color: "black",
//     },
//     location: {
//         fontSize: 14,
//         color: "black",
//     },
// });
