function delSidePanel(){
    
}

function delNav(){
    
}

function delFooter(){
    
}

function delReference(){
    const references = document.getElementsByClassName("reference");

    for (let i = 0; i < references.length; i++){
        references[i].style.display = 'none';
    }
}

function delTable(){
    
}

function setFont(){
    document.getElementsByTagName("body").style.fontfamily = "sans-serif";
}

document.getElementById("option-6").addEventListener("click", setFont);
