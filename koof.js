
var follow =document.getElementsByClassName("_1GX96"); 
var procard =document.getElementsByClassName("_3Hwp6"); 
console.log(follow.length); 
console.log(procard.length); 


var follow =document.getElementsByClassName("_1GX96"); 
for(var i=0;i<follow.length;i++)

{ 
    if(follow[i].extContent = "+ Follow") 
    { 
        follow[i].click(); 
    
    } 
} 

var follow =document.getElementsByClassName("_1GX96"); 
for(var i=0;i<follow.length;i++) 
{ 
    if(follow[i].extContent = "+ Follow") 
    { 
        // follow[i].click(); 
        console.log(i);
        console.log(follow[i].extContent);
        console.log(follow[i].innerHTML);
    } 
} 

-<!-- -->Unfollow

var follow =document.getElementsByClassName("_1GX96"); 
for(var i=0;i<follow.length;i++) 
{ 
    if(follow[i].innerHTML != "-<!-- -->Unfollow") 
    { 
        // follow[i].click(); 
        console.log(i);
        console.log(follow[i].extContent);
        console.log(follow[i].innerHTML);
    } 
}

var follow =document.getElementsByClassName("_1GX96"); 
for(var i=0;i<follow.length;i++) 
{ 
    if(follow[i].extContent = "+ Follow") 
    { 
        console.log(follow[i].style.background) ;
        
    } 
}


// Working

var follow =document.getElementsByClassName("_1GX96"); 
var follow =document.getElementsByClassName("_3Hwp6"); 
for(var i=0;i<follow.length;i++) 
{ 
    
    if(follow[i].style.background != "lightgray none repeat scroll 0% 0%") 
    { 
        // console.log(follow[i].style.background) ;
        // console.log("NoColor");
        follow[i].click(); 
    } 
    
}

var follow =document.getElementsByClassName("_1GX96"); 
for(var i=0;i<follow.length;i++) 
{ 
    if(follow[i].innerHTML.includes("Un")) 
    { 
        console.log(follow[i].style.background) ;
        
    } 
    else
    console.log("NoColor");
    console.log(follow[i].style.background) ;
}


//final


var follow =document.getElementsByClassName("_1GX96"); 
var procard =document.getElementsByClassName("_3Hwp6"); 
var leng = follow.length;


for(var i=0;i<leng-50;i++) 
{ 
    var count = 1
    if(follow[0].style.background != "lightgray none repeat scroll 0% 0%") 
    { 
       
        follow[0].click(); 
        procard[0].remove();
        console.log(`followed and removed ${i+1} / ${leng}`);
    }
    
    else{
        procard[0].remove();
        console.log(`removed ${i+1} / ${leng}`);
    }
        
    
}