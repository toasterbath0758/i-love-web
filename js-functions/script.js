console.log(1) 
//console is een object
//log(1) is een function (methode) met een argument
//de dot notatie geeft aan dat de log function bij het console object hoort

//function declaration 'clown' met het argument 'name'
function clown(name, shoeSize){
    // return [name, shoeSize]

    return{name, shoeSize}
}

//function expression
//het topSpeed argument is geschreven in camelCase (conventie)

const car = function (brand, wheels, color, topSpeed) {
//all kinds of instructions
return {

    }
}

const building = (floors, roofType, elevators) => {

}

console.log(clown('Bumba', 80))


const button = document.querySelector('button')

//de function in addEventListener is een anonymous function, dit is een callback function
button.addEventListener('click', function(){
    console.log('geklikt')
})