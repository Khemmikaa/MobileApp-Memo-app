import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const MemoForm = ({onSubmit, initValues}) => {
    const [time, setTime] = useState(initValues.time);
    const [title, setTitle] = useState(initValues.title);
    const [detail, setDetail] = useState(initValues.detail);
    const [status, setStatus] = useState(initValues.status);

    return(
        <View>
            <Text style = {styles.label}>Time : </Text>
            <TextInput
                style = {[styles.input,{borderColor : '#EE554A'}]}
                placeholder= "Ex : 00:00 A.M, 12:00 P.M"
                value = {time}
                onChangeText={(text) => setTime(text)}
            />
            <Text style = {styles.label}>Title : </Text>
            <TextInput
                style = {[styles.input,{borderColor : '#0C5FA8'}]}
                value = {title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style = {styles.label}>Details : </Text>
            <TextInput
                style = {styles.input}
                multiline
                numberOfLines={5}
                value = {detail}
                onChangeText={(text) => setDetail(text)}
            />
            <TouchableOpacity 
                onPress={() => { onSubmit(time, title, detail, status);}}>
                <View style = {styles.button}>
                    <Text style = {styles.tButton}>Add List</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
    
}

MemoForm.defaultProps = {
    initValues: { time: '', title: '', content: ''}
}

const styles = StyleSheet.create({
    label: {
        fontSize : 20,
        fontWeight : 'bold',
        fontStyle : 'italic',
        marginVertical : 5,
        marginLeft : 10,
    },
    input: {
        fontSize : 18,
        borderWidth : 2,
        borderColor : '#7d55cc',
        borderRadius : 10,
        padding : 6,
        paddingLeft : 15,
        margin : 10,
        marginBottom : 15,
        backgroundColor : '#fff',
    },
    button : {
        backgroundColor : '#94B946',
        alignItems : 'center',
        alignSelf : 'center',
        padding : 15,
        width : 150,
        borderRadius : 18,
        marginTop : 20,
        borderColor : '#84a53f',
        borderWidth : 1,
    },
    tButton : {
        fontSize : 20,
        fontWeight : '500',
    }
})

export default MemoForm;