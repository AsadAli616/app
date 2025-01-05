import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Avatar, Text, Button, ListItem } from '@rneui/themed';

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

    >
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar
          size="xlarge"
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
        />
        <Text h2>{userInfo.name}</Text>
        <Text>{userInfo.location}</Text>
      </View>

      <View style={styles.bioSection}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text>{userInfo.bio}</Text>
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
        <Button title="Edit Profile" buttonStyle={styles.button} color={"#FF6700"} />
        <Button title="Settings" buttonStyle={styles.button}  color={"#FF6700"} type='outline'  />
      </View>
    </ScrollView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#fff',
  },
  bioSection: {
    margin: 20,
    padding: 15,
    // backgroundColor: '#fff',
    borderRadius: 5,
  },
  infoSection: {
    margin: 20,
    // backgroundColor: '#fff',
    borderRadius: 5,
  },
  actionSection: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    width: 150,
    // color:"#FF6700",
    borderRadius:9,
    borderColor:"#FF6700",

  },
});
