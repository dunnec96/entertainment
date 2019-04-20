import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight
} from 'react-native';

const styles ='./app/styles';

import * as firebase from 'firebase';
import config from '/config/john.js'

export default class itemlister extends Component{
    constructor(){
        super();
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        this.state ={
            itemDataSource: ds
        }
        this.renderRow = this.renderRow.bind(this);
        this.pressRow = this.renderRow.bind(this);

    }
    componentWillMount(){
        this.getItems();
    }
     componentDidMount(){
        this.getItems();
    }
    getItems(){
        let items = [{title:'item one'}];

        this.setState({
            itemDataSource: this.state.itemDataSource.cloneWithRows(items)
        });
    }
    pressRow(item){
        console.log(item);

    }
    renderRow(item){
        return(
            <TouchableHighlight onPress={() => {
                this.pressRow(item);
            }}>
            <View style={style.liText}>
            <Text style={styles.liText}>{item.title}</Text>
            </View>
            
            </TouchableHighlight>
        )
    }
    render(){
        return (
            <View style={styles.container}>
            <ListView
                dataSource={this.state.itemDataSource}
                renderRow ={this.renderRow}

            />

            </View>
        );
    }
}