let button= document.querySelector("button");
button.addEventListener("click",async ()=> {
    let facts= await getCatFact();
    let p= document.querySelector("p");
    p.innerText= facts;

    
}
);

let url= "https://catfact.ninja/fact";

async function getCatFact(){
  try{  let res= await axios.get(url);
    return res.data.fact;
    
  }  catch(err){
    console.log("Error:", err);
  }
    
}

