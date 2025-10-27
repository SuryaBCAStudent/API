let button= document.querySelector("button");
button.addEventListener("click",async ()=> {
    let link= await getdogimg();
    let img= document.querySelector("#pic");
    img.setAttribute("src", link);

    
}
);

let url= "https://dog.ceo/api/breeds/image/random";

async function getdogimg(){
  try{  let res= await axios.get(url);
    return res.data.message;
    
  }  catch(err){
    console.log("Error:", err);
  }
    
}

