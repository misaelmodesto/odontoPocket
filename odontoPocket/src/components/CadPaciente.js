import React, { Component } from 'react';
import { View, TextInput, Button, Image, Text, ActivityIndicator, ImageBackground, TouchableOpacity  } from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastraUsuario 
} from '../actions/CadPacienteActions';

class CadPaciente extends Component {
    
    _cadastroUsuario() {
        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }

   renderBtnCadastros() {
       if (this.props.loading_cadastro) {
          return (
            <ActivityIndicator size="large" />
          )
       }
       return (
        <Button title="Cadastrar" color="#115E54" onPress={() => this._cadastroUsuario()} />
       )
   } 
   render() { 
        return (
            <ImageBackground source={require('../imgs/PlanFundo.jpg')} style={{width: '100%', height: '100%'}}>
            
                <View style={{ flex: 2, padding: 15, flexDirection: 'column'  }}>

                <View style={{ flex:1 , alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#ffffff' }}>PACIENTE DE BOLSO</Text>  
                        <Image
                        style={{height: 350, width: 350}}
                        source={require('../imgs/odp.png')}                        
                    />
                </View>

                <View style={{ flex:1 , alignItems: 'center' }} ></View>

                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput 
                            value={this.props.nome} 
                            placeholder="Nome" 
                            placeholderTextColor='#fff'                            
                            style={{ fontSize: 20, height: 45,  }} 
                            onChangeText={texto => this.props.modificaNome(texto)} 
                        />
                        <TextInput 
                            value={this.props.email} 
                            placeholder="Email" 
                            placeholderTextColor='#fff' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaEmail(texto)} 
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.senha} 
                            placeholder="Senha" 
                            placeholderTextColor='#fff' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaSenha(texto)} 
                        />
                        <Text style={{ color: '#000000', fontSize: 18, justifyContent: 'center' }}>{ this.props.erroCadastro }</Text>
                    </View>

                    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity  onPress={() => this._cadastroUsuario()} underlayColor={'transparent'}>                
                            <Image                           
                            source={require('../imgs/ccadastro.png')}
                            />
                        </TouchableOpacity > 
                    </View>   
                </View>
            </ImageBackground>
           
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return (
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha,
            erroCadastro: state.AutenticacaoReducer.erroCadastro,
            loading_cadastro: state.AutenticacaoReducer.loading_cadastro
        }
    );
}

export default connect(
    mapStateToProps, 
    { 
        modificaEmail, 
        modificaSenha, 
        modificaNome,
        cadastraUsuario 
    }
    )(CadPaciente);