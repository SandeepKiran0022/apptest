import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { Left, Thumbnail, Tabs, Tab, ScrollableTab, Icon, Right } from 'native-base';
import Toolbar from './toolbar';
import Enrolments from './enrolments';
import Invoices from './invoices';
import BasicInfo from './basicinfo';
import { BACKGROUND_COLOR, LIGHT_PINK, BRAND_COLOR } from '../ config/constants';
import { scale } from 'react-native-size-matters';

class CustomerDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={{
                    flex          : 1,
                    flexDirection : 'column'
                }}>
                <Toolbar title='Customers' back={false} navigation={this.props.navigation} />
                <View style={styles.mainView}>
                    <View style={styles.innerView} />
                    <Image
                        source={{
                            uri :
                                'https://www.louisvillewebgroup.com/sites/default/files/styles/team-member/public/avatar-circle-blue.png?itok=UmUsBb4f'
                        }}
                        style={styles.image}
                    />
                    <Text style={styles.customerNameText}> Bala Kumar G V </Text>
                    <View style={styles.containerBox}>
                        <Icon type='FontAwesome' name='phone' style={styles.phoneIcon} />
                        <Icon type='MaterialIcons' name='textsms' style={styles.smsIcon} />
                        <View style={styles.balanceContainer}>
                            <Text style={styles.balanceText}>Balance Due</Text>
                            <Text style={styles.balanceAmountText}>$4000</Text>
                        </View>
                    </View>
                    <Tabs renderTabBar={() => <ScrollableTab />} tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
                        <Tab
                            heading='Basic Info'
                            tabStyle={styles.tabStyle}
                            activeTabStyle={styles.tabStyle}
                            activeTextStyle={styles.tabBarTextActive}
                            textStyle={styles.tabBarTextActive}>
                            <BasicInfo />
                        </Tab>
                        <Tab
                            heading='Enrolments'
                            tabStyle={styles.tabStyle}
                            activeTabStyle={styles.tabStyle}
                            activeTextStyle={styles.tabBarTextActive}
                            textStyle={styles.tabBarTextActive}>
                            <ScrollView>
                                <Enrolments hideHeader={true} />
                            </ScrollView>
                        </Tab>
                        <Tab
                            heading='Invoices'
                            tabStyle={styles.tabStyle}
                            activeTabStyle={styles.tabStyle}
                            activeTextStyle={styles.tabBarTextActive}
                            textStyle={styles.tabBarTextActive}>
                            <ScrollView>
                                <Invoices hideHeader={true} />
                            </ScrollView>
                        </Tab>
                        <Tab
                            heading='Payments'
                            tabStyle={styles.tabStyle}
                            activeTabStyle={styles.tabStyle}
                            activeTextStyle={styles.tabBarTextActive}
                            textStyle={styles.tabBarTextActive}>
                            <ScrollView>
                                <Enrolments hideHeader={true} />
                            </ScrollView>
                        </Tab>
                    </Tabs>
                </View>
            </View>
        );
    }

    navigate(screen_name) {
        this.props.navigation.navigate(screen_name);
    }
}

export default CustomerDetails;

const styles = StyleSheet.create({
    container_1               : {
        flex          : 1,
        flexDirection : 'row',
        marginTop     : scale(70),
        alignItems    : 'center'
    },
    mainView                  : { flex: 1, backgroundColor: '#c22d2d', alignItems: 'center' },
    container_2               : {
        flex          : 1,
        flexDirection : 'row'
    },
    title_text                : {
        fontSize          : scale(22),
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
    },
    innerView                 : {
        position        : 'absolute',
        marginBottom    : scale(38),
        height          : scale(12),
        width           : scale(12),
        borderRadius    : scale(6),
        marginLeft      : Dimensions.get('screen').width - scale(160),
        borderColor     : BACKGROUND_COLOR,
        borderWidth     : 2,
        alignSelf       : 'flex-start',
        marginTop       : scale(8),
        backgroundColor : 'lightgreen',
        justifyContent  : 'center',
        alignItems      : 'center',
        zIndex          : 1000
    },
    image                     : { width: scale(90), height: scale(90), marginTop: scale(8) },
    customerNameText          : { marginTop: 8, fontSize: scale(20), color: 'white' },
    containerBox              : {
        flexDirection     : 'row',
        borderColor       : 'white',
        borderRightColor  : 'transparent',
        borderLeftColor   : 'transparent',
        borderTopWidth    : 1,
        borderBottomWidth : 1,
        marginTop         : scale(8)
    },
    phoneIcon                 : {
        padding  : scale(10),
        fontSize : scale(26),
        color    : 'white'
    },
    smsIcon                   : {
        padding         : scale(10),
        fontSize        : scale(26),
        color           : 'white',
        borderLeftColor : 'white',
        borderLeftWidth : 1
    },
    balanceContainer          : {
        flexDirection   : 'row',
        flex            : 1,
        paddingRight    : scale(12),
        borderLeftColor : 'white',
        borderLeftWidth : 1
    },
    balanceText               : {
        flex       : 1,
        color      : 'white',
        alignSelf  : 'center',
        marginLeft : scale(8),
        color      : 'white',
        fontSize   : scale(20)
    },
    balanceAmountText         : {
        justifyContent : 'center',
        alignSelf      : 'center',
        color          : 'white',
        fontSize       : scale(20)
    },
    tabBarUnderlineStyle      : { backgroundColor: BRAND_COLOR },
    tabStyle                  : { backgroundColor: 'white' },
    tabBarTextActive          : { color: BRAND_COLOR }
});
