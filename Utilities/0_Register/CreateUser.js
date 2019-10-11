/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

function CreateUser(xmpp, username, password) {
  const {iqCaller} = xmpp
  const iq = (
    <iq type='set' id='reg'>
      <query xmlns='jabber:iq:register'>
        <username>{username}</username>
        <password>{password}</password>
      </query>
    </iq>
  )
  const response = iqCaller.request(iq)
  console.log(response)
}

export default CreateUser
