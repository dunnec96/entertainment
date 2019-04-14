// import React,  { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheeet,
//     View,
//     TextInput,
//     TouchableOpacity,
//     Text
// } from 'react-native';

// import QRCode from 'react-native-qrcode';

// export default class App extends Component{
//     constructor(){
//         super();
//         this.state ={
//             Text_Input : '',
//             Text_Output : '',
//         }
//     }

//     getTextInputValue=()=>{
//         this.setState({Text_Output: this.state.Text_Input});
//     }
//     render(){
//         return(
//             <View style={styles.Container}>
//             <Text style ={styles.TextTitle}>URL QR CODE</Text>
//             <TextInput
//             style= {style.TextInput}
//             onChangeText={(text) => this.setState({Text_Input: text})}
//             underlineColorAndroid = "transparent"
//             placeholder="Enter Url"
//             />

//             <TouchableOpacity onPress={this.getTextInputValue} activeOpacity={0.7} style={styles.button}>
//             <Text style={styles.TextStyle}>Generate</Text>
//             </TouchableOpacity>
            

//             <QRCode
//             value={this.state.Text_Output}
//             size={250}
//             bgColor ='#000'
//             fgColor ='#fff'/>
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     Container:{
//         flex: 1,
//         margin: 10,
//         alignItems: 'center',
//         paddingTop: 20

//     },
//     TextInput:{
//         width: '100%',
//         height: 40,
//         borderRadius: 10,
//         marginBottom: 10,
//         marginTop: 20,
//         borderWidth: 1,
//         borderColor: '#c41f27',
//         textAlign: 'center'
//     },
//     button:{
//         width:'',
//         paddingTop: 8,
//         paddingBottom: 8,
//         backgroundColor:'#c41f27',
//         borderRadius: 7,
//         marginBottom: 20

//     },
//     TextStyle:{
//         color:'#c41f27',
//         textAlign: 'center',
//         fontSize: 18,

//     },
//     TextStyle:{
//         color:'#c41f27',
//         textAlign:'center',
//         fontSize: 18,


//     },
// });
// export default Points;
//This is an example code to generate QR code//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, TextInput, TouchableOpacity, Text,} from 'react-native';
// import all basic components
import QRCode from 'react-native-qrcode';
//import QRCode
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      // Default Value of the TextInput
      valueForQRCode: '',
      // Default value for the QR Code
    };
  }
  getTextInputValue = () => {
    // Function to get the value from input
    // and Setting the value to the QRCode
    this.setState({ valueForQRCode: this.state.inputValue });
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <QRCode
          value={this.state.valueForQRCode}
          //Setting the value of QRCode
          size={250}
          //Size of QRCode
          bgColor="#000"
          //Backgroun Color of QRCode
          fgColor="#fff"
          //Front Color of QRCode
        />
        <TextInput
          // Input to get the value to set on QRCode
          style={styles.TextInputStyle}
          onChangeText={text => this.setState({ inputValue: text })}
          underlineColorAndroid="transparent"
          placeholder="Enter text to Generate QR Code"
        />
        <TouchableOpacity
          onPress={this.getTextInputValue}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Generate QR Code </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 40,
  },
  TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor: '#F44336',
    marginBottom: 20,
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});