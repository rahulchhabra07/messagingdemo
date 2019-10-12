import React from 'react';

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import SetNewGroupSettings from '../3_GroupChat/SetNewGroupSettings'

function HandleReceivedIQ(xmpp, iq) {
    console.log("Processing IQ")
    try {
      // Create Group Response
      const type = iq.attrs.type
      const instructions = iq.children[0].children[0].name
      const jid = iq.attrs.from
      if (type === 'result' && instructions === 'instructions') {
          SetNewGroupSettings(xmpp, jid)
      }
    } catch (err) {
      console.log("No code", err)
    }
}

export default HandleReceivedIQ
