/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

function SendMessageReceivedReceipt(xmpp, message_id, to, stamp) {
  const {iqCaller} = xmpp
  const iq = (
    <iq type='set' id='receipt' to={to}>
      <query xmlns='urn:xmpp:receipts'>
        <message_id>{message_id}</message_id>
        <stamp>{stamp}</stamp>
      </query>
    </iq>
  )
  const response = iqCaller.request(iq)
  // console.log(response)
}

export default SendMessageReceivedReceipt
