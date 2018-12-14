import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		/* If you pass the style an array of style properties,
		it will use the right most prop above all */
		<View style={[styles.containerStyle, props.style]} >
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 10,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

export { CardSection };
