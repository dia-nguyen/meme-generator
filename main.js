"use strict";

/** Generates div with meme on form submission */
function generateMeme(event) {
  event.preventDefault();
  // Get form values
  const form = document.querySelector("form");
  let imgUrl = form.querySelector("input[name=URL]").value;
  let topText = form.querySelector("input[name=top-text]").value;
  let bottomText = form.querySelector("input[name=bottom-text]").value;

  // Creates container div, insert image and text, and appends it to wrapper
  const memeWrapper = document.querySelector(".meme-wrapper");
  let newMeme = document.createElement("div");
  newMeme.className = "meme-container";
  newMeme.innerHTML = `<h2 class="text top-text"> ${topText} </h2>
    <img src="${imgUrl}"/>
    <h2 class="text bottom-text"> ${bottomText} </h2>
    <button onclick="deleteMeme(this)" class="btn-delete">X</button>`;
  memeWrapper.prepend(newMeme);

  // hides empty state notice
  const notice = document.querySelector(".notice");
  notice.classList.add("hide");
  // Reset form
  form.reset();
  // shows alert when meme generated
  showAlert("Meme Successfully Generated!");
}

/** Removes meme div on click */
function deleteMeme(element) {
  // Finds targetted element and delets parent element (meme container)
  const selectedMeme = element.parentElement;
  selectedMeme.remove();

  // shows empty state notice if there are no memes in wrapper
  const memeWrapper = document.querySelector(".meme-wrapper");
  if (memeWrapper.children.length === 0) {
    const notice = document.querySelector(".notice");
    notice.classList.remove("hide");
  }
  // shows alert when meme is deleted
  showAlert("Meme Deleted");
}

/** Shows Alert when a meme is generated or deleted*/
function showAlert(msg) {
  const alert = document.querySelector(".alert");
  alert.innerHTML = `<p>${msg}</p>`;
  alert.classList.remove("hide");

  setTimeout(() => {
    alert.classList.add("hide");
  }, 2000);
}
