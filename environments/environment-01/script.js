"use strict";
let userList

fetch("users.json")
.then(response => response.json()
.then(data=>{userList=data;}));




