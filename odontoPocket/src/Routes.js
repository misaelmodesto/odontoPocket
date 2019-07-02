import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';
import Conversa from './components/Conversa';
import bot from './components/bot';
import TelaPrincipal from './components/TelaPrincipal';
import SuaSaude from './components/SuaSaude';

export default props => (

    <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }}>
            <Scene 
                key='formLogin' 
                component={FormLogin} 
                title="Login" 
                hideNavBar={true}                 
            />
            <Scene 
                key='formCadastro' 
                component={FormCadastro} 
                title="Cadastro" 
                hideNavBar={false} 
            />
            <Scene
                key='BoasVindas' 
                component={BoasVindas} 
                title="Boas Vindas" 
                hideNavBar={true} 
            />
            <Scene 
                key='Principal'  
                component={Principal} 
                title="Principal" 
                hideNavBar={true}
                 
            />
            <Scene 
                key='adicionarContato'  
                component={AdicionarContato} 
                title="Adicionar Contato" 
                hideNavBar={false}
                 
            />
            <Scene 
                key='conversa'  
                component={Conversa} 
                title="Conversa" 
                hideNavBar={false}
            />
            <Scene 
                key='bot'  
                component={bot} 
                title="bot" 
                hideNavBar={false}                
            />
            <Scene 
                key='TelaPrincipal'  
                component={TelaPrincipal} 
                title="TelaPrincipal" 
                hideNavBar={true}                
            />
            <Scene 
                key='SuaSaude'  
                component={SuaSaude} 
                title="Sua Saude" 
                hideNavBar={false}
                initial
            />
            
    </Router>

);