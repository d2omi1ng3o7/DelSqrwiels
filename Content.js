function delNavigation(){
    document.getElementById("mw-navigation").style.display = 'none';
    document.getElementById("footer").style.display = 'none';
    document.getElementById("mw-head-base").style.display = 'none';
    document.getElementById("mw-page-base").style.display = 'none';
    document.getElementById("content").style.border = '0';
    document.getElementById("content").style.margin = '0';
    
}


function delReference(){
    const references = document.getElementsByClassName("reference");

    for (let i = 0; i < references.length; i++){
        references[i].style.display = 'none';
    }

    const references2 = document.getElementsByClassName("do-not-make-smaller refsection");

    for (let i = 0; i < references2.length; i++){
        references2[i].style.display = 'none';
    }
}

function delTable(){
    
}

function setFont(){
    const title = document.getElementsByTagName("h1")
    
    for (let i = 0; i < title.length; i++){
        title[i].style.fontFamily = "sans-serif";
    }

    const title2 = document.getElementsByTagName("h2")
    
    for (let i = 0; i < title2.length; i++){
        title2[i].style.fontFamily = "sans-serif";
    }
}

delNavigation()
delReference()
delTable()
setFont()