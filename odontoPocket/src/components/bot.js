import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from './env';

const BOT_USER = {
	_id: 2,
	name: 'FAQ Bot',
	avatar: 'https://i.imgur.com/7k12EPD.png'
};

class bot extends Component {
	state = {
		messages: [
			{
				_id: 1,
				text: `Olá.\n\nPosso Ajudar?`,
				createdAt: new Date(),
				user: BOT_USER
			}
		]
	};

	componentDidMount() {
		Dialogflow_V2.setConfiguration(
			dialogflowConfig.client_email,
			dialogflowConfig.private_key,
			Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
			dialogflowConfig.project_id
		);
	}

	handleGoogleResponse(result) {
		let text = result.queryResult.fulfillmentMessages[0].text.text[0];
		this.sendBotResponse(text);
	}

	onSend(messages = []) {
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messages)
		}));

		let message = messages[0].text;
		Dialogflow_V2.requestQuery(
			message,
			result => this.handleGoogleResponse(result),
			error => console.log(error)
		);
	}

	sendBotResponse(text) {
		let msg = {
			_id: this.state.messages.length + 1,
			text,
			createdAt: new Date(),
			user: BOT_USER
		};

		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, [msg])
		}));
	}

	render() {
		return (
        <ImageBackground source={require('../imgs/PlanFundo.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={{ flex: 1,}}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1
            }}
          />
        </View>
      </ImageBackground>
		);
	}
}

export default bot;