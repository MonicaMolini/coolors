let buttonShades = document.querySelectorAll(".generator_color_shades-btn");
let hex = document.querySelector(".generator_color_hex");
let supercontainer = document.querySelectorAll(".generator__palette");
let containers = document.querySelectorAll(".generator_color_multicompare_inner");
let buttons = document.querySelectorAll(".generator_color_btns");
let texts = document.querySelectorAll(".generator_color");
let add = document.querySelectorAll(".generator__palette__addBar__addButton");
let multicompare =  document.querySelectorAll(".generator_color_multicompare");
let favoritesSidebar;

const obscurer = document.getElementById("obscurer");

const colorBox = document.querySelector(".saveColor__content__colorBox");

const colorBoxName = document.querySelector(
  ".saveColor__content__colorBox__name"
);
const colorBoxColorLabel = document.querySelector(".colorBoxLabel");
const colorBoxColor = document.querySelector(
  ".saveColor__content__colorBox__color"
);

const colorBoxPaletteLabel = document.querySelector(".paletteBoxLabel");

const colorBoxPalette = document.querySelector(
  ".saveColor__content__paletteBox"
);

const saveColor = document.querySelector(".saveColor");
const saveColorButton = document.querySelector(".saveColor__content__save");
const colorNameInput = document.querySelector("#colorName");
const saveColorHeader = document.querySelector(".saveColor__header");

let saving;

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + 50 + "%)";
}
function hexToHSL2(H) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

}
if(localStorage.getItem("coolors") === null) localStorage.setItem("coolors", JSON.stringify([]))

let savedColors = JSON.parse(localStorage.getItem("coolors"));

saveColorButton.addEventListener("click", (e) => {

  const c = colorNameInput.value;

  if(c === "") return;
  if(savedColors.some((el) => el.name === c)){ 
    alert("Name already existing");
    return;
  }

  const toSave = {
    name: c,
    type: saving,
    color: saving === "palette" ? pg.currentPalette : colorBoxName.getAttribute("color")
  };

  fromBottom(saving.charAt(0).toUpperCase() + saving.slice(1) + " saved successfully");

  //Color saved successfully
  //Color delete successfully
  //Palette saved successfully

  savedColors.push(toSave);

  localStorage.setItem("coolors", JSON.stringify(savedColors));

  window.removeEventListener("click", exitSave);
  obscurer.setAttribute("active", "false");

  pg.rerender(pg.currentPalette)
})

function getShades(x) {  
  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}

function getShades(x) {      

  const target = document.querySelector(`[target="${x}"]`) 
  const { ColorTranslator } = colortranslator; 
  const colors = []; 
    const col = target.innerHTML;    
    const baseColor = hexToHSL(`#${col}`)        
    const tints = ColorTranslator.getBlendHEX(baseColor, "#000000", 13);
    const firstColor = ColorTranslator.getBlendHEX(baseColor,"#ffffff", 13).reverse();
    firstColor.pop();
    tints.pop();
    const colorsShade = [...firstColor, ...tints];   
    const finder = ColorFinder(colorsShade);
    const i = colorsShade.findIndex(el => el === finder.findClosestColor(`#${col}`));
    colorsShade[i] = `#${col}`;
    colors.push(colorsShade);
    
    return colors  
}

function hasSomeParentTheClass(element, classname) {
    if (element.className.split(' ').indexOf(classname)>=0) return element;
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}


