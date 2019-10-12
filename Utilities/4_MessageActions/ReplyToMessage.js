/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function ReplyToMessage(xmpp, to, message_body, message_id) {
  const message = (
    <message
        id={GenerateUUID(to, message_body)}
        type='chat'
        to={to}>
      <body>{message_body}</body>
      <replyTo>{message_id}</replyTo>
    </message>
  )
  xmpp.send(message)
}

export default ReplyToMessage
