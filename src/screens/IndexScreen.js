import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Alert } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Context } from "../context/BlogContext";

const IndexScreen = ({navigation}) => {
    const {state, delMemo, editMemo}= useContext(Context);
    const data = state.filter(memo => memo.status === 'not done')

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
            <View style = { styles.setButton} >
                <TouchableOpacity onPress={ () => navigation.navigate('Create')} >
                    <View style = {[styles.button,{backgroundColor : '#0C5FA8'}]} >
                        <Text style = {styles.tButton} >Add List</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Done')} >
                    <View style = {styles.button} >
                        <Text style = {styles.tButton} >Completed</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                data = {data}
                keyExtractor={(memo)=>memo.title}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                            <View style = {styles.list} >
                                <TouchableOpacity onPress={()=> editMemo(item.id,item.time,item.title,item.detail,'done')}>
                                <AntDesign name="checkcircleo" size={24} color="#EE554A" />
                                </TouchableOpacity>
                                <Text style={{fontSize : 18,}}>
                                    {item.time} ||
                                </Text>
                                <Text style={{fontSize : 18,}}>
                                    {item.title}
                                </Text>
                                <TouchableOpacity onPress = { () => confirmDelete(item.id) }>
                                    <Ionicons name="trash-bin-sharp" size={24} color="#0C5FA8" />
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
        borderBottomColor : '#f79235',
    },
    setButton : {
        paddingHorizontal : 50,
        paddingBottom : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderBottomColor : '#EE554A',
        borderBottomWidth : 2,
    },
    button : {
        backgroundColor : '#94B946',
        alignItems : 'center',
        alignSelf : 'flex-end',
        padding : 10,
        width : 100,
        borderRadius : 18,
        marginVertical : 2,
    },
    tButton : {
        fontSize : 16,
        fontWeight : '600',
        color : '#fff'
    }
})

export default IndexScreen;