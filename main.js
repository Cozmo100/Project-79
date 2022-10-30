

var Pizzas = [" Chicken Tandoori Pizza"," Veggie Pizza"," Cheese Pizza"," Margherita Pizza"," Pineapple Pizza"," Paneer Tikka Pizza"]
console.log(Pizzas)

//places to displaying the array//

function showmenu(){
     
    Pizzas.sort()
    console.log(Pizzas)
    document.getElementById('DisplayS').innerHTML = Pizzas;
}


function showpizzas(){

    Pizzas.sort()
    console.log(Pizzas)
    document.getElementById('DisplaySh').innerHTML = Pizzas;

    
}

function AddSug(){

    //getting Suggestion and adding to array//

    TheSuggestion = document.getElementById('EnterSuggestion').value;
    Pizzas.push("" + TheSuggestion);
    console.log(Pizzas);
    Pizzas.sort()
    console.log(Pizzas)
    document.getElementById('DisplaySh').innerHTML = Pizzas;
    
}