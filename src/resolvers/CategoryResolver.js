'use strict';

export default
{
    Query:
     {
         //fetch all categories
         categories:(parent,args,{db},info)=>
         {
            return db.Category.findAll();
         },//End fetch all categories
            
         //fetch a category
         category:(parent,args,{db},info)=>
         {
            return db.Category.find({
            where :{id:args.id} });
         }//End fetch a category
          
      },//End query

      Category:{

         categoryOptions:(Category,args,{db},info)=>
         {
            return db.CategoryOption.findAll({
               where: {
                  categoryId:Category.id
               }
            });
         }
      }//End Category

  

     

     
   
}//end of file