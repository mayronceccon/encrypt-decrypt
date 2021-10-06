const crypto = require('crypto')
const path = require('path')
const fs = require('fs')

module.exports = (toEncrypt, publicKeyPath) => {
  const absolutePath = path.resolve(publicKeyPath)
  const publicKey = fs.readFileSync(absolutePath, 'utf8')
  const buffer = Buffer.from(JSON.stringify(toEncrypt), 'utf8')
  const encrypted = crypto.publicEncrypt(publicKey, buffer)
  return encrypted.toString('base64')
}
