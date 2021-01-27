import React, { useLayoutEffect } from 'react'
import { useState } from 'react';
import { StatusBar } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { auth } from '../firebase';





const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [imageUrl, setImageUrl] = useState();


    
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerBackTitle:"Back to Login"
        })
    }, [navigation])


    const handleRegister = () =>{
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageUrl || "https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png",


                })
            })
            .catch((error) => alert(error.message))
    }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>

            <Text h3 style={{marginBottom:50}}>
                Create an Account
            </Text>
            
            <View style={styles.inputContainer}>    
                <Input 
                placeholder="Full Name" 
                autoFocus 
                type="text" 
                value={name}
                onChangeText={(text)=>setName(text)}
                />
                <Input 
                placeholder="Email"  
                type="text" 
                value={email}
                onChangeText={(text)=>setEmail(text)}
                />
                <Input 
                placeholder="Password" 
                secureTextEntry
                type="password" 
                value={password}
                onChangeText={(text)=>setPassword(text)}
                />
                <Input 
                placeholder="Profile Picture Url (optional)" 
                type="text" 
                value={imageUrl}
                onChangeText={(text)=>setImageUrl(text)}
                onSubmitEditing = {handleRegister}
                />
            </View>

            <Button
                title="Register" 
                onPress={handleRegister}
                raised
                containerStyle={styles.button}
            />
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen


//when targetting react native elements always target the container style, else the style only(like in button, image, input)

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
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
