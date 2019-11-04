/** @jsx xml */

const {client, xml, jid} = require('@xmpp/client')
const time = require('@xmpp/time')

var base64 = require('base-64');
global.btoa = base64.encode;
global.atob = base64.decode;

import ReturnEmptyObject from '../ReturnEmptyObject'
import SendMessage from './SendMessage'

function SendMessageReadReceipt(xmpp, to, receipt_type, receipt_of_message_id) {
  const basic = ReturnEmptyObject('basic')
  basic.to = to
  const media = ReturnEmptyObject('media')
  const reply = ReturnEmptyObject('reply')
  const forwarded = ReturnEmptyObject('forwarded')
  const like = ReturnEmptyObject('like')
  const receipt = ReturnEmptyObject('receipt')
  receipt.isReceipt = true
  receipt.receipt_type = receipt_type
  receipt.receipt_timestamp = time.datetime()
  receipt.receiptOfMessageID = receipt_of_message_id
  SendMessage(xmpp, basic, media, reply, forwarded, like, receipt)
}

export default SendMessageReadReceipt
