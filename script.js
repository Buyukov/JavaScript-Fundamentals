//-----------------------------------------------------------     JAVASCRIPT FUNDAMENTALS PART 1 START   ----------------------------------//

// alert ('hello world')

//----------- VALUES AND VERIABLES -----------
// console.log('Dilmurod');
// console.log(23);

// string   Qo'sh tirnoqni ichida yozilgan hamma narsa string deyiladi.

//Veriable in JS 
// let firstname = 'Dilmurod'
//Birinchi harf kichik va unga qushilgan qolgan harflarni katta harfda yozish "camelCase" yozish uslubi diyiladi.
// console.log(firstname);

//NOT ALLOWED
// let years = 3; Not allowed (Veriable nomini raqam bilan boshlab bo'lmaydi).
// let jonas&matilda = 'JM' Not allowed (Veriable nomini & bilan yozish mumkun emas).
// let let = 'JM' Not allowed (Let,Function so'zlarini veriable nomi sifatida ishlatish mumkun emas).
// Veriable nameni katta harf bilan boshlash maslahat berilmaydi.

//MEAININGFUL VAR NAMES
// let job1 = 'programmer'
// let job2 = 'teacher'

// let myFirstJob = 'programmer'
// let myCurrentJob = 'teacher'

// let myFirstJob = 'My first job will programming'
// console.loge = myFirstJob;

// ------ DATA TYPES -----
// Number 23
//String 'something'
//Boolean true, false
//Undefined let children
//Null empty values
//Symbol (ES2015): [not useful for my js level]
//BigInt (ES2020): Large numer
//Javascrips is dynamic typing

// let firstName = 'dilmurod Buyukov Dilshodivich'
// console.log(firstName)

//----- DATANI TURINI ANIQLASH -----
// console.log(typeof 'hello world')
// console.log(typeof 23)
// console.log(typeof true)

//----- VERIABLE YASASH UCHUN KEY WORDLAR let, const, var -----
// let age = 25;
// age = 26;  let uzgaruvchan qiymat.!

// const birthYear = 2003;  const asosa uzgarmas qiymatlarni yozish uchun ishlatiladi.!

//------ BASIC OPERATORS ------
//Math operators
// const now = 2023;
// const ageDilmurod = now - 2003; //20 yosh
// const ageSarah = now - 2006;  //17 yosh
// console.log(ageDilmurod)

// const FirstName = 'Dilmurod';
// const LastName = 'Buyukov';
// console.log(FirstName + LastName)
// console.log(FirstName + ' ' + LastName)

//Comparison operators >, <
// console.log(ageDilmurod > ageSarah);
// const ageDilmurod = now - 2003; //20 yosh
// const ageSarah = now - 2006;  //17 yosh

//Operator Precendence
// let a,b
// a = b = 25 - 10 - 5;
// console.log(a)
// console.log(b)

//Find the average of ages
// Matematik o'rta arif metigini topish.
// const now = 2023;
// const ageDilmurod = now - 2003; //20 yosh
// const ageSarah = now - 2006;  //17 yosh
// const averageAge = (ageDilmurod + ageSarah) / 2; //O'rta arifmetigini topish uchun nechta raqamga qushilsa shunchasiga bo'linadi.
// console.log(averageAge);


// --------------------------- CODING CHALLEGE 1 START -----------------------//
 
/* 
 
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John. 
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. 
GOOD LUCK 
 
*/

//Data 1
// const markWeights = 78;
// const markTall = 1.69;
// const markBmi = ((markWeights / markTall) ** 2); //2129.82

// const johnWeights = 92;
// const johnTall = 1.95;
// const johnBmi = ((johnWeights / johnTall) ** 2); //2225.93
// console.log(markBmi < johnBmi);

// //Data 2
// const dilmurodWeights = 95;
// const dilmurodTall = 1.88;
// const dilmurodBmi = ((dilmurodWeights / dilmurodTall) ** 2); //2129.82

// const nickWeights = 85;
// const nickTall = 1.76;
// const nickBmi = ((nickWeights / nickTall) ** 2); //2225.93
// console.log(dilmurodBmi > nickBmi);
// --------------------------- CODING CHALLEGE 1 END -----------------------//

//-----------------------------------------------------------     JAVASCRIPT FUNDAMENTALS PART 1 END   ----------------------------------//




//------------------------------------------------------------------     JAVASCRIPT FUNDAMENTALS PART 2 START   ------------------------------//

// //----- STRINGS AND TEMLATE LITERALS -------//
// const firstName = 'Dilmurod';
// const job = 'And my Current job is Teacher';
// const birthYear = 2003;
// const year = 2023;

// const dilmurod = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// // console.log(dilmurod);

// // TEMLATE LITERALS Yozish uslubi
// const dilmurodNew = `I'm ${firstName} , a ${year - birthYear} years old ${job}!`;
// // console.log(dilmurodNew);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// multiple
// lines`)


//------ TAKING DECISIONS: if  / else statements ------//
// const age = 15;
// const isOldEnough = age >= 18;
// //Malumot True buletgan bo'sa if ga yoziladi False bo'letgan bo'sa else ga.
// if (isOldEnough) {
//     console.log(`Sarah can start driving licence🚗`)
// } //True holatida buni o'qiydi
// else {
//     const yearsLeft = 18;
//     console.log(`Sarah is too young. Wait another ${yearsLeft - age} years` ) 
// } //False holatida buni o'qiydi

//Coding Challenge
// const birthYear = 2003;

// if(birthYear < 2000) {
//     console.log(`20th Century`);
// }
// else{
//     console.log(`21th Century`);
// }

// ---------------------------- CODING START 2 START----------------------------//

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK
*/
// const markBmi = 2129.82;
// const johnBmi = 2225.95;

// const markHigher = "John BMI is not same with Mark's. Mark's BMI is higher than Jonh. Mark's BMI is ";
// const johnHigher = "John BMI is higher than Mark's BMI. John's BMI is ";
// const allSame = "John and Mark BMI's are same";

// if(markBmi < johnBmi){
//     console.log(johnHigher + johnBmi);
// }
// else if(markBmi == johnBmi){
//     console.log(allSame);
// }
// else {
//     console.log(markHigher + markBmi);
// }
// ---------------------------- CODING START 2 END----------------------------//


//------ TYPE CONVERSION AND COERSION ------//
//TYPE CONVERSION
// const inputYear = '2000';
// const inputYears = 2003;
// console.log(inputYear + 23); //Text bilan raqamdi + bilan qo'shishga urinsangiz agar unda matematik hisob kitob bo'lmaydi shunchaki raqamdi textga aylantirib boshqa textga qo'shib qo'yadi.
// console.log(Number(inputYear) + 22); //String malumot kelib uni raqamga aylantirmoqchi bo'lsak Number so'zi qo'shiladi namunadek.
// console.log(String(inputYears)); //Raqam malumot kelib uni String ga aylantirmoqchi bo'lsak String so'zi qo'shiladi namunadek.

// //------ TRUTHY AND FALSY VALUES ------//
// // 5 FALSY VALUES 0, '', Undefined, null, NaN.
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 400;
// if(money) {
//     console.log(`You have money you can rest`)
// }
// else{
//     console.log(`You should get a job`)
// }

// //------ EQUALITY OPERATORS: == VS === VS != ------//
// const age = '18'; 
// if(age == 18) {
//     console.log('You just become an adult');
// } // === ta tenglik bo'lsa bu qattiy tenglik deyiladi bunda qiymat va type ham bir xil bo'lishi shart.
// else{
//     console.log('You are still young')
// }

//  const favourite = prompt('What is your favourite number?');
//  console.log(favourite);
// if(favourite == 12){
//     console.log('Cool 12 is an amazing number');
// }
// else if(favourite == 7) {
//     console.log('Cool 7 is too amazing number');
// }
// else {
//     console.log('The number is not 12 or 7');
// }

// if(favourite != 12) {
//     console.log('Why not 12'); 
// } // != NOT EQUAL digani. Bu favourite raqami 12 bumasa ishlaydi.


//------ LOGICAL OPERATORS && || ------//
// const hasDriverLicence = true;
// const hasGoodVision = false;

// const shouldDrive = hasDriverLicence && hasDriverLicence;

// if (shouldDrive) {
//     console.log('Sarah can Drive');
// }
// else {
//     console.log('Sarah can not drive car')
// }

/*
&& AND operator
true && true => true
false && true => false

|| OR operator
true || true => true
false || true => true
false || false => false

*/

