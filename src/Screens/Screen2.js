import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image, Dimensions
} from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Icon,
    Body,
    Item,
    Input,
    Left,
    Right,
    Thumbnail,
    List,
    ListItem
} from 'native-base';
import { scale, moderateScale } from 'react-native-size-matters';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([''])
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
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
    return (
          <Content>
                    <List style={styles.listStyle}>
                        {this.renderListItem(1)}
                        {this.renderListItem(2)}
                        {this.renderListItem(1)}
                        {this.renderListItem(3)}
                        {this.renderListItem(1)}
                        {this.renderListItem(2)}
                        {this.renderListItem(1)}
                        {this.renderListItem(3)}
                        {this.renderListItem(1)}
                    </List>
                </Content>
    );
  }
   renderListItem(paystatus) {
        return (
            <ListItem>
                <Left style={styles.listItemLeft}>
                    <Text style={styles.listItemNameText}>Kilgore Trout</Text>
                    <Text note style={styles.listItemPlanText}>
                        Class/Plan Name
                    </Text>
                    <Text note style={styles.listItemNextBillingText}>
                        Next Billing on 01 March 2018
                    </Text>
                </Left>

                <Right>
                    <Text style={styles.rightAmountText}>$ 4000</Text>

                    {paystatus === 1 ? (
                        <Text note style={styles.payStatusActive}>
                            Active
                        </Text>
                    ) : null}
                    {paystatus === 2 ? (
                        <Text note style={styles.payStatusEnded}>
                            Ended
                        </Text>
                    ) : null}
                    {paystatus === 3 ? (
                        <Text note style={styles.payStatusFuture}>
                            Future
                        </Text>
                    ) : null}
                </Right>
            </ListItem>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   list                    : {
        width : Dimensions.get('screen').width - scale(8)
    },
    listItemLeft            : { flexDirection: 'column' },
    listItemNameText        : {
        fontSize : scale(18)
    },
    listItemPlanText        : { paddingTop: 4, fontSize: scale(14) },
    listItemNextBillingText : { fontSize: 12, paddingTop: 4, fontSize: scale(11) },
    rightAmountText         : {
        fontSize     : scale(18),
        marginBottom : scale(8)
    },
    payStatusActive         : { color: 'darkgreen', fontSize: scale(11) },
    payStatusEnded          : { color: 'darkorange', fontSize: scale(11) },
    payStatusFuture         : { color: 'darkblue', fontSize: scale(11) }
});
