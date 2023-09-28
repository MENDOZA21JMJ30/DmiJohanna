import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes verificar las credenciales
    if (username === 'Johannamendoza' && password === '3519110138') {
      alert('Inicio de sesión exitoso');
    } else if (username === 'Johannamendoza') {
      alert('Contraseña incorrecta');
    } else if (password === '3519110138') {
      alert('Nombre de usuario incorrecto');
    } else {
      alert('Nombre de usuario y contraseña incorrectos');
    }
  };  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'powderblue',//lightcyan  lightsteelblue  powderblue
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginContainer: {
      backgroundColor: 'cream', 
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    loginText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    loginButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginBottom: 8,
    },
    loginButtonText: {
      color: 'white', 
      textAlign: 'center',
      fontWeight: 'bold',
    },
    registerButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    registerButtonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Iniciar Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
          }}
        >
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
