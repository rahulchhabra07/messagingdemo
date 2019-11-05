/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import ReturnEmptyObject from '../ReturnEmptyObject'
import SendMessage from '../4_MessageActions/SendMessage'

function SendPersonalMediaMessage(xmpp, to, message_body, media_link) {
  const basic = ReturnEmptyObject('basic')
  basic.to = to
  basic.message_body = message_body
  const media = ReturnEmptyObject('media')
  media.isMedia = true
  media.media_link = media_link
  const reply = ReturnEmptyObject('reply')
  const forwarded = ReturnEmptyObject('forwarded')
  const like = ReturnEmptyObject('like')
  const receipt = ReturnEmptyObject('receipt')
  SendMessage(xmpp, basic, media, reply, forwarded, like, receipt)
}

export default SendPersonalMediaMessage
