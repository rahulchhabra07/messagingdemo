/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function SendPersonalTextMessage(xmpp, to, message_body) {
  const message = (
    <message
        // id={GenerateUUID(to, message_body)} 
        type='chat'
        to={to}>
      <body>{message_body}</body>
    </message>
  )
  xmpp.send(message)
}

export default SendPersonalTextMessage
