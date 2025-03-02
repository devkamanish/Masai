
// Title: L1 - Dynamic User Role Message with Object Properties

// Problem Statement: Write a program that dynamically generates a message for different user roles stored in an object. The object contains a user’s name, role, and active status. Based on the role and active status, print the following messages:

// If the user is "admin" and is active, print "Admin Access Granted!".

// If the user is "admin" and is not active, print "Admin Access Revoked".

// If the user is "user" and is active, print "User Access Granted!".

// If the user is "user" and is not active, print "User Access Revoked".

// For any other role, print "Access Denied".



function generateMsg(user) {
    return user.role === "admin" ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked") :
           user.role === "user" ? (user.active ? "User Access Granted!" : "User Access Revoked") :
           "Access Denied";
}

let user = { name: "Alice", role: "admin", active: true };

console.log(generateMsg(user))





