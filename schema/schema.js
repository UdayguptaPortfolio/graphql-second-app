const graphql=require('graphql')
const _ =require('lodash');
const {GraphQLObjectType,GraphQLString,GraphQLID,GraphQLSchema }=graphql;

var movies=[
    {name:'Avengers',genre:'Action',id:'1'},
    {name:'After',genre:'Romance',id:'2'},
    {name:'Anabella',genre:'Horror',id:'3'}
]
const MovieType=new GraphQLObjectType({
    name:'Movie',
    fields:( )=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
});

const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        movie:{
            type:MovieType,
            args:{
                id:{type:GraphQLID}},
                resolve(parent,args){
                    //console.log(typeof(args.id))
                   return _.find(movies,{id:args.id});
            }
        }
    }
})

module.exports=new GraphQLSchema({
    query:RootQuery,
});