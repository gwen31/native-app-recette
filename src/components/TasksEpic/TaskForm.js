import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from 'react-native-paper';

const TaskFrom = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const _onChangeText = value => {
    setTitle(value);
  };

  const _onPressBtn = () => {
    if (title.length > 0) {
      onAddTask(title);
      setTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput 
          label="Nouvelle tâches"
          lode="outlined" 
          value={title} 
          onChangeText={_onChangeText} />
      </View>
        <Button  
          mode="outlined" 
          icon="plus" 
          onPress={_onPressBtn} 
          olor="#841584" >
            Ajouter
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    alignItems: "flex-start",
    marginBottom: 15
  },
  containerInput: {
    width: "100%",
    marginBottom: 15,
  },
});

export default TaskFrom;
