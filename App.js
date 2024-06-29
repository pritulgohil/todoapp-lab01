import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Button, Card } from "react-native-paper";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [tasksList, setTasksList] = useState([]);
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      setTasksList([
        ...tasksList,
        {
          id: Date.now().toString(),
          description: taskDescription,
          isCompleted: false,
        },
      ]);
      setTaskDescription("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  const handleToggleTaskStatus = (id) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Task App by Pritul</Text>
        <Card style={styles.inputCard}>
          <TextInput
            style={styles.inputField}
            placeholder="Enter task"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <Button
            mode="contained"
            onPress={handleAddTask}
            disabled={!taskDescription.trim()}
            style={styles.addButton}
          >
            Add Task
          </Button>
        </Card>
        <FlatList
          data={tasksList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onDelete={handleDeleteTask}
              onToggleStatus={handleToggleTaskStatus}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No tasks added yet.</Text>
          }
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#e0f7fa",
  },
  addButton: {
    backgroundColor: "#00796b",
    borderRadius: 0,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },

  inputCard: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 0,
    backgroundColor: "#ffffff",
    elevation: 3,
  },
  inputField: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#b0bec5",
    padding: 10,
    borderRadius: 0,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#00796b",
    flex: 1,
    justifyContent: "center",
    marginTop: 30,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "#757575",
  },
});
