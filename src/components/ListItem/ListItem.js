import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onListItemPressed}>
    <View style={styles.listItem}>
        <Image style={styles.placeImage} source={props.image}/>
        <Text>{props.placeName}</Text>
    </View>
    </TouchableOpacity>
)
const styles = StyleSheet.create({
  listItem: {
      width: "100%",
      padding: 10,
      marginBottom: 10,
      backgroundColor: "#eee",
     flexDirection: "row",
     alignItems: "center"
  },
  placeImage: {
      width: 40,
      height: 40,
      marginRight: 5
  }
});

export default listItem;
