import dotenv from 'dotenv'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

dotenv.config()

console.log('Executou aqui')

console.log(process.env)

const firebaseConfig = {
    apiKey: "AIzaSyCrYU0ayRulQyeHxg8i8_inJijAMXwg7q0",
    authDomain: "helloworld-a0990.firebaseapp.com",
    projectId: "helloworld-a0990",
    storageBucket: "helloworld-a0990.appspot.com",
    messagingSenderId: "168868152374",
    appId: "1:168868152374:web:83777473458bf2fb198497",
    measurementId: "G-M3XEM6T2SH"
  };

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
