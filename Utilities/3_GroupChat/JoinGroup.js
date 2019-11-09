/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function JoinGroup(xmpp, group_name) {
  const {iqCaller} = xmpp
  username = xmpp.jid._local
  const iq = (
    <presence
      to={group_name + '@bitspilani.getassist.app/' + username}>
      <x xmlns='http://jabber.org/protocol/muc'/>
    </presence>
  )
  const response = iqCaller.request(iq)
  console.log(response)
}

export default JoinGroup
