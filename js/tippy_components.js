//import 'https://cdnjs.cloudflare.com/ajax/libs/tippy.js/2.5.4/tippy.all.min.js'
//import 'https://cdnjs.cloudflare.com/ajax/libs/tippy.js/2.5.4/tippy.css'

function tippyCreator(className) {
    tippy(document.querySelectorAll(`.${className}`), {
    content: function(reference) {
      return reference.getAttribute('data-tippy-content')
    },
    allowHTML: true,
  });
}
tippyCreator();
//export default tippyCreator("tippy") 
