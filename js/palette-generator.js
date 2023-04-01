/*const body = {
  prompt: "Hello How are you?",
  temperature: 0.5,
  max_tokens: 64,
};

const headers = new Headers();

headers.set("Authorization", `Bearer ${API_KEY}`);
headers.set("Content-Type", "application/json");

console.log(headers);

const options = {
  headers: headers,
  method: "POST",
  body: JSON.stringify(body),
};

(async () => {
  console.log(options);
  const stream = await fetch(url, options);
  console.log(await stream.text());
})();*/
let buttonShades = document.querySelectorAll(".generator_color_shades-btn");
let hex = document.querySelector(".generator_color_hex");
let supercontainer = document.querySelectorAll(".generator__palette");
let containers = document.querySelectorAll(".generator_color_multicompare_inner");
let buttons = document.querySelectorAll(".generator_color_btns");
let texts = document.querySelectorAll(".generator_color");
let add = document.querySelectorAll(".generator__palette__addBar__addButton");
let multicompare =  document.querySelectorAll(".generator_color_multicompare");
let favoritesSidebar;

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

function getShades(x) {    
  console.log(x)
  const target = document.querySelector(`[target="${x}"]`) 
  const { ColorTranslator } = colortranslator; 
  const colors = []; 
    const col = target.innerHTML;    
    const baseColor = hexToHSL(`#${col}`)  
    console.log(baseColor);    
    const tints = ColorTranslator.getBlendHEX(baseColor, "#000000", 13);
    const firstColor = ColorTranslator.getBlendHEX(baseColor,"#ffffff", 13).reverse();
    firstColor.pop();
    tints.pop();
    const colorsShade = [...firstColor, ...tints];     
    colors.push(colorsShade)
    // console.log(target);
    // console.log(colors);
    return colors  
}

function generate() {
  const ref = this; 
  const x= this.getAttribute("index");
  const colors = getShades(x); 
  //buttons.forEach((el) => (el.style.display = "none"));
  //texts.forEach((el) => (el.style.display = "none"));
  //add.forEach((el) => (el.style.display = "none"));
  supercontainer.forEach((el) => {el.setAttribute("hidden", "true"); el.style = `background-color: ${el.style.backgroundColor};`});
  this.setAttribute("hidden", "false")
  containers.forEach((el)=> {el.style.cssText = " display: flex; flex-direction:column; justify-content: flex-start"})  
  multicompare.forEach((el) => el.style = `display: flex;`) 

  function showNamesBack(){
    console.log("clicked")
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
    const light = "#fff";
    const dark = "#000";    
    box.innerHTML = `<p class="color" style="display: none">${c.substring(1)}</p>`;    
    const boxes = document.querySelectorAll(".swatch");  
    boxes.forEach((el)=> el.addEventListener("mouseover", show))
    boxes.forEach((el)=> el.addEventListener("mouseout", hide))

    function hide(event){
      box.innerHTML = `<p class="color" style="color:${pickTextColorBasedOnBgColorAdvanced(c, light, dark)}; display: none">${c.substring(1)}</p>`;
      if (box.innerHTML === `<p class="color" style="color:${pickTextColorBasedOnBgColorAdvanced(c, light, dark)}; display: none">${hex}</p>`) {
        box.innerHTML = `<svg width="18" height="18" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect width="18" height="18" fill="currentColor" fill-opacity="0.01"/>
        <path d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z" fill="currentColor" stroke="currentColor" stroke-width="4"/>
        </svg>`;
      }
      event.stopImmediatePropagation()
    } 
    function show(event){
      box.innerHTML = `<p class="color" style="color:${pickTextColorBasedOnBgColorAdvanced(c, light, dark)};">${c.substring(1)}</p>`     
      event.stopImmediatePropagation()
    }    

    console.log(box.innerHTML, `<p class="color" style="display: none">${hex.innerHTML}</p>`)

    if (box.innerHTML === `<p class="color" style="display: none">${hex.innerHTML}</p>`) {
      box.innerHTML = `<svg width="18" height="18" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" fill="currentColor" fill-opacity="0.01"/>
      <path d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z" fill="currentColor" stroke="currentColor" stroke-width="4"/>
      </svg>`;
    }   
    document.querySelector(`[container="${x}"]`).append(box) 
   
    }
  )
   });    
}


//buttonShades.forEach((el) => el.addEventListener("click", generate));

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
    favoritesSidebar.toggleAttribute("open");
    openSidebar.toggleAttribute("open");
  });

class PaletteGenerator {
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

