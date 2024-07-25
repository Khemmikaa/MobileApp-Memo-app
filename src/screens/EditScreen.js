import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import MemoForm from "../components/MemoForm";

const EditScreen = ({route, navigation}) => {
    const {state, editMemo} = useContext(Context);
    const id = route.params.id;

    const memo = state.find(memo => memo.id == route.params.id)
    return (
        <View style = {styles.container}>
            <Text>[ID : {id}]</Text>
            <MemoForm initValues = {{time: memo.time, title: memo.title, detail: memo.detail, status: memo.status}}
            onSubmit={(time, title, detail, status) => {
                editMemo(id, time, title, detail, status)
                navigation.navigate('Index');
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 10,
        backgroundColor : '#fff',
    },
})

export default EditScreen;