import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DrawerLayoutAndroid, Dimensions } from 'react-native';
import Toolbar from './toolbar';
import DrawerLayout from 'react-native-drawer-layout';
import SideMenu from './sidemenu';
import { Icon } from 'native-base';
import { scale } from 'react-native-size-matters';
import { BRAND_COLOR } from '../ config/constants';



class Main extends Component {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
        var navigationView = <SideMenu navigation={this.props.navigation} />;
        return (
            <View
                style={{
                    flex          : 1,
                    height        : Dimensions.get('screen').height,
                    flexDirection : 'column'
                }}>
                <View style={styles.container_1}>
                    <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        onPress={() => this.navigate('customers')}>
                        <View style={styles.iconContainer}>
                            <Icon type='Feather' name='user' style={styles.iconStyle} />
                        </View>
                        <Text style={[ styles.title_text, (style = { paddingTop: scale(12) }) ]}>Customers</Text>
                        <Text style={styles.title_text}>444</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        onPress={() => this.navigate('invoices')}>
                        <View style={styles.iconContainer}>
                            <Icon type='FontAwesome' name='file-text-o' style={styles.iconStyle} />
                        </View>

                        <Text style={[ styles.title_text, (style = { paddingTop: scale(12) }) ]}>Invoices</Text>
                        <Text style={styles.title_text}>444</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container_2}>
                    <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        onPress={() => this.navigate('enrolments')}>
                        <View style={styles.iconContainer}>
                            <Icon type='Feather' name='user' style={styles.iconStyle} />
                        </View>

                        <Text style={[ styles.title_text, (style = { paddingTop: scale(12) }) ]}>Enrolments</Text>
                        <Text style={styles.title_text}>444</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        onPress={() => alert('Work in progress')}>
                        <View style={styles.iconContainer}>
                            <Icon type='Feather' name='user' style={styles.iconStyle} />
                        </View>

                        <Text style={[ styles.title_text, (style = { paddingTop: scale(12) }) ]}>Payments</Text>
                        <Text style={styles.title_text}>444</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    navigate(screen_name) {
        this.props.navigation.navigate(screen_name);
    }
}

export default Main;

const styles = StyleSheet.create({
    container_1               : {
        flex          : 0,
        flexDirection : 'row',
        alignItems    : 'center',
        padding       : scale(8)
    },
    container_2               : {
        flex          : 1,
        flexDirection : 'row',
        padding       : scale(8)
    },
    title_text                : {
        fontSize          : scale(20),
        justifyContent    : 'center',
        alignSelf         : 'center',
        textAlign         : 'center',
        textAlignVertical : 'center'
    },
    touchableOpacityContainer : {
        height         : 183,
        width          : 155,
        flex           : 1,
        justifyContent : 'center',
        alignItems     : 'center',
        borderRadius   : scale(3),
        borderColor    : 'black',
        borderWidth    : 1,
        marginTop      : scale(35),
        marginRight    : scale(25),
        marginLeft     : scale(15)
    },
    iconStyle                 : {
        color             : 'white',
        textAlign         : 'center',
        textAlignVertical : 'center',
        alignSelf         : 'center',
        height            : scale(60),
        width             : scale(60)
    },
    iconContainer             : {
        width           : scale(62),
        height          : scale(62),
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : BRAND_COLOR,
        borderRadius    : scale(40)
    }
});
