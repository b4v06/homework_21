function travel() {
    userBudget = prompt("What is your budget?")
    if (isNaN(userBudget)) {
        alert("You sly fox! You ought to write a number!")
    } else {
        userDestination = prompt("Select your destination from the list below (to select a country write down its number in the list): \n 1. Ukraine \n 2. Italy \n 3. Thailand")
        if (isNaN(userDestination)) {
            alert("You sly fox! You ought to write a number!")
        } else {
            if (userDestination == 1) {
                if (Number(userBudget) >= 500) {
                    alert("Cool, you can travel to Ukraine!")
                } else {
                    alert("I think you can't afford to travel at the moment")
                }
            } else if (userDestination == 2) {
                if (Number(userBudget) >= 1500) {
                    alert("Cool, you can travel to Italy!")
                } else if (Number(userBudget) >= 1000 && Number(userBudget) < 1500) {
                    alert("I think you can't afford to travel to Italy at the moment, but maybe you would like to visit Thailand or Ukraine?")
                } else if (Number(userBudget) >= 500 && Number(userBudget) < 1000) {
                    alert("I think you can't afford to travel to Italy at the moment, but maybe you would like to visit Ukraine?")
                } else {
                    alert("I think you can't afford to travel at the moment")
                }
            } else if (userDestination == 3) {
                if (Number(userBudget) >= 1000) {
                    alert("Cool, you can travel to Thailand!")
                } else if (Number(userBudget) >= 500 && Number(userBudget) < 1000) {
                    alert("I think you can't afford to travel to Thailand at the moment, but maybe you would like to visit Ukraine?")
                } else {
                    alert("I think you can't afford to travel at the moment")
                }
            } else {
                alert("Because you haven't chosen the number from the list - now you are going to Brazil!")
            }
        }
    }
}
travel();