// ----------------------- Coding Challenge 3 START ----------------------//
/*
There are two gymnastics teams, Dolphins and Koalas. They compete-raqobat against each
other 3 times. The winner with the highest average score wins a trophy-kubok!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/
//DATA - 1
// const dolphins = 15;
// const koalas = 16;

// const winScore = 100;

// if(dolphins == koalas){
//     console.log('Nobody won the Truphy');
// }
// else if(dolphins + koalas < winScore){
//     console.log('Nobody won the Truphy');
// }
// else if(dolphins > koalas){
//    console.log('Dolphins won the Trophy');
// }
// else if(koalas > dolphins){
//     console.log('Koalas won the Trophy');
// }
// else{
//     console.log('Nobody won the Truphy');
// }

//DATA - 2

// const dolphinsData2 = 102;
// const koalasData2 = 555;

// const winScore2 = 100;

// if(dolphinsData2 == koalasData2){
//     console.log('Nobody won the Trophy');
// }
// else if(dolphinsData2 + koalasData2 < winScore2){
//     console.log('Nobody won the Truphy')
// }
// else if(dolphinsData2 > koalasData2){
//     console.log('Dolphins won the Trophy');
// }
// else if(koalasData2 > dolphinsData2){
//     console.log('Koalas won the Trophy');
// }
// else{
//     console.log('Nobody won the Truphy');
// }
// ----------------------- Coding Challenge 3 END ----------------------//

//------------------------------------------------------------------     JAVASCRIPT FUNDAMENTALS PART 2 END   ------------------------------//

//--------------------------------------------------------  JAVASCRIPT FUNDAMENTAL PART 3 START ------------------------------------------//

//------ THE SWITCH STATEMENT ------//
// IF STATEMENT
// const day = 'Friday';

// if(day === 'monday'){
//     console.log("1) Plan course structure");
//     console.log("2) Go to coding meetup");
// }
// else if(day === 'tuesday'){
//     console.log("Prepare theory videos");
// }
// else if(day === 'wednesday' || day  === 'thursday'){
//     console.log("Record videos");
// }
// else if(day === 'friday'){
//     console.log("Write code exaple");
// }
// else if(day === 'saturday' || day === 'Sunday'){
//     console.log('Enjoy the weekend');
// }
// else {
//     console.log('not a valid day.!')
// }

// SWITCH STATEMENT 
// const days = 'monday';

// switch(days) {
//     case 'monday':
//     case 'Monday':
//         console.log("1) Plan course structure");
//         console.log("2) Go to coding meetup");
//     break;
//     case 'tuesday':
//     case 'Tuesday':
//         console.log("Prepare theory videos");
//     break;
//     case 'wednesday':
//     case 'Wednesday':
//     case 'thursday':
//     case 'Thursday':
//         console.log("Record videos");
//     break;
//     case 'friday':
//     case 'Friday':
//         console.log("Write code exaple");
//     break;
//     case 'saturday':
//     case 'Saturday':
//     case 'sunday':
//     case 'Sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('not a valid day.!')
// }

//------- STATEMENT & EXPRESSION -------//
    // EXPRESSIONS
// 3 + 4
// 1984
//true
//false 
// 'dilmurod'

    /// STATEMENTS
//const me = dilmurod;
//console.log(`I'm ${2023 - 2003} years old ${me}`);


// ------- THE CONDITIONAL (TERNARY) OPERATOR ------//
// const age = 17;
// if(age >= 18) {
//     console.log(`I like to drink wine🍷`);
// }
// else {
//     console.log(`I like to drink water🥛`);
// }

// age >= 18 ? console.log(`I like to drink wine🍷`) : console.log(`I like to drink water🥛`);
// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🥛'}`);

// 'use strict';

//------   FUNCTION   ------//

//consol.log(`My name is Dilmurod`);
//consol.log(`My name is Dilmurod`);
//consol.log(`My name is Dilmurod`);

// Calling // Running // Invoking // Executing

// function ketmon(){
//     console.log('My name is Dilmurod');
// }
// ketmon()
// ketmon()
// ketmon()


//----------------- CODING CHALLENGE 4 START --------------//

/* 

Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1.Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2.Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: "The bill was 275, the tip was 41.25, and the total value
316.25"
Test data:
§ Data 1: Test for bill values 275, 40 and 430 Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
  GOOD LUCK😄

*/
//----------------- CODING CHALLENGE 4 END --------------//

//--------------------------------------------------------  JAVASCRIPT FUNDAMENTAL PART 3 END ------------------------------------------//

//--------------------------------------------------------------  JAVASCRIPT FUNDAMENTAL PART 4 START ----------------------------------//

//--------- FUNCTION DECLARATION VS FUNCTION EXPRESSION --------//
// const currentYear = 2023;
// const myBirthYear = 2003;

// const calcAge = currentYear - myBirthYear;
// console.log(calcAge);

// FUNCTION DECLARATION
// function calcage1(birthYear) {
//     // const age = 2023 - birthYear;
//     // return age;
//     return 2023 - birthYear;
// }
// console.log(calcage1(2003));

// FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// };
//  console.log(calcAge2(2001));

 //-------- ARROW FUNCTION ---------//
 //FUNCTION EXPRESSION
//  const calcAge = function(birthYear) {
//     return 2023 - birthYear;
//  };
//  console.log(calcAge(1994));  
// //--------- ARROW FUNCTION ---------//
//  const calcAge1 = (birthYear) => 2023 - birthYear;
//  const myAge = calcAge1(2003);
//  console.log(myAge);

//------ !Pensiyaga chiqish yoshini o'lchaydigan programma   -----//
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const currentAge = 2023 - birthYear;
//     const retirement = 65 - currentAge;
//     return `${firstName} retires in ${retirement} years`; 
// }
// console.log(yearsUntilRetirement(2003, `Dilmurod`));


//------- FUNCTION CALLING OTHER FUNCTION -------//
//-- Kop takrorlanadigan narsalarni funksiyaga orab olish va ishlatish.
// function fruitProcessor(apple, orange, banana) {
//     const firstFruitPieces = apple * 4;
//     const secondFruitPieces = orange * 4;
//     const thursFruitPieces = banana * 4;
//     const juice = `Juice with ${firstFruitPieces} apple pieces and ${secondFruitPieces} orange pieces also ${thursFruitPieces} banana pieces`;

//     return juice;
// }
// const readyJuice = fruitProcessor(1, 2, 1);
// console.log(readyJuice);


//----- Calling another function within one function -----//
// function cutFruitPiece(fruit){
//     return fruit * 4;
// }
    
// function fruitProcessor(apple, orange, banana) {
//     const firstFruitPieces = cutFruitPiece(apple);
//     const secondFruitPieces = cutFruitPiece(orange);
//     const thursFruitPieces = cutFruitPiece(banana);
//     const juice = `Juice with ${firstFruitPieces} apple pieces and ${secondFruitPieces} orange pieces also ${thursFruitPieces} banana pieces`;

//     return juice;
//     //returndan keyingi codelar ishlamaydi.! return so'zi code funksiyani ishlashdan to'xtatadi.!
// }
// const readyJuice = fruitProcessor(1, 2, 1);
// console.log(readyJuice);


//---------- FUNCTION REVIEWS -------//
// const calcAge = function(birthYear){
//     return 2023 - birthYear;
// }
// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0){
//     return `${firstName} retiers in ${retirement} years`;
//     }
//     else if(retirement == 0){
//         return `${firstName} has just retired`;
//     }
//     else {
//         return `${firstName} retired ${Math.abs(retirement)} years age`;
//     }
// };
// console.log(yearsUntilRetirement(1995, 'Dilmurod'));
// console.log(yearsUntilRetirement(1950, 'Azamatjon'));



//--------- ARRAYS ---------//
// const friends = ['mike', 'Steven', 'Peter'];
// console.log(friends);
// console.log(friends[friends.length - 1])

// friends[2] = 'Jay';
// console.log(friends);


//-------          ----------//
// const firstName = 'Dilmurod';
// const dilmurod = [firstName, 'Buyukov', 2023-2003,'Years old', 'Student', friends];
// console.log(dilmurod);


//----------             ----------//
// const calcAge = function(birthYear){
//     return 2023 - birthYear;
// }
// const years = [1990, 1967, 2001, 2010, 2018];
// years[3] = 2003; //array dagi malumotni o'zgartirish.
// console.log(years);

// // const totalAge = (calcAge(years[0])); //birorta qiymatni tanlab olish.
// // const ageLast = (calcAge(years[years.length - 1])); //qiymatlarni eng ohirgisini olish.

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4]),];
// console.log(ages);


//----------- BASIC ARRAY OPERATORS (METHODS) ------------//
// ARRAYNI ICHIGA MALUMOT YOZMASDAN TASHQARIDAN MALUMOT QO'SHISH.

//First way
// const friends = ['Mike', 'Jon', 'Steven', 'Peter'];
// friends[4] = 'Dilmurod';
// friends[5] = 'Akbar';
// friends.unshift('Nodir');
// console.log(friends);
// console.log(friends.includes('Dilmurod'));

//second way
// const friends = ['Mike', 'Jon', 'Steven', 'Peter'];
// friends[friends.length] = 'dilmurod';
// friends[friends.length] = 'Jonas';
// friends[friends.length] = 'Thopmson';
// console.log(friends);

//Third way BEST WAY //ARRAYNI OHIRIGA MALUMOTNI QO'SHIB BERADI.
// const friends = ['Mike', 'Jon', 'Steven', 'Peter'];
// friends.push('Dilmurod')
// console.log(friends);

//Fourth way BEST WAY //ARRAYNI BOSHIGA MALUMOTNI QO'SHIB BERADI.
// friends.unshift('Dilmurod');
// console.log(friends);

