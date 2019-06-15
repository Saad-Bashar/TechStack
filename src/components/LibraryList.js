import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	renderItem = ({ item }) => {
		return <ListItem item={item} />;
	};

	keyExtractor = (item, index) => item.id.toString();

	render() {
		console.log('Props ', this.props.data);
		const { data } = this.props;
		return (
			<View style={{ flex: 1, marginTop: 64 }}>
				<FlatList data={data} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	console.log('Global State ', state);
	return {
		data: state.libraries,
	};
};

export default connect(mapStateToProps)(LibraryList);
