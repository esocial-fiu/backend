'use strict';

export default
{
    Query:
     {
          //fetch a category Option
          categoryOption:(parent,args,{db},info)=>
          {
             return db.CategoryOption.find({
             where :{id:args.id} });
          },//End fetch a categoryOption
            
         //fetch category Options
         categoryOptions:(parent,args,{db},info)=>
         {
            return db.CategoryOption.findAll({
            where :{categoryId:args.categoryId} });
         }//End fetch categoryOptions
           
      },//End query

       //CategoryOptions Category
       CategoryOption:{
         category:(categoryOption,args,{db},info)=>{
           return db.Category.find({
              where:{
                 id:categoryOption.categoryId
              }
           })
         }
         
      }//CategoryOptions Category

}//end of file