//REMOVES THE LAST ITEM OF AN ARRAY AND RETURNS IT.! ARRAYDAN OHIRGI MALUMOTNI O'CHIRIB TASHLAYDI VA QAYTARADI.
//O'chirib tashlash
// friends.pop();
// console.log(friends);

//O'chirib Tashlash va qayta return qilish.
// const lastItem = friends.pop();
// console.log('lastItem:',lastItem);
// console.log(friends);

//ARRAYNI ICHIDAGI MALUMOTNI YOZIB NECHINCHI O'RINDA EKANLIGINI BILIB OLISH USULI. Qidirilayotgan qiymat Arrayni ichida chiqmasa - sonda chiqaradi.
// console.log(friends.indexOf('Mike'));
// console.log(friends.indexOf('Peter'));


//AGAR ARRAYNI ICHIDAGI BOR MALUMOTNI TEKSHIRMOQCHI BO'LSANGIZ INCLUDES ISHLATILADI MALUMOT BO'LSA TRUE BO'LMASA FALSE.
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Dilmurod'));


//------------------ CODING CHALLENGE 5 START --------------//

/*

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
Sumnastics discipline, which works differentey.
Each team competes 3 times, and then the average of the 3 scores is calculated (30 one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. create an arrow function calcAverage to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function checkwinner that takes the average score of each team as parameters ('avgDolhins" and 'avgkoalas"), and then logs the winner to the console, together with the victony points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the checkwinnen function to determine the winner for both Data 1 and Data 2
551
5. Ignore draws this time
Test data:
558
§ Data 1: Dolphins score 44, 25 and 71, Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41, Koalas score 23, 34 and 27
Hints:
§ To calculate avenage of 5 values, add them all together and divtde by 3
§ To check it number A is at least double number B, check for >= 2 * B.
Apply this to the tean's average scones😉
COOD LUCK😄

*/
//------------------ CODING CHALLENGE 5 END --------------//

//------------------ CODING CHALLENGE 6 START --------------//

/*

Coding Challenge #6
Steven is still building his tip calculaton, using the same rules as before: Tip 15% of
the bill if the bill value is between se and 396, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the Function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array bikes containing the test data below
3. Create an array tips containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array total contalring the total values, so che bree + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function so you can just calz a Funcion as array
values (so don't store the tip values in separate vartables sirst, sut sight in the new array)😉

GOOD LUCK😃

*/
//------------------ CODING CHALLENGE 6 END --------------//

//------------------------------------------------  JAVASCRIPT FUNDAMENTAL PART 4 END ----------------------------------//


//-----------------------------------------  JAVASCRIPT FUNDAMENTALS PART 5 START  ---------------------------------//

//-------------- INTOR TO OBJECTS --------------// 
// const dilmurodArray = [
//   'Dilmurod',
//   'Buyukov',
//   2023 - 2003,
//   'Student',
//   ['Mike', 'Steven', 'Peter']
// ] // Bunday yozganda odam tushunmay qolishi mumkin nima biror bir malumot nimaligini.

// const Dilmurod = {
//   firstName: 'Dilmurod',
//   lastName: 'Buyukov',
//   age: 2023 - 2003,
//   job: 'Student',
//   bestFriends:  ['Mike', 'Steven', 'Peter']
// }
// console.log(Dilmurod); // Agar ichidan biror bir obyektni olmoqchi bo'lsam console.log(Dilmurod.lastName); dib yoziladi.

//------------- DOT VS BRACKET NOTATION -----------//
// OBJECTNI ICHIDAN OBYEKTNI OLISH. DOT NOTATION USULI
// console.log(Dilmurod.firstName); 

// OBJECTNI ICHIDAN OBYEKTNI OLISH. BRACKET NOTATION USULI
// console.log(Dilmurod['FirstName']);

// const Buyukov = {
//   firstName: 'Dilmurod',
//   lastName: 'Buyukov',
//   age: 2023 - 2003,
//   job: 'Student',
//   bestFriends:  ['Mike', 'Steven', 'Peter']
// }
// const nameKey = 'Name';
// console.log(Buyukov[`first${nameKey}`]);  
// console.log(Buyukov[`last${nameKey}`]);

//---------------                -----------------//
// const Dilmurod = {
//   firstName: 'Dilmurod',
//   lastName: 'Buyukov',
//   age: 2023 - 2003,
//   job: 'Student',
//   bestFriends:  ['Mike', 'Steven', 'Peter']
// }
// const interestedIn = prompt(`What do you want to know about Dilmurod? 
// CHoose between:
// firstName,
// lastName,
// age,
// job,
// friends`);
// console.log(Dilmurod[interestedIn]);

//---------------                -----------------//
// const bestGamesIn2023 = {
//   winner: 'Call of Duty',
//   top2: 'Modern Warfare',
//   top3: 'II/Warzone 2.0',
//   top4: 'Overwatch',
//   top5: 'Minecraft'
// }
// const topGames = prompt(`Top Games on PC in November 2022
// Choose between:
// winner,
// top2,
// top3,
// top4,
// top5,
// If you want to know, you should write here`);
// console.log(bestGamesIn2023[topGames]);

// Dilmurod has 3 friends and his best friend is called Mike
// const Dilmurod = {
//     firstName: 'Dilmurod',
//     lastName: 'Buyukov',
//     age: 2023 - 2003,
//     job: 'Student',
//     bestFriends:  ['Mike', 'Steven', 'Peter']
//   }
//   console.log(`${Dilmurod.firstName} has ${Dilmurod.bestFriends.length} friends and his best friend is called ${Dilmurod.bestFriends[0]}`);


//------------- OBJECT METHOD -------------//
// const Dilmurod = {
//     firstName: 'Dilmurod',
//     lastName: 'Buyukov',
//     age: 2023 - 2003,
//     job: 'Student',
//     bestFriends:  ['Mike', 'Steven', 'Peter'],

//     calcAge: function(birthYear){
//       return 2023 - birthYear;
//     }
//   };
//   console.log(Dilmurod.calcAge(2003)); //OBYEKT ICHIDAGI METODNI ISHGA TUSHURISH MANA SHUNDAY BO'LADI.

  // const Buyukov = {
  //   firstName: 'Dilmurod',
  //   lastName: 'Buyukov',
  //   birthYear: 2003,
  //   job: 'Student',
  //   bestFriends:  ['Mike', 'Steven', 'Peter'],

  //   calcAge: function(){
  //     this.age = 2023 - this.birthYear; // this bu yerda objectga teng bo'lyabdi Buyukov ga.
  //     return Buyukov.age
  //   }
  // };
  // console.log(Buyukov.calcAge());


//-------------------------------         OBJECT           ------------------------//
  // const Buyukov = {
  //   firstName: 'Dilmurod',
  //   lastName: 'Buyukov',
  //   birthYear: 2003,
  //   job: 'Student',
  //   bestFriends:  ['Mike', 'Steven', 'Peter'],
  //   driversLicence: true, 
       
  //   //OBJECT ICHIDAGI METHOD 
  //   calcAge: function(){
  //     this.age = 2023 - this.birthYear; // this bu yerda objectga teng bo'lyabdi Buyukov ga.
  //     return Buyukov.age
  //   },

  //   getSummary(){
  //     console.log(`${this.firstName} is ${this.calcAge()} - years old ${this.job}, and he has ${this.driversLicence == true ? 'a' : 'no'} driver's licence `)
  //   }
  // };
  // console.log(Buyukov.getSummary());

//--------------------------       CODING CHALLENGE 7 START     ------------------------//
  /* 

  Let's bo to back Mark and John comparing their BMI! This time let's use object to 
  implement the calculations! Remember: BMI = Mass / height ** 2 = Mass
  / (height * height ) (mass in kg height in meter)
  Your tasks:
  1. For each of team , create an object with ptoperties for their full name, mass, and 
  height (mark Miller and John Smith)
  2.Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).
  Store the BMI value to a property, and also return it from the method.
  3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
  Exapmle: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
    Good Luck😉
  
  */

    // const markBmi = {
    //   fullName: 'person-1',
    //   mass: 71,
    //   height: 1.84,
      
    //   calcBmi: function(){
    //     this.Bmi = this.mass / (this.height * this.height);
    //     return markBmi.Bmi
    //   },

    //   finalResult(){
    //     console.log(`${this.fullName}'s average BMI is ${this.calcBmi()}`);
    //   }
    // };
    // // console.log(markBmi.finalResult());

    // const johnBmi = {
    //   fullName: 'person-2',
    //   mass: 67,
    //   height: 1.84,

    //   calcBmi2: function(){
    //     this.Bmi2 = this.mass / (this.height * this.height);
    //     return johnBmi.Bmi2
    //   },

    //   finalResult2(){
    //     console.log(`${johnBmi.fullName}'s average BMI is ${johnBmi.calcBmi2()}`)
    //   }
    // };
    // // console.log(johnBmi.finalResult2());

    // if(markBmi.calcBmi() == johnBmi.calcBmi2()){
    //   console.log(`${markBmi.fullName}'s BMI is same with ${johnBmi.fullName}'s BMI`);
    // }
    // else if(markBmi.calcBmi() < johnBmi.calcBmi2()){
    //   console.log(`${johnBmi.fullName} BMI is ${johnBmi.calcBmi2()} heigher than Mark's currently ${markBmi.fullName}'s BMI is ${markBmi.calcBmi()}`);
    // }
    // else if(markBmi.calcBmi() > johnBmi.calcBmi2()) {
    //   console.log(`${markBmi.fullName} BMI is ${markBmi.calcBmi()} higher than John currently ${johnBmi.fullName}'s BMI is ${johnBmi.calcBmi2()}`);
    // } else {
    //   console.log(`their BMI is not same`);
    // };

 //--------------------------       CODING CHALLENGE 7 END     -------------------------//


 //-------------------   ITERATION: THE FOR LOOP ------------------//