function generate() {
  const ref = this; 
  const x= this.getAttribute("index");
  const target = document.querySelector(`[target="${x}"]`) 
  const col = target.innerHTML;  
  const baseColor = hexToHSL2(`#${col}`)    
  const colors = getShades(x);   
  supercontainer.forEach((el) => {el.setAttribute("hidden", "true"); el.style = `background-color: ${el.style.backgroundColor};`});
  this.setAttribute("hidden", "false")
  containers.forEach((el)=> {el.style.cssText = " display: flex; flex-direction:column; justify-content: flex-start"})  
  multicompare.forEach((el) => el.style = `display: flex;`) 

  function showNamesBack(e){
    const shades = document.getElementsByClassName("swatch");
    //console.log(shades);
    let inside = -1;
    let colorClicked;
    for(let i = 0; i < shades.length; i++){
      if(e.target === shades[i] || shades[i].contains(e.target)) inside = i;
    } 
    if(inside > -1){
      const currentIndex = parseInt(ref.getAttribute("index"));
      colorClicked = hasSomeParentTheClass(e.target, "swatch");
      console.log(pg.currentPalette);
      pg.currentPalette[currentIndex].color = colorClicked.getAttribute("color");
      pg.currentPalette[currentIndex].name = ntc.name(
        colorClicked.getAttribute("color")
      )[1];
      pg.currentPalette[currentIndex].white = pickTextColorBasedOnBgColorAdvanced(colorClicked.getAttribute("color"), true, false);

      if(pg.blockedColors[currentIndex].name !== "N") pg.blockedColors[currentIndex] = pg.currentPalette[currentIndex];
      
      

    }

    supercontainer.forEach((el) => {el.setAttribute("hidden", "false");});
    window.removeEventListener("click", showNamesBack)
    pg.rerender(pg.currentPalette);
  }

  setTimeout(() => window.addEventListener("click", showNamesBack), 100);

  colors.forEach((el)=> {
    
    el.forEach((c) => {   
    const box = document.createElement("div");
    box.style.backgroundColor = c;
    box.classList = "swatch";
    box.setAttribute("color", c);
    const light = "#fff";
    const dark = "#000";    
    box.innerHTML = `<p class="color">${c.substring(
      1
    )}</p><svg width="18" height="18" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" fill="currentColor" fill-opacity="0.01"/>
      <path d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z" fill="currentColor" stroke="currentColor" stroke-width="4"/>
      </svg>`;    
    box.style.color += pickTextColorBasedOnBgColorAdvanced(c, light, dark);     
    //console.log(box.firstChild.innerHTML, col)
    if (`#${box.firstChild.innerHTML}` === `#${col}`) {
      //console.log(box);
      box.firstChild.toggleAttribute("dot");
    }   
    document.querySelector(`[container="${x}"]`).append(box) 
   
    }
  )
   });    
}

function exitSave(e){

    if (e.target !== saveColor && !saveColor.contains(e.target)) {
      window.removeEventListener("click", exitSave);
      obscurer.setAttribute("active", "false")
    }

}


function reset(event){
  containers.forEach((el)=> {el.style.cssText = " display: none;"})  
  buttons.forEach((el) => (el.style.display = "flex"));
  texts.forEach((el) => (el.style.display = "flex"));
  event.stopImmediatePropagation()
}


function pickTextColorBasedOnBgColorAdvanced(bgColor, lightColor, darkColor) {
  var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  var uicolors = [r / 255, g / 255, b / 255];
  var c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.179 ? darkColor : lightColor;
}

const openSidebar =  document.querySelector("#openFavoritesSidebar")

  openSidebar.addEventListener("click", () => {
    pg.openedSidebar = !pg.openedSidebar;
    favoritesSidebar.toggleAttribute("open");
    openSidebar.toggleAttribute("open");
  });



class PaletteGenerator {
  openedSidebar = false;
  colorQuantity = 5;
  blockedColors = [
    { name: "N" },
    { name: "N" },
    { name: "N" },
    { name: "N" },
    { name: "N" },
  ];
  currentPalette = [
    { name: "N" },
    { name: "N" },
    { name: "N" },
    { name: "N" },
    { name: "N" },
  ];
  paletteDisplay = document.querySelector(".generator");

  constructor() {
    window.addEventListener("keyup", (e) => {
      if (e.code === "Space") {
        this.rerender();
      }
    });
  }

  static hexToRgb(hex) {
    hex = hex.substring(1);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { red: r, green: g, blue: b };
  }

  static generateRandomColor() {
    let color = `#${Math.floor(Math.random() * 255)
      .toString(16)
      .toUpperCase()}${Math.floor(Math.random() * 255)
      .toString(16)
      .toUpperCase()}${Math.floor(Math.random() * 255)
      .toString(16)
      .toUpperCase()}`;
    while (color.length < 7) {
      color += "0";
    }
    return color;
  }

