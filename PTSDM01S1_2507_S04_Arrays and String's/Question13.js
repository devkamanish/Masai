// Title: L1 - Task Rescheduling System: Managing Priorities Dynamically

// Problem Statement: You are developing a task management system that tracks pending tasks for the day. Create an array with five tasks. Implement the following operations without using specific method references:

// Remove the first task from the list. Add two new high-priority tasks to the beginning of the list. Replace the last task in the list with a new task. Log the updated task list after all operations.


let tasks = ["Complete report", "Attend meeting", "Reply to emails", "Review code", "Plan project"];

for (let i = 0; i < tasks.length - 1; i++) {
    tasks[i] = tasks[i + 1];
}
tasks.length--; 

tasks.length += 2; 
for (let i = tasks.length - 1; i >= 2; i--) {
    tasks[i] = tasks[i - 2]; 
}
tasks[0] = "Urgent Client Call"; 
tasks[1] = "Fix Critical Bug";   

tasks[tasks.length - 1] = "Update Documentation";

console.log("Updated Task List:", tasks);
