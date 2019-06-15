import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';
import TestCom from './src/components/TestCom';

export default function App() {
	return (
		<Provider store={createStore(reducers)}>
			<View style={{ flex: 1 }}>
				<LibraryList />
			</View>

			{/* <TestCom /> */}
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
