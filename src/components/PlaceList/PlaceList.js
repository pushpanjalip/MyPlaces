import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {
    const placesOutput = props.places.map((place, index) => (
        <ListItem key={index} place={place} onListItemPressed={() => props.onItemDeleted(index)}/>
      ));
      return <View style={styles.listContainer}>
        {placesOutput}
      </View>
    }
const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        padding: 20
      }
});

export default placeList;