  getPalette(input) {
    return input.map((e) => {
      if (e.name === "N") {
        const ret = {};
        ret.color = PaletteGenerator.generateRandomColor();
        ret.name = ntc.name(ret.color)[1];
        ret.white = pickTextColorBasedOnBgColorAdvanced(ret.color, true, false);
        return ret;
      } else return e;
    });
  }

  getColorElement(color, index) {
    const generator__palette = document.createElement("div");
    generator__palette.classList.add("generator__palette");
    generator__palette.style.backgroundColor = color.color;
    generator__palette.style.color = color.white ? "#fff" : "#000";
    generator__palette.innerHTML = `<div class="generator_color_multicompare">
                <div container="${index}" class="generator_color_multicompare_inner">                    
                </div>
            </div>
            <div class="generator_color_container">
                <div class="generator_color_btns">
                <div index="${index}" class="generator_color_remove-btn tippy" data-tippy-content='Remove color' data-tooltip="Remove color" data-tooltip-container="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.8" height="10" viewBox="0 0 9.8 10">
                    <title>Risorsa 6icon6</title>
                    <g id="Livello_2" data-name="Livello 2">
                      <g id="Livello_1-2" data-name="Livello 1">
                        <path d="M.7,1,9.1,9.3" style="fill: none;stroke: currentColor;stroke-linecap: square;stroke-miterlimit: 10"/>
                        <path d="M9.1.7.7,9.1" style="fill: none;stroke: currentColor;stroke-linecap: square;stroke-miterlimit: 10"/>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="generator_color_contrast-btn" tippy-content-1='Check contrast' data-tooltip="Check contrast" data-tooltip-container="child">
                            <div class="bubb-content" data-bubb="my-toggle" style="display: none;">
                            <div style="background: white; color: black;">Testo</div>
                            </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.2" height="13.2" viewBox="0 0 13.2 13.2">
                      <title>Risorsa 5icon5</title>
                      <g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                          <circle cx="6.6" cy="6.6" r="6.1" style="fill: none;stroke: currentColor;stroke-miterlimit: 10"/>
                          <line x1="6.6" y1="0.5" x2="6.6" y2="12.7" style="fill: none;stroke:currentColor;stroke-miterlimit: 10"/>
                        </g>
                      </g>
                    </svg>

                </div>
                <div index="${index}" class="generator_color_shades-btn tippy" data-tippy-content='View shades' data-tooltip="View shades" data-tooltip-container="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.7" height="14.1" viewBox="0 0 13.7 14.1">
                      <title>Risorsa 7icon7</title>
                      <g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                          <rect x="0.5" y="0.5" width="12.7" height="13.1" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
                          <line x1="4.7" y1="0.5" x2="4.6" y2="13.6" style="fill: none;stroke: currentColor;stroke-miterlimit: 10"/>
                          <line x1="9.2" y1="0.3" x2="9.2" y2="13.6" style="fill: none;stroke: currentColor;stroke-miterlimit: 10"/>
                          <line x1="0.2" y1="9.4" x2="13.2" y2="9.4" style="fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.75px"/>
                          <line x1="0.5" y1="5.1" x2="13.2" y2="5.1" style="fill: none;stroke: currentColor;stroke-miterlimit: 10"/>
                        </g>
                      </g>
                    </svg>

                </div>
                <div color="${
                  color.color
                }" class="generator_color_save-btn tippy" data-tippy-content='Save color' data-tooltip-container="child" data-tooltip="Save color">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.4" height="12.3" viewBox="0 0 14.4 12.3">
                      <title>Risorsa 3icon3</title>
                      <g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                          <path d="M13,5.9a60.4,60.4,0,0,1-5.6,5.7c-.6.1-.8-.4-1.2-.7L1.6,6.2A3.3,3.3,0,0,1,2.6.9a2.9,2.9,0,0,1,3.2.5L7,2.5c.2.3.3.3.5,0L8.6,1.4a3,3,0,0,1,4.3.3A3,3,0,0,1,13,5.9Z" style="fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 1.2594854831695557px"/>
                        </g>
                      </g>
                    </svg>
                </div>
                <div class="generator_color_drag-btn tippy" data-tippy-content='Drag' data-tooltip="Drag" data-tooltip-container="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10.1" height="4.3" viewBox="0 0 10.1 4.3">
                      <title>Risorsa 20icon16</title>
                      <g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                          <g>
                            <line x1="0.6" y1="2.2" x2="9.5" y2="2.2" style="fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.876777480411065px"/>
                            <polygon points="2.3 4.3 2.7 3.9 0.8 2.2 2.7 0.4 2.3 0 0 2.2 2.3 4.3 "style="fill: currentColor;"/>
                            <polygon points="7.8 4.3 7.4 3.9 9.3 2.2 7.4 0.4 7.8 0 10.1 2.2 7.8 4.3" style="fill: currentColor;"/>
                          </g>
                        </g>
                      </g>
                    </svg>
                </div>
                <div class="generator_color_copy-btn tippy" index="${index}" onclick="fromBottom('Color copied to the clipboard!'); copyHex('#${color.color.substring(
      1
    )}')" value="#${color.color.substring(
      1
    )}" data-tippy-content='Copy HEX' data-tooltip="Copy HEX" data-tooltip-container="child">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.4" height="13.4" viewBox="0 0 13.4 13.4">
                      <title>Risorsa 1icon1</title>
                      <g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                          <g>
                            <polyline points="9.4 4.7 9.4 0.5 0.5 0.5 0.5 9.4 4.7 9.4" style="fill: none;stroke: currentColor;stroke-miterlimit: 10"/>
                            <polygon points="9.4 4.7 9.4 9.4 4.7 9.4 4.7 12.9 12.9 12.9 12.9 4.7 9.4 4.7" style="fill: none;stroke: currentColor;stroke-miterlimit: 10"/>
                          </g>
                        </g>
                      </g>
                    </svg>

                </div>
                <div name="${color.name}" color="${
      color.color
    }" index="${index}" white="${
      color.white
    }" class="generator_color_lock-btn tippy" locked="${
      this.blockedColors[index].name !== "N"
    }" data-tippy-content='Toggle lock ' data-tooltip-container="child" data-tooltip="Toggle lock">
                    ${
                      this.blockedColors[index].name === "N"
                        ? `<svg xmlns="http://www.w3.org/2000/svg" width="12.4" height="14.2" viewBox="0 0 12.4 14.2">
                      <title>Risorsa 4icon4</title>
                      <g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                          <rect x="0.5" y="4.7" width="11.4" height="9.02" rx="1.8" style=" fill: currentColor; stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
                          <path d="M8.6,1.5C6.4-.5,3.2.4,3.2,4.7" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
                        </g>
                      </g>
                    </svg>`
                        : `<svg xmlns="http://www.w3.org/2000/svg" width="10.8" height="12.4" viewBox="0 0 10.8 12.4">
                    <title>Risorsa 20icon-lock-close</title>
                    <g id="Livello_2" data-name="Livello 2">
                      <g id="Livello_1-2" data-name="Livello 1">
                        <rect x="0.4" y="4.1" width="10" height="7.91" rx="1.8" style="stroke: #000;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.876777480411065px"/>
                        <path d="M8.2,4.1a5,5,0,0,0-.8-2.7A2.3,2.3,0,0,0,4.3.8,3.2,3.2,0,0,0,2.9,3.2a2.8,2.8,0,0,0-.1.9" style="fill: none;stroke: #000;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.876777480411065px"/>
                      </g>
                    </g>
                  </svg>`
                    }

                </div>
            </div>
            </div>
            
            <div class="generator_color">
            <div class="generator_color_hex" target="${index}" data-tooltip="Select color">${color.color.substring(
      1
    )}</div>
            <div class="generator_color_color-info">${color.name}</div>
            </div>
            <div class="generator__palette__addBar generator__palette__addBar--right"><div index="${index}" position="right" class="generator__palette__addBar__addButton"><span>+</span></div></div>
            <div class="generator__palette__addBar generator__palette__addBar--left"><div index="${index}" position="left" class="generator__palette__addBar__addButton"><span>+</span></div></div>`;
    return generator__palette;
  }

