const uuidv5 = require('uuid/v5');

function GenerateUUID(to, message_body) {
  const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341'
  const ms = new Date().getTime()
  uniquestring = ms.toString() + to + message_body + Math.floor(Math.random() * 1000000)
  const uuid = uuidv5(uniquestring, MY_NAMESPACE)
  return uuid
}

export default GenerateUUID