    console.log(r, g, b);

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
        //const {red, green, blue} = PaletteGenerator.hexToRgb(ret.color);
        //ret.white = (red * 0.299 + green * 0.587 + blue * 0.114) < 186;
        ret.white = pickTextColorBasedOnBgColorAdvanced(ret.color, true, false);
        return ret;
      } else return e;
    });
  } 
  

  getColorElement(color, index) {
    const generator__palette = document.createElement("div");
    generator__palette.classList.add("generator__palette");
    //generator__palette.setAttribute("hidden", "true");
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
                <div class="generator_color_contrast-btn tippy" data-tippy-content='Check contrast' data-tooltip="Check contrast" data-tooltip-container="child">
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
                <div class="generator_color_save-btn tippy" data-tippy-content='Save color' data-tooltip-container="child" data-tooltip="Save color">
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
                <div class="generator_color_copy-btn tippy" data-tippy-content='Copy HEX' data-tooltip="Copy HEX" data-tooltip-container="child">
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
                <div name="${color.name}" color="${color.color}" index="${index}" white="${color.white}" class="generator_color_lock-btn tippy" data-tippy-content='Toggle lock' data-tooltip-container="child" data-tooltip="Toggle lock">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.4" height="14.2" viewBox="0 0 12.4 14.2">
                      <title>Risorsa 4icon4</title>
                      <g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                          <rect x="0.5" y="4.7" width="11.4" height="9.02" rx="1.8" style=" fill: currentColor; stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
                          <path d="M8.6,1.5C6.4-.5,3.2.4,3.2,4.7" style="fill: none;stroke: currentColor;stroke-linecap: round;stroke-linejoin: round"/>
                        </g>
                      </g>
                    </svg>

                </div>
            </div>
            </div>
            
            <div class="generator_color">
            <div class="generator_color_hex" target="${index}" data-tooltip="Select color">${color.color.substring(1)}</div>
            <div class="generator_color_color-info">${color.name}</div>
            </div>
            <div class="generator__palette__addBar generator__palette__addBar--right"><div index="${index}" position="right" class="generator__palette__addBar__addButton"><span>+</span></div></div>
            <div class="generator__palette__addBar generator__palette__addBar--left"><div index="${index}" position="left" class="generator__palette__addBar__addButton"><span>+</span></div></div>`;
    return generator__palette;
  }

  getFavoritesSidebar(){
    const sideBar = document.createElement("div");
    sideBar.classList.add("favoritesSidebar");

    sideBar.innerHTML = `
      <div class="favoritesSidebar__header">Library</div>
      <div class="favoritesSidebar__body"></div>
    `;
    return sideBar;
  }


  rerender(input = 0) {
    console.log("rendering")
    this.paletteDisplay.innerHTML = "";
    const palette = this.getPalette(input === 0 ? this.blockedColors : input);

    this.currentPalette = palette;

    // console.log(palette)

    palette.forEach((color, index) =>
      this.paletteDisplay.appendChild(this.getColorElement(color, index))
    );
    this.paletteDisplay.appendChild(this.getFavoritesSidebar())
    this.attachEvents(palette, this);
  }

  attachEvents(currentPalette, ref){
  tippyCreator('tippy');  
    //Add Button
    document.querySelectorAll(".generator__palette__addBar__addButton").forEach(function(button)  {
      button.addEventListener("click", function(){
        let position = parseInt(this.getAttribute("index"));
        position += this.getAttribute("position") === "right" ? 1 : 0;
        if(currentPalette.length < 10){
          currentPalette.splice(position, 0, { name: "N" });
          ref.blockedColors.splice(position, 0, { name: "N" });
        }
        
        //console.log(currentPalette)
        ref.rerender(currentPalette)
      })
    });
    //Remove Button
    document.querySelectorAll(".generator_color_remove-btn").forEach(button => {
      button.addEventListener("click", function(){
        const position = parseInt(this.getAttribute("index"));
        if(currentPalette.length > 2){
          currentPalette.splice(position, 1);
          ref.blockedColors.splice(position, 1);
        }
        //ref.blockedColors = currentPalette.filter(e => ref.blockedColors.some(j => {console.log(j, e.color); return j.color === e.color}))
        ref.rerender(currentPalette)
      })
    });
    //Lock Button
    document
      .querySelectorAll(".generator_color_lock-btn")
      .forEach(function (button) {
        button.addEventListener("click", function () {
          const index = parseInt(this.getAttribute("index"));
          const name = this.getAttribute("name");
          const color = this.getAttribute("color");
          const white = JSON.parse(this.getAttribute("white"))
          if (ref.blockedColors[index].name != "N")
            ref.blockedColors[index] = { name: "N" };
          else ref.blockedColors[index] = { name: name, color: color, white: white};

          console.log(ref.blockedColors);


        });
      });
    
    //favoritesSidebar
    

  

    buttonShades = document.querySelectorAll(".generator_color_shades-btn");
    hex = document.querySelector(".generator_color_hex");
    supercontainer = document.querySelectorAll(".generator__palette");
    containers = document.querySelectorAll(".generator_color_multicompare_inner");
    buttons = document.querySelectorAll(".generator_color_btns");
    texts = document.querySelectorAll(".generator_color");
    add = document.querySelectorAll(".generator__palette__addBar__addButton");
    multicompare =  document.querySelectorAll(".generator_color_multicompare");
    buttonShades.forEach((el) => el.addEventListener("click", generate));
    favoritesSidebar = document.querySelector(".favoritesSidebar");
  }

}

const pg = new PaletteGenerator();
pg.rerender();

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
