{
  function getCurrentScriptAndParentTag() {
    //https://stackoverflow.com/questions/10299846/obtain-a-reference-to-script-parent-element
    
    const scriptTagList = document.getElementsByTagName("script");
    const scriptTag = scriptTagList[scriptTagList.length - 1];
    const parentTag = scriptTag.parentNode;
    return [scriptTag, parentTag];
  }

  const [scriptTag, parentTag] = getCurrentScriptAndParentTag();

  const newCard = document.createElement("div");
  newCard.innerHTML = `<div class="cta-card__contents" color="${scriptTag.getAttribute(
    "color"
  )}" logo="${scriptTag.getAttribute("logo")}">
        ${scriptTag.getAttribute("badge") === "true" ? '<div class="badge badge--pink _m-l-1">New</div>' : ""}
        <div class="cta-card__contents__image"></div>
        <h3 class="cta-card__contents__title">${scriptTag.getAttribute(
          "title"
        )}</h3>
        <p class="cta-card__contents__paragraph">
          ${scriptTag.getAttribute("description")}
        </p>
        <div class="cta-card__contents__cta">
          <span>${scriptTag.getAttribute("cta")}</span>
        </div>
      </div>`;
  newCard.classList.add("cta-card");
  parentTag.appendChild(newCard);
}
