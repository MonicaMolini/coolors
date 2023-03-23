
function generate() {
  const { ColorTranslator } = colortranslator;  
  const hex = document.querySelector(".generator_color_hex").innerHTML;
  const container = document.querySelector(".generator_color_multicompare_inner");
  const tints= ColorTranslator.getBlendHEX(`#${hex}`, "#000000", 13);    
  const firstColor = ColorTranslator.getBlendHEX(`#${hex}`, "#ffffff", 13).reverse();  
  firstColor.pop();
  tints.pop();
  const colors =[...firstColor, ...tints,];
  const divBnt = document.querySelector(".generator_color_btns");
  const divtext = document.querySelector(".generator_color");  
  const buttons = document.querySelectorAll(".generator_color_btns");
  const texts = document.querySelectorAll(".generator_color");
  buttons.forEach((el) => el.style.display = "none")
  texts.forEach((el) => el.style.display = "none")  
  divtext.style.display = "none"; 
  divBnt.style.display = "none"; 
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.justifyContent= "flex-start";
  document.querySelector(".generator_color_multicompare").style.display = "flex";
  colors.forEach((c) => { 
    const box = document.createElement("div");
    box.style.backgroundColor = c;
    box.className = "swatch";
    box.innerHTML = `<p>${c}</p>`;
    container.append(box);
    if(box.innerHTML === `<p>#${hex}</p>`){
      box.innerHTML = `<img src="./svg/icon-dot.svg" class ="dot" alt="">`;     
    }
  });
 
  console.log(prova2);
  console.log(JSON.stringify(tints));
  console.log(tints);  
  console.log(colors);
};
const buttonShades = document.querySelectorAll(".generator_color_shades-btn");

buttonShades.forEach((el) =>el.addEventListener("click", generate))


