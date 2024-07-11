const fs = require("fs");

fs.readFile("texto.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("la data es " +data);
});

fs.writeFile('texto.txt',"hola".repeat(299),(err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("melo");
})