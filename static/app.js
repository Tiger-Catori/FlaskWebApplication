/**
 * Application of Principles of Programming
 * Assignment Template 2021 - Javascript
 * @author Tim Orman
 */

/**
 * event handlers can go here
 */
//calculator event handlers - one for each button
//journal event handlers - one for each button

/**
 * callAPI()
 *
 * This function uses the built-in (to the browser) XMLHttpRequest object to request data from a server
 * The responseText property returns the response from the server as a string.
 *
 * You can use this function to complete calls to the api from the calculator functions.
 * Examine the url and elResponse parameters.
 * What types of values should they contain when passing them as arguments and calling this function?
 * @param url
 * @param elResponse
 */
function callAPI(url, elResponse) {
    //use the code from the lab task to complete the function
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { 
            var response = JSON.parse(this.responseText);
            console.log(response);
            document.getElementById(elResponse).setAttribute("value", response.result);
        }
        //document.getElementById(elResponse).setAttribute("value", response.result);
    }
    xhttp.send();
}

/* Toggle */
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})


/*JSON */
const thought = [
    {
        thought : "Wrong is spelled wrong in the dictionary."
    },
    {
        thought : "A 'lethal dose' is also a 'lifetime supply'."
    },
    {
        thought : "If you live to be 70 years old you will spend TEN YEARS of your life on Monday."
    },
    {
        thought : "Nothing is on fire, fire is on things."
    },
    {
        thought : "The letter ‘W’ is made of two ‘V’, but it is pronounced as double ‘U’; why so?"
    },
    {
        thought : "If ‘giver’ is the opposite of ‘taker’; then why do the words caregiver and caretaker mean the same thing?"
    }

]

var random = Math.floor(Math.random() * (thought.length))
document.getElementById('display').innerHTML = thought[random].thought;


/**
 * Calculator Stuff
 */
/**
 * addNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function addNumbers(){
    let num1 = Number(document.getElementById("add1").value);
    let num2 = Number(document.getElementById("add2").value);
    let result = num1 + num2;
    document.getElementById("inputAdd").setAttribute("value", result); 
}
var addButton = document.getElementById("btnAdd");
addButton.addEventListener('click', addNumbers, false);

/**
 * addNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function addNumbersAPI(){
    //use the code from the lab task to complete the function
    let num1 = Number(document.getElementById("add1").value);
    let num2 = Number(document.getElementById("add2").value);
    let addURL = '/api/add?num1='+num1+'&num2='+num2;
    callAPI(addURL, "inputAdd");
}
var addAPI = document.getElementById("btnAddAPI");
addAPI.addEventListener('click', addNumbersAPI, false);

/**
 * subtractNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function subtractNumbers(){
    let num1 = Number(document.getElementById("sub1").value);
    let num2 = Number(document.getElementById("sub2").value);
    let result = num1 - num2;
    document.getElementById("inputSubtract").setAttribute("value", result);
}
var subButton = document.getElementById("btnSubtract");
subButton.addEventListener('click', subtractNumbers, false);


/**
 * subtractNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function subtractNumbersAPI(){
    let num1 = Number(document.getElementById("sub1").value);
    let num2 = Number(document.getElementById("sub2").value);
    let subURL = '/api/subtract?num1='+num1+'&num2='+num2;
    callAPI(subURL, "inputSubtract")
}
var subAPI = document.getElementById("btnSubtractAPI");
subAPI.addEventListener('click', subtractNumbersAPI, false);

/**
 * multiplyNumbers()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function multiplyNumbers(){
    let num1 = Number(document.getElementById("multi1").value);
    let num2 = Number(document.getElementById("multi2").value);
    let result = num1 * num2;
    document.getElementById("inputMultiply").setAttribute("value", result);
}
var multiButton = document.getElementById("btnMultiply");
multiButton.addEventListener('click', multiplyNumbers, false);


/**
 * multiplyNumbersAPI()
  * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function multiplyNumbersAPI(){
    let num1 = Number(document.getElementById("multi1").value);
    let num2 = Number(document.getElementById("multi2").value);
    let multiURL = '/api/multiply?num1='+num1+'&num2='+num2;
    callAPI(multiURL, "inputMultiply")
}
var multiAPI = document.getElementById("btnMultiplyAPI");
multiAPI.addEventListener('click', multiplyNumbersAPI, false)


/**
 * divideNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 * NOTE: once you have this function operational you need to validate the divisor
 * and ensure you do not have divide by zero errors.
 */
function divideNumbers(){
    let num1 = Number(document.getElementById("divi1").value);
    let num2 = Number(document.getElementById("divi2").value)
    let result;
    if (num2 == 0){
    result = 'Invalid Divisor Try Again';
    document.getElementById("inputDivide").setAttribute("value", result);
    } else{
        result = num1 / num2;
    document.getElementById("inputDivide").setAttribute("value", result);
    }
}
var divideButton = document.getElementById("btnDivide");
divideButton.addEventListener('click', divideNumbers, false);



