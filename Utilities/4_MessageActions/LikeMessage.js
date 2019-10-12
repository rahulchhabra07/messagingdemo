/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function LikeMessage(xmpp, to, message_id) {
  const message = (
    <message
        type='chat'
        to={to}>
      <like>
        <message_id>{message_id}</message_id>
        <quantity>1</quantity>
        <type>0</type>
      </like>
    </message>
  )
  xmpp.send(message)
}

export default LikeMessage
