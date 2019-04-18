import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight
} from 'react-native';

//const styles ='./app/styles';

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
// import React, { Component } from 'react';
// import { View, Text, StyleSheet} from 'react-native';
// import ItemComponent from '../components/ItemComponent';
 
// import { db } from '../config/john';
 
// let itemsRef = db.ref('/items');
 
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       backgroundColor: '#ffffff' 
//     }
//   })
 
// export default class List extends Component {
 
//     state = {
//         items: []
//     }
 
//     componentDidMount() {
//         itemsRef.on('value', (snapshot) => {
//             let data = snapshot.val();
//             let items = Object.values(data);
//             this.setState({items});
//          });
//     }
    
//     render() {
//         return (
//             <View style={styles.container}>
//                 {
//                     this.state.items.length > 0
//                     ? <ItemComponent items={this.state.items} />
//                     : <Text>No items</Text>
//                 }
//             </View>
//         )
//     }
// }
// import React, { Component } from 'react';  
// import { View, Text, StyleSheet } from 'react-native';  
// import ItemComponent from '../components/ItemComponent';

// import { db } from '../config/john';

// let eventsRef = db.ref('/events');

// export default class List extends Component {  
//   state = {
//     events: []
//   };

//   componentDidMount() {
//     eventsRef.on('value', snapshot => {
//       let data = snapshot.val();
//       let events = Object.values(data);
//       this.setState({ events });
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {this.state.events.length > 0 ? (
//           <ItemComponent events={this.state.events} />
//         ) : (
//           <Text>Fuck you tully</Text>
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({  
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ebebeb'
//   }
// });
// import React, { Component } from 'react';
// import { List, ListItem } from 'react-native-elements';
// import { View, Text,} from 'react-native';

// export default class Feed extends Component{
//     render(){
//         return (
//             <List containerStyle={{marginTop: 55}}>
//                 <ListItem
//                 title ={'Dummy'}
//                 leftIcon={{name: 'lightbulb-outline'}}
//                 />
//                  <ListItem
//                 title ={'Dummy'}
//                 leftIcon={{name: 'lightbulb-outline'}}
//                 />
//                 <ListItem
//                 title ={'Dummy'}
//                 leftIcon={{name: 'lightbulb-outline'}}
//                 />
//             </List>
//         )
//     }

// }
