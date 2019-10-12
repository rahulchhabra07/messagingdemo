import React from 'react';

const {client, xml, jid} = require('@xmpp/client')
const time = require('@xmpp/time')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import SendMessageReceivedReceipt from '../4_MessageActions/SendMessageReceivedReceipt'
import SendMessageReadReceipt from '../4_MessageActions/SendMessageReadReceipt'

function HandleReceivedMessage(xmpp, message) {
    console.log("Processing Message")
    console.log(message)
    const from = message.attrs.from
    const to = message.attrs.to
    const message_body = message.children[2].children[0]
    // const id = message.attrs.id
    stamp = time.datetime()
    // SendMessageReceivedReceipt(xmpp, id, from, stamp)
    // SendMessageReadReceipt(xmpp, id, from, stamp)
    try {
      console.log("link:", message.getChild('link').children[0])
    } catch (err) {
      console.log("No media link")
    }
    return {
      from,
      to,
      message_body,
    }
}

export default HandleReceivedMessage