// console.log(`Lifting weights repetition 1 🏋️‍♂️`);
// console.log(`Lifting weights repetition 2 🏋️‍♂️`);
// console.log(`Lifting weights repetition 3 🏋️‍♂️`);
// console.log(`Lifting weights repetition 4 🏋️‍♂️`);
// console.log(`Lifting weights repetition 5 🏋️‍♂️`);
// console.log(`Lifting weights repetition 6 🏋️‍♂️`);
// console.log(`Lifting weights repetition 7 🏋️‍♂️`);
// console.log(`Lifting weights repetition 8 🏋️‍♂️`);
// console.log(`Lifting weights repetition 9 🏋️‍♂️`);
// console.log(`Lifting weights repetition 10 🏋️‍♂️`);

// For loop keeps running while condition is True.
// for (let rep = 1; rep <= 10; rep = rep + 1) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// const dilmurodArray = [
//   'Dilmurod',
//   'Buyukov',
//   2023 - 2003,
//   'Student',
//   ['Mike', 'Steven', 'Peter']
// ];
// console.log(dilmurodArray[1]);

// const types = [
//  typeof dilmurodArray[0],
//  typeof dilmurodArray[1], 
//  typeof dilmurodArray[2], 
//  typeof dilmurodArray[3], 
//  typeof dilmurodArray[4]
// ];
// console.log(types);

//-------------              -------------//
// const dilmurodArray = [
//   'Dilmurod',
//   'Buyukov',
//   2023 - 2003,
//   'Student',
//   ['Mike', 'Steven', 'Peter'],
//   true,
// ];

// const typess = [];
// for (let type = 0; type < dilmurodArray.length; type = type + 1){
//  typess.push(typeof dilmurodArray[type]);
// }
// console.log(typess);

//-----------------------              ------------------//
// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const ages = [];

// for (let i = 0; i < years.length; i = i + 1){
// ages.push(calcAge(years[i]));
// } 
// console.log(ages);

 

//------------------------------------------------- GUESS MY NUMBER INTRO ------------------------------------------//
// ----- For loop -----//
// const dilmurodArray = [
//   'Dilmurod',
//   'Buyukov',
//   2023 - 2003,
//   'Student',
//   ['Mike', 'Steven', 'Peter'],
//   true,
// ];
// console.log(dilmurodArray);

// for (let i = 0; i < dilmurodArray.length; i++) {
//   if(typeof dilmurodArray[i] === 'string') {
//     console.log(dilmurodArray[i]);
//   }
// }; // Biror bir arrayni ichidan faqat biror bir kerakli typeni olish

//-------             --------//
// const dilmurodArray = [
//   'Dilmurod',
//   'Buyukov',
//   2023 - 2003,
//   'Student',
//   ['Mike', 'Steven', 'Peter'],
//   true,
// ];
// console.log(dilmurodArray);

// for (let i = 0; i < dilmurodArray.length; i++) {
//   if(typeof dilmurodArray[i] !== 'number')continue;
//     console.log(dilmurodArray[i]);
// }; // 2- Yo'l Biror bir arrayni ichidan faqat biror bir kerakli typeni olish // continue bizga o'tqizvolish uchun kerak

//----------            ------------//
// const dilmurodArray = [
//   'Dilmurod',
//   'Buyukov',
//   2023 - 2003,
//   'Student',
//   ['Mike', 'Steven', 'Peter'],
//   true,
// ];
// console.log(dilmurodArray);

// for (let i = 0; i < dilmurodArray.length; i++) {
//   if(typeof dilmurodArray[i] !== 'string')break;
//     console.log(dilmurodArray[i]);
// };  
/* Toki birinchi stringga teng bo'lmagan qiymatni uchratguncha aylanadi va to'xtaydi undan keyingilari unga teng
qiymat bo'lsa ham olmaydi // break bizga to'xtatib olish uchun kerak. */

//-----------            -----------//
// const dilmurodArray = [
//   'Dilmurod',
//   'Buyukov',
//   2023 - 2003,
//   'Student',
//   ['Mike', 'Steven', 'Peter'],
//   true,
// ];

// for(let i = dilmurodArray.length - 1; i >= 0; i--) {
//   console.log(dilmurodArray[i]);
// }


//-----------            -------------//
// for (let i = 10; i > 0; i--){
//   console.log(`Lifting weights repetition ${i}🏋️‍♂️`);
// }

// for (let i = 0; i <= 10; i++){
//   console.log(`Lifting weights repetition ${i}🏋️‍♂️`);
// }


//----------              ------------//
// for (let i = 1; i < 4; i++) {
//   console.log(`--------- ${i}st attempt ---------`);

//   for(let j = 10; j > 0; j--){
//     console.log(`Lifting weights repetition ${j}🏋️‍♂️`);
//   }
// }


//------------------  WHILE LOOP ----------------//
// let i = 10;

// while (i > 0) {
//   console.log(`Lifting Weights repetition ${i} 🏋️‍♂️`);
//   i-- //i = i - 1;
// }
                  

//----------------------------------- CODING CHALLENGE 8 START --------------------------------//
/*
Let's improve  Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'Bills' containing all 10 test bill values 
2. Create empty arrays for the tips and the total ('tips' and 'totals')
3. Use the 'CalcTips' function we wrote before (no need to repeat) to calculate 
tips and total value (bill + tip) vor every bill value in the bills arrray. Use for loop to performs the 10 calculation!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hits: call 'calctip' in the loop and use the push method to add values to the tips and total arrays 😉
4. Bonus: write a function 'calcaverage' whis takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in given array.
This is a difficulte challenge (we hava not done this before)! Here is how to solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then Then loop over the 
Array using a for loop. In each itaratin, add the current value to the 'sum' variables.
This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the length of the array
(because that's the number of elemnts).
4.3. Call the function with the 'Totals' array
GOOD LUCK 👍

*/
//--------------------------------- CODING CHALLENGE 8 END ----------------------------------//
 

// const dilmurodData = {
//   name: 'dilmurod',
//   surname: 'Buyukov',
//   age: 23,
//   region: 'Djizzakh'
// };
// const allOne = (`${dilmurodData.name} is a student And his Surname is ${dilmurodData.surname}`);

// console.log(allOne);

// const dataArrayTest = [
//   'dilmurod',
//   'Buyukov',
//   23,
//   'Djizzakh'
// ];
// console.log(dataArrayTest);
// dataArrayTest.push('Hello World');
// dataArrayTest.unshift('Hi Dilmurod');
// dataArrayTest.pop();


// 'use strict';
// // ---------------------                       ------------------------//
// const dilmurod = {
//   year: 2003, 
//   calcAge:function () {
//     console.log(this);
//     console.log(2023 - this.year); // This key wordi method ichida ishlatilgan bo'lasa shu methodni qaysi obyekt ishga tushirsa this key word o'sha obyektga teng bo'ladi.
//   }
// };

// dilmurod.calcAge();

// const matilda = {
//   year:2003
// };

// matilda.calcAge = dilmurod.calcAge;

// matilda.calcAge();
// -------------------------------------------------------------------//

//----------------------- ARGUMENTS KEYWORD ----------------------//
// Function expration 
// const addExpr = function (a, b, c) {
//   console.log(arguments);
//   console.log(a + b + c);
// }
// addExpr(2, 7, 3, 5);

// // Function declaration
// function addDec(a, b) {
//   console.log(arguments);
//   console.log(a + b);
// }
// addDec(2, 4, 3, 5);

// // Arrow Function 
// const kvadrat = (son) => {
// return son * son;
// }
// console.log(kvadrat(10));
//---------------------------------------------------------------//

// 'use strict';

// --------- PRIMITIVE TYPES --------//
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(oldAge);
// console.log(age);
// // --------------------------------//

// // --------- REFERENCE TYPES -------//
// const me = {
//   name: 'Dilmurod',
//   age: 30
// };
// const friend = me;
// friend.age = 27;
// console.log(me);
// --------------------------------//


'use strict';
// //---------------------------- DESTRUCTURING ARRAYS ----------------------------//
// const friends1 = ['Sarvar', 'Abror', 'Alisher'];

// const a1 = friends1[0];
// const b1 = friends1[1];
// const c1 = friends1[2];
// console.log(a1, b1, c1); //Bunday yo'l qiyinroq va ko'p vaqt oladi.

// const friends2 = ['Sarvar', 'Abror', 'Alisher', 'Nodir'];

