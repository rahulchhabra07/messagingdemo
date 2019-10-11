/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function RequestGroupSettingForm(xmpp, jid) {
  console.log('Setting jid:', jid)
  console.log("SetNewGroupSettings")
  const {iqCaller} = xmpp
  const iq = (
    <iq
        to={jid}
        type='get'>
      <query xmlns='http://jabber.org/protocol/muc#owner'/>
    </iq>
  )
  const response = iqCaller.request(iq)
  console.log(response)
}

export default RequestGroupSettingForm
