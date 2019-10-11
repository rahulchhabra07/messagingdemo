import React from 'react';

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

function CreateClient(username, password) {
  const xmpp = client({
    service: 'wss://getassist.app:5280/websocket',
    domain: 'getassist.app',
    resource: 'example',
    username: username,
    password: password,
  })
  return xmpp
}

export default CreateClient
