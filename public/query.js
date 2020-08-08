// const ph = document.getElementsByClassName('custom-control-input');
// document.addEventListener("click",function(e){
//    if ( e.target.classList.contains("custom-control-input")){
//         alert("u just clicked the required ")
//     }
// })
function itemTemplate(item) {
    return ` <div class="col-sm-3 " style="border: 1px solid;">
    <span class="badge badge-info col-sm-6">${item}</span>
  
      <div class="custom-control custom-switch col-sm-6"style="border: 1px solid;" >
        <input type="checkbox" class="custom-control-input" id="${item}value"  checked="">
        <label class="custom-control-label" onclick="change(this)"for="chlorine">OOR</label>
      </div>

  </div>`
  }
let addelement =document.getElementById("element")
let buttonaddelement =document.getElementById("addelement")

buttonaddelement.addEventListener("click",function(e){
   

    document.getElementById("tags").insertAdjacentHTML("beforeend", itemTemplate( addelement.value))
})

let submit_from =document.getElementsByClassName("btn btn-success")
let blockname =document.getElementById("blockname")
let datefrom =document.getElementById("datefrom")
let dateto =document.getElementById("dateto")


let query_result={};

submit_from[0].addEventListener("click",function(e){
  console.log("submit")

  let elements=document.querySelectorAll(".custom-control-input")
    query_result={
      blockname:blockname.value,
       dateto:dateto.value,
      datefrom:datefrom.value
    }
    elements.forEach(el => {
      console.log(query_result)
        const qw= "ko"
       query_result[el.id] = el.checked;
      //  console.log(query_result)
      
    });
    
    console.log("hey from click")
     e.preventDefault();
    
     
      const options= {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              
            },
            body:JSON.stringify(query_result)
        }
        fetch("/query",options).then(()=>{
          console.log("completed ftch 1")
          window.location.replace("http://localhost:3000/table");
        })
        console.log("completed ftch ")
        
        




    })
          