  getFavoritesSidebarContent() {
    const favoritesBody = document.createElement("div");
    favoritesBody.classList.add("favoritesSidebar__body");

    savedColors.forEach((el, index) => {
      const item = document.createElement("div");
      item.classList.add("favoritesSidebar__body__item");
      item.setAttribute("index", index);

      if (el.type === "color") {
        item.innerHTML += `<div class="favoritesSidebar__body__item__color" onclick="fromBottom('Color copied to the clipboard!'); navigator.clipboard.writeText('${
          el.color
        }')" style="background-color:${
          el.color
        }; color: ${pickTextColorBasedOnBgColorAdvanced(
          el.color,
          "white",
          "black"
        )}"><span>${ntc
          .name(el.color)[1]
          .replaceAll(" ", '<span class="transparent">_</span>')}</span></div>`;
      } else {
        let add = '<div class="favoritesSidebar__body__item__palette">';
        el.color.forEach((c) => {
          add += `<div style="background-color:${c.color}; color: ${
            c.white ? "white" : "black"
          }" onclick="fromBottom('Palette copied to the clipboard!'); navigator.clipboard.writeText('${getColors()}')";><span>${c.name.replaceAll(
            " ",
            '<span class="transparent">_</span>'
          )}</span></div>`;
        });
        add += `</div>`;
        item.innerHTML += add;
      }

      item.innerHTML += `
        <div class="favoritesSidebar__body__item__name">${el.name} 
          <div class="favoritesSidebar__body__item__name__icons">
            <svg class="favoritesSidebar__body__item__name__icons__generator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12">
              <path d="M20,3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v2c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3,1.103,0,2,.897,2,2v1c0,1.103-.897,2-2,2h-7c-2.206,0-4,1.794-4,4v.184c-1.161,.414-2,1.514-2,2.816v4c0,1.654,1.346,3,3,3s3-1.346,3-3v-4c0-1.302-.839-2.402-2-2.816v-.184c0-1.103,.897-2,2-2h7c2.206,0,4-1.794,4-4v-1c0-2.206-1.794-4-4-4Zm-2,2c0,.552-.449,1-1,1H3c-.551,0-1-.448-1-1V3c0-.552,.449-1,1-1h14c.551,0,1,.448,1,1v2Zm-7,16c0,.552-.449,1-1,1s-1-.448-1-1v-4c0-.552,.449-1,1-1s1,.448,1,1v4Z"/>
            </svg>
            <svg class="favoritesSidebar__body__item__name__icons__delete" xmlns="http://www.w3.org/2000/svg" width="9.8" height="10" viewBox="0 0 9.8 10">
              <title>Risorsa 6icon6</title>
              <g id="Livello_2" data-name="Livello 2">
                <g id="Livello_1-2" data-name="Livello 1">
                  <path d="M.7,1,9.1,9.3" style="fill: none;stroke: currentColor;stroke-linecap: square;stroke-miterlimit: 10"/>
                  <path d="M9.1.7.7,9.1" style="fill: none;stroke: currentColor;stroke-linecap: square;stroke-miterlimit: 10"/>
                </g>
              </g>
            </svg>
          </div>
        </div>
      `;

      function getColors() {
        return JSON.stringify(el.color.map((p) => p.color))
          .replaceAll("[", "")
          .replaceAll("]", "")
          .replaceAll('"', "")
          .replaceAll(",", " ");
      }

      favoritesBody.appendChild(item);
    });

    return favoritesBody;
  }

