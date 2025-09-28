MicroModal.init();

const typedElement = document.getElementById('typed-text');

if(typedElement) {
    const typed = new Typed(typedElement, {
        strings: ["Get 50% any large pizza!!"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        Complete: (self) => {
            if (self.el.closest('.modal__content')){
                self.el.closest('.modal__content').style.height = 'auto';
            }
        }
    });
}

MicroModal.show('pizza-modal');

window.onload = function() {
    const popped = this.document.getElementById("pop up");
    popped.className = "show";
    this.setTimeout(function(){ popped.className = popped.className.replace("show", "");}, 3000);
}
