var contacts = []; // empty array to store contacts as objects

menu(); //displays main menu

function getContact(contacts) { //to get a contact and add to contacts list
    var name = prompt("Enter contact name: ");
    var email = prompt("Enter contact e-mail: ");
    contacts.push({ //creates an array of objects
        name: name,
        email: email
    })
}


function showContact(contacts) { //to list all contacts
    var disp = [];
    for (let i = 0; i < contacts.length; i++) {
        var dispName = contacts[i].name //takes name from array of objects
        var dispEmail = contacts[i].email //takes email from array of objects
        disp.push("\n" + (i + 1) + ". Name: " + dispName.concat(" E-mail: " + dispEmail)); //concates name and email with formatting and stores in 'disp' array
    }
    alert(disp); //displays formatted contact list(array)
}

function searchContact(contacts) { //to search a contact by name
    var searchName = prompt("Enter name to search: ");
    for (let i = 0; i < contacts.length; i++) {
        if (searchName === contacts[i].name) { //checks contacts name with search name
            alert((i + 1) + ". Name: " + contacts[i].name + " Email: " + contacts[i].email); //alerts the matching contact
            break;
        }
    }
}

function delContact(contacts) { //to delete contacts by index
    var index = prompt("Enter contact index: ");
    if (index > 0) {
        contacts.splice((index - 1), 1); //deletes using splice function
    } else {
        alert("Invalid Input!");
    }
}

function menu() { //main menu
    var choice = prompt("Choose your option: \n 1. Add\n 2.Show\n 3.Search\n 4.Delete\n 5.Exit")
    switch (choice) {
        case '1':
            getContact(contacts); //gets contacts and adds to list
            menu();
            break;
        case '2':
            showContact(contacts); //shows contact list
            menu();
            break;
        case '3':
            searchContact(contacts); //search contact by name
            menu();
            break;
        case '4':
            delContact(contacts); //delete contact by index
            showContact(contacts)
            menu();
            break;
        case '5':
            exitApp(); //exits the process
            break;
        default:
            alert("Invalid Input!"); //on choosing wrong option
            menu();
            break;
    }
}
