import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, IconButton, Checkbox } from "react-native-paper";

const TaskItem = ({ task, onDelete, onToggleStatus }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.taskContainer}>
        <View style={styles.taskDetails}>
          <Text
            style={[
              styles.taskDescription,
              task.isCompleted && styles.taskCompleted,
            ]}
          >
            {task.description}
          </Text>
          {task.isCompleted && (
            <Text style={styles.completedText}>COMPLETED</Text>
          )}
        </View>
        <Checkbox
          status={task.isCompleted ? "checked" : "unchecked"}
          onPress={() => onToggleStatus(task.id)}
          color="#4caf50"
        />
        <IconButton
          icon="delete"
          color="#d32f2f"
          size={20}
          onPress={() => onDelete(task.id)}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    elevation: 3,
    borderRadius: 0,
  },
  taskCompleted: {
    color: "grey",
    borderRadius: 0,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 0,
  },
  taskDescription: {
    fontSize: 18,
    borderRadius: 0,
  },
  taskDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 0,
  },

  completedText: {
    color: "#4caf50",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default TaskItem;
