// import React, { Component } from 'react';
// import { Container, Header, Content, Button, Text } from 'native-base';


// export default class ButtonFullExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content>
//           <Button full light>
//             <Text>Task 1</Text>
//           </Button>
//           <Button full>
//             <Text>Task 2</Text>
//           </Button>
//           <Button full success>
//             <Text>Task 3</Text>
//           </Button>
//           <Button full info>
//             <Text>Task 4</Text>
//           </Button>
//           <Button full warning>
//             <Text>Task 5</Text>
//           </Button>
//           <Button full danger>
//             <Text>Task 6</Text>
//           </Button>
//           <Button full dark>
//             <Text>Task 7</Text>
//           </Button>
//         </Content>
//       </Container>
//     );
//   }
// }
import React from 'react';
import * as typeformEmbed from '@typeform/embed'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }
  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(this.el, "", {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    }
  }
  render() {
    return (
      <div ref={(el) => this.el = el} style={{width: '100%', height: '300px'}} />
    )
  }
}

export default Form;