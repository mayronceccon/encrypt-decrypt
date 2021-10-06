const encrypt = require('./encrypt.js')
const decrypt = require('./decrypt.js')

const publicKeyPath = 'project.pub'
const privateKeyPath = 'project'

const enc = encrypt('raw text', publicKeyPath)
console.log('enc', enc)

const dec = decrypt(enc, privateKeyPath)
console.log('dec', dec)
