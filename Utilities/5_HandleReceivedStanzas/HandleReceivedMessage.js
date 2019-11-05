import React from 'react';

const {client, xml, jid} = require('@xmpp/client')
const time = require('@xmpp/time')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import SendMessageReceipt from '../4_MessageActions/SendMessageReceipt'
import ProcessMessageObject from '../4_MessageActions/ProcessMessageObject'

function HandleReceivedMessage(xmpp, message) {
    console.log("Processing Message")
    console.log(message)
    const from = message.attrs.from
    const to = message.attrs.to
    const message_body = message.children[2].children[0]
    const stamp = message.children[3].children[0]
    const id = message.attrs.id
    console.log(from)
    console.log(to)
    console.log(message_body)
    console.log(stamp)
    console.log(id)
    receipt_stamp = time.datetime()
    // SendMessageReceipt(xmpp, id, from, receipt_stamp)
    // SendMessageReadReceipt(xmpp, id, from, receipt_stamp)
    const return_object = ProcessMessageObject(message)
    console.log(return_object)
    return return_object
}

export default HandleReceivedMessage
