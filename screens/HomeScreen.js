import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = ({navigation}) => {

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "iChat",
            headerStyle : { backgroundColor: "#fff"},
            // headerStyle: {color: "black"},
            headerTintColor: "black",
            headerLeft: () => <View style={{marginLeft:20}}>

            </View>

        })
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
