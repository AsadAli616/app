import React, { useState } from 'react';
import { StyleSheet, Dimensions, FlatList, ImageBackground, SafeAreaView, Text, View, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import MapView from 'react-native-maps';


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

  const renderItem = ({ item }) => (
    <Link href={`/details/3`} style={[styles.itemContainer, { backgroundColor: selectedItem === item.id ? '#007BFF' : 'white' }]}>
      <Pressable
        onPressIn={() => setSelectedItem(item.id)}
        onPressOut={() => setSelectedItem(null)}
        style={styles.itemPressable}
      >
        <Text style={[styles.itemText, { color: selectedItem === item.id ? 'white' : 'black' }]}>
          {item.title}
        </Text>
      </Pressable>
    </Link>
  );

  return (
    <ImageBackground
      source={require('@/assets/images/Grid.png')}
      style={styles.imageBackground}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Order</Text>
          </View>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContent}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  flatListContent: {
    paddingBottom: 50, // Add some padding at the bottom of the list for better spacing
  },
  itemContainer: {
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    elevation: 3, // Adding shadow for a more elevated look
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  itemPressable: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
