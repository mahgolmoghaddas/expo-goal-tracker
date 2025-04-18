import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [enteredGoalList, setEnteredGoalList] = useState([]);
    const [enteredGoal, setEnteredGoal] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSubmitGoal = () => {
        setEnteredGoalList((prevGoals) => {
            return [...prevGoals, {
                text: enteredGoal,
                id: Math.random().toString()
            }];
        });
        console.log(enteredGoal);
        //setEnteredGoal('');
    }

    const handleTextInput = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const handleDeleteItem=(id)=>{
        setEnteredGoalList((prevGoals) => prevGoals.filter((goal) => goal.id !== id)
        );
    }

    const handleOpenModal = () => {
        setIsModalVisible(!isModalVisible);}


  return (
    <View style={styles.appContainer}>
        <Button title="Add a New Goal" onPress={handleOpenModal} color="orange" />
        <GoalInput onhandleText={handleTextInput} onEnterGoal={handleSubmitGoal} isModalVisible={isModalVisible} onCancelModal={handleOpenModal}/>
      
      <View style={styles.goalsContainer}>
       {/* <ScrollView>
            {enteredGoalList.map((goal, index) => (
                
                <View style={styles.itemContainer}>
                    <Text key={index} style={{ color:'orange',  margin:'auto'}}>
                        {goal}
                        </Text>
                 </View>
            ))}
        </ScrollView> */}
        <FlatList
        data={enteredGoalList}
        renderItem={(itemData) => {
            return(
                <GoalItem itemData={itemData} onDelete={()=>handleDeleteItem(itemData.item.id)} />
            )
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  goalsContainer: {
    flex: 5
  }
});