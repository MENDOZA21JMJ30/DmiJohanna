import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = () => {
        if (firstName && lastName && phone && email && password) {
            Alert.alert('Registro exitoso');
        } else {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.firstSection}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.tittle}>Regístrate</Text>
                </View>
            </View>
            <View style={styles.secondSection}>
                <View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Nombre</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="red"
                            placeholder="Nombre"
                            value={firstName}
                            onChangeText={text => setFirstName(text)}
                        />
                    </View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Apellidos</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="red"
                            placeholder="Apellidos"
                            value={lastName}
                            onChangeText={text => setLastName(text)}
                        />
                    </View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Teléfono</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="red"
                            placeholder="Teléfono"
                            keyboardType='phone-pad'
                            value={phone}
                            onChangeText={text => setPhone(text)}
                        />
                    </View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Correo electrónico</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="red"
                            placeholder="ejemplo@ejemplo.com"
                            keyboardType='email-address'
                            returnKeyType='next'
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="red"
                            placeholder="********"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                    </View>
                    <View style={styles.spacing}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleRegister}>
                            <Text style={styles.buttonText}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    firstSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondSection: {
        flex: 2,
        width: '100%',
        padding: 20,
        backgroundColor: 'white',
    },
    tittle: {
        fontSize: 30,
        color: 'white',
    },
    label: {
        color: 'black',
    },
    textInput: {
        color: '#000',
        padding: 8,
    },
    button: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    spacing: {
        marginTop: 15,
    },
});
