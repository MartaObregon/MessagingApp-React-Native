import React from 'react'
import {Avatar, ListItem } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native'


const CustomListItem = ({id, chatName, enterChat}) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri:
                    "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style= {{fontWeight:"800"}}>
                    Amigas
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1}>
                    hey chicas que tal estais hey chicas que tal estais
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
