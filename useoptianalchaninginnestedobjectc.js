"use strict"
function getUserContact(user) {
    // Check if user has a contact object and if it contains a phone number
    return user.contact && user.contact.phone ? user.contact.phone : "Phone number not available";
  }
  
  // Provided objects in the image
  const userWithPhone = {
    name: "Alice",
    contact: { phone: "123-456-7890" },
  };
  
  const userWithoutPhone = {
    name: "Bob"
  };
  
  // Calling the function with provided objects and inspecting the result
  console.log(getUserContact(userWithPhone));      // Expected output: "123-456-7890"
  console.log(getUserContact(userWithoutPhone));   // Expected output: "Phone number not available"
   
  