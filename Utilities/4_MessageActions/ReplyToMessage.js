/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import ReturnEmptyObject from '../ReturnEmptyObject'
import SendMessage from '../4_MessageActions/SendMessage'

function ReplyToMessage(xmpp, to, message_body, reply_to_message_id) {
  const basic = ReturnEmptyObject('basic')
  basic.to = to
  basic.message_body = message_body
  const media = ReturnEmptyObject('media')
  const reply = ReturnEmptyObject('reply')
  reply.isReply = true
  reply.replyToMessageID = reply_to_message_id
  const forwarded = ReturnEmptyObject('forwarded')
  const like = ReturnEmptyObject('like')
  const receipt = ReturnEmptyObject('receipt')
  const typing = ReturnEmptyObject('typing')
  SendMessage(xmpp, basic, media, reply, forwarded, like, receipt, typing)
}

export default ReplyToMessage
