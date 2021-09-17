import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from 'react-native-paper';

const FloatingButton = ({ toggleForm, isFormOpened }) => {
  return (
    <FAB
    style={styles.fab}
    small
    icon={isFormOpened ? "close" : "plus"}
    onPress={toggleForm}
  />
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor:"purple",
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default FloatingButton;
