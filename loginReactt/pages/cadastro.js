import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {

    const [email, defEmail] = useState("");
    const [senha, defSenha] = useState("");


    async function armazenarCadastro() {
        try {
            if (email === "" | senha === "") {
                alert("Preencha todos os campos");
            } else {
                await AsyncStorage.setItem('userData', JSON.stringify({email, senha}));
                defEmail();
                defSenha();

                alert("Credenciais cadastradas!")
            }

        } catch (erro) {
            alert("Erro ao realizar cadastro", erro)
        }
    }

    return (
        <View style={styles.container}>
              <Image
                style={{width: "90%", height:80, margin:20}}source={require('./../assets/logo_Senai.png')}
               
            />
            <Text style={styles.titulo}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={defEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={defSenha}
            />
            <TouchableOpacity style={styles.botao} onPress={armazenarCadastro}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'left',
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    botao: {
        backgroundColor: '#880000',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});