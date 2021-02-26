
const coffees = require('./coffee.json')

// let milkyCoffees = coffees.filter( recipe => recipe.ingredients.includes('Milk') )

  coffees.forEach(recipe => {
    if(recipe.ingredients.includes('Steamed Milk') 
        || recipe.ingredients.includes('Milk')
        || recipe.ingredients.includes('Cream')){
             console.log(recipe.id, recipe.title)  }   
  })


// coffees.forEach(recipe =>
//     recipe.ingredients.includes('Steamed Milk'|| 'Milk' || 'Cream') && console.log(recipe.title))


/*
{
    "title": "Black",
    "description": "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
    "ingredients": [
      "Coffee"
    ],
    "id": 1
  },
  */

//   coffees.forEach(recipe => {
//       console.log(recipe.id, recipe.title)
//   })

//   coffees.filter(recipe => {
//     recipe.ingredients.includes('Milk')
//   })

 // let milkyCoffees = coffee.filter(recipe => {
 //     return recipe.ingredients.include('Milk')
 // })

  