/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function SendMessageReadReceipt(xmpp, message_id, to, stamp) {
  const message = (
    <message
        id={message_id}
        type='chat'
        to={to}>
      <receipt>
        <type>Read</type>
        <stamp>{stamp}</stamp>
        <message_id>{message_id}</message_id>
      </receipt>
    </message>
  )
  xmpp.send(message)
}

export default SendMessageReadReceipt
