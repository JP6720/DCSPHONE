import 'es6-shim'
import 'es7-shim'

import MD5 from 'crypto-js/md5'
import JsSIP from 'jssip/lib/JsSIP'

window.JsSIP = window.JsSIP || JsSIP

window.CryptoJS = { MD5 }
