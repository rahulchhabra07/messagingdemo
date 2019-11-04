// give a module, and this will intialize an empty objects

function ReturnEmptyObject(module_name) {
  switch (module_name) {
    case 'basic':
      return {
        id: '-1',
        from: '-1',
        to: '-1',
        type: 'chat',
        message_body: '-1',
        stamp: '-1',
      }
    case 'media':
      return {
        isMedia: false,
        media_link: '-1',
        }
    case 'reply':
      return {
        isReply: false,
        replyToMessageID: '-1',
      }
    case 'forwarded':
      return {
        isForwarded: false,
      }
    case 'like':
      return {
        isLike: false,
        likeToMessageID: '-1',
        like_quantity: '-1',
        like_value: '-1',
      }
    case 'receipt':
      return {
        isReceipt: false,
        receipt_type: 'None',
        receipt_timestamp: "-1",
        receiptOfMessageID: '-1'
      }
  }
}

export default ReturnEmptyObject
