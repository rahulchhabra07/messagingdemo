/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function SubscribeGroup(xmpp, group_name, nick) {
  const {iqCaller} = xmpp
  username = xmpp.jid._local
  const iq = (
    <iq to={group_name + '@bitspilani.getassist.app'}
        type='set'>
      <subscribe xmlns='urn:xmpp:mucsub:0' nick={username}>
        <event node='urn:xmpp:mucsub:nodes:presence' />
        <event node='urn:xmpp:mucsub:nodes:messages' />
        <event node='urn:xmpp:mucsub:nodes:affiliations' />
        <event node='urn:xmpp:mucsub:nodes:subscribers' />
        <event node='urn:xmpp:mucsub:nodes:config' />
        <event node='urn:xmpp:mucsub:nodes:subject' />
        <event node='urn:xmpp:mucsub:nodes:system' />
      </subscribe>
    </iq>
  )
  const response = iqCaller.request(iq)
  console.log(response)
}

export default SubscribeGroup
