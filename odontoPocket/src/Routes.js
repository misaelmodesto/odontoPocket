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
import SeuTratamento from './components/SeuTratamento';
import CadPaciente from './components/CadPaciente';
import CadDentista from './components/CadDentista';
import PacLogin from './components/PacLogin';

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
                initial            
            />
            <Scene 
                key='SuaSaude'  
                component={SuaSaude} 
                title="Sua Saude" 
                hideNavBar={false}                
            />
            <Scene 
                key='SeuTratamento'  
                component={SeuTratamento} 
                title="Seu Tratamento" 
                hideNavBar={false}                
            />
            <Scene 
                key='CadPaciente'  
                component={CadPaciente} 
                title="Paciente de Bolso" 
                hideNavBar={true}   
                                   
            />
            <Scene 
                key='CadDentista'  
                component={CadDentista} 
                title="Dentista de Bolso" 
                hideNavBar={true}             
                          
            />
            <Scene 
                key='PacLogin'  
                component={PacLogin} 
                title="Paciente de Bolso" 
                hideNavBar={true}             
                          
            />
            
    </Router>

);