let box = []
let sqNumber = 6

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

    for(let i = 1 ; i<=sqNumber ; i++)
    {
        let q = generator()
        let w = generator()
        let e = generator()
        
        document.getElementById(`sq${i}`).style.backgroundColor = `rgb(${q}, ${w}, ${e})`
        box.push(i)
    }

    //generates a random number

    function number()
    {
       let rand =  Math.floor(Math.random() * sqNumber + 1)
       document.getElementById(`sq${rand}`).style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    number()
    
    


}
refresh()





$("#left").click(function()
{
    refresh()
})



document.getElementById("right1").onclick = function()
{ 
    sqNumber = 3
    for(let i = 4; i<=6 ;i++)
        {document.getElementById(`sq${i}`).style.display = 'none'}

    refresh()
}


document.getElementById("right2").onclick = function()
{ sqNumber = 6
    for(let i = 4; i<=6 ;i++)
    {document.getElementById(`sq${i}`).style.display = 'block'}
    refresh()
}


alert("wrong commit");

