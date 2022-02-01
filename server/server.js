const express=require('express');
const graphqlHTTP=require('express-graphql');
const schema=require('./schema/schema')
const mongoose=require('mongoose')
const cors=require('cors');

const app=express();

app.use(cors());

mongoose.connect('mongodb+srv://Udaygupta12:Udaygupta123@cluster0.2nekh.mongodb.net/graphQL_book_details?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Database Connected');
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000,()=>{
    console.log('Now Listening the Request')
})