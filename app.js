const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const mongoose= require('mongoose');
const {getExpenses, getExpenseById} = require('./controller/expense')
const {addExpense}= require('./controller/expense')
const {deleteExpense}= require('./controller/expense')
const {updateExpense}= require('./controller/expense')

// mongoose.connect('mongodb://localhost:27017/expense-tracker',
//  {useNewUrlParser: true});

//  const db= mongoose.connection;
//  db.on("error",console.error.bind(console,"connectionerror:"));
//  db.once("open",function(){
//     console.log("connected Successfully");
//  })
 mongoose.connect('mongodb://127.0.0.1:27017/expense-tracker')
 .then(() => console.log('Connected!'));


app.get('/api/v1/expenses/:id', getExpenseById);
app.get('/api/v1/expenses',getExpenses);
app.post('/api/v1/expenses',addExpense);
app.delete('/api/v1/expense/:id',deleteExpense);


// app.get('/',(req,res)=>{
//     res.send("Hello Exprress");
// })

// app.get('/welcome',(req,res)=>{
//     res.status(200).json({
//         message:"t worked!",
//         status: "success"
//     })
// })

app.get('/api/v1/health',(req,res)=>{
    res.status(200).json({
        message:"t worked!",
        status: "success"
    })
})
// const expenses=[
//     {id: 1, name:'Movie',amount:190,desc:'vaathi'},
//     {id: 2, name:'TV',amount:200,desc:'Oneplus'},
//     {id: 3, name:'Book',amount:200,desc:'Alchemist'},
//     {id: 4, name:'Phone',amount:200,desc:'iphone'},
//     {id: 5, name:'Laptop',amount:200,desc:'lenovo'}
// ]
// app.get('/api/v1/expenses',(req,res) =>{
//     res.status(200).json(expenses);
// })


// app.get('/api/v1/expense/:id',(req,res)=>{
//     let id= req.params.id;
//     for(let i=0;i<expenses.length;i++)
//     {
//         if(id==':'+expenses[i].id)
//         {
//             res.send(expenses[i]);
//             //console.log(req.params.id);
//         }
//     }
//     res.send('trial');
// })
// app.get('/api/v1/expense/:id',(req,res)=>{
//     let id= req.params.id;
//     for(let i=0;i<expenses.length;i++)
//     {
//         if(id==':'+expenses[i].id)
//         {
//             let expenseDetails ={
//                 id:id,
//                 name: expenses[i].name,
//                 amount: expenses[i].amount,
//                 desc: expenses[i].desc,
//                 paymentMode: expenses[i].paymentMode
//             }
//         }
//     }
// })

// app.post('/api/v1/expenses',(req,res)=>{
//     console.log(req);
//     let newExpense=req.body;
//     newExpense.id=expenses[expenses.length-1].id+1;
//     expenses.push(newExpense);
//     res.status(201).json(newExpense);
//    // res.send('created new expense')


// })

// app.delete('/api/v1/expenses/:id',(req,res)=>{
//     for(let i=0;i=expenses.length-1;i++) {
//         if(expenses[i].id == req.params.id) {
//             expenses.splice(i,1);
//         }
//         res.send('Deleted');
//     }
    
// })

// app.put('/api/v1/expense/:id',(req,res)=>{
//     console.log(req.body);
//     for(let i=0;i<expenses.length;i++){
//         if(expenses[i].id == req.params.id) {
//             if(req.body.amount){
//                 expenses[i].amount=req.body.amount;
//         }
//     }
// }
// })

// const expenseDetails= [
//     {id:1, paymentMode:'UPI'},
//     {id:2, paymentMode:'Cash'},
//     {id:3, paymentMode:'Net Banking'},
// ]


app.listen(3000,()=>{
    console.log("Server is running");
})


// C - Created -Post
// R - Read / Retrive -get
// U - Update - PUT
// D - Delete -- Delete