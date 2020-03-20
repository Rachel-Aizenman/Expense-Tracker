const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transation')


router.get('/transactions', async function (req, res) {
    const data = await Transaction.find({})
    const newData = data.sort({date: -1})
    res.send(newData)
})

router.post('/transaction', async function (req, res) {
    let body = req.body
    console.log(body)
    const newTransaction = new Transaction(body)
    await newTransaction.save()
    res.end()
})

router.delete('/transaction', async function (req, res) {
    const id = req.body.name
    await Transaction.findByIdAndDelete({ _id: id })
    res.end()
})



module.exports = router

