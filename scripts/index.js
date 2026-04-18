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

const cardTemplate = document.querySelector("#card-template").content;
const cardsList = document.querySelector(".cards__list");

const editProfilePopup = document.querySelector("#edit-popup");
const newCardPopup = document.querySelector("#new-card-popup");
const imagePopup = document.querySelector("#image-popup");

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const editProfileCloseButton = editProfilePopup.querySelector(".popup__close");
const newCardCloseButton = newCardPopup.querySelector(".popup__close");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close");

const editProfileForm = editProfilePopup.querySelector("#edit-profile-form");
const newCardForm = newCardPopup.querySelector("#new-card-form");

const nameInput = editProfileForm.elements.name;
const descriptionInput = editProfileForm.elements.description;
const cardNameInput = newCardForm.elements["place-name"];
const cardLinkInput = newCardForm.elements.link;

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

function handleEscClose(evt) {
  if (evt.key !== "Escape") {
    return;
  }

  const openedPopup = document.querySelector(".popup_is-opened");
  if (!openedPopup) {
    return;
  }

  closeModal(openedPopup);
}

function openModal(modalElement) {
  modalElement.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modalElement) {
  modalElement.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscClose);
}

function handleDeleteButtonClick(cardElement) {
  cardElement.remove();
}

function handleCardImageClick(name, link) {
  imagePopupCaption.textContent = name;
  imagePopupImage.src = link;
  imagePopupImage.alt = name;
  openModal(imagePopup);
}

function getCardElement(name = "Sin título", link = "./images/placeholder.jpg") {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_is-active");
  });
  deleteButton.addEventListener("click", () => handleDeleteButtonClick(cardElement));
  cardImage.addEventListener("click", () => handleCardImageClick(name, link));

  return cardElement;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
}

initialCards.forEach((cardData) => {
  renderCard(cardData.name, cardData.link, cardsList);
});

function handleEditProfileOpen() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(editProfilePopup);
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editProfilePopup);
}

function handleAddCardOpen() {
  newCardForm.reset();
  openModal(newCardPopup);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(cardNameInput.value, cardLinkInput.value, cardsList);
  closeModal(newCardPopup);
}

editProfileButton.addEventListener("click", handleEditProfileOpen);
editProfileCloseButton.addEventListener("click", () => closeModal(editProfilePopup));
editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

addCardButton.addEventListener("click", handleAddCardOpen);
newCardCloseButton.addEventListener("click", () => closeModal(newCardPopup));
newCardForm.addEventListener("submit", handleCardFormSubmit);

imagePopupCloseButton.addEventListener("click", () => closeModal(imagePopup));

function handleOverlayClick(evt) {
  if (evt.target.classList.contains("popup")) {
    closeModal(evt.target);
  }
}

editProfilePopup.addEventListener("click", handleOverlayClick);
newCardPopup.addEventListener("click", handleOverlayClick);
imagePopup.addEventListener("click", handleOverlayClick);
