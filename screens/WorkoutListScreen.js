import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Button,
    StyleSheet,
} from 'react-native';

function WorkoutListScreen({ workouts, onAddPress, onEditPress }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity
        style={styles.item}
        onPress={() => onEditPress(item)}
        >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.itemDetail}>{item.details}</Text>
        </TouchableOpacity>
    );
    
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>My Workouts</Text>

            <FlatList
                data={workouts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No workouts available. Add a new workout!</Text>
                }
            />

            <Button title="Add Workout" onPress={onAddPress} />
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
    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    itemDetail: {
        fontSize: 16,
        color: '#666',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 18,
        color: '#999',
    },
});

export default WorkoutListScreen;