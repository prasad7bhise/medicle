const db=require('./db')
const express=require('express')
const utils = require('./utils')
const cryptoJs = require('crypto-js')

const router=express.Router()

router.post('/login',(request,response)=>{
    const{email,password}=request.body
    const encryptedPassword=''+cryptoJs.MD5(password)
    const connection=db.connect()
    const statement=`select * from admin where email='${email}' and password='${encryptedPassword}'`
    connection.query(statement,(error,admin)=>{
        connection.end()
       
        if(admin.length==0){
            response.send(utils.createResult('Invalid Email or Password'))
        }
        else{
            const Admin=admin[0]
            const info={
                email:Admin['email'],
                password:Admin['password']
            }
            response.send(utils.createResult(null, info))//??
        }
    })
})