import React from 'react';

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

function LoginUser(xmpp) {
  xmpp.start().catch(console.error)
  xmpp.on('online', async (address) => {
    console.log('▶', 'online as', address.toString())
    await xmpp.send(xml('presence'))
  })
}

export default LoginUser
