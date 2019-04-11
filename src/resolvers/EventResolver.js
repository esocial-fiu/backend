'use strict';
require('dotenv').config();

export default
{
   

    Query:
     {  
         //fetch all events
         events:(parent,args,{db},info)=>
         {
            return db.Event.findAll();
         },//End fetch all events
            
         //fetch an event
         event:(parent,args,{db},info)=>
         {
            return db.Event.find({
            where :{id:args.id} }); 
         },//End fetch an event
      },//End of Queries
        

      Mutation:{
          createEvent:(parent,args,{db},info)=>{
              return db.Event.create({
                           title: args.title,
                     description: args.description,
                        location: args.location,
                            date: args.date,
                          userId: args.createdBy,
               maxAmountOfPeople: args.maxAmountOfPeople,
                        createAt: new Date(),
                       updatedAt: new Date() 
            });
         },//End of create event

         cancelEvent:(parent, args, {db},info)=>{
            return db.Event.destroy({
               where:{
                  id: args.id
               }
            });
         },//End Cancel Event

         eventRSVP:(parent,args,{db},info)=>{
            db.EventAttendee.create({
             
            userId:args.userId,
            eventId:args.eventId,
            createAt: new Date(),
            updatedAt: new Date() 
          });
          return db.Event.find({
             where:{
                id:args.eventId
             }
          });
       },//End of register to  event
    
       eventUnRSVP:(parent, args, {db},info)=>{
         db.EventAttendee.destroy({
            where:{
               userId:args.userId,
               eventId:args.eventId
            }
         });
         return db.Event.find({
            where:{
               id:args.eventId
            }
         });

      },//End Cancel Event Registration
         
      },//End of mutation

      //Event attendees
      Event:{
        attendees:(event,args,{db},info)=>{
            const where = event.id ? {id:event.id} : {};
            return db.User.findAll({
               include :[
                  {
                     model:db.Event,
                     where
                  }
               ]
            });
         },//End of attendees
         createdBy:(event,args,{db},info)=>{
            return db.User.find({
               where:{
                  id:event.userId
               }
            })
          }//End of createdBy
         
      }//End of Event attendees

}//End of file