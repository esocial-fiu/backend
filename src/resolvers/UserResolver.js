'use strict';
require('dotenv').config();
export default
{
   
    Query:
     {  
         //fetch all users
         users:(parent,args,{db},info)=>
         {
            return db.User.findAll();
         },//End fetch all users
            
         //fetch a user
       user:(parent,args,{db},info)=>
         {
            return db.User.find({
            where :{id:args.id} });
           
         },//End fetch a user

        

          //fetch Options for a user
         userOptions:(parent, args, {db}, info)=>{
            const where = args.userId ? {id:args.userId} : {};
            return db.CategoryOption.findAll({
               include :[
                  {
                     model:db.User,
                     where
                  }
               ]
            });
         },//End fetch userOptions

         //fetch a specific user
         me:(parent, args, {db}, info)=>{
            return db.User.findOne({
               where :{id:1} });

         }//End fetch a specific user
      },//End query

      Mutation:{
         
         //Login an existing uer
         userLogin:(parent,args,{db},info)=>
         {
            return db.User.find({
               where:{
                  email:args.username,
                  password:args.password
               }      
               }
         
            )},//End user Login

          userRegister:(parent,args,{db},info)=>{
              db.UserOption.create({
               

              userId:args.userId,
              categoryOptionId:args.categoryOptionId,
              createAt: new Date(),
              updatedAt: new Date() 
            });
            return db.User.find({
               where:{
                  id:args.userId
               }
            });
         },//End userRegister
         
         userUpdate:(parent,args,{db},info)=>{
            const newData =
            {  
                   userId: args.userId,
               categoryOptionId: args.newOptionId,
                 createAt: new Date(),
                updatedAt: new Date() 
             };
             
             db.UserOption.update(newData,
                {
                   where:
                    { 
                        userId: args.userId,
                        categoryOptionId:args.oldOptionId
                     }
               });
               return db.User.find({
                  where:{
                     id:args.userId
                  }
               });
            
             
 
         }//End of Update User

      },//End of mutation

      //User category Options
      User:{
         categoryOptions:(user,args,{db},info)=>{
            const where = user.id ? {id:user.id} : {};
            return db.CategoryOption.findAll({
               include :[
                  {
                     model:db.User,
                     where
                  }
               ]
            });
         }
         
      }//End of User Category Options

}//end of file