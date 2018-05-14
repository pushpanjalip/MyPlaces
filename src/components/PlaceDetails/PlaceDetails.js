import React from 'react';
import { StyleSheet, Modal,Text, View, Image,Button} from 'react-native';

const placeDetails = (props) => {
    let modalContent = null;
    if(props.selectedPlace){
        modalContent = (
            <View>
                <Image style={styles.modalImage} source={props.selectedPlace.image} />
                <Text style={styles.modalTitle}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
            </View>
            <View>
                <Button title="Close" onPress={props.onModalClosed}/>
                <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        margin: 5
    },
    modalImage: {
        width: "100%",
        height: 170,
    },
    modalTitle: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    }}
);
export default placeDetails;