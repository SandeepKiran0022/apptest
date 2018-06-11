import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, Dimensions, ListView
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings(['Warning:'])
YellowBox.ignoreWarnings([''])
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
import { scale } from 'react-native-size-matters';

const datas = [
    { name: 'Kilgore Trout', id: '272', active: true },
    { name: 'Kilgore Trout', id: '272', active: true },
    { name: 'Kilgore Trout', id: '272', active: false },
    { name: 'Kilgore Trout', id: '272', active: true },
    { name: 'Kilgore Trout', id: '272', active: false },
    { name: 'Kilgore Trout', id: '272', active: false },
    { name: 'Kilgore Trout', id: '272', active: true },
    { name: 'Kilgore Trout', id: '272', active: false }
];

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
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic        : true,
            listViewData : datas
        };
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    closeDrawer() {
        this.drawer.closeDrawer();
    }


  static navigationOptions = ({ navigation }) => {

    navOptions = navigation;
    const { params = {} } = navigation.state;


  }

  onHeaderEventControl() {
    const { params = {} } = navOptions.state;
    params._openNav()
  }



  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
                
                    <List
                        noBorder={true}
                        style={styles.list}
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={(data) => this.renderListItem(data)}
                        renderLeftHiddenRow={(data) => (
                            <Button style={styles.button} onPress={() => alert('Call')}>
                                <Icon active type='FontAwesome' name='phone' />
                            </Button>
                        )}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) => (
                            <Button style={styles.button} danger onPress={() => alert('SMS')}>
                                <Icon active type='MaterialIcons' name='textsms' />
                            </Button>
                        )}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
              
    );
  }

  renderListItem(data) {
        return (
            <View style={styles.listItem}>
                <ListItem>
                    {data.active ? <View style={styles.activeView} /> : <View style={styles.inactiveView} />}
                    <Left style={{ paddingLeft: 4 }}>
                        <Thumbnail
                            source={{
                                uri :
                                    'https://www.louisvillewebgroup.com/sites/default/files/styles/team-member/public/avatar-circle-blue.png?itok=UmUsBb4f'
                            }}
                        />
                        <Body style={styles.body}>
                            <Text style={styles.nameText}>{data.name}</Text>
                            <Text style={styles.custId} note>
                                CUST ID: {data.id}
                            </Text>
                        </Body>
                    </Left>
                </ListItem>
            </View>
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
  container    : {
        backgroundColor : 'white'
    },
    activeView   : {
        position        : 'absolute',
        marginBottom    : 40,
        height          : 12,
        width           : 12,
        borderRadius    : 6,
        marginLeft      : 46,
        borderColor     : '#E9EBF1',
        borderWidth     : 2,
        alignSelf       : 'flex-start',
        marginTop       : 18,
        backgroundColor : 'lightgreen',
        justifyContent  : 'center',
        alignItems      : 'center',
        zIndex          : 1000
    },
    inactiveView : {
        position        : 'absolute',
        marginBottom    : 40,
        height          : 12,
        width           : 12,
        borderRadius    : 6,
        borderColor     : '#E9EBF1',
        borderWidth     : 2,
        marginLeft      : 46,
        alignSelf       : 'flex-start',
        marginTop       : 18,
        backgroundColor : 'red',
        justifyContent  : 'center',
        alignItems      : 'center',
        zIndex          : 1000
    },
    button       : { padding: 4 },
    nameText     : {
        fontSize    : 24,
        paddingLeft : 4
    },
    custId       : {
        paddingLeft : 6
    },
    listItem     : {
        borderBottomColor : 'lightgrey',
        borderBottomWidth : 1,
        paddingBottom     : scale(4)
    },
    body         : {
        flex       : 1,
        alignItems : 'flex-start'
    }
});
