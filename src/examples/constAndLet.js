export function constAndLet() {

  //  // 1) var icecream; is hoisted so that this can still run
  // iceCream = "salted caramel"
  // console.log("hoisted?", iceCream)
  
  // var iceCream = "chocolate"
  // console.log("declared", iceCream)

  //  // 2) 
  //   iceCream = "strawberry"
  //   console.log("reassigned?", iceCream)
  //
  //   var iceCream = "vanilla"
  //   console.log("redeclared?", iceCream)
  //
  
  // // 3) this can not run because gelato is being referenced before it is declared; const will not hoist
  // gelato = "mango"
  // console.log("hoisted?", gelato)
  //
  // const gelato = "lemon"
  // console.log("declared", gelato)

  //   gelato = "mint"
  //   console.log("reassigned", gelato)
  //
  //   const gelato = "almond"
  //   console.log("redeclared", gelato )
  //
  
  // // 5) You are not allowed to hoist a let, (but some ability of react makes this possible in the tuturial at least?? It crashes for me)
  // froYo = "brownie"
  // console.log("hoisted?", froYo)
  
  // let froYo = "cherry"
  // console.log("declared", froYo)
    
    // froYo = "cheese cake"
    // console.log("reassigned", froYo)
  
    // let froYo = "passion fruit"
    // console.log("redeclared", froYo )
  //

  // // 6) crashes const can not be reassigned; If we assign a primitive value to a constant, we cannot change the primitive value
  // const canIChangeThis = "What is this variable?"
  // console.log(canIChangeThis)
  
  // canIChangeThis = "Did I change this?"
  // console.log(canIChangeThis)

  // // 7) You can change the properties of a constant object; BUT can not reassign a constant object
  // const toppings = ["sprinkles", "strawberries"]
  // toppings.push("fudge")
  // console.log(toppings)

  // // the freeze line prevents you from pushing values/ changing properties
  // Object.freeze(toppings)  
  // toppings.push('raisins')

}