/**
 * divideNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function divideNumbersAPI(){
    let num1 = Number(document.getElementById("divi1").value);
    let num2 = Number(document.getElementById("divi2").value);
    let divURL = '/api/divide?num1='+num1+'&num2='+num2;
    callAPI(divURL, "inputDivide")
}
var divAPI = document.getElementById("btnDivideAPI");
divAPI.addEventListener('click', divideNumbersAPI, false)


/**
 * Journal Stuff
 */
/**
 * getJournalEntries() - Get list of journal entries
 *
 * Write a function that will
 * * retrieve the JSON file of journal entries
 * * format the entries into a single string with appropriate html tags
 * * set the content of the "listEntries" element to the formatted string
 */
function getJournalEntries(){
    let url = "/api/journal";
    let response = "ERROR occurred while getting journal entries.";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            let entries = JSON.parse(response.result);
            let journalList = "";
           for (item of entries.journals) {
             journalList = journalList + "<li onclick='populateEntry(this)' name='" + String(item.name) +  "' date='" + String(item.date) + "' note='" + String(item.note) + "' id= '" + entries.journals.indexOf(item) + "'>" + String(item.name) + "</li>";
           }
           document.getElementById('listEntries').innerHTML = journalList;
        }
        
    }
    xhttp.open('GET', url, true);
    xhttp.send();
}
/**
 * Dont forget to call the function that will retrieve the list entries when the page loads
 */
getJournalEntries();

/**
 * populateEntry(item)
 *
 * Write a function that will
 * * get the data for a single journal entry from item parameter
 * * extract the individual pieces of data from the entry
 * * and put each piece of information into the text fields on the html page
 * @param item
 */
function populateEntry(item){
    document.getElementById('idEntry').value = item.getAttribute('id');
    document.getElementById('dateEntry').value = item.getAttribute('date');
    document.getElementById('namEntry').value = item.getAttribute('name');
    document.getElementById('txtNote').value = item.getAttribute('note');
}

/**
 * addEntry() - add a journal entry
 *
 * Write a function that will
 * * create a new node list item element
 * * create a new text node element for the new list item and attach it to the new list item
 * * set other values of the list item - date, class, id, notes, student
 * * append the new node to the list of entries
 */
function addEntry(){
    var listItems = document.getElementById('listEntries');
    var idEntry = document.getElementById('idAdd');
    var dateEntry = document.getElementById('dateAdd');
    var nameEntry = document.getElementById('nameAdd');
    var textEntry = document.getElementById('txtAdd')
    var li = document.createElement('li');
    li.setAttribute('id', idEntry.value);
    li.setAttribute('date', dateEntry.value);
    li.setAttribute('name', nameEntry.value);
    li.setAttribute('note', textEntry.value);
    li.setAttribute('onclick', 'populateEntry(this)')
    li.appendChild(
        document.createTextNode(nameEntry.value)
    );
    listItems.appendChild(li);
}
var addButton = document.getElementById('btnAddEntry');
addButton.addEventListener('click', addEntry, false);
/**
 * deleteEntry()
 *
 * Write a function that will
 * * delete a journal entry (list item) from the html page
 */
function deleteEntry(){
    document.getElementById(document.getElementById("idEntry").value).remove();
}
var deleteButton = document.getElementById('btnDeleteEntry');
deleteButton.addEventListener('click', deleteEntry, false);

/**
 * uploadJournal()
 *
 * Write a function that will
 * * get the data from the list entries on the html page
 * * put the entries from the list into a collection
 * * convert the collection into a JSON object
 * * send JSON object to the url in the flask api
 * * and handle the response
 */
function uploadJournal(){
    var listEntries = document.getElementById('listEntries');
    var items = listEntries.getElementsByTagName('li');
    var uploadObject = {journals: []};

    for (let item of items) {
        var obj = {}
        obj.id = item.getAttribute("id");
        obj.name = item.getAttribute("name");
        obj.date = item.getAttribute("date");
        obj.note = item.getAttribute("note");
        uploadObject.journals.push(obj);
    }

    //console.log("Upload Object " + uploadObject.journals);

    //upload it server request
    let xhttp = new XMLHttpRequest();
    let url = "/api/journal";
    let response = "The upload was sucessful.";
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            alert(response.result);
        }
    }    
    var journalString = JSON.stringify(uploadObject)
    xhttp.open('PUT', url, true);
    xhttp.setRequestHeader("Content-Type", "application/json")
    xhttp.send(journalString);
}

var uploadButton = document.getElementById('btnUploadJournal');
uploadButton.addEventListener('click', uploadJournal, false);


/* PRACTICE **************************************************************/
function testJSON() {
    console.log("testJSON output");
    let personObject = {
        name: "John", 
        age: 31,
        city: "New York"
    };
    personString = JSON.stringify(personObject);
    console.log(personString);
}
testJSON();

// let peopleCollection = {"people": [
//     { name: "Lin", age: 21, city: "Tokyo" },
//     { name: "John", age: 31, city: "New York" },
//     { name: "Cheryl", age: 19, city: "Rome" }
// ]};
// let peopleString = JSON.stringify(peopleCollection);
// console.log(peopleString);