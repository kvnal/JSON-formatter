

const btn = document.querySelector("#btn")
function format(){
    var inp=document.getElementById("input").value.trim();
    console.log(typeof inp);
    if(inp==""){
        return alert("no input given")
    }
    try{
        var json=JSON.stringify(inp);
        console.log(json);
        console.log(typeof json);
    }
    catch(err){
        //  alert("Wrong type")
        console.log(err);
        //  return window.location.reload()
        
    }

    document.getElementById("output").value=json;
    copy();
    btn.innerHTML="copied!" 
    btn.classList.remove('bg-blue-500')
    btn.classList.add('bg-green-400')
    setTimeout(`
    btn.classList.remove('bg-green-400')
    btn.classList.add('bg-blue-500')
    btn.innerHTML="Format" 
    `,2000)
    
}

function copy(){
    var json= document.getElementById("output");
    json.select();
    // return 
    document.execCommand("copy");
    console.log("copied");
}