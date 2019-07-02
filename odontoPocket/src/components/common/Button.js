import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle} = styles;
	return(

		<TouchableOpacity style={buttonStyle} onPress={onPress}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttonStyle: { 
	
		borderWidth: 1,
		borderRadius: 4,
		width: 150,
		height: 50,
		alignSelf: 'center'
		

	},
	textStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		marginTop: 7
		

	}
});

export { Button };