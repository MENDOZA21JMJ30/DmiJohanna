import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Login(props) {
    const { navigation } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goToRegister = () => {
        navigation.navigate('Registro');
    };

    const handleLogin = () => {
        if (email === 'johannamendoza600@gmail.com' && password === '3519110138') {
            Alert.alert('Éxito', 'Inicio de sesión exitoso');
        } else {
            Alert.alert('Error', 'Correo o contraseña incorrectos');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.firstSection, { backgroundColor: 'red' }]}>
                <Image
                    source={{
                        uri:
                            'https://static.wikia.nocookie.net/jujutsu-kaisen/images/1/12/Mei_Mei_recieves_the_payment_from_Gojo_%28Anime%29.png/revision/latest?cb=20210327165908',
                    }}
                    style={{ width: '110%', height: '110%', resizeMode: 'cover' }}
                />
                <View style={{ position: 'absolute' }}>
                    <Text style={styles.tittle}>Login</Text>
                </View>
            </View>

            <View style={styles.secondSection}>
                <View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Correo electrónico</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="red"
                            placeholder="ejemplo@ejemplo.com"
                            keyboardType="email-address"
                            returnKeyType="next"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
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
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>

                    <View style={styles.spacing}>
                        <Text style={styles.ForgotPassword}>¿Olvidate tu contraseña?</Text>
                    </View>

                    <View style={styles.spacing}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Acceder</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.spacing, styles.row]}>
                    <Text style={styles.label}>¿No tienes una cuenta?</Text>
                    <TouchableOpacity onPress={goToRegister}>
                        <Text style={[styles.signup, { color: 'red' }]}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    firstSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    secondSection: {
        flex: 2,
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 20,
        justifyContent: 'space-between',
    },
    tittle: {
        fontSize: 64,
        color: 'white',
    },
    label: {
        color: '#000',
    },
    textInput: {
        color: '#000',
        padding: 8,
    },
    ForgotPassword: {
        color: 'black',
        textAlign: 'right',
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
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signup: {
        color: 'red',
        padding: 5,
    },
});
 