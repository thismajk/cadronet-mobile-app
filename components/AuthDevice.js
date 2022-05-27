import {ActivityIndicator, View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import React from "react";
import axios from 'axios';
function AuthDevice(){
    const [pin, setPin] = React.useState("");
    const [load, setLoad] = React.useState(false);
    const send = () => {
        setLoad(true);
        if(pin.length < 5 || pin.length > 5 || pin === ''){
            setLoad(false);
            alert("niepoprawny pin");
        }else{
            axios.post('?/http://178.43.202.235:8888/api/auth/work.php','{"pin": "'+pin+'"}')
            .then((result) => {
                setLoad(false);
                setPin('');
                alert(result.data);
                
            });
           
        }
        
    }
    

    return(
        <View>
            <Text style={styles.logo}>Cadronet</Text>
            <Text style={styles.center}>Podaj PIN</Text>
            <TextInput
            style={styles.input}
            onChangeText={setPin}
            value={pin}
            keyboardType="numeric"
            placeholder="00000"
            />
            <Pressable style={styles.btn} onPress={send}>
                {load === false ? <Text style={styles.btnText}>Dalej</Text> : <ActivityIndicator size="small" color="#fff"/> }
                
            </Pressable >
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
      marginHorizontal: '5%',
      width: '90%',
      marginVertical: 10,
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      fontSize: 20,
      textAlign: 'center',
      
    },
    logo: {
        fontSize: 52,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 20,
    },
    center: {
        textAlign: 'center',
        color: '#fff',
    },
    btn: {
        marginHorizontal: '5%',
        width: '90%',
        backgroundColor: '#42B747',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    btnText:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    }

  });
export default AuthDevice;