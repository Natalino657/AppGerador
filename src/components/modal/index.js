import { View, Text, StyleSheet, Pressable, TouchableOpacity} from "react-native";
import { Button } from "react-native";
import * as Clipboard from 'expo-clipboard'

export function ModalPassword({password,handleClose}){

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        alert("senha salva com sucesso!")
        handleClose();
    }
    return(
        <View style={styles.container}>
           <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassord} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Guardar Password</Text>
                    </TouchableOpacity>
                </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(24,24,24,0.6)',
    },
    content:{ 
        backgroundColor:"#fff",
        width:'85%',
        paddingtop:24,
        paddingBottom:24,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
    },
    title:{
        fontSize:20,
        fontWeight:'700',
        color:'#000',
    },

    innerPassord:{
        backgroundColor:'#000',
        width:'90%',
        padding:14,
        borderRadius:8,
    },

    text:{
        color:'#fff',
        textAlign:'center',
    },

    buttonArea:{
        flexDirection:'row',
        width:'90%',
        marginTop:8,
        alignItems:'center',
        justifyContent: 'space-between'
    },

    button:{
         flex: 1,
         alignItems:'center',
         marginTop:14,
         marginBottom:14,
         padding:8,
    },

    buttonSave:{
        backgroundColor:'#392DE9',
        borderRadius:8,
    },

    buttonSaveText:{
        color:'#fff',
        fontWeight:'bold',
    },

})

