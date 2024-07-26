/*
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var consoldiate = require("consolidate");
var dust = require('dustjs-helpers');
var pq = require('pg');
var fs = require('fs');
*/
const { default: inquirer } = require("inquirer");


const questionOne = [
    {
        type: "list",
        message: "What would you like to do? (use arrow keys)",
        name: "value",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
    }
];

function doPrompt() {
    inquirer
    .prompt(questionOne)
    .then((data) => {
        if(data.value == "View All Employees") {
            ViewAllEmployees();
        }
        else if(data.value == "Add Employee") {
            AddEmployee();
        } else if(data.value == "Update Employee Role") {
            UpdateEmployeeRole();
        } else if(data.value == "View All Roles") {
            ViewAllRoles(); 
        } else if(data.value == "Add Role") {
            AddRole();
        } else if(data.value == "View All Departments") {
            ViewAllDept();
        } else if(data.value == "Add Department") {
            AddDept();
        }
    });
}

function ViewAllEmployees() {
    console.log("[All Employees Database] \n");
    doPrompt();
}

function AddEmployee() {
    console.log("[Prompt Questions to Add Employee] \n");
    doPrompt();
}

function UpdateEmployeeRole() {
    console.log("[Update Employee Prompt] \n");
    doPrompt();
}

function ViewAllRoles() {
    console.log("[Role database] \n");
    doPrompt();
}

function AddRole() {
    console.log("[Prompt to add role] \n");
    doPrompt();
}

function ViewAllDept() {
    console.log("[Department database] \n");
    doPrompt();
}

function AddDept() {
    console.log("[prompts to add department] \n");
    doPrompt();
}



function init() {    
    doPrompt()
}

init();