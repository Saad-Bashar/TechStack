import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
	renderDescription = () => {
		const { item, selectedId } = this.props;

		if (item.id === selectedId) {
			return (
				<Text style={{ marginTop: 10, marginLeft: 5, color: '#1999', fontSize: 12 }}>{item.description}</Text>
			);
		}

		return null;
	};

	render() {
		const { item } = this.props;
		return (
			<TouchableOpacity
				onPress={() => this.props.selectLibrary(item.id)}
				style={{ padding: 20, borderBottomColor: '#9999', borderBottomWidth: 1 }}
			>
				<Text style={{ fontWeight: 'bold', fontSize: 14 }}> {item.title} </Text>
				{this.renderDescription()}
			</TouchableOpacity>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedId: state.selectedLibraryId,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		selectLibrary: id => dispatch({ type: 'select_library', payload: id }),
	};
};

export default connect(
	mapStateToProps,
	actions
)(ListItem);
