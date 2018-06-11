import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
   Image, Dimensions, ScrollView
} from 'react-native';
import {
    Container,
    Button,
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
                    <List style={styles.list}>
                        {this.renderListItem(1)}
                        {this.renderListItem(2)}
                        {this.renderListItem(1)}
                        {this.renderListItem(3)}
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
                    <Text style={styles.nameText}>Kilgore Trout</Text>
                    <Text note>INV -0001</Text>
                    <Text note>Feb 6 2018</Text>
                </Left>

                <Right>
                    <Text style={styles.amountText}>$ 4000</Text>

                    {paystatus === 1 ? (
                        <Text note style={styles.payStatusActive}>
                            Paid
                        </Text>
                    ) : null}
                    {paystatus === 2 ? (
                        <Text note style={styles.payStatusFuture}>
                            Partially Paid
                        </Text>
                    ) : null}
                    {paystatus === 3 ? (
                        <Text note style={styles.payStatusEnded}>
                            Unpaid
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
    backgroundColor: 'silver',
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
   list            : {
        width : Dimensions.get('screen').width - 8
    },
    listItemLeft    : { flexDirection: 'column' },
    nameText        : {
        fontSize : scale(18)
    },
    amountText      : {
        fontSize     : scale(18),
        marginBottom : 8
    },
    payStatusActive : { color: 'darkgreen', fontSize: 11 },
    payStatusEnded  : { color: 'red', fontSize: 11 },
    payStatusFuture : { color: 'darkorange', fontSize: 11 }
});
