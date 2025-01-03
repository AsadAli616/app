import { StyleSheet,Dimensions,FlatList ,Image, Platform, SafeAreaView, View, Text, ImageBackground, Pressable } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useNavigation } from '@react-navigation/native';
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
  const {width ,height } = Dimensions.get("screen")
  const navigation = useNavigation()
const render =()=>(
  
  <Pressable 
  // onPressIn={()=>{}}
  // onPressOut={()=>{}}


  style={{
    marginTop:10,
    // borderColor:"black",
    // borderWidth:2,
    width:width/1.1,
    height:height/10,
    borderRadius:10,
   backgroundColor:"white",
   shadowOffset: { width: 0, height: 6 },
   shadowOpacity: 0.3,
   shadowRadius: 10,
   elevation: 10,
   
   }} 
  
  >
  <View 
  >
   <Text>asad</Text>
 </View>
 </Pressable>)


  return (
    <ImageBackground
    source={require("@/assets/images/Grid.png")}
    style={styles.imageBackground}
    
    >
 <SafeAreaView style={{
  borderColor:"black",
  borderWidth:2,
  width:width,
  height:height,
  display:"flex",
  alignItems:"center"
}}>
  <View
    style={{
      marginTop:50,
      marginBottom:30,
    }}>
    <Text
     style={{
      fontSize:32,

    }}>
      Order
    </Text>
  </View>
 




  <FlatList
        data={DATA}
        renderItem={render}
        keyExtractor={(item) => item.id} // Unique key for each item
        showsVerticalScrollIndicator={false} // Disable vertical scrollbar
        showsHorizontalScrollIndicator={false} // Disable horizontal scrollbar
      />


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
