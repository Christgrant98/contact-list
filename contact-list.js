let contactList = ["John Smith", "Alice Johnson", "Michael Davis", "Emily Brown"];
console.log(contactList);

function addNewContact(name) {
  contactList.push(name);
  console.log('New contact added');
}

addNewContact("David Wilson");
let newContactList = contactList;
console.log("My contacts are:", newContactList);

function deleteContact(name) {
  const index = newContactList.findIndex(contact => contact === name);
  if (index !== -1) {
    newContactList.splice(index, 1);
    console.log(`Contact "${name}" successfully removed.`);
  }
}

deleteContact("Alice Johnson");
let deletedContactList = newContactList;
console.log("The updated contact list is:", deletedContactList);
