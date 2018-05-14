import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onListItemPressed}>
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
    </TouchableOpacity>
)
const styles = StyleSheet.create({
  listItem: {
      width: "100%",
      padding: 10,
      marginBottom: 10,
      backgroundColor: "#eee"
  }
});

export default listItem;
