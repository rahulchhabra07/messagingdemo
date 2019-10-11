import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ScrollView } from 'react-native';

// impoprtant
const {client, xml, jid} = require('@xmpp/client')

const xmpp = client({
  service: 'wss://getassist.app:5280/websocket',
  domain: 'getassist.app',
  resource: 'example',
  username: 'admin',
  password: 'admintesting',
})

xmpp.on('error', (err) => {
  console.error('❌', err.toString())
})

xmpp.on('offline', () => {
  console.log('⏹', 'offline')
})

xmpp.on('stanza', async (stanza) => {
  if (stanza.is('message')) {
    console.log('▶', stanza.toString())
  }
})

xmpp.on('online', async (address) => {
  console.log('▶', 'online as', address.toString())

  // Makes itself available
  await xmpp.send(xml('presence'))

  // Sends a chat message to itself
  const message = xml(
    'message',
    {type: 'chat', to: address},
    xml('body', 'hello world')
  )
  await xmpp.send(message)
})

// Debug
xmpp.on('status', (status) => {
  console.debug('🛈', 'status', status)
})
xmpp.on('input', (input) => {
  console.debug('⮈', input)
})
xmpp.on('output', (output) => {
  console.debug('⮊', output)
})

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        output: ''
    }
  }

    onStartConnect = () => {
      xmpp.start().catch(console.error)
    }

    onSendMessage = () => {
      const message = xml(
        'message',
        {type: 'chat', to: "admin@getassist.app/example"},
        xml('body', 'test message')
      )
      xmpp.send(message)
    }

  render() {

    var buttons = (
      <View style={styles.container}>
          <TouchableHighlight
            onPress={() => this.onStartConnect()}
            style={styles.button}>
            <Text style={styles.buttonText}>
                Register new User
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.onStartConnect()}
            style={styles.button}>
            <Text style={styles.buttonText}>
                Login user
            </Text>
          </TouchableHighlight>
      </View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.output_result}>
            {this.state.output}
        </Text>
        {buttons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  output_result: {
    color: '#000',
    marginTop: 20,
 },
});
