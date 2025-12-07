import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, } from 'react-native';

function WorkoutFormScreen({ initialValues, onSave, onCancel }) {
    const [name, setName] = useState(initialValues ? initialValues.name : '');
    const [details, setDetails] = useState(initialValues ? initialValues.details : '');

    const handleSave = () => {
        if (!name.trim()) {
            return;
        }
        onSave({
            name: name.trim(),
            details: details.trim(),
        });
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>
                {initialValues ? 'Edit Workout' : 'Add Workout'}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Workout Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={[styles.input]}
                placeholder="Workout Details"
                value={details}
                onChangeText={setDetails}
            />

            <View style={styles.buttonRow}>
                <Button title="Save" onPress={handleSave} />
                <Button title="Cancel" onPress={onCancel} color="#888" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default WorkoutFormScreen;