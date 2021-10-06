const { generateKeyPairSync } = require('crypto')
const fs = require('fs')

const {
  publicKey,
  privateKey,
} = generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  }
});

fs.writeFileSync('./project.pub', publicKey)
fs.writeFileSync('./project', privateKey)

console.log('successfully generated public and private key')
