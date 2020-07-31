function refresh()
{   //color generator
    function generator()
        {return Math.floor(Math.random()*255);}

    //to display on webpage    
      
    let r=generator()
    let g=generator()
    let b=generator()

    document.getElementById("r").innerHTML = r;
    document.getElementById("g").innerHTML = g;
    document.getElementById("b").innerHTML = b;

    //for random color for each square

    for(let i = 1 ; i<=6 ; i++)
    {
        let q = generator()
        let w = generator()
        let e = generator()
        
        document.getElementById(`sq${i}`).style.backgroundColor = `rgb(${q}, ${w}, ${e})`
    }

    
}
refresh()