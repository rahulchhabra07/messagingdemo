/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import ReturnEmptyObject from '../ReturnEmptyObject'
import SendMessage from '../4_MessageActions/SendMessage'

function LikeMessage(xmpp, to, like_to_message_id, like_quantity = 1, like_value = 0) {
  const basic = ReturnEmptyObject('basic')
  basic.to = to
  const media = ReturnEmptyObject('media')
  const reply = ReturnEmptyObject('reply')
  const forwarded = ReturnEmptyObject('forwarded')
  const like = ReturnEmptyObject('like')
  like.isLike = true
  like.likeToMessageID = like_to_message_id
  like.like_quantity = like_quantity
  like.like_value = like.like_value
  const receipt = ReturnEmptyObject('receipt')
  SendMessage(xmpp, basic, media, reply, forwarded, like, receipt)
}

export default LikeMessage
