
let sqNumber = 6

function refresh()
{   document.getElementById("navbar").style.backgroundColor = "#2C8E99"
    document.getElementById("left").innerHTML = "NEW COLOR"  
for(let w=1;w<=6;w++)
{    
      document.getElementById("sq"+w).style.visibility = "visible"
 }

    //color generator
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
    }

    //generates a random number and then set that to rgb color.

    function number()
    {
       let rand =  Math.floor(Math.random() * sqNumber + 1)
       document.getElementById(`sq${rand}`).style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    number()


    let colorOfThis = '';
    
    
    document.getElementById("sq1").onclick = function()
    {
        let box = 1;
        colorOfThis = document.getElementById("sq1").style.backgroundColor;     //color is stored in a variable
        answer(colorOfThis,box);                                                        //funtion is called
    }
    
    document.getElementById("sq2").onclick = function()
    {
        let box = 2;
        colorOfThis = document.getElementById("sq2").style.backgroundColor;
        answer(colorOfThis,box);
    }
    
        document.getElementById("sq3").onclick = function()
    {
        let box = 3;
        colorOfThis = document.getElementById("sq3").style.backgroundColor;
        answer(colorOfThis,box);
    }
    
    document.getElementById("sq4").onclick = function()
    {
        let box = 4;
        colorOfThis = document.getElementById("sq4").style.backgroundColor;
        answer(colorOfThis,box);
    }
    
    document.getElementById("sq5").onclick = function()
    {
        let box = 5;
        colorOfThis = document.getElementById("sq5").style.backgroundColor;
        answer(colorOfThis,box);
    }
    
    document.getElementById("sq6").onclick = function()
    {
        let box = 6;
        colorOfThis = document.getElementById("sq6").style.backgroundColor;
        answer(colorOfThis,box);
    }
    
    
    
    function answer(value,box)                                         //function to check the answer for equality
    {
        if( value == `rgb(${r}, ${g}, ${b})` )
        {
            document.getElementById("answer-txt").innerHTML = `SAHI HAI`
            document.getElementById("answer-txt").style.color = "#2C8E99"
            for(let q=1;q<=6;q++)
            {    
                  document.getElementById("sq"+q).style.backgroundColor = value
                  document.getElementById("sq"+q).style.visibility = "visible"
             }

            document.getElementById("navbar").style.backgroundColor = value
            document.getElementById("left").innerHTML = "PLAY AGAIN"    
        }
        else{
            document.getElementById("answer-txt").innerHTML = `TRY AGAIN`
            document.getElementById("answer-txt").style.color = "rgb(255,0,0)"
            document.getElementById("sq"+box).style.visibility = "hidden"

        }
    }

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



