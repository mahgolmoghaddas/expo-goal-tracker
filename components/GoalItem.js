import { StyleSheet, View, Text, Pressable } from "react-native";


const GoalItem = ({itemData, onDelete}) => {
    return (
        <Pressable onPress={onDelete}>
        <View style={styles.itemContainer}>
        <Text style={{ color:'orange',  margin:'auto'}}>
          {itemData.item.text}
        </Text>
      </View>
      </Pressable>
    );
};


const styles= StyleSheet.create({
    itemContainer: {
        flex: 1,
        margin: 8,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
        height: 50,
      }
});

export default GoalItem;