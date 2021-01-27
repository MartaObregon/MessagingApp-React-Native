import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Input, Image} from 'react-native-elements'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = () => {

    }

    //inside the stack.screen one of the props you get is navigation
    //navigation.navigate('nameofStackScreentolink')

    return (
        <KeyboardAvoidingView  behavior="padding" style={styles.container}>
            <StatusBar style = "light"/>
            <Image source= {{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
            }}
            style={{ width: 200, height: 200}} />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" 
                type="email" 
                autoFocus 
                value= {email}
                onChangeText={(text)=> setEmail(text)}
                />
                <Input placeholder="Password" 
                type="password" 
                secureTextEntry 
                value= {password}
                onChangeText={(text)=> setPassword(text)}
                />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title='Login'/>
            <Button onPress={()=> navigation.navigate('Register')} containerStyle={styles.button} type="outline" title='Register'/>
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent: "center",
        padding:10,
        backgroundColor:"white"
    },
    inputContainer: {
        width:300,
    },
    button: {
        width:200,
        marginTop:10,
    },

})
