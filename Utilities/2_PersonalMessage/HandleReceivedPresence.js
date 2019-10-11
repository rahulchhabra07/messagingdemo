import React from 'react';

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import RequestGroupSettingForm from '../3_GroupChat/RequestGroupSettingForm'

function HandleReceivedPresence(xmpp, presence) {
    console.log("Processing Presence")
    try {
      // Create Group Response
      const from = presence.attrs.from
      const jid = from.split("/")[0]
      const affiliation = presence.children[0].children[0].attrs.affiliation
      const code = presence.children[0].children[2].attrs.code
      if (affiliation === 'owner' && code === '201') {
         RequestGroupSettingForm(xmpp, jid)
      }
    } catch (err) {
      console.log("No code", err)
    }
}

export default HandleReceivedPresence
