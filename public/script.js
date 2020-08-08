var colieformvalue=false,
eolievalue=false,        
phvalue=false,     
turbidityvalue=false,     
tdsvalue=false,       
chloridevalue=false,     
hardnessvalue=false,       
ironvalue=false,       
nitratevalue=false,        
sulphatevalue=false,        
floridevalue=false,       
arsenicvalue=false,       
alkinityvalue=false,       
leftoverchloridevalue=false,
eolievalue=false,
colieformvalue= false ;

   
   
   let a =document.getElementById("blockname")
    a.addEventListener("change",function() {
        if (a.value=="5"){
            // alert("hey")
            console.log(a.children)
            // console.log(a.childNodes)
            let prom= prompt("Enter the field you want to add")
            if (prom){
                let el = `<option>${prom}</option>`
                a.insertAdjacentHTML("afterbegin",el)
            }

        }

                
})

     

const ph = document.getElementById('ph');
const turbidity = document.getElementById('turbidity');
const tds = document.getElementById('tds');
const chloride = document.getElementById('chloride');
const hardness = document.getElementById('hardness');
const iron = document.getElementById('iron');
const nitrate = document.getElementById('nitrate');
const sulphate = document.getElementById('sulphate');
const floride = document.getElementById('floride');
const arsenic = document.getElementById('arsenic');
const alkinity = document.getElementById('alkinity');
const leftoverchloride = document.getElementById('leftoverchloride')


const blockname= document.getElementById('blockname');
const panchayatname= document.getElementById('panchayatname');
const villagename= document.getElementById('villagename');
const habitationname= document.getElementById('habitationname');
const locationname= document.getElementById('locationname');
const date= document.getElementById('date');
const colieform= document.getElementById('colieform');
const eolie= document.getElementById('eolie');

    



ph.addEventListener('input', checkph);
turbidity.addEventListener('input', checkturbidity);
tds.addEventListener('input', checktds);
chloride.addEventListener('input', checkchloride);
hardness.addEventListener('input', checkhardness);
iron.addEventListener('input', checkiron);
nitrate.addEventListener('input', checknitrate);
sulphate.addEventListener('input', checksulphate);
floride.addEventListener('input', checkfloride);
arsenic.addEventListener('input', checkarsenic);
leftoverchloride.addEventListener('input', checkleftoverchloride);
alkinity.addEventListener('input', checkalkinity);
colieform.addEventListener('input', checkcolieform);
eolie.addEventListener('input', checkeolie);
function checkph(){
    let val=Number( ph.value)
    // console.log(val)
    if (val>=6.5&&val<=8.5)//correct
    {   console.log("ph worked")
        phvalue=true
        // console.log("ph working ")
        correct(ph);
    }
    else{phvalue=false
        danger(ph);
    }
}

function checkarsenic(){
    let val= Number(arsenic.value)
    if (val>=0&&val<=0.01)//correct
    {   arsenicvalue=true
        correct(arsenic)
    }
    else{arsenicvalue=false
        danger(arsenic);
    }
}

function checkalkinity(){
    let val= Number(alkinity.value)
    if (val>=200&&val<=600)//correct
    {   alkinityvalue= true
        correct(alkinity)
    }
    else{
        alkinityvalue= false
        danger(alkinity);
    }
}

function checkleftoverchloride(){
    let val= Number(leftoverchloride.value)
    if (val>=0.2&&val<=1)//correct
    {leftoverchloridevalue= true
        correct(leftoverchloride)
    }
    else{leftoverchloridevalue= false
        danger(leftoverchloride);
    }
}

function checkturbidity(){
    let val=Number( turbidity.value)
    if (val>=1&&val<=5)//correct
    {turbidityvalue= true
        correct(turbidity)
    }
    else{turbidityvalue= false
        danger(turbidity);
    }
}

function checktds(){
    let val= Number(tds.value)
    if (val>=500&&val<=2000)//correct
    {tdsvalue= true
        correct(tds)
    }
    else{tdsvalue= false
        danger(tds);
    }
}

