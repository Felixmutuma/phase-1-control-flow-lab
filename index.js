function scuberGreetingForFeet(feet){
  // Write your code here!
  let cost;
  if (feet<=400) {
    cost= "This one is on me!"
  } 
  else if(feet<=2000){
    cost= "That will be twenty bucks."
  } else if(feet>2000 && feet<2500){
    cost= "I will gladly take your thirty bucks."
  } else if(feet>2500){
    cost= "No can do."
  }
 return cost;
}

function ternaryCheckCity(city){
  // Write your code here!
  let response;
  if (city=="NYC") {
    response="Ok, sounds good."
  } else {
    response="No go."
  }
  return response;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
       return "Thank you."
        break;
    default:
      return "Bye."
      break;
  }
}