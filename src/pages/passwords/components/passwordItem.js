import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react'

export function PasswordItem({data, removePassword,}){
    const [isPasswordVisible, setIsPasswordVisible]= useState(false);

    const togglePasswordVisibility=()=>{
        setIsPasswordVisible(!isPasswordVisible);
    }

    return(
       
            <View style={styles.container}>
                <Pressable onLongPress={removePassword} style={styles.passwordcontainer}>
                        {isPasswordVisible ? (
                            <Text style={styles.text}>{data}</Text>
                        ):(
                            <View style={styles.hiddenPassword}>
                                <View style={styles.rectangle}></View>
                            </View>
                        )}
                        <Ionicons name={isPasswordVisible ? "eye-outline":"eye-off-outline"} 
                    size={24} 
                    color="#fff" 
                    onPress={togglePasswordVisibility}
                    />
                </Pressable>
                
            </View>
   
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#0e0e0e",
        padding:14,
        width:"100%",
        marginBottom:14,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

    },

    text:{
        color:"#fff"
    },

    hiddenPassword:{
        flexDirection:'row',
        alignItems:"center",
    },

    rectangle:{
        height:10,
        width:"65%",
        backgroundColor:"#fff",
        borderRadius:4,
    },

    passwordcontainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:10,
    },
})