  getFavoritesSidebar() {
    const sideBar = document.createElement("div");
    sideBar.classList.add("favoritesSidebar");

    if (this.openedSidebar) sideBar.setAttribute("open", "true");

    sideBar.innerHTML = `
      <div class="favoritesSidebar__header">Library</div>
    `;
    return sideBar;
  }

  rerender(input = 0) {
    this.paletteDisplay.innerHTML = "";
    const palette = this.getPalette(input === 0 ? this.blockedColors : input);

    this.currentPalette = palette;

    palette.forEach((color, index) =>
      this.paletteDisplay.appendChild(this.getColorElement(color, index))
    );
    const favoritesSidebarTemp = this.getFavoritesSidebar();
    favoritesSidebarTemp.appendChild(this.getFavoritesSidebarContent());
    this.paletteDisplay.appendChild(favoritesSidebarTemp);

    this.attachEvents(palette, this);
  }

  attachEvents(currentPalette, ref) {
    tippyCreator("tippy");

    tippy(document.querySelector(".generator_color_contrast-btn"), {
      content: function (reference) {
        return reference.getAttribute("tippy-content-1");
      },
      allowHTML: true,
    });

    //bubb();
/*
    const contrastBtn = document.querySelectorAll('.generator_color_contrast-btn');

    contrastBtn.addEventListener('click', () => {
    bubb.toggle('my-toggle');
    });*/

    /*const contrastBtn = document.querySelectorAll('.generator_color_contrast-btn');

    const config = {
      bubbContrast: {
        text: 'Contenuto da mostrare nel toggle',
        _: {
          background: 'white',
          toggle: true
        }
      }
    };
    bubb(config);*/

    /*const contrastBtn = document.querySelector('.generator_color_contrast-btn');
  
  contrastBtn.addEventListener('click', () => {
    tippyContrast.show();
  });
  
  document.addEventListener('click', (e) => {
    if (!tippyContrast.popper.contains(e.target)) {
      tippyContrast.hide();
    }
  });*/

    //Add Button
    document
      .querySelectorAll(".generator__palette__addBar__addButton")
      .forEach(function (button) {
        button.addEventListener("click", function () {
          let position = parseInt(this.getAttribute("index"));
          position += this.getAttribute("position") === "right" ? 1 : 0;
          if (currentPalette.length < 10) {
            currentPalette.splice(position, 0, { name: "N" });
            ref.blockedColors.splice(position, 0, { name: "N" });
          }

          ref.rerender(currentPalette);
        });
      });
    //Remove Button
    document
      .querySelectorAll(".generator_color_remove-btn")
      .forEach((button) => {
        button.addEventListener("click", function () {
          const position = parseInt(this.getAttribute("index"));
          if (currentPalette.length > 2) {
            currentPalette.splice(position, 1);
            ref.blockedColors.splice(position, 1);
          }
          ref.rerender(currentPalette);
        });
      });
    //Lock Button
    document
      .querySelectorAll(".generator_color_lock-btn")
      .forEach(function (button) {
        button.addEventListener("click", function () {
          const index = parseInt(this.getAttribute("index"));
          const name = this.getAttribute("name");
          const color = this.getAttribute("color");
          const white = JSON.parse(this.getAttribute("white"));
          this.setAttribute("locked", `${ref.blockedColors[index].name === "N"}`);
          if (ref.blockedColors[index].name !== "N"){
            this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12.4" height="14.2" viewBox="0 0 12.4 14.2">
                      <title>Risorsa 4icon4</title>
                      <g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                          <rect x="0.5" y="4.7" width="11.4" height="9.02" rx="1.8" style=" fill: currentColor; stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
                          <path d="M8.6,1.5C6.4-.5,3.2.4,3.2,4.7" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
                        </g>
                      </g>
                    </svg>`;
          } 
          else {
            this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10.8" height="12.4" viewBox="0 0 10.8 12.4">
                      <title>Risorsa 20icon-lock-close</title>
                      <g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                          <rect x="0.4" y="4.1" width="10" height="7.91" rx="1.8" style="stroke: #000;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.876777480411065px"/>
                          <path d="M8.2,4.1a5,5,0,0,0-.8-2.7A2.3,2.3,0,0,0,4.3.8,3.2,3.2,0,0,0,2.9,3.2a2.8,2.8,0,0,0-.1.9" style="fill: none;stroke: #000;stroke-linecap: round;stroke-linejoin: round;stroke-width: 0.876777480411065px"/>
                        </g>
                      </g>
                    </svg>`;
          }
          if (ref.blockedColors[index].name != "N")
            ref.blockedColors[index] = { name: "N" };
          else
            ref.blockedColors[index] = {
              name: name,
              color: color,
              white: white,
            };
        });
      });

    //Save Button
    document
      .querySelectorAll(".generator_color_save-btn")
      .forEach(function (button) {
        button.addEventListener("click", function () {
          saving = "color";
          saveColorHeader.innerText = "Save Color";
          saveColor.style.height = "20rem";
          colorBoxColorLabel.style.display = "block";
          colorBox.style.display = "flex";
          colorBoxPalette.style.display = "none";
          colorBoxPaletteLabel.style.display = "none";
          obscurer.setAttribute("active", "true");
          const color = this.getAttribute("color");
          colorBoxColor.style.backgroundColor = color;
          colorBoxName.setAttribute("color", color);
          setTimeout(() => window.addEventListener("click", exitSave), 100);
        });
      });

    //Delete Button

    document
      .querySelectorAll(".favoritesSidebar__body__item__name__icons__delete")
      .forEach((del, index) => {
        del.addEventListener("click", () => {
          savedColors = savedColors.filter((el, i) => i !== index);
          this.rerender(this.currentPalette);
          localStorage.setItem("coolors", JSON.stringify(savedColors));
        });
      });

    //Show on Generator Button

    document
      .querySelectorAll(".favoritesSidebar__body__item__name__icons__generator")
      .forEach((show, index) => {
        show.addEventListener("click"  , () => {
          this.rerender(savedColors[index].color);
          this.blockedColors = [
            { name: "N" },
            { name: "N" },
            { name: "N" },
            { name: "N" },
            { name: "N" },
          ];
        })
      });

    //favoritesSidebar

    buttonShades = document.querySelectorAll(".generator_color_shades-btn");
    hex = document.querySelector(".generator_color_hex");
    supercontainer = document.querySelectorAll(".generator__palette");
    containers = document.querySelectorAll(
      ".generator_color_multicompare_inner"
    );
    buttons = document.querySelectorAll(".generator_color_btns");
    texts = document.querySelectorAll(".generator_color");
    add = document.querySelectorAll(".generator__palette__addBar__addButton");
    multicompare = document.querySelectorAll(".generator_color_multicompare");
    buttonShades.forEach((el) => el.addEventListener("click", generate));
    favoritesSidebar = document.querySelector(".favoritesSidebar");

    //Save Button
  }
}

