import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    
    // console.log('catId + ' + catId);

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    // console.log('selectedCategory + ' + selectedCategory);

    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            {/* <Text>{selectedCategory.title}</Text> */}
            <Button title="Go to Detail " onPress={() => {
                props.navigation.navigate({ routeName: "MealDetail" })
            }} />
            <Button title="Go back" onPress={() => {
                props.navigation.pop();
            }} />
        </View>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;