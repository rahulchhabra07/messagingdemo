/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')
const time = require('@xmpp/time')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import ReturnEmptyObject from '../ReturnEmptyObject'
import SendMessage from './SendMessage'

function SendMessageReceipt(xmpp, to, typing_status) {
  const basic = ReturnEmptyObject('basic')
  basic.to = to
  const media = ReturnEmptyObject('media')
  const reply = ReturnEmptyObject('reply')
  const forwarded = ReturnEmptyObject('forwarded')
  const like = ReturnEmptyObject('like')
  const receipt = ReturnEmptyObject('receipt')
  const typing = ReturnEmptyObject('typing')
  typing.isTyping = typing_status
  SendMessage(xmpp, basic, media, reply, forwarded, like, receipt, typing)
}

export default SendMessageReceipt
