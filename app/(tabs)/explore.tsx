import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import { Avatar, Text, Button, ListItem } from '@rneui/themed';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'New York, USA',
    bio: 'Passionate developer and tech enthusiast',
  };
  
  return (
    <ImageBackground
      source={require("@/assets/images/Grid.png")}
      style={styles.imageBackground}
    >
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Avatar
            size="xlarge"
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            containerStyle={styles.avatar}
          />
          <Text h2 style={styles.userName}>{userInfo.name}</Text>
          <Text style={styles.location}>{userInfo.location}</Text>
        </View>

        <View style={styles.bioSection}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <Text style={styles.bioText}>{userInfo.bio}</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Information</Text>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Email</ListItem.Title>
              <ListItem.Subtitle>{userInfo.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Location</ListItem.Title>
              <ListItem.Subtitle>{userInfo.location}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>

        <View style={styles.actionSection}>
          <Link href={"/modal1"}>
          <Button
            title="Edit Profile"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
          />
      </Link>
        </View>
      </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#fff',
  },
  bioSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  bioText: {
    fontSize: 16,
    color: '#555',
  },
  infoSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  actionSection: {
    // flexDirection: 'col',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#FF6700',
    paddingVertical: 10,
    marginVertical:10,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: '#FF6700',
    textDecorationColor:"#FF6700"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