// const [a, b, c, k] = friends2;
// console.log(a, b, c, k);  //Bunday yo'l osonroq va kam vaqt oladi VA bu narsa DESTRUCTING ARRAY DIYILADI.

// // //---------------------------------------------------------------------------------------------------------//
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['pizza', 'Pasta', 'Risotto'],

  
// order : function(starterIndex, mainIndex, mainIndexstill) {
//     return[restaurant.starterMenu[starterIndex], this.mainMenu[mainIndex], this.mainMenu[mainIndexstill]];
// }

// };

// // console.log(restaurant.order(2, 1));
// const [starter, mainMenu, secondMainMenu] = restaurant.order(1, 1, 2);
// console.log(starter);
// console.log(secondMainMenu);
// //----------------------------------------------------------------------------------------------------------//  

// //---------------- NESTED DESTRUCTURING ----------------//
// const nested = [2, 4, [5, 6, [3, 1]]];
// const [i, , [f, k, [x, l]]] = nested;

// // const [f, k] = j;
// console.log(f, x, l);

//---------------- DEFAULT VALUES ----------------------//
// const [p = 1, q = 1, r = 1] = [8, 9]; //UndeFined qiymat chiqib qolmasligi uchun ularga o'zimiz default qiymat berib qo'yishimiz mumkun = 1 qilib.
// console.log(p, q, r);


//---------------- DESTRUCTURING OBJECTS ---------------//
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['pizza', 'Pasta', 'Risotto'],
// };

// const {name: restaurantName,  location: locations, categories, mainMenu} = restaurant;
// console.log(restaurantName);
// console.log(locations);
// console.log(categories);
// console.log(mainMenu);
// console.log(mainMenu[1]);


// // DEFAULT VALUES
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
//------------------------------------------------------//

// const openingHourss = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// // console.log(openingHours);
// const {thu, fri, sat} = openingHourss;
// console.log(fri);


//-------------------------- DELIVERY SYSTEMS ------------------------//
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['pizza', 'Pasta', 'Risotto'],
// };

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

//   const orderDelivery = function({starterIndex, mainIndex, time, address}){
//     console.log(`Order recieved! ${restaurant.starterMenu[starterIndex]} and ${restaurant.mainMenu[mainIndex]} will be delivery to ${address} at ${time}`);
//   };

// const Calling = orderDelivery({
//   time: "22.30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 1
// }); 
//-------------------------------------------------------------------------------------------------------//

//------------------ SPREAD OPERATORS -----------------//
// const arr = [7, 8, 9, 10];
// const newArr = [1, 2, 3, ...arr]; // IKKITA ARRAYNI BIR BIRIGA QO'SHIB YUBORISH.
// //console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Lagmon']; // BUNDAY YO'L BILAN QILINSA ESKI ARRAYGA TASIR QILMAYDIDA YANGI ARRAYGA HAMMASINI QOSHIB SAQLAB QO'YADI. 
// console.log(newMenu);

// // COPY ARRAY
// const mainCopy = [...restaurant.mainMenu];
// console.log(mainCopy);

// // JOIN 2 OR MORE ARRAYS // IKKTA ARRAYNI BITTAGA YANGI ARRAYGA QO'SHIB QO'YISH, VA BU ESKI ARRAYDAGI MA'LUMOTLARGA TASIR QILMAYDI.
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // 2018- ITERABLE: ARRAYS, STRINGS, MAPS, SET. NOT OBJECT
// const str = 'Dilmurod';
// const latters = [...str];
// console.log(latters, 'J', "");

// //--------------------------------------------//
// const orderPasta = function(ing1, ing2, ing3){
//     console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
// };

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\s make pasta ingredient 2?'), prompt('Let\s make pasta ingredient 3?')];
// console.log(ingredients);
// console.log(orderPasta(...ingredients));
//--------------------------------------------//

//---------------------------------------------------------// 
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['pizza', 'Pasta', 'Risotto'],
// };
// const newRestaurant = {foundedIn: 2008, ...restaurant, Founder: 'Dilmurod Buyukov'};

// newRestaurant.name = 'Rayhon'
// console.log(newRestaurant.name);
// console.log(restaurant.name);
// console.log(newRestaurant);
// newRestaurant.mainMenu.push('Osh');
// console.log(newRestaurant.mainMenu);
// console.log(restaurant.mainMenu);
//----------------------------------------------------------//

//---------------- REST PATTERN AND PARAMETERS ----------------//
// const arr = ['Sarvar', 'Anvar', ...['Alisher', 'Bobur']];
// console.log(arr);
// const [friend1, ...qolganlari] = arr; //Rest element must be last element
// console.log(qolganlari);
// console.log(friend1);
//-------------------------------------//
//-------------------------------------//
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['pizza', 'Pasta', 'Risotto'],
// };
// const [pizza, , risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza);
// console.log(risotto);
// console.log(otherFoods); 
//REST PATTERN KERAK BO'LADI QACHONKI SHERIKLARINI ALOHIDA OLIB QOLGANLARINI YANA BITTA RO'YHATGA OLMOQCHI BO'LSANGIZ O'SHANDA REST PATTERN SIZGA YORDAM BERADI.
//--------------------------------------------------------------------------------------------------------------//

//----------- Rest potternni objectda ishlatilishi ----------//
// const {sat, ...weekDays} = openingHours;
// console.log(sat, weekDays);

// //----------- Rest potternni Functionsda ishlatish ---------//
// const add = function(...numbers){
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
    
//   }
//   console.log(sum)
// }
// add(2, 5, 5);
// const x = [23, 57, 3];
// add(...x);


//----------------------------------- SHORT CIRCUITING (&& AND ||) ---------------------------------//
// || Solishtirilayotgan ma'lumotlar orasidan birinchi chiqgan TRUE qiymatni olib beradi.
// console.log('--------- || OR --------');
// console.log( 3 || 'Sunnat');
// console.log( "" || 'Sunnat');
// console.log( true || 0);
// console.log( undefined || null);
// console.log(undefined || 0 || ''|| 'Hello' || 23 || null);

// /* && Solishtirilayotgan ma'lumotlar orasidan birinchi chiqgan FALSE qiymatni olib beradi. 
// Agar FALSE qiymat bo'lmasa ohirgi True qiymatni oladi. */
// console.log('--------- && AND -------');
// console.log(true && false);  

// restaurant.numGuests = 23
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // IF ELSE BILAN
// const guests2 = restaurant.numGuests || 10; // SHORT CIRCUTING BILAN
// console.log(guests1);
// console.log(guests2);
// //-------------------------------------------------------------------------------------------------//

// //----------------- NULLISH COALESCING OPERATOR (??)
// restaurant.numGuests = 0
// const guests3 = restaurant.numGuests ? restaurant.numGuests : 10;
// const guests4 = restaurant.numGuests ?? 10; /* NULLISH COALESCING OPERATOR ?? Bunda biz 0 qiymatini true sifatida olishimiz mumkun.
//  0 yoki bush string bo'lsayam o'shani o'zni qaytarib beradi ?? belgisi. lekin undefined va null larni ishlatsangiz ularni haliyam false qiymat dib oladi. 
//  ?? or belgisini o'rniga ishlatsak bo'ladi. */
//  console.log(guests3);
//  console.log(guests4);

//----------------------- CODING CHALLEGE -------------------------//
//----------------------------------------------------------------------------//
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//-----------------------------------------------------------------------------//

/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:

1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀
*/
//-----------------------------------------------------------------------------------------

// const [players1, players2] = game.players;
// console.log(players1, players2); // BITTA ARRAYGA QO'SHILGAN IKKTA JAMOANI IKKITA ARRAYGA AJRATIB OLINDI.

// const [gkTeam1, ...fieldPlayers1] = players1; // BIRINCHI JAMOADAN DARVOZABON AJRATIB OLINDI.
// console.log(gkTeam1, fieldPlayers1); 

// const [gkTeam2, ...fieldPlayers2] = players2; // IKKINCHI JAMOADAN DARVOZABON AJRATIB OLINDI.
// console.log(gkTeam2, fieldPlayers2); 

// const allPlayers = [...players1, ...players2]; // IKKALA JAMOA O'YINCHILARI QO'SHILDI.
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'coutinho', 'Perisic']; // TEAM1 GA 3 TA O'YINCHI QO'SHILDI
// console.log(players1Final); 

// const team1 = game.odds.team1; // TEAM1 NI YUTISH KOYFITSENTI.
// console.log(`Bayern Munich: `, team1);

// const draw = game.odds.x; // DURANG BO'LISH KOYFITSENTI.
// console.log(`Draw: `, draw);

// const team2 = game.odds.team2; // TEAM2 NI YUTISH KOYFITSENTI.
// console.log(`Borrussia Dortmund: `, team2);

// //-------------------------------------------------------------------------------------------------------------
// const printGoals1 = function({goolTeam1, goal1, goolTeam2, goal2, goolTeam3, goal3, goolTeam4, goal4}) {
//     console.log(`${goolTeam1}: First goal: ${goal1}, ${goolTeam2}: Second goal: ${goal2}, ${goolTeam3}: third goal: ${goal3}, ${goolTeam4}: Fourth goal: ${goal4}` );
// };
// const collingGools = printGoals1({
//   goolTeam1: 'Lewandowski',
//   goal1: 1,

