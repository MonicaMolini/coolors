{
  const scriptTagList = document.getElementsByTagName("script");
  const scriptTag = scriptTagList[scriptTagList.length - 1];
  const parentTag = scriptTag.parentNode;
  const newCard = document.createElement("div");
  newCard.innerHTML = `<div class="cta-card__contents" color="${scriptTag.getAttribute("color")}" logo="${scriptTag.getAttribute("logo")}">
        <div class="cta-card__contents__image"></div>
        <h3 class="cta-card__contents__title">iOS App</h3>
        <p class="cta-card__contents__paragraph">
          Create, browse and save palettes on the go.
        </p>
        <div class="cta-card__contents__cta">
          <span>View on the App Store</span>
        </div>
      </div>`;
  newCard.classList.add("cta-card");
  parentTag.appendChild(newCard);
  console.log(parentTag);
}
