import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <ImageBackground source={require('../imgs/bg.png')} style={{width: '100%', height: '100%'}}>
   
        <View style={{ flex: 1, padding:15 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#ffffff' }}>Seja Bem vindo!</Text>
                <Image source={require('../imgs/logo.png')} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title="Fazer Login" onPress={() => Actions.formLogin()} />
            </View>
        </View>
    </ImageBackground>
);