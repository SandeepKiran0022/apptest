import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import Toolbar from './toolbar';
import DrawerLayout from 'react-native-drawer-layout';
import SideMenu from './sidemenu';
import { scale } from 'react-native-size-matters';
import Main from './main';
import { Content } from 'native-base';

class Home extends Component {
	constructor(props) {
		super(props);
		this.openDrawer = this.openDrawer.bind(this);
		this.closeDrawer = this.closeDrawer.bind(this);
	}

	openDrawer() {
		this.drawer.openDrawer();
	}

	closeDrawer() {
		this.drawer.closeDrawer();
	}

	render() {
		var { navigate } = this.props.navigation;
		var navigationView = <SideMenu navigation={this.props.navigation} closeDrawer={this.closeDrawer} />;
		return (
			<DrawerLayout
				drawerWidth={scale(290)}
				disableGestures={true}
				ref={(_drawer) => (this.drawer = _drawer)}
				drawerPosition={DrawerLayout.positions.Left}
				renderNavigationView={() => navigationView}>
				<Toolbar
					title='Home'
					back={true}
					navigation={this.props.navigation}
					openDrawer={this.openDrawer}
					closeDrawer={this.closeDrawer}
				/>
				<Content>
					<Main
						navigation={this.props.navigation}
						openDrawer={this.openDrawer}
						closeDrawer={this.closeDrawer}
					/>
				</Content>
			</DrawerLayout>
		);
	}

	navigate(screen_name) {
		this.props.navigation.navigate(screen_name);
	}
}

export default Home;

const styles = StyleSheet.create({
	container_1               : {
		flex          : 1,
		flexDirection : 'row',
		marginTop     : 74,
		alignItems    : 'center'
	},
	container_2               : {
		flex          : 1,
		flexDirection : 'row'
	},
	title_text                : {
		fontSize          : 24,
		justifyContent    : 'center',
		alignSelf         : 'center',
		textAlign         : 'center',
		textAlignVertical : 'center'
	},
	touchableOpacityContainer : {
		height         : 150,
		flex           : 1,
		justifyContent : 'center',
		borderRadius   : 5,
		borderColor    : 'black',
		borderWidth    : 1,
		margin         : 8
	}
});
