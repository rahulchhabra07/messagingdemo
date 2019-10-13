import React from 'react';

const {client, xml, jid} = require('@xmpp/client')
const time = require('@xmpp/time')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import SendMessageReceivedReceipt from '../4_MessageActions/SendMessageReceivedReceipt'
import SendMessageReadReceipt from '../4_MessageActions/SendMessageReadReceipt'

/*
<message
    id={GenerateUUID(to, message_body)}
    from={my_jid}
    to={to}
    type={type}>
  <body>{message_body}</body>
  <timestamp>{stamp}</timestamp>
  <media>
    <isMedia>{isMedia}</isMedia>
    <media_link>{media_link}</media_link>
  </media>
  <reply>
    <isReply>{isReply}</isReply>
    <replyToMessageID>{replyToMessageID}</replyToMessageID>
  </reply>
  <forwarded>
    <isForwarded>{isForwarded}</isForwarded>
  </forwarded>
  <like>
    <isLike>{isLike}</isLike>
    <likeToMessageID>{likeToMessageID}</likeToMessageID>
    <like_quantity>{like_quantity}</like_quantity>
    <like_value>{like_value}</like_value>
  </like>
  <receipt>
    <isReceipt>{isReceipt}</isReceipt>
    <receipt_type>{receipt_type}</receipt_type>
    <receipt_timestamp>{receipt_timestamp}</receipt_timestamp>
  </receipt>
</message>
*/

function ProcessMessageObject(message) {
    console.log("Processing Message")
    console.log(message)
    const id = message.attrs.id
    const from = message.attrs.from
    const to = message.attrs.to
    const type = message.attrs.type
    const message_body = message.getChild("body").children[0]
    const stamp = message.getChild("timestamp").children[0]
    const isMedia = message.getChild("media").getChild("isMedia").children[0]
    const media_link = message.getChild("media").getChild("media_link").children[0]
    const isReply = message.getChild("reply").getChild("isReply").children[0]
    const replyToMessageID = message.getChild("reply").getChild("replyToMessageID").children[0]
    const isForwarded = message.getChild("forwarded").getChild("isForwarded").children[0]
    const isLike = message.getChild("like").getChild("isLike").children[0]
    const likeToMessageID = message.getChild("like").getChild("likeToMessageID").children[0]
    const like_quantity = message.getChild("like").getChild("like_quantity").children[0]
    const like_value = message.getChild("like").getChild("like_value").children[0]
    const isReceipt = message.getChild("receipt").getChild("isReceipt").children[0]
    const receipt_type = message.getChild("receipt").getChild("receipt_type").children[0]
    const receipt_timestamp = message.getChild("receipt").getChild("receipt_timestamp").children[0]

    return {
      basic: {
        id,
        from,
        to,
        type,
        message_body,
        stamp,
      },
      media: {
        isMedia,
        media_link,
      },
      reply: {
        isReply,
        replyToMessageID,
      },
      forwarded: {
        isForwarded,
      },
      like: {
        isLike,
        likeToMessageID,
        like_quantity,
        like_value,
      },
      receipt: {
        isReceipt,
        receipt_type,
        receipt_timestamp
      }
    }
}

export default ProcessMessageObject