const pg = new PaletteGenerator();
pg.rerender();


document.getElementById("savePalette").addEventListener("click", () => {
  saving = "palette";
  saveColorHeader.innerText = "Save Palette";
  saveColor.style.height = "25rem";
  colorBoxColorLabel.style.display = "none";
  colorBox.style.display = "none";

  colorBoxPalette.style.display = "flex";
  colorBoxPaletteLabel.style.display = "block";
  obscurer.setAttribute("active", "true");
  setTimeout(() => window.addEventListener("click", exitSave), 100);

  colorBoxPalette.innerHTML="";
  pg.currentPalette.forEach((color) => {
    const paletteColor = document.createElement("div");
    paletteColor.classList.add("saveColor__content__paletteBox__color");
    paletteColor.setAttribute("color", color.color);
    paletteColor.style.backgroundColor = color.color;
    colorBoxPalette.appendChild(paletteColor);
  })
})


/*<div class="generator__palette" >
            <div class="generator_color_multicompare">
                <div class="generator_color_multicompare_inner">                    
                </div>
            </div>
            <div class="generator_color_container">
                <div class="generator_color_btns">
                <div class="generator_color_remove-btn" data-tooltip="Remove color" data-tooltip-container="child">
                    <img src="svg/icon-remove.svg" alt="">
                </div>
                <div class="generator_color_contrast-btn" data-tooltip="Check contrast" data-tooltip-container="child">
                    <img src="svg/icon-contrast.svg" alt="">
                </div>
                <div class="generator_color_shades-btn" data-tooltip="View shades" data-tooltip-container="child"><img
                        src="svg/icon-shades.svg" alt="">
                    </div>
                <div class="generator_color_save-btn" data-tooltip-container="child" data-tooltip="Save color"><img
                        src="svg/icon-heart.svg" alt="">
                    </div>
                <div class="generator_color_drag-btn" data-tooltip="Drag" data-tooltip-container="child"><img
                        src="svg/icon-drag.svg" alt="">
                    </div>
                <div class="generator_color_copy-btn" data-tooltip="Copy HEX" data-tooltip-container="child"><img
                        src="svg/icon-copy.svg" alt="">
                    </div>
                <div class="generator_color_lock-btn" data-tooltip-container="child" data-tooltip="Toggle lock"><img
                        src="svg/icon-lock.svg" alt="">
                    </div>
            </div>
            </div>
            
            <div class="generator_color">
            <div class="generator_color_hex" data-tooltip="Select color">F8FCDA</div>
            <div class="generator_color_color-info">Light yellow</div>
            </div>
        </div>*/

/*

*/
