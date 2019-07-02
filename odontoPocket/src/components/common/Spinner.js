import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Spinner = ({size}) => {
	const { SpinnerStyle } = styles;
	return (
			<View style={SpinnerStyle}>
				<ActivityIndicator size={size || 'large' } />
			</View>

	);
}

const styles = StyleSheet.create({
	SpinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30
	}
});

export { Spinner };
