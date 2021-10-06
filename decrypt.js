const crypto = require('crypto')
const path = require('path')
const fs = require('fs')

module.exports = (toDecrypt, privateKeyPath) => {
  const absolutePath = path.resolve(privateKeyPath)
  const privateKey = fs.readFileSync(absolutePath, 'utf8')
  const buffer = Buffer.from(toDecrypt, 'base64')
  const decrypted = crypto.privateDecrypt(
    privateKey.toString(),
    buffer,
  )
  return JSON.parse(decrypted.toString('utf8'))
}
