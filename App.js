import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WorkoutListScreen from './screens/WorkoutListScreen';
import WorkoutFormScreen from './screens/WorkoutFormScreen';

export default function App() {
    const [screen, setScreen] = useState('list'); 
    const [workouts, setWorkouts] = useState([]);
    const [editingWorkout, setEditingWorkout] = useState(null);

    const handleAddPress = () => {
        setEditingWorkout(null);
        setScreen('form');
    };

    const handleEditPress = (workout) => {
        setEditingWorkout(workout);
        setScreen('form');
    };

    const handleSaveWorkout = (Data) => {
        if (editingWorkout) {
          setWorkouts((prev) =>
            prev.map((w) =>
              w.id === editingWorkout.id ? { ...w, ...Data } : w
            )
          );
        } else {
          const newWorkout = {
            id: Date.now().toString(),
            name: Data.name,
            details: Data.details,
          };
          setWorkouts((prev) => [newWorkout, ...prev]);
        }

        setEditingWorkout(null);
        setScreen('list');
    };

    const handleCancel = () => {
        setEditingWorkout(null);
        setScreen('list');
    };

    return (
        <SafeAreaView style={styles.container}>
            {screen === 'list' ? (
                <WorkoutListScreen
                    workouts={workouts}
                    onAddPress={handleAddPress}
                    onEditPress={handleEditPress}
                />
            ) : (
                <WorkoutFormScreen
                    initialValues={editingWorkout}
                    onSave={handleSaveWorkout}
                    onCancel={handleCancel}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
});