//   goolTeam2: 'gnarby',
//   goal2: '1',

//   goolTeam3: 'Lewandowski',
//   goal3: '1',

//   goolTeam4: 'Hummels',
//   goal4: '1',
// });
// //-------------------------------------------------------------------------------------------------------------

// if (team1 > team2){
//   console.log(`The ${game.team1} has more chances to win`);
// } else if(team1 < team2) {
//   console.log(`The ${game.team2} has more chances to win`)
// } else {
//   console.log(`both teams have equal chances to win`)
// };
//------------------------------------------------------------------------------------------------------------

// //------------------------------------------------------------
// const printGoals = function(...footballPlayers) {
//     let number = 0
//     for (let i = 0; i < footballPlayers.length; i++) {
//       number += footballPlayers[i];
//     }
//   console.log(number);
// };
// printGoals(2, 4, 5);
// const x = [2, 4, 7];
// printGoals(...x);
//------------------------------------------------------------
//-------------------------------------------------------------------------------------
//---------------------------------------------------------------------------


// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['pizza', 'Pasta', 'Risotto'],
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // FOR LOOP
// for (let i = 0; i < menu.length; i++) {
//   console.log(`${i + 1}: ${menu[i]}`); // ${i + 1}: Bu tartib raqami berish
// }

// //-------------------------- LOOPING ARRAYS: FOR-OF LOOP -------------------------//
// for(const meal of menu) {
//   console.log(meal);
// };

// LOOPING ARRAYS: FOR-OF LOOP GA TARTIB RAQAMI BERISH
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------//
// const weekDays = ['mon', 'thu', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekDays[1]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// console.log(openingHours);
//-------------------------------------------------------------------//
// //------------------------------------- OPTIONAL CHAINNING (?) ----------------------------------//

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   mon: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // console.log(openingHours); 
// console.log(openingHours?.mon?.open); //OPTIONAL CHAINNING oldiga ? qo'yilsa o'sha yozilgan malumot bo'lsa oladi bo'lmasa undefined beradigan qiladi.
//--------------------------------------------------------------------------------------------------


// console.log('On day mon, we are open at closed');
// console.log('On day fri, we are open at 11');

// const weekDays = ['mon', 'thu', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of weekDays) {
//   const status = openingHours[day]?.open ? `open at ${openingHours[day].open}` : 'closed';
//   console.log(`on ${day}, we are ${status}`);
// };

// // METHOD LARDA OPTIONAL CHAINNING ISHLASHI
// console.log(restaurant.orderRisotto?.(0, 1));

// // // ARRAY LARDA OPTIONAL CHAINNING ISHLASHI
// const users = [
//   {
//     name: 'Dilmurod',
//     Surname: 'Buyukov',
//   },

//   {
//     name: 'Bekzod',
//     Surname: 'Buyukov',
//   },

//   {
//     name: 'Dilshod',
//     Surname: 'Asilov',
//   },

//   {
//     name: 'Gulbahor',
//     Surname: 'Asilova',
//   },

// ];
// console.log(users[1], users[0].name);
// console.log(users?.[4]);

// //------------------------------------
// if (users.length > 0) {
//   console.log(users[1].name);
// }
// else{
//   console.log('User array is empty');
// };
// //------------------------------------

// //------------------------------------
// console.log(users[0]?.name ?? 'Users array is empty');
// //------------------------------------



// //-------------------------- LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES ------------------------//
// Objectni loop qilib ichidagi key larni olish. KEYLAR asosida bizga object yasab beryabdi
// for (const day of Object.keys(openingHours)) {
//   console.log(openingHours[day]); 
// }

// // // Objectni loop qilib ichidagi value larni olish. VALUELAR asosida bizga object yasab beryabdi
// for (const value of Object.values(openingHours)) {
//   console.log(value);
// }

// for (const {open, close} of Object.values(openingHours)) {
//   console.log(open, close); // Objectni ichidagi valueni ichidagi ma'lumotlarni olish.
// };

// // // key va value ham birdaniga kerak bo'lsa ishlatiladi. 
// for (const [key, value] of Object.entries(openingHours)) {
//   console.log({key, value});
// }; 


/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀
*/


'use strict';
//-------------------------------------------- SETS --------------------------------------------//
// SET da ham hutti arrayga o'xshab ma'lumot bo'ladi ammo takrorlanmaydi. Hech qachon bir xil ma'lumot ikki marta takrorlanmaydi.
// new Set([]) qilib yoziladi.

// SET NI O'ZINING METHODLARI 
// const ordersSet = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta', 'pizza']);
// // console.log(ordersSet);
//------------------------------------------------------------------------
// const arr = ['pasta', 'pizza', 'pizza', 'risotto', 'pasta', 'pizza'];
// const arrSet = new Set(arr);
// console.log(arrSet);
// //------------------------------------------------------------------------

// console.log(new Set('Dilmurod'));

// console.log(ordersSet.has('pizza')); //new Set arrayni ichidan biror bir ma'lumotni izlash bo'lsa true chiqadi bo'lmasa false, has bilan aniqlanadi.
// console.log(ordersSet.has('bread'));
// console.log(ordersSet.has('Meat'));

// ordersSet.add('Garlic Bread'); //new Set arrayni ichiga ma'lumot qo'shish bu yerda .push mas add qib qo'shiladi.
// ordersSet.add('Meat');
// console.log(ordersSet);

// ordersSet.delete('risotto'); //new Set arrayni ichidan biror bir ma'lumotni o'chirib tashlash.
// ordersSet.delete('pizza');
// console.log(ordersSet);

// ordersSet.clear(); //new Set arrayni butunlay tozalab yuborish.
// console.log(ordersSet); 

// // Example 1
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const stafftype = new Set(staff); 
// console.log(stafftype); // Bunda Array bilan qilmoqchi bo'lgan ishlarni amalga oshirib bo'lmaydi chunki bu new Set usuli.

// // Example 2
// const staff2 = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const stafftype2 = [...new Set(staff2)]; 
// console.log(stafftype2); // Bunda new Set ni spread operator bilan arrayga aylantirib oldik endi Array bilan nima ish qilmoqchi bo'lsak qilsak bo'ladi. 

//---------------------------- MAPS: FUNDAMENTALS ------------------------//
// const mapTest = new Map([
//   ['Name', ''], 
//   ['Surname', ''], 
//   ['Last Name', ''], 
//   ['Job', ''], 
//   ['Home Location', ''], 
//   ['Current Location', ''], 
//   ['Phone Number', ''], 
//   ['Passport Number', '']]);
// // console.log(mapTest);
// //------------------------------------ 

// const rest = new Map();
// rest.set('name', 'Rayhon'); // "name" => "Rayhon" Mapda yangi ma'lumot qo'shish uchun set ishlatiladi. name key Rayhon value. set dan ketin birinchi key keyin value jo'natiladi.
// rest.set(1, 'Smarqand Darvoza');
// rest.set(2, 'Labzak');
// console.log(rest); // Bunday yozib ma'lumot qo'shish ko'p vaqtni olishi mumkun. 

// rest
//   .set(3, 'Chorsu')
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 9)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed'); //MAP ga bunday ma'lumotlarni qo'shish tepadagi usuldan anncha tezroq bo'ladi. Bunday uslub method chaining deyiladi.
  
// // MAP ni ichidan ma'lumot olish.
// // console.log(rest.get('name'));
// // //---------------------------------

// const time = 22;
// console.log(rest.get(time > rest.get('open') && rest.get('close') > time));

// if (time > 9 && time < 23) {
//   console.log(`We are open`);
// } else {
//   console.log(`We are closed`)
// };

// console.log(rest.has('categories')); //MAPS ichidan biror bir ma'lumotni izlash bo'lsa true chiqadi bo'lmasa false, has bilan aniqlanadi.
// rest.delete(2); //MAPS ni ichidagi ma'lumotni o'chirish.

// Map ga Arrayni key qilib uni consoleda chaqirish.
// const arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest.get(arr));

// //-----------------------
// rest.set(document.querySelector('h1'), 'heading');

//-------------------------------------- MAPS: ITERATION ------------------------------------//
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'], //Birinchi yozilgani key ikkinchisi value hisoblanadi.
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Phyton'],
//   [4, 'JavaScript'],
//   ['correct', 4],
//   [true, 'Correct 🥳'],
//   [false, 'Try again!']
// ]);

// // Quizz app
// console.log(question.get('question'));

// for (const [key, value] of question){
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answer));
//-------------------------------------------------------------------------

//------------------------------------
// const restMap = new Map(Object.entries(restaurant));
// console.log(restMap); //Tayyor turgan Objectni Mapga aylantirish. Objectlarni mapga aylantirishga ehtiyob bo'lib qolsa shunday yo'l tutiladi.
// //------------------------------------

// // Tayyor Mapni Arrayga aylantirsak bo'ladi.
// console.log([...question]); 
// // // console.log([...question.keys()]);
// console.log([...question.values()]); 


