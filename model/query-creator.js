let query = (data)=>{
   data.datefrom=new Date(data.datefrom).toISOString() 
    data.dateto = new Date(data.dateto).toISOString()
  
   data.date={$gte: data.datefrom,$lt: data.dateto}
   // data.date={$gte: data.datefrom}
   delete data.datefrom;
   delete data.dateto;
   // console.log(data)
   return(data)
}

// function datetoarray(date){
    
//    let arraydate= date.split("-")
//    // let a = arraydata[0]
//    // arraydata[0]= arraydate[2]
//    // arraydata[2]= a
//    return(arraydate)
// }


module.exports= query;