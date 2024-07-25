import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Alert } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Context } from "../context/BlogContext";

const KeepScreen = ({navigation}) => {
    const {state, delMemo, editMemo}= useContext(Context);
    const data = state.filter(memo => memo.status === 'done')

    const confirmDelete = (id) => {
        return Alert.alert(
            'Delete?',
            'Confirm Delete?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel to delete'),
                    style: 'cancel'
                },
                {
                    text: 'Confirm',
                    onPress: () => delMemo(id)
                }
            ],
            {cancelable: false}
        )
    }

    return(
        <View style ={styles.container}>    
            <FlatList
                data = {data}
                keyExtractor={(memo)=>memo.title}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                            <View style = {styles.list} >
                                <TouchableOpacity onPress={()=> editMemo(item.id,item.time,item.title,item.detail,'not done')}>
                                <AntDesign name="checkcircle" size={24} color="#94B946" />
                                </TouchableOpacity>
                                <Text style={{fontSize : 18,}}>
                                    {item.time} ||
                                </Text>
                                <Text style={{fontSize : 18,}}>
                                    {item.title}
                                </Text>
                                <TouchableOpacity onPress = { () => confirmDelete(item.id) }>
                                    <Ionicons name="trash-bin-sharp" size={24} color="#402958" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                )}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#fff',
        padding : 15,
    },
    list: {
        paddingVertical : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderBottomWidth : 2,
        borderBottomColor : '#a180c4',

    },
})

export default KeepScreen;