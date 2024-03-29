import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ScrollView } from 'react-native';

import CreateClient from './Utilities/0_Register/CreateClient'
import LoginUser from './Utilities/0_Register/LoginUser'
import CreateUser from './Utilities/0_Register/CreateUser'

import SendPersonalTextMessage from './Utilities/2_PersonalMessage/SendPersonalTextMessage'
import SendPersonalMediaMessage from './Utilities/2_PersonalMessage/SendPersonalMediaMessage'

import HandleReceivedMessage from './Utilities/5_HandleReceivedStanzas/HandleReceivedMessage'
import HandleReceivedIQ from './Utilities/5_HandleReceivedStanzas/HandleReceivedIQ'
import HandleReceivedPresence from './Utilities/5_HandleReceivedStanzas/HandleReceivedPresence'

import CreateGroup from './Utilities/3_GroupChat/CreateGroup'
import RequestPublicGroups from './Utilities/3_GroupChat/RequestPublicGroups'
import RequestGroupMembersList from './Utilities/3_GroupChat/RequestGroupMembersList'
import JoinGroup from './Utilities/3_GroupChat/JoinGroup'
import SubscribeGroup from './Utilities/3_GroupChat/SubscribeGroup'
import SendGroupMessage from './Utilities/3_GroupChat/SendGroupMessage'

import ProcessMessageObject from './Utilities/4_MessageActions/ProcessMessageObject'

// important
const {client, xml, jid} = require('@xmpp/client')
const time = require('@xmpp/time')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

var xmpp = CreateClient('rahul', 'rahultesting')
const xmppa = CreateClient('admin', 'admintesting')
const xmppr = CreateClient('rahul', 'rahultesting')


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        output: ''
    }
  }


  //Important

  onStartConnect = (name = 'admin') => {
    if (name === 'admin') {
      xmpp = CreateClient('admin', 'admintesting')
    }
    if (name === 'rahul') {
      xmpp = CreateClient('rahul', 'rahultesting')
    }
    if (name === 'user1') {
      xmpp = CreateClient('user1', 'user1testing')
    }
    if (name === 'user2') {
      xmpp = CreateClient('user2', 'user2testing')
    }
    LoginUser(xmpp)
    //CreateUser(xmpp, 'miraj', 'rahultesting')
    xmpp.on('error', (err) => {
      console.error('❌', err.toString())
    })

    xmpp.on('offline', () => {
      console.log('⏹', 'offline')
    })

    xmpp.on('stanza', async (stanza) => {
      console.log('▶', stanza.toString())
      if (stanza.is('message')) {
        HandleReceivedMessage(xmpp, stanza)
      }
      if (stanza.is('iq')) {
        HandleReceivedIQ(xmpp, stanza)
      }
      if (stanza.is('presence')) {
        HandleReceivedPresence(xmpp, stanza)
      }
    })

    // Debug
    xmpp.on('status', (status) => {
      console.debug('🛈', 'status', status)
    })
    xmpp.on('input', (input) => {
      console.debug('⮈', input)
    })
    // xmpp.on('output', (output) => {
    //   console.log("Here is the output")
    //   console.debug('⮊', output.toString('utf8'))
    //   if (output.name === 'message') {
    //     console.log("processedmessage: ", ProcessMessageObject(output))
    //   }
    // })

  }

  onSendMessage = () => {
    SendPersonalTextMessage(xmpp, "admin@getassist.app/example", 'It is')// + time.datetime())
    // SendPersonalMediaMessage(xmpp, "rahul@getassist.app/example", 'test message', 'https://testlink.com')
  }

  onGroupChat = () => {
    // CreateGroup(xmpp, "test1")
    // RequestPublicGroups(xmpp)
    // RequestGroupMembersList(xmpp, "test1@bitspilani.getassist.app")
    // JoinGroup(xmpp, "test")
    // SubscribeGroup(xmpp, "test1")
    SendGroupMessage(xmpp, "test1@bitspilani.getassist.app", 'It is')
  }


  render() {

    var buttons = (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.onStartConnect('rahul')}
          style={styles.button}>
          <Text style={styles.buttonText}>
              Login as Rahul
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.onStartConnect('admin')}
          style={styles.button}>
          <Text style={styles.buttonText}>
              Login as admin
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.onStartConnect('user1')}
          style={styles.button}>
          <Text style={styles.buttonText}>
              Login as User 1
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.onStartConnect('user2')}
          style={styles.button}>
          <Text style={styles.buttonText}>
              Login as User 2
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
