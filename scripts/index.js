const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const cardsList = document.querySelector(".cards__list");

function createCardElement({ name, link }) {
  const cardElement = document.createElement("li");
  cardElement.classList.add("card");

  const imageElement = document.createElement("img");
  imageElement.classList.add("card__image");
  imageElement.src = link;
  imageElement.alt = name;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("card__delete-button");
  deleteButton.type = "button";
  deleteButton.setAttribute("aria-label", "Eliminar tarjeta");

  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("card__description");

  const titleElement = document.createElement("h2");
  titleElement.classList.add("card__title");
  titleElement.textContent = name;

  const likeButton = document.createElement("button");
  likeButton.classList.add("card__like-button");
  likeButton.type = "button";
  likeButton.setAttribute("aria-label", "Botón Me gusta");

  descriptionElement.append(titleElement, likeButton);
  cardElement.append(imageElement, deleteButton, descriptionElement);

  return cardElement;
}

initialCards.forEach((cardData) => {
  cardsList.append(createCardElement(cardData));
});

const editProfilePopup = document.querySelector("#edit-popup");
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileCloseButton = editProfilePopup.querySelector(".popup__close");
const editProfileForm = editProfilePopup.querySelector("#edit-profile-form");
const nameInput = editProfileForm.elements.name;
const descriptionInput = editProfileForm.elements.description;
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

function openPopup(popupElement) {
  popupElement.classList.add("popup_is-opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_is-opened");
}

function handleEditProfileOpen() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(editProfilePopup);
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(editProfilePopup);
}

editProfileButton.addEventListener("click", handleEditProfileOpen);
editProfileCloseButton.addEventListener("click", () =>
  closePopup(editProfilePopup),
);
editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);
