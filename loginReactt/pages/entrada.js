import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
  } from 'react-native';
  import React, { useState } from 'react';
  import { Ionicons } from '@expo/vector-icons/';
  import * as Animatable from 'react-native-animatable';
  import { useNavigation } from '@react-navigation/native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  
  export default function Acesso() {
    const navigation = useNavigation();
  
    const [email, defEmail] = useState("");
    const [senha, defSenha] = useState("");
  
    async function fazerLogin() {
        try {
            const userData = await AsyncStorage.getItem('userData');
            
  
            if (userData !== null) {
                const { email: emailSalvo, senha: senhaSalva } = JSON.parse(userData);
                
                if (email === emailSalvo && senha === senhaSalva) {
                    alert('Login realizado com sucesso!');
                } else {
                    alert('Credenciais inválidas');
                }
            } else {
                alert('Nenhum dado de cadastro encontrado. Por favor, cadastre-se primeiro.');
            }
        }
        catch (erro) {
            alert("Erro ao realizar login", erro)
            return [];
        }
    }
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                  <View style={styles.container}>
                      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                          <Ionicons name="chevron-back-outline" size={32} color={"#FFF"} onPress={() => navigation.navigate('index')} />
                          <Text style={styles.message}>Bem-vindo(a)</Text>
                      </Animatable.View>
                      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                          <Text style={styles.title}>E-mail</Text>
                          <TextInput
                              placeholder='Digite um email...'
                              style={styles.input}
                              value={email}
                              onChangeText={defEmail}
                          />
                          <Text style={styles.title}>Senha</Text>
                          <TextInput
                              placeholder='Sua senha'
                              style={styles.input}
                              secureTextEntry
                              value={senha}
                              onChangeText={defSenha}
                          />
                          <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
                              <Text style={styles.textoBotao}>Acessar</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('cadastro')}>
                              <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                          </TouchableOpacity>
                      </Animatable.View>
                  </View>
              </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
      )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#880000'
    },
     seta: {
      marginHorizontal: 20,
      marginTop: 30,
      width: 25,
      height: 25,
    },
    containerHeader: {
      marginTop: '14%',
      marginBottom: '8%',
      paddingStart: '5%',
    },
    message: {
      fontSize: 28,
      fontWeight: 'bold',
      color: "#FFF"
    },
    containerForm: {
      backgroundColor: "#FFF",
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: "5%",
      paddingEnd: "5%"
    },
    title: {
      fontSize: 20,
      marginTop: 28,
    },
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16
    },
    button: {
      backgroundColor: '#880000',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: "#FFF",
      fontSize: 18,
      fontWeight: 'bold'
    },
    buttonRegister: {
      marginTop: 14,
      alignSelf: 'center'
    },
    registerText: {
      color: '#a1a1a1'
    },
    botao: {
      backgroundColor: '#880000',
      padding: 10, 
      borderRadius: 5, 
      alignItems: 'center',
      marginTop: 10, 
  },
  textoBotao: {
    color: '#fff', 
    fontSize: 16, 
  },
  })