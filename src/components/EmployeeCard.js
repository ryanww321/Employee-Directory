import React from "react";
// import "./css/EmployeeCard.css"

//display first name, last name, email, phone number, picture
function EmployeeCard(props){
    return (
    <div>
        <div className="employeeCard ml-2">
            <img src={props.src} alt={props.firstName}></img>
            <p>{props.firstName} {props.lastName}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
        </div>
        <hr></hr>
    </div>
    );
}

export default EmployeeCard;