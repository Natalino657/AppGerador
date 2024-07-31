import { StyleSheet, Text, View, FlatList  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/uSeStorage' 
import React from 'react'
import  {PasswordItem} from '../passwords/components/passwordItem'

export function Password(){
    const [listPasswords, setListPasswords] = useState([])
    const {getItem, removeItem}= useStorage();
    const focused = useIsFocused();
    

    const togglePasswordVisibility=()=>{
        setIsPasswordVisible(!isPasswordVisible);
    }

    useEffect(()=>{
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords);
            console.log(passwords);
        }
        
        loadPasswords();
    },[focused])

    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass", item);
        setListPasswords(passwords);
    }

    return(
        <SafeAreaView style={styles.conteiner}>
           <View style={styles.header}>
            <Text style={styles.text}>
                Minhas Passwords
            </Text>
           </View>

            <View style={styles.content}>
                <FlatList
                style={{flex:1, paddingTop:14,}}
                data={listPasswords}
                keyExtractor={(item)=>String(item)}
                renderItem={({item})=><PasswordItem data={item} removePassword={()=>handleDeletePassword(item)} />}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
    },
    header:{
        justifyContent:'flex-end',
        backgroundColor:'#392DE9',
        flex:1,
        
    },
    text:{
        fontSize:22,
        fontWeight:'700',
        color:'#fff',
        marginBottom:14,
        marginLeft:14,
    },
    content:{
        flex:6,
        paddingLeft:14,
        paddingRight:14,
    }
})