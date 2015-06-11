//Dog years exercise.
//Calculate Sparky's age in dog years.

var sparkysHumanYears = 21; //Sparky's years in human years.

// 1 human year = 7 dog years.
//multiplying human years * 7 ( dog years for every human years) should give us Sparky's age.

console.log(sparkysHumanYears * 7 + " Dog years" ); // This is the math operation to know Sparky years in dog years.
var dogYears = 147;



//Slice of pie part 1.

var numOfPizzas = 15; //Number of pizzas ordered.
var numOfSlices = 8; //Number of slices per pizza.
var people = 19; //Number of people at the party.
var totalSlices = numOfSlices * numOfPizzas; //This will calculate the total slices of 15 pizzas.
var slicesPerPerson = totalSlices / people; //This will calculate the slices per person.
//Calculate the total of slices by multiplying the amount of slices per pizza * the total amount of pizza.


console.log(totalSlices + " slices of pizza"); //This operation will give us the total amount of slices.

//Slice of pie 2.
//Calculate how many slices per person by dividing the total slices / the total amount of people at the party.

console.log(slicesPerPerson + " It is 6 slices of pizza per person and 3 slices for sparky");// Total of slices of pizza per person and sparky.



// Calculate how many slices will sparky get after pizza is evenly divided among the guest.
var remainder = 120 % 19 + " slices of pizzas for sparky"; //Operation to know how many slices sparky is getting.
console.log(remainder); //total of slices that sparky will be receive.


//Average shopping bill.

var weeklyGroceries = [80, 95, 70, 110, 65]; //5 weeks grocery shopping.
var total = weeklyGroceries[0] + weeklyGroceries[1] + weeklyGroceries[2] + weeklyGroceries[3] + weeklyGroceries[4]; //Sum of 5 weeks grocery shopping.
var average = total / 5 + "$"; //Average of 5 weeks grocery shopping.
console.log(average); //total average of 5 weeks shopping.


//Discounts

var originalPrice = 5500; //Retail price
var discount = 0.35; // Discount 35% percent on item.
var item = ["Coat"]; //Description of the item.
var salesTax = 0.18; //Sales tax on item 18%.
var totalDiscount = originalPrice * discount; //35% discount
var discountPrice = originalPrice - totalDiscount;//Price of item with 35% discount.
var itemTax = discountPrice * salesTax;//18% sales tax.
var priceTax = discountPrice + itemTax;//Price of item with sales tax.
console.log(item [0] + " " + totalDiscount + "$"); //35% of the item.
console.log(item [0] + " " + discountPrice + "$"); //Total price of item with 35% discount.
console.log(item [0] + " " + itemTax + "$"); //Tax of the item
console.log(item [0] + " " + priceTax + "$"); //Total price of item with sales tax.