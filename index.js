function drop(){
    let inp = document.getElementById('inp').value
    if(inp == 'trees'){
         document.getElementById('tree1').style.boxShadow = '5px 5px 5px black'
         document.getElementById('tree2').style.boxShadow = '5px 5px 5px black'
         document.getElementById('tree3').style.boxShadow = '5px 5px 5px black'
         document.getElementById('tree4').style.boxShadow = '5px 5px 5px black'
         document.getElementById('hidden').style.display = 'block'
        
    } else if(inp == 'galaxy'){
        document.getElementById('galaxy1').style.boxShadow = '5px 5px 5px black'
        document.getElementById('galaxy2').style.boxShadow = '5px 5px 5px black'     
        document.getElementById('hidden').style.display = 'block'
    }
}

function drop_1(){
    let inp = document.getElementById('inp').value
    if(inp == 'trees')
    {
    document.getElementById('tree1').style.display = 'none'
    document.getElementById('tree2').style.display = 'none'
    document.getElementById('tree3').style.display = 'none'
    document.getElementById('tree4').style.display = 'none'
    document.getElementById('tree5').style.display = 'block'
    document.getElementById('tree6').style.display = 'block'
    document.getElementById('tree7').style.display = 'block'
    document.getElementById('tree8').style.display = 'block'
    }
    if(inp == 'galaxy'){
    document.getElementById('galaxy1').style.display = 'none'
    document.getElementById('galaxy2').style.display = 'none'
    document.getElementById('galaxy3').style.display = 'block'
    document.getElementById('galaxy4').style.display = 'block'
    }

}