/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function SendGroupMessage(xmpp, to, message_body) {
  const message = (
    <message
        id={GenerateUUID(to, message_body)}
        to={to}
        type='groupchat'>
      <body>{message_body}</body>
    </message>
  )
  xmpp.send(message)
}

export default SendGroupMessage
