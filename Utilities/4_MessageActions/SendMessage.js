/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')
const time = require('@xmpp/time')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import GenerateUUID from '../GenerateUUID'

function SendPersonalTextMessage(xmpp, basic, media, reply, forwarded, like, receipt) {
  const stamp = time.datetime()
  const my_jid = xmpp.jid._local + '@' + xmpp.jid._domain + '/' + xmpp.jid._resource
  const message = (
    <message
        id={GenerateUUID(basic.to, basic.message_body)}
        from={my_jid}
        to={basic.to}
        type={basic.type}>
      <body>{basic.message_body}</body>
      <timestamp>{stamp}</timestamp>
      <media>
        <isMedia>{media.isMedia}</isMedia>
        <media_link>{media.media_link}</media_link>
      </media>
      <reply>
        <isReply>{reply.isReply}</isReply>
        <replyToMessageID>{reply.replyToMessageID}</replyToMessageID>
      </reply>
      <forwarded>
        <isForwarded>{forwarded.isForwarded}</isForwarded>
      </forwarded>
      <like>
        <isLike>{like.isLike}</isLike>
        <likeToMessageID>{like.likeToMessageID}</likeToMessageID>
        <like_quantity>{like.like_quantity}</like_quantity>
        <like_value>{like.like_value}</like_value>
      </like>
      <receipt>
        <isReceipt>{receipt.isReceipt}</isReceipt>
        <receipt_type>{receipt.receipt_type}</receipt_type>
        <receipt_timestamp>{receipt.receipt_timestamp}</receipt_timestamp>
      </receipt>
    </message>
  )
  xmpp.send(message)
}

export default SendPersonalTextMessage
