function getElementByClassName(node,className){
    if(node.getElementByClassName){
        return node.getElementByClassName(className);
    }
    else{
        var results=new Array();
        var elems=node.getElementByTagName("*");
        for(var i=0;i<elems.length;++i){
            if(elems[i].className.indexOf(className)!=-1){
                results[results.length]=elems[i];                                                                                                                                                                                 
            }
        }
        return results;
    }
}


document.getElementByTagName("title").parentNode.removeChild(child);