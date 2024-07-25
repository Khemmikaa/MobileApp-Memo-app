import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({route}) => {
    const {state} = useContext(Context);

    const memo = state.find(memo => memo.id == route.params.id)
    return (
        <View style = {styles.container}>
            <Text>[ID : {route.params.id}]</Text>
            <Text style = {[styles.title,styles.block,{backgroundColor : '#EE554A'}]}>Time : {memo.time}</Text>
            <Text style = {[styles.title,styles.block,{backgroundColor : '#0C5FA8',color : '#fff'}]}>Title : {memo.title}</Text>
            <Text style = {styles.title}>Detail :</Text>
            <Text style = {[styles.detail,{width : 350, height :500, backgroundColor :'#FED130', borderRadius : 10, alignSelf : 'center'}]}>{memo.detail}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 10,
        backgroundColor : '#fff',
    },
    title: {
        fontSize : 22,
        fontWeight : 'bold',
        marginTop : 5,
        paddingLeft : 20,
    },
    detail: {
        fontSize : 18,
        paddingLeft : 20,
    },
    block : {
        padding : 10,
        marginHorizontal : 10,
        borderRadius :10,
    },
})

export default ShowScreen;