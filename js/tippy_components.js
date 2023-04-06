//import 'https://cdnjs.cloudflare.com/ajax/libs/tippy.js/2.5.4/tippy.all.min.js'
//import 'https://cdnjs.cloudflare.com/ajax/libs/tippy.js/2.5.4/tippy.css'

function tippyCreator(className) {
    tippy(document.querySelectorAll(`.${className}`), {
    content: function(reference) {
      return reference.getAttribute('data-tippy-content')
    },
    theme: 'translucent',
    allowHTML: true,
    theme: "black",
    onShow: (instance) => {
      if(showButtons) return;
      instance.popper.style.display = "none"
      
    }

  });
}

tippy.setDefaultProps({
  theme: 'black',
  onShow: (instance) => {
      if(showButtons) return;
      instance.popper.style.display = "none"
      
    }

});



/*tippy.setThemes({
  standard: {
    'data-theme': 'translucent',
    arrow: '.tippy-arrow',
    backdrop: '.tippy-backdrop',
    content: '.tippy-content',
    delay: [300, 0],
    duration: 200,
    hideOnClick: true,
    inertia: true,
    interactive: true,
    maxWidth: 350,
    offset: [0, 5],
    placement: 'top',
    popperOptions: {
      modifiers: {
        preventOverflow: {
          enabled: true
        }
      }
    },
    role: 'tooltip',
    showOnCreate: false,
    size: 'regular',
    sticky: false,
    touch: true,
    trigger: 'mouseenter focus',
    updateDuration: 0,
    zIndex: 9999,
    css: {
      background: 'rgba(0,0,0,.7)',
      border: 'none',
      borderRadius: '0',
      color: '#fff',
      fontSize: '14px',
      padding: '12px'
    },
    arrowTransform: 'scale(0.707) rotate(45deg)',
    distance: 10,
    animateFill: false,
    animation: 'fade',
    theme: 'translucent',
    performance: true
  }
});
tippyCreator();*/
//export default tippyCreator("tippy") */
