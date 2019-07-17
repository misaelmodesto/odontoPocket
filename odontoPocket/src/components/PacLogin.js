import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image, ActivityIndicator, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class PacLogin extends Component {
    _autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha });
    }
    renderBtnAcessar() {
        if (this.props.loading_login) {
            return (
                <ActivityIndicator size="large"  />
            )
        }
        return (
            <Button title="Acessar" color='#115E54' onPress={() => this._autenticarUsuario()} />
        )
    }

    render() {
        return (
           
           <ImageBackground source={require('../imgs/PlanFundo.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, padding: 10 }} >

                <View style={{ flex:1 , alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#ffffff' }}>PACIENTE DE BOLSO</Text>  
                        <Image
                        style={{height: 350, width: 350}}
                        source={require('../imgs/odp.png')}                        
                    />
                </View>

                <View style={{ flex:1 , alignItems: 'center' }} ></View>
                <View style={{ flex:1 , alignItems: 'center' }} ></View>

                    <View style={{ flex: 2 }} >
                        <TextInput 
                            value={this.props.email} 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder='E-mail' 
                            placeholderTextColor='#fff' 
                            onChangeText={texto => this.props.modificaEmail(texto) }
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.senha} 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder='Senha' 
                            placeholderTextColor='#fff' 
                            onChangeText={texto => this.props.modificaSenha(texto) }
                        />
                        <Text style={{ color: '#ff0000', fontSize: 18 }}>
                            {this.props.erroLogin}
                        </Text>

                        <View style={{ flex:1 , alignItems: 'center' }} ></View>

                        <TouchableHighlight onPress={() => Actions.CadPaciente()} underlayColor={'transparent'}>
                            <Text style={{ fontSize: 20, color: '#fff'  }} >Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{ flex:1 , alignItems: 'center' }} ></View>

                    <View style={{ flex: 2 }} >
                        {this.renderBtnAcessar()}
                    </View>

                </View>
                </ImageBackground>
        );
    }
}
const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(PacLogin);