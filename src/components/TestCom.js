import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class TestCom extends Component {
	render() {
		console.log('Props TestCom ', this.props);
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.libraries,
		testData: state.test,
	};
};

export default connect(mapStateToProps)(TestCom);
