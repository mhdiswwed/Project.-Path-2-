'use strict';
const contacts = [
  {
    name: "Bertie Yates",
    image: "images/bertie.jpg",
    info: "images/icons8-info-128.png",
    edit: "images/icons8-edit-64.png",
    delete: "images/icons8-delete-100.png"
  },
  {
    name: "Hester Hogan",
    image: "images/hester.jpg",
    info: "images/icons8-info-128.png",
    edit: "images/icons8-edit-64.png",
    delete: "images/icons8-delete-100.png"
  },
  {
    name: "Larry Little",
    image: "images/larry.jpg",
    info: "images/icons8-info-128.png",
    edit: "images/icons8-edit-64.png",
    delete: "images/icons8-delete-100.png"
  },
  {
    name: "Sean Walsh",
    image: "images/sean.jpg",
    info: "images/icons8-info-128.png",
    edit: "images/icons8-edit-64.png",
    delete: "images/icons8-delete-100.png"
  }
];

const contactsList = document.getElementById('contactsList');

contacts.forEach(contact => {
  // צור li
  const li = document.createElement('li');
  li.className = 'contact-card';

  // תמונה
  const img = document.createElement('img');
  img.src = contact.image;
  img.alt = contact.name;
  img.title=contact.name;
  img.className = 'contact-img';

  // שם
  const infoDiv = document.createElement('div');
  infoDiv.className = 'contact-info';
  const name = document.createElement('strong');
  name.textContent = contact.name;
  infoDiv.appendChild(name);

  // פעולות
  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'contact-actions';

  const createButton = (title, src) => {
    const button = document.createElement('button');
    button.title = title;
    const icon = document.createElement('img');
    icon.src = src;
    icon.width = 18;
    button.appendChild(icon);
    return button;
  };

  actionsDiv.appendChild(createButton("info", contact.info));
  actionsDiv.appendChild(createButton("Edit", contact.edit));
  actionsDiv.appendChild(createButton("Delete", contact.delete));

  // הרכבה
  li.appendChild(img);
  li.appendChild(infoDiv);
  li.appendChild(actionsDiv);

  // הוספה לרשימה
  contactsList.appendChild(li);
});
