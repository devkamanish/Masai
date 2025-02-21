


function privilegeManagementSys(obj) {

    if (obj.role === "admin") {
        (obj.experience > 5 && obj.department === "IT" && obj.active) ? console.log("Full IT Admin Access") :
            (obj.experience > 5 && obj.active) ? console.log("Full General Admin Access") :
                (obj.active && obj.experience <= 5) ? console.log("Limited Admin Access") :
                    (obj.active == false) ? console.log("Admin Access Revoked") : null


    }

    if (obj.role === "manager") {

        (obj.active && obj.experience > 3 && obj.department === "Sales") ? console.log("Full Sales Manager Access") :
            (obj.active && obj.experience > 3) ? console.log("Full Manager Access") :
                (obj.active && obj.experience <= 3) ? console.log("Limited Manager Access") :
                    (obj.active == false) ? console.log("Manager Access Revoked") : null
    }

    if (obj.role === "user") {
        (obj.active && obj.department === "Support") ? console.log("Priority Support Access") :
            (obj.active) ? console.log("User Access") :
                (obj.active == false) ? console.log("User Access Revoked") : null
    } else {
        console.log("Invalid Role")
    }
}


// Example ....
let person = { role: "user", experience: 5, active: false, department: "Support" };
privilegeManagementSys(person)



