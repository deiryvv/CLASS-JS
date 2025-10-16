/*function calculateDiscontededPrice (price, discountporcentage){
    const discount = (price * discountporcentage) / 100
    const priceWhitDiscount = price - discount

    return priceWhitDiscount 
}

const originalPrice = 100
const discountporcentage = 20
const finalprice = calculateDiscontededPrice(originalPrice, discountporcentage)

console.log('Original Price: $' + originalPrice)
console.log('Discount: ' + discountporcentage + '%')
console.log('Price whit discount: $' + finalprice)
*/

const rokect = {
    name: 'falcon 9',
    launchMessage: function launchMessage () {
        console.log(this.name)
    }   
}

rokect.launchMessage()

const Greting = (name) => {
    return ´Hola, ${name}´
};


const newGreting = (name) => 'hola' ${name};

const resultFun1 = Igreting('juan');
const resultFun2 = newGreting('pedro');

console.log('resultFun1')
