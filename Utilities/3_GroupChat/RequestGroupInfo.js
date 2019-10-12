/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

function RequestGroupInfo(xmpp, group_name) {
  const {iqCaller} = xmpp
  const iq = (
    <iq from='hag66@shakespeare.lit/pda'
      id='ik3vs715'
      to={group_name + '@bitspilani.getassist.app'}
      type='get'>
      <query xmlns='http://jabber.org/protocol/disco#info'/>
    </iq>
  )
  const response = iqCaller.request(iq)
  console.log(response)
}

export default RequestGroupInfo
