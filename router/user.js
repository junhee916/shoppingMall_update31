const express = require('express')
const router = express.Router()

const {
    users_signup_user,
    users_login_user
} = require('../controller/user')

// sign up
router.post('/signup', users_signup_user)

// login
router.post('/login', users_login_user)

module.exports = router