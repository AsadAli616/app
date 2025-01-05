import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, SafeAreaView, Text } from 'react-native';

export default function EditProfileScreen() {
  // Initial values for the user profile.
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'New York, USA',
  });

  // Update the userInfo state when the input fields change.
  const handleInputChange = (field, value) => {
    setUserInfo(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSave = () => {
    // In a real app, you would send the updated data to an API or local storage.
    console.log('Profile Updated:', userInfo);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Edit Profile</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={userInfo.name}
          onChangeText={text => handleInputChange('name', text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={userInfo.email}
          onChangeText={text => handleInputChange('email', text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={userInfo.location}
          onChangeText={text => handleInputChange('location', text)}
        />

        <Button
          title="Save Changes"
          onPress={handleSave}
          color="#FF6700"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
});