//------------------------------------ CODING CHALLENGE 3 -------------------------------------//
/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, it was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀

*/
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
//   ]);

//----------------------------------------------------------------------------------------------------
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
//   ]);

//--------------------- 1 --------------------
// const getting = ([...gameEvents.values()]); // Tayyor Map ichidan valuelar array shaklida olindi.
// // console.log(getting);
// const events = [...new Set(getting)]; // New Set ichiga array yuborildi va bir xil qiymatlar olib tashlandi va yana array shaklida saqlandi.  ...new Set ni array shaklida saqlashga hizmat qiladi.
// console.log(events);

// //--------------------- 2 --------------------
// gameEvents.delete(64);
// console.log(gameEvents); 

// //--------------------- 3 --------------------
// console.log(`An event happened, on  average, every ${ 90 / gameEvents.size } minutes`);

// //--------------------- 4 --------------------
// for (const [key, value] of gameEvents) {
//    if (key < 45) {
//     console.log(` [FIRST HALF] ${key}: ${value}`)
//    }else if (key > 45) {
//     console.log(` [SECOND HALF] ${key}: ${value}`)
//    }
// };
//----------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------//


//-------------------- WORKING WITH  STRINGS ---------------------//
// const airline = 'Tap air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log(airline.length); // Stringlar bilan Arraylar kabi ishlasak bo'ladi.

// console.log( 'B8387'.length); // Bu yerda yozilgan stringning umumiy index raqamini ko'rish.

// console.log(airline.indexOf('air')); // airline ichidagi nechinchi index raqamidan boshlanganini ko'rsatadi.
// console.log(airline.lastIndexOf('i'));

// console.log(airline.slice(4)); //Boshlanish index raqami yoziladi va usherdan kesib olib beradi olib beradi.
// console.log(airline.slice(4, 7)); // Bu yerda airline ichidagi stringning 4 chi index raqamidan 7 chi index raqamigacha olishi tug'risida buyruq berilgan.
// console.log(airline.slice()); // Bunday qilib bo'sh qoldirsak airlinedan nusxa oladida bor hamma narsani chiqarib beradi. 
// console.log(airline.slice(0, 3));

// console.log(airline.slice(0, airline.indexOf(' '))); // airlineda kelgan birichi so'zni olish usuli.
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // airlineda kelgan ohirgi so'zni olish usuli.
// console.log(airline.slice(-1)); // Ohiridagi airline index raqamlaridan olib beradi. -1 busa ohiridan bitta harf -7 busa ohiridan 7 ta harf oladi.
// console.log(airline.slice(1, -1)); // Boshidanam bitta harf qolib ohiridanam bitta harf qolib, o'rtadagi stringni olish kerak bo'lsa.

//--------- EXAMPLE ----------//
/* ABC DEF
   ABC DEF
   ABC DEF
   ABC DEF
*/ //plane o'rindiq joylashuvi A va F Oyna tomonlar, B va E o'rta qatorlar, C va D esa yuradigan tomon qatorlar.

// const checkMiddleSeat = function (seat) {
// // B and E are middle seats
// const s = seat.slice(-1);
// if (s === 'B' || s === 'E') console.log("You've got the middle seat🥶");
// else console.log("You got luck 😎")
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
//----------------------------//

//-----------------------------------------//
// const arr = [1, 2, 3];
// const arr = new Array() // Arrayni orqa tomonda qande yasalishi. Browser hotirasida Array mana shunday yasaladi.

// const obj = {
//   key: 'Value',
// };

// const newSet = new Set();
// const newMap = new Map();

// // const text = 'string';
// console.log(new String('Dilmurod')); // Stringlarni orqa tomondan qande yasalishi. Browser hotirasida string mana shunday yasaladi.
// //-----------------------------------------//

// // .toLowerCase() stringdagi hamma harflarni Kichkina qib beradi.
// const FirstName1 = 'Dilmurod';
// console.log(FirstName1.toLowerCase());

// // .toUpperCase() stringdagi hamma harflarni Katta qib beradi.
// const firstName2 = 'Bekzod';
// console.log(firstName2.toUpperCase());

// // FIX CAPITALIZATION IN NAME
// const passenger = 'diLmUrOd' // Dilmurod
// const passengerLower = passenger.toLowerCase(); // passenger stringdagi hamma harf kichkina qilib olindi.
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1); // passengerLower stringdagi birinchi harf katta qilib olindi va unga qolgan kichik harfkar qo'shildi.
// console.log('passengerCorrect:', passengerCorrect);
// //-----------------------------------------------------

// // COMPARING EMAIL FIX EMAIL
// const email = 'asilov.dilshod.uz@gmail.com';
// const loginEmail = '    AsiLoV.DiLsHod.Uz@GmAil.Com   \n';

//   const lowerEmail = loginEmail.toLowerCase(); // loginEmail ichidagi hamma stringlar kichkina harfga aylantirib olindi.
//  const trimmedEmail = lowerEmail.trim(); // .trim() stringdagi boshi va ohiridagi hamma bo'sh joy va kerakmas narsalarni o'chirib tashlaydi
// console.log('TrimmedEmail:', trimmedEmail);
// console.log(trimmedEmail === email);// test
// //-----------------------------------------------------
 
// FIX EMAIL QISQARTIRIB YOZILGAN CODI
// const loginEmail2 = '    AsiLoV.DiLsHod.Uz@GmAil.Com   \n'.toLowerCase().trim();
// console.log(loginEmail2);
// //-----------------------------------------------------

// //------------ REPLACING ------------//
// const priceGB = '288,97£'; // ==> 288.97$
// const priceUS = priceGB.replace('£', '$').replace(',', '.').replace('288', '199');// Yozilgan veriable ichidagi stringdan nusxa ko'chirib uni ichidagi stringni tashqaridan o'zgartirib yangi veriablega saqlash.
// console.log(priceUS);

// // EXAMPLE
// const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
// const newAnnouncement = announcement.replace('door', 'gate'); // .replace bizga birinchi topgan yozilgan qiymatni o'zgartirib beradi masalan door ni gate ga undan keyin yana door chiqsa o'zgartirmaydi.
// console.log(newAnnouncement); 

// // // EXAMPLE 2
// const announcement2 = 'All passengers come to boarding door 24. Boarding door 23!'
// const newAnnouncement2 = announcement2.replaceAll('door', 'gate'); // String ichidagi Hamma door sozlarni gate ga o'zgartiradi .replaceAll
// console.log(newAnnouncement2); 

//-----------------------------------------------------
// // BOOLEANS
// const plane = 'Airbus A320neo';

// console.log(plane.includes(320)); // True va False Booleans da string ichida yozilayotgan narsa bor yoki yoqligini aniqlash bo'lsa true chiqadi bo'lmasa false.
// console.log(plane.includes('eo'));
// console.log(plane.startsWith('Air')); // Bu Boshidan tekshirmoqchi bo'lsa ishlatiladi.
// console.log(plane.endsWith('eo')); // Bu Ohirini tekshirmoqchi bo'lsa ishlatiladi.
// // Example
// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log(`Part of the New AirBus family`);
// } else {
//   console.log(`Part of the old AirBus family`)
// };
//------------------------------------------------------

//-------------------------------
// console.log('a+very+nice+string+test+something'.replaceAll('+', ' '));
// //-------------------------------

// //----- .split -------
// const firstname = 'Dilmurod Buyukov'.split(' '); // .split bizga text ichida biz ko'rsatib bergan belgi qayerda bo'lsa o'sha joylardan bo'lib chiqadida har bitta bo'lingan alohida narsani Arrayni ichida bitta item qib beradi.
// console.log(firstname); // .split() bizga String Array qib beradi.

// // //---------------------------
// const newName = ['Mr', 'Dilmurod', 'Buyukov'.toUpperCase()].join(' ');
// console.log(newName); // .join() bizga Arrayni String qib beradi.

// //------------- EXAMPLE --------------//
// const capitalizeName = function(name){
// const names = name.split(' ')
// console.log(names)

// const namesUpper = [];

// for (const ism of names){
//   namesUpper.push(ism[0].toUpperCase() + ism.slice(1)); // Yoki yana bir yo'li namesUpper.push(ism.replace(ism[0], ism[0].toUpperCase() ));
// }

// console.log(namesUpper.join(' '));
// };
// const passengers = 'jessica ann smith davis';
// capitalizeName(passengers);
//-------------------------------------//

// //---------- PADDING -----------//
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+').padEnd(35, '*')); // .padStart va .padEnd boshida raqam yoziladi stringni lengh zi belgilanadi agar stringni length izi .padStart da yozilgan raqamdan kam bo'lsa undan keyingi text raqamga teng bo'lmaguncha qo'shiladi.

// // //-------- EXAMPLE CREDIT CARD BOSHIDAGI RAQAMLAR KO'RINMAY OHIRIDAGI 4 TA RAQAM KO'RINADIGAN QILISH ----------//
// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*')
// };
// console.log(maskCreditCard(412441761834112));
// //-------------------------------------------------------------------------------------------------------------//

