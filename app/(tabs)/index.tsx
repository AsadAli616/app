import React, { useState } from 'react';
import { StyleSheet, Dimensions, FlatList, Image, Platform, SafeAreaView, View, Text, ImageBackground, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 1' },
  { id: '5', title: 'Item 2' },
  { id: '6', title: 'Item 3' },
  { id: '7', title: 'Item 1' },
  { id: '8', title: 'Item 2' },
  { id: '9', title: 'Item 3' },
  { id: '10', title: 'Item 2' },
  { id: '11', title: 'Item 3' },
];

export default function TabTwoScreen() {
  const { width, height } = Dimensions.get("screen");
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Link href={"/details/3"}    style={{
      marginTop: 10,
      width: width / 1.1,
      height: height / 10,
      borderRadius: 10,
      backgroundColor: selectedItem === item.id ? 'blue' : 'white', // Change color based on selection
    }}>

    <Pressable
      // onPress={() => setSelectedItem(item.id)}
      onPressIn={()=>{setSelectedItem(item.id)}}
      onPressOut={()=>{setSelectedItem(null)}}
   
    >
      <View>
        <Text style={{ color: selectedItem === item.id ? 'white' : 'black' }}>{item.title}</Text>
      </View>
     
    </Pressable>
    </Link>
  );

  return (
    <ImageBackground
      source={require('@/assets/images/Grid.png')}
      style={styles.imageBackground}
    >
      <SafeAreaView style={{
        borderColor: "black",
        borderWidth: 2,
        width: width,
        height: height,
        display: "flex",
        alignItems: "center"
      }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              marginTop: 50,
              marginBottom: 30,
            }}>
          

            <FlatList
            ListHeaderComponent={
              <View
                style={{
                  marginTop: 50,
                  marginBottom: 30,
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 32 }}>
                  Order
                </Text>
              </View>
            }
            
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id} // Unique key for each item
              showsVerticalScrollIndicator={false} // Disable vertical scrollbar
              showsHorizontalScrollIndicator={false} // Disable horizontal scrollbar
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    borderColor: "black",
    borderWidth: 1,
  },
});
