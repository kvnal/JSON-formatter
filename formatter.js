
function format(){
    var inp=document.getElementById("input").value;
    var json=JSON.stringify(eval(inp));
    document.getElementById("output").value=json;
}

function copy(){
    var json= document.getElementById("output");
    json.select();
    return document.execCommand("copy");
}