import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList , Platform } from 'react-native';

import { CATEGORY } from '../data/dummy-data';
import Colors from '../constants/Colors';



const CategoriesScreen = props => {

    // const [] = useState();

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({ routeName: 'CategoryMeals' , params: {
                        categoryId: itemData.item.id
                    }});
                }}>
                <View  >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id }
            data={CATEGORY}
            renderItem={renderGridItem}
            numColumns={2}

        />
    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : 'white' ,
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
});

export default CategoriesScreen;