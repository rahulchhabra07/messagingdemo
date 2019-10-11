import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ScrollView } from 'react-native';

import CreateClient from './Utilities/0_Register/CreateClient'
import LoginUser from './Utilities/0_Register/LoginUser'
import CreateUser from './Utilities/0_Register/CreateUser'

import SendPersonalTextMessage from './Utilities/2_PersonalMessage/SendPersonalTextMessage'
import SendPersonalMediaMessage from './Utilities/2_PersonalMessage/SendPersonalMediaMessage'

import HandleReceivedMessage from './Utilities/2_PersonalMessage/HandleReceivedMessage'
import HandleReceivedIQ from './Utilities/2_PersonalMessage/HandleReceivedIQ'
import HandleReceivedPresence from './Utilities/2_PersonalMessage/HandleReceivedPresence'

import CreateGroup from './Utilities/3_GroupChat/CreateGroup'

// important
const {client, xml, jid} = require('@xmpp/client')
const time = require('@xmpp/time')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

const xmpp = CreateClient('rahul', 'rahultesting')

xmpp.on('error', (err) => {
  console.error('❌', err.toString())
})

xmpp.on('offline', () => {
  console.log('⏹', 'offline')
})

xmpp.on('stanza', async (stanza) => {
  // console.log(stanza)
  if (stanza.is('message')) {
    HandleReceivedMessage(xmpp, stanza)
  }
  if (stanza.is('iq')) {
    HandleReceivedIQ(xmpp, stanza)
  }
  if (stanza.is('presence')) {
    console.log("Received a Presence!!!!!!")
    HandleReceivedPresence(xmpp, stanza)
  }
  console.log('▶', stanza.toString())
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


    //Important




    onStartConnect = () => {
      LoginUser(xmpp)
      //CreateUser(xmpp, 'miraj', 'rahultesting')
    }

    onSendMessage = () => {
      SendPersonalTextMessage(xmpp, "rahul@getassist.app/example", 'test message')
      SendPersonalMediaMessage(xmpp, "rahul@getassist.app/example", 'test message', 'https://testlink.com')
      // const message = xml(
      //   'message',
      //   {type: 'chat', to: "admin@getassist.app/example"},
      //   xml('body', 'test message')
      // )
      // xmpp.send(message)
    }

    onGroupChat = () => {
      CreateGroup(xmpp, "test")
    }

  
  render() {

    var buttons = (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.onStartConnect()}
          style={styles.button}>
          <Text style={styles.buttonText}>
              Connect to XMPP server (login)
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.onSendMessage()}
          style={styles.button}>
          <Text style={styles.buttonText}>
              Send a message
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.onGroupChat()}
          style={styles.button}>
          <Text style={styles.buttonText}>
              Group Chat
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