function checkhardness(){
    let val= Number(hardness.value)
    if (val>=200&&val<=600)//correct
    {hardnessvalue= true
        correct(hardness)
    }
    else{hardnessvalue= false
        danger(hardness);
    }
}

function checkchloride(){
    let val=Number( chloride.value)
    if (val>=250&&val<=1000)//correct
    {chloridevalue= true
        correct(chloride)
    }
    else{chloridevalue= false
        danger(chloride);
    }
}

function checknitrate(){
    let val= Number(nitrate.value)
    if (val>=0.1&&val<=1)//correct
    {nitratevalue= true
        correct(nitrate)
    }
    else{nitratevalue= false
        danger(nitrate);
    }
}

function checkiron(){
    let val=Number( iron.value)
    if (val>=0.1&&val<=1)//correct
    {ironvalue= true
        correct(iron)
    }
    else{ironvalue= false
        danger(iron);
    }
}

function checksulphate(){
    let val= Number(sulphate.value)
    if (val>=200&&val<=400)//correct
    {sulphatevalue= true
        correct(sulphate)
    }
    else{sulphatevalue= false
        danger(sulphate);
    }
}

function checkfloride(){
    let val= Number(floride.value)
    // console.log(val)
    if (val>=1.0&&val<1.5)//correct
    {   floridevalue= true
        correct(floride)
    }
    else{
        floridevalue= false
        danger(floride);
    }
}
function checkcolieform(){
    let val= Number(colieform.value)
    // console.log(val)
    if (val==0)//correct
    {   colieformvalue= true
        correct(colieform)
    }
    else{
        colieformvalue= false
        danger(colieform);
    }
}
function checkeolie(){
    let val= Number(eolie.value)
    // console.log(val)
    if (val==0)//correct
    {   eolievalue= true
        correct(eolie)
    }
    else{
        eolievalue= false
        danger(eolie);
    }
}

function correct(b) {b.className="form-control is-valid"}
function danger(b) {b.className="form-control is-invalid"}

console.log("came til here ")

let submit_from =document.getElementById("formset")
submit_from.addEventListener("submit",function(e){
    // console.log("hey")
     e.preventDefault();
    var testing_result={
        blockname:blockname.value,
        panchayatname:panchayatname.value,
        villagename:villagename.value,
        habitationname:habitationname.value,
        locationname:locationname.value,
        date:new Date(date.value).toISOString(),
        ph:ph.value,
        turbidity:turbidity.value,
        tds:tds.value,
        chloride:chloride.value,
        hardness:hardness.value,
        iron:iron.value,
        nitrate:nitrate.value,
        sulphate:sulphate.value,
        floride:floride.value,
        arsenic:arsenic.value,
        alkinity:alkinity.value,
        leftoverchloride:leftoverchloride.value,
        colieform:colieform.value,
        eolie:eolie.value,
        phvalue:phvalue,
       turbidityvalue:turbidityvalue,
       tdsvalue:tdsvalue,
       chloridevalue:chloridevalue,
       hardnessvalue:hardnessvalue,
       ironvalue:ironvalue,
        nitratevalue:nitratevalue,
        sulphatevalue:sulphatevalue,
        floridevalue:floridevalue,
       arsenicvalue:arsenicvalue,
       alkinityvalue:alkinityvalue,
       leftoverchloridevalue:leftoverchloridevalue,
       colieformvalue:colieformvalue,
       eolievalue:eolievalue,

    }    
      
      const options= {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',              
            },
            body:JSON.stringify(testing_result)
        }
        fetch("/api",options)
        // .then((bc)=>
        //              {console.log(bc);console.log("yo yo ") })
        // .catch((err)=>{console.log(err);})
        .then(response => response.json())
        .then(data => console.log(JSON.parse( data)))
        .catch(e=>console.log(e));
    })
          
       
        
  
  
  
   