// //---------- REPEAT ------------//
// const message2 = 'Bad weather... All Departues Delayed... \n'; // message2 ichidagi stringni repeatda yozilgan raqam qiymatigacha takrorlaydi. 
// console.log(message2.repeat(5));

// const planeInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`)
// };
// planeInLine(5);
// planeInLine(3);
// planeInLine(1);
// //------------------------------//



// --------------- CLOSER LOOK AT FUNCTION, FIRST-CLASS, HIGHER ORDER, CALL, APPLY, BIND -------------------//
//--------------------------- DEFAULT PARAMETRS --------------------------//

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//   numPassengers = numPassengers || 1; // Agar bu yerda biror bir qiymat bermasangiz default qiymat qilib 1 ni olib ketadi. O'zi avtomatichestki oladigan qaysidur qiymatni default qiymat deydi.
//   price = price || 199; 

//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   };

//   // console.log(booking);
//   bookings.push(booking);
// };

// createBooking(`LH123`, 4);
// console.log(bookings);
//------------------------------------------------------------------------

// --------------------------- HOW PASSING ARGUMENTS WORKS: VALUE VS. REFFERENCE --------------------------//
// const flight = 'LH123';

// const Dilmurod = {
//   name: 'Dilmurod Buyukov',
//   passport: 'AA123456'
// };

// const checkOver = [];

// const checkIn = function(flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = `Mr. ${passenger.name}`;

//   if(passenger.passport === 'AA123456') alert('Checked in');
//   else alert('Wrong passport');
// };

// const NewPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000);
// };

// NewPassport(Dilmurod);
// checkIn(flight, Dilmurod);
//-----------------------------------------------------------------------

//------------------------ FUNCTIONS ACCEPTING CALLBACK FUNCTIONS ------------------------//
// First-class function
// const oneWord = function(str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };
// // console.log(oneWord('Dilmurod Buyukov'));

// // Higher-order function
// const transformer = function(str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`); // Bu yerda bir function ichida boshqa function ichidagi ma'lumot olib kelinyabdi va boshqa function ichidan ma'lumot sifatida ishlatilyabdi.
// };
// transformer('Dilmurod Buyukov', oneWord);
// //-------------------------------------------------

//---------------------------------------------------------------
// const high5 = function() {
//   console.log(`Hey bro🖐`);
// };
// document.body.addEventListener('click', high5); // Demak bu yerda bizda addEventListener Higher-order function bo'lyabdi, high5 esa First-class function.
// //---------------------------------------------------------------



// //------------------------ FUNCTION RETURNING FUNCTION -------------------//
// const chef = function(chefName) {
//   return function(mealName, team) {
//     console.log(`chef's name is ${chefName}, and his main meal ${mealName}`)
//   }
// }
// chef(`Dilmurod`)(`Osh`);
// //----------------------------------------------

// const greet = function(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };

//   // return 5;
// };
// greet(`Hello`)(`Dilmurod Buyukov`);
// //----------------------------------------------

//----------------------------------------------
// const greet = greeting => name => console.log(`${greeting} ${name}`);
// greet('HI')('DILMUROD');
//----------------------------------------------

//------------------- THE CALL AND APPLY METHODS --------------------//
// -------- CALL METHOD ---------//
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(passengerName, flightNum) {
//     console.log(`${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, passengerName})
//   }
// };
// lufthansa.book('Dilmurod Buyukov', 33);


// euroWings.book = lufthansa.book; 
// euroWings.book('Sarah Williams', 247); 

// const book = lufthansa.book; // BU YERDA BIRINCHI OBJECTDA METHOD YASALDI UNDAN BITTA VERIABLEGA NUSXA OLINDI VA QOLGAN OBJECTLARGO OSHA METHOD .call QILIB CHAQIRILDI.

// const euroWings = {
//   airline: 'EuroWings',
//   iataCode: 'EW',
//   bookings: []
// };
// book.call(euroWings, 'Sarah Willliams', 354);

// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'LX',
//   bookings: []
// };
// book.call(swiss, 'Mike Black', 983);
// // //----------------------------------------------------------------

// // //-------- APPLY METHOD ---------//
// const flightData = ['Anna white', 256];
// book.apply(swiss, flightData); // Agart ma'lumot arrayda keladigan bo'lsa apply bilan ishlatilsa qulayroq bo'ladi.
// book.call(swiss, ...flightData);// ... qilib chaqirilsa call applyning ham hususiyatini o'zlashtirib oladi.
//-------------------------------

//------- THE BIND METHOD --------//
// book.call(eurowings, 254, 'Sarah Williams');

// const bookEw = book.bind(euroWings);
// const bookLf = book.bind(lufthansa);
// const bookSw = book.bind(swiss);

// bookEw('Arnold', 281);
// bookLf('Andrey', 923);
// // --------------------------------

// // PARTIAL APPLICATION
// const addTax = (rate, value) => value + value * rate / 100;
// console.log(addTax(10, 100));


// const addVAT = addTax.bind(null, 23); // Bu narsa Partial application deyiladi qisman tayyor qilib qo'yish. Va null bu yerda object yoqligini bildiradi.
// console.log(addVAT(100)); 
//-----------------------------------



/*
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀
const poll = {
question: "What is your favourite programming language?",
options: ["0: JavaScript", "1: Python", "2: Rust", "3:
C++"],
// This generates [0, 0, 0, 0]. More in the next section!
answers: new Array(4).fill(0),
};
 
*/

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };

//-------------------------------------------------------------------------------------------------------


//------------------------------ IMMEDIATLY INVOKED FUNCTION EXPRESSION (IIFE) --------------------------//
// const runOnce = function() {
//   console.log(`This will never run again!`)
// };
// runOnce(); // Functiondi ikkinchi marta va undan kop marotaba yana qayta ishga tushirish mumkun.
// runOnce();

// (function() {
//   console.log(`This will never run again!`)
// })(); // Mana shunday function turlariga IMMEDIATLY INVOKED FUNCTION deyiladi bu function faqat bir marotaba ishga tushadi.

// (function() {
//   console.log('This function never run again!')
// })();

//-------------- CLOSURES ---------------//
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function() {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`)
//   }; // parent function ichida yasalgan veriablelar returndagi function uchun CLOSURES hisoblanadi.
// };
// const booking = secureBooking();
// booking();
// booking();
// booking();
// booking();
// console.dir(booking);
//---------------------------------------//

//----------- MOST CLOSURE EXAMPLES ----------//

// EXAPMLE 1
// let f;

// const g = function () {
//   const a = 23;

//   f = function () {
//     console.log(a * 2);
//   }; // Bu yerda f function uchun a veriabli closure hisoblanadi. 
// };
// g(); // Bunday function bo'lsa birinchi g functiondi ishga tushirish kerak keyin f ni chunki bu yerda browser birinchi g functiondi o'qiydi so'ngra f functionga o'tadi. Agar birinchi g function ishga tushirilmasa f ga o'tmaydi.
// f();

// let k;
// const h = function() {
//   const b = 888;

//   k = function () {
//     console.log(b * 2); 
//   };// Bu yerda k function uchun b veriabli closure hisoblanadi.
// };
// h();
// k();
//-------------------------------------------------------------

// EXAMPLE 2
// const boardPassengers = function(n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function() {
//       console.log(`We are now boarding all ${n} passengers`);
//       console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 2000); // buni ishga tushishi uchun 3 secound vaqt kerak bo'lsa bundan keyingi codelar ishga tushaveradi browser o'qiyveradi qachonki kutish vaqti tugagandan keyin code ishga tushadi. 

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);
//-------------------------------------------------



//-------- setTimeout ---------//
// setTimeout(function(val, val2, ...val3) {
//   console.log('TIMER', val, val2, val3);
// }, 3000, 'Dilmurod', 'Jonas', false, true, [], {}, 25); // setTimeout 3000 digani console.log da ma'lumot 3s dan keyin chiqadi 1000 busa 1s dan keyin.
// // setTimeout bir martta ishlaydi biz bergan vaqtdan ketin.
// // -----------------------------
// // -----------------------------------------------
// const timeId = setTimeout(function(...val) {
//   console.log('TIMER', val);
// }, 3000);

// const TimeId2 = setTimeout(function(...val) {
//   console.log('TIMER', val);
// }, 3000);

// clearTimeout(timeId); // clearTimeout bizga setTimeoutlarni ishdan to'xtatishga yordam beradi.
// setTimeoutda budilnik yasashda ishlatsa bo'ladi.
//-----------------------------------------------


//------------- setInterval --------------//
// setInterval(function() {
//   console.log(`Every 1 second`);
// }, 1000); // setInterval biz bergan har sekuntda aylanib qo'shilib ishga tushaveradi.
// // setIntervalni soatlarni yasashda ishlatishadi.

// // setInterval(() => {
// //   console.log(new Date()); // .getSeconds() qo'shilsa faqat secondlarni olib beradi.
// // }, 1000);
// // ---------------------------------------//
// // ---------------------------------------//
// const intervalId = setInterval(function() {
//   console.log(`Every 1 second`);
// }, 1000);

// clearInterval(intervalId); // setIntervalni ishdan to'xtatadi.
//---------------------------------------//













