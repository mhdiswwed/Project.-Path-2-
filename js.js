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




// קפתור עליונ מוחק כל רשימת אנשי הקשר י
// Get the delete button by its ID
const deleteBtn = document.getElementById('clearAllBtn');

// When the button is clicked, confirm and remove the element with id "contactsList"
deleteBtn.addEventListener('click', () => {
  const confirmed = confirm("האם אתה בטוח שברצונך למחוק את כל רשימת אנשי הקשר?");
  if (confirmed) {
    const elementToDelete = document.getElementById('contactsList');
    if (elementToDelete) {
      elementToDelete.remove(); // Remove the element from the DOM
    }
  }
});

// טיפול בלחיצות על Read More ו-Edit
articles.addEventListener('click', e => {
  if (e.target.classList.contains('addBtn')) {
    const index = e.target.dataset.index;
    const article = articlesData[index];

    modalTitle.textContent = article.title;
    modalText.textContent = article.content;
    modalImage.src = article.image;
    modalImage.alt = article.title;

    articleModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  if (e.target.classList.contains('addBtn')) {
    const index = e.target.dataset.index;
    const article = articlesData[index];

    // מילוי שדות בטופס
    document.getElementById('name').value = article.name;
    document.getElementById('image').value = article.image;
    document.getElementById('info').value = article.info;
    document.getElementById('edit').value = article.edit;


    editIndex = index; // מצב עריכה

    popupArticle.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
});

// סגירת המודל
document.getElementById('closeModal').addEventListener('click', () => {
  articleModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// רינדור ראשון
renderArticles();


