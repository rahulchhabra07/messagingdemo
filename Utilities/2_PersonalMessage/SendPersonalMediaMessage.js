/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')
const time = require('@xmpp/time')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function SendPersonalMediaMessage(xmpp, to, message_body, media_link) {
  const message = (
    <message type='chat' to={to}>
      <body>{message_body}</body>
      <link>{media_link}</link>
      <id>{GenerateUUID(to, message_body)}</id>
    </message>
  )
  xmpp.send(message)
}

export default SendPersonalMediaMessage
