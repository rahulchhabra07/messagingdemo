import React from 'react';

const {client, xml, jid} = require('@xmpp/client')
const time = require('@xmpp/time')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import SendMessageReceivedReceipt from './SendMessageReceivedReceipt'

function HandleReceivedMessage(xmpp, message) {
    const from = message.attrs.from
    const to = message.attrs.to
    const id = message.getChild('id').children[0]
    stamp = time.datetime()
    // SendMessageReceivedReceipt(xmpp, id, from, stamp)
    try {
      console.log("link:", message.getChild('link').children[0])
    } catch (err) {
      console.log("No media link")
    }
}

export default HandleReceivedMessage
