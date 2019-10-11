/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function SendGroupMessage(xmpp, to, message_body) {
  const message = (
    <message type='chat' to={to}>
      <body>{message_body}</body>
      // <id>{GenerateUUID(to, message_body)}</id>
    </message>
  )
  xmpp.send(message)
}

export default SendGroupMessage
