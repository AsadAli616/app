import React, { useState } from 'react';
import { Link } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Mock data for the order
const orderData = {
  orderId: '#1234',
  customerName: 'John Doe',
  address: '123 Main St, City, Country',
  items: [
    { id: '1', name: 'Pizza', quantity: 2, price: 15.99 },
    { id: '2', name: 'Burger', quantity: 1, price: 8.99 },
    { id: '3', name: 'Fries', quantity: 1, price: 3.99 },
    { id: '4', name: 'Soda', quantity: 2, price: 1.99 },
  ],
};

const OrderDetailScreen = () => {
  const { width, height } = Dimensions.get("screen");

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItemExpansion = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedItem === item.id;

    return (
      
        <View style={[styles.itemContainer, { height: isExpanded ? 120 : 80 }]}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
          </View>
          <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
     
        </View>
   
    );
  };

  const totalAmount = orderData.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <ImageBackground
      source={require("@/assets/images/Grid.png")}
      style={{ width: width, height: height }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.orderId}>Order {orderData.orderId}</Text>
            <Link href="/modal" style={styles.mapButton}>
              <Ionicons name="map-outline" size={24} color="#fff" />
            </Link>
          </View>

          {/* <View style={styles.customerInfo}>
            <Text style={styles.customerName}>{orderData.customerName}</Text>
            <Text style={styles.address}>{orderData.address}</Text>
          </View> */}

          <FlatList
            data={orderData.items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.itemList}
          />

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total Amount:</Text>
            <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.completeButton}>
        
            <Text style={styles.completeButtonText}>Start Delivery</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FF6700',
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  mapButton: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 300,
  },
  customerInfo: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    marginTop: 4,
    color: '#666',
  },
  itemList: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#fff',
    marginBottom: 8,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemQuantity: {
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6700',
  },
  completeButton: {
    backgroundColor: '#FF6700',
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderDetailScreen;
