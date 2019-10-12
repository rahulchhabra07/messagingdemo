/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')
const time = require('@xmpp/time')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function SendPersonalTextMessage(xmpp, to, message_body) {
  stamp = time.datetime()
  const message = (
    <message
        id={GenerateUUID(to, message_body)}
        type='chat'
        to={to}>
      <body>{message_body}</body>
      <stamp>{stamp}</stamp>
    </message>
  )
  xmpp.send(message)
}

export default SendPersonalTextMessage
