import { View, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";

const HomeScreen = ({navigation}) => {
    return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('Index')}
                    style={styles.page}>
                <ImageBackground source={require('../img/1.png')} resizeMode= 'cover' style = {styles.page}/>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fdfd'
    },
    page : {
        flex : 1,
        justifyContent : 'center'
    },
    block : {

    },
})

export default HomeScreen;