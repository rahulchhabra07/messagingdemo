/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

function RequestGroupMembersList(xmpp, group_jid) {
  const {iqCaller} = xmpp
  const iq = (
    <iq
        to={group_jid}
        type='get'>
      <query xmlns='http://jabber.org/protocol/disco#items'/>
    </iq>
  )
  const response = iqCaller.request(iq)
  console.log(response)
}

export default RequestGroupMembersList
