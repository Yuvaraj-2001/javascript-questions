let firstName = "John";
let lastname = "Doe"
function getName(){
    return firstName;
}

function getLastName(){
    return lastname;
}

export default function getFullName(){
    return firstName + ' ' + lastname;
}