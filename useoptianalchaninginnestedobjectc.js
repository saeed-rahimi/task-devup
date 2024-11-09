"use strict"
function getUserContact(user) {
   
    return user.contact && user.contact.phone ? user.contact.phone : "Phone number not available";
  }
  

  const userWithPhone = {
    name: "Ali",
    contact: { phone: "123-456-7890" },
  };
  
  const userWithoutPhone = {
    name: "saeed"
  };
  

  console.log(getUserContact(userWithPhone));  
  console.log(getUserContact(userWithoutPhone)); 
   
  