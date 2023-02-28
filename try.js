const form = document.getElementById("meme-form");
const container = document.getElementById("meme-container");
const memes = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const topCaption = document.getElementById("top-caption").value;
  const bottomCaption = document.getElementById("bottom-caption").value;
  const imageUrl = document.getElementById("image-url").value;

  const meme = {
    topCaption,
    bottomCaption,
    imageUrl,
  };

  memes.push(meme);

  const memeElement = document.createElement("div");
  memeElement.classList.add("meme");

  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  imageElement.classList.add('image');
  memeElement.appendChild(imageElement);

  const topCaptionElement = document.createElement("div");
  topCaptionElement.classList.add("caption");
  topCaptionElement.classList.add("top-caption");
  topCaptionElement.textContent = topCaption;
  memeElement.appendChild(topCaptionElement);

  const bottomCaptionElement = document.createElement("div");
  bottomCaptionElement.classList.add("caption");
  bottomCaptionElement.classList.add("bottom-caption");
  bottomCaptionElement.textContent = bottomCaption;
  memeElement.appendChild(bottomCaptionElement);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add('remove');
  removeButton.addEventListener("click", () => {
    container.removeChild(memeElement);
    memes.splice(memes.indexOf(meme), 1);
  });
  memeElement.appendChild(removeButton);

  container.appendChild(memeElement);

  form.reset();
});

