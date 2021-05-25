window.addEventListener('load', function(){

let modalActive = document.querySelector(".activate-popup");

function togglePopup() {
        let popup = document.querySelector(".popup");
        popup.classList.toggle("popup--active");
    }
    modalActive.addEventListener("click", function() {
        togglePopup();
        document.body.addEventListener("click", checkPopup, false);
    },
    false
  );

  
  function checkPopup(e) {
    const isPopup =
      e.target.classList.contains("popup") || e.target.classList.contains("cancel-btn") || e.target.classList.contains("x-btn");
      
    if (isPopup) {
      togglePopup();
    }
  
    if (e.target.classList.contains("uninstall-btn")) {
        togglePopup();
        alert ("Are you sure?"); 
    }
  }
  
});