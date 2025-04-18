import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import image from '../assets/goal.png';

const GoalInput = ({onhandleText, onEnterGoal, isModalVisible, onCancelModal}) => {


    return (
      
        <Modal visible={isModalVisible} animationType="slide">
          <View style={styles.inputContainer}> 
       <Image source={require('../assets/goal.png')} style={styles.image}/>
          
        
        <View style={styles.buttonContainer}>
        <TextInput style={styles.textInput}  onChangeText={onhandleText}/>
        <Button title="Add Goal" onPress={onEnterGoal} color="orange"/>
        </View>
        <Button title="Cancel" onPress={onCancelModal} color="orange" />
      </View>
      </Modal>
  
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        
       
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'navy',
      },
      buttonContainer:{
        flexDirection: 'row',
        marginBottom: 20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
        color: 'white',
      
      },  
      image: {
        width: 100,
        height: 100,
        margin: 20,
      },
})

export default GoalInput;