function refresh()
{
    function generator()
        {return Math.floor(Math.random()*255);}
      
    let r=generator()
    let g=generator()
    let b=generator()

    document.getElementById("r").innerHTML = r;
    document.getElementById("g").innerHTML = g;
    document.getElementById("b").innerHTML = b;

    
}
refresh()