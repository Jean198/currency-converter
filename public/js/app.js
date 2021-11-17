
// Getting inputs...................................................
const forexForm= document.querySelector('form')

const currencyDisplay=document.getElementById('currencyDisplay')
const currencyNameDisplay=document.getElementById('currencyNameDisplay')

const dateDisplay=document.getElementById('dateDisplay')

const amount= document.getElementById("amount")

dateDisplay.textContent=new Date().getDate() +'-'+ new Date().getMonth()+'-'+new Date().getFullYear()




// Getting the value of a selected option................................................................................
function displayCurrency(){
    var currency= document.getElementById("select");
    var selectedCurrency= currency.options[currency.selectedIndex].value;
    
    return selectedCurrency;
}



// Fetching data and printing the results.........................................................................
forexForm.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    
    currencyDisplay.innerHTML='Calculating...'
    const targetcurr1=displayCurrency();
    currencyNameDisplay.innerHTML=targetcurr1

    setInterval(() => {
        currencyDisplay.classList.add("changesize");
        
        
    }, 1000);
    setInterval(() => {
        
        currencyDisplay.classList.remove("changesize");
        
    }, 2000);

    setTimeout(() => {

    const targetcurr=displayCurrency(); 

    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=cfb063591e74ecbd7b37a4cd1a187357&base=EUR&symbols='+targetcurr).then(response => {
        response.json().then(data => {
            console.log(data.rates)
            
            currencyDisplay.innerHTML=(data.rates[targetcurr]*amount.value).toFixed(2) + " "
            
        })
        
        
    });
        
    }, 1000);
    
    

})
