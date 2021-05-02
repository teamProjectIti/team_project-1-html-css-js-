
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const drop_btn = document.querySelector(".drop-btn span");
  const tooltip = document.querySelector(".tooltip");
  const menu_wrapper = document.querySelector(".wrapper");
  const menu_bar = document.querySelector(".menu-bar");
  const setting_drop = document.querySelector(".setting-drop");
  const help_drop = document.querySelector(".help-drop");
  const setting_item = document.querySelector(".setting-item");
  const help_item = document.querySelector(".help-item");
  const setting_btn = document.querySelector(".back-setting-btn");
  const help_btn = document.querySelector(".back-help-btn");
    drop_btn.onclick = (()=>{
      menu_wrapper.classList.toggle("show");
      tooltip.classList.toggle("show");
    });
    setting_item.onclick = (()=>{
      menu_bar.style.marginLeft = "-400px";
      setTimeout(()=>{
        setting_drop.style.display = "block";
      }, 100);
    });
    help_item.onclick = (()=>{
      menu_bar.style.marginLeft = "-400px";
      setTimeout(()=>{
        help_drop.style.display = "block";
      }, 100);
    });
    setting_btn.onclick = (()=>{
      menu_bar.style.marginLeft = "0px";
      setting_drop.style.display = "none";
    });
    help_btn.onclick = (()=>{
      help_drop.style.display = "none";
      menu_bar.style.marginLeft = "0px";
    });

    // start two drop down list
    
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//   end dropdwon list two 