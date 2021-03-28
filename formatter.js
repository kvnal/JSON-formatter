

const btn = document.querySelector("#btn")
function format(){
    var inp=document.getElementById("input").value.trim();
    console.log(typeof inp);
    if(inp==""){
        return alert("no input given")
    }
    try{
        var json=JSON.stringify(eval(`(${inp})`),null,'\t');
    }
    catch(err){
         alert("Wrong type")
         return window.location.reload()
        
    }

    document.getElementById("output").value=json;
    copy();
    btn.innerHTML="copied!" 
    btn.classList.remove('bg-blue-500')
    btn.classList.remove('hover:bg-blue-700')
    btn.classList.add('bg-green-400')
    setTimeout(`
    btn.classList.remove('bg-green-400')
    btn.classList.add('bg-blue-500')
    btn.classList.add('hover:bg-blue-700')
    btn.innerHTML="Format" 
    `,2000)
    
}

function copy(){
    var oup= document.getElementById("output");
    oup.select();
    return document.execCommand("copy");
}