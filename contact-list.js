let contactList = [];

function addNewContact(id, nombres, apellidos, telefono, ubicaciones, ciudad, direccion) {
  const newContact = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    ubicaciones: ubicaciones,
    ciudad: ciudad,
    direccion: direccion
  };

  contactList.push(newContact);
  console.log('New contact added');
}

function deleteContact(id) {
  const index = contactList.findIndex(contact => contact.id === id);
  if (index !== -1) {
    const deletedContact = contactList.splice(index, 1);
    console.log(`Contact with id "${id}" successfully removed.`);
    return deletedContact[0];
  } else {
    console.log(`Contact with id "${id}" not found.`);
    return null;
  }
}

function updateContact(id, newData) {
  const index = contactList.findIndex(contact => contact.id === id);
  if (index !== -1) {
    contactList[index] = { ...contactList[index], ...newData };
    console.log(`Contact with id "${id}" successfully updated.`);
    return contactList[index];
  } else {
    console.log(`Contact with id "${id}" not found.`);
    return null;
  }
}

addNewContact(1, "Christ", "Grant", "3013740202", ["Home", "site"], "Barranquilla", "123 false street");
console.log("My contacts are:", contactList);

const deletedContact = deleteContact(1);
console.log("Deleted contact:", deletedContact);
console.log("The updated contact list is:", contactList);

updateContact(1, { nombres: "Ellen", apellidos: "Albor", telefono: "9876543210" });
console.log("Updated contact list:", contactList);
