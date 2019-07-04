import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Button, Input, Spinner } from './common';
import { Actions } from 'react-native-router-flux';

class TelaPrincipal extends Component {
	render(){
		return (
           
            <ImageBackground source={require('../imgs/PlanFundo.jpg')} style={{width: '100%', height: '100%'}}>

            <View style={{flex: 1, flexDirection: 'row',  padding: 10, justifyContent: 'space-between' }}>

            <View style={{ flexDirection: 'row'}}>
					<Image 
						style={{width: 40, height: 50}}
						source={require('../imgs/logos.png')} 
					/>	
			</View>
 
            </View>   
           
            <View style={{flex: 10, flexDirection: 'row',  padding: 10, justifyContent: 'space-between'}}>

                    <View style={styles.container}>
                        <TouchableHighlight onPress={() => { Actions.BoasVindas() }} underlayColor={'transparent'}>
                            <Image
                                style={styles.logo}
                                source={require('../imgs/pac.png')}
                            />
                        </TouchableHighlight>
                    </View>

                    <View style={styles.container}>
                        <TouchableHighlight onPress={() => { Actions.bot() }} underlayColor={'transparent'}>
                            <Image
                                style={styles.logo}
                                source={require('../imgs/pac.png')}
                            />
                        </TouchableHighlight>
                    </View>

            </View>
            <View style={{flex: 10, flexDirection: 'row',  padding: 10, justifyContent: 'space-between'}}>

                    <View style={styles.container}>
                        <TouchableHighlight onPress={() => { Actions.SuaSaude() }} underlayColor={'transparent'}>
                            <Image
                                style={styles.logo}
                                source={require('../imgs/pac.png')} 
                            />
                        </TouchableHighlight>
                    </View>

                    <View style={styles.container}>
                        <TouchableHighlight onPress={() => { Actions.SeuTratamento() }} underlayColor={'transparent'}>
                            <Image
                                style={styles.logo}
                                source={require('../imgs/pac.png')}
                            />
                        </TouchableHighlight>
                    </View>

            </View>

            <View style={{flex: 1, flexDirection: 'row',  padding: 10, justifyContent: 'space-between'}}>
            </View>

            </ImageBackground> 


			);
	}
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        flex: 1,
        height: 150,
        width: 133,
      },

});


export default TelaPrincipal;