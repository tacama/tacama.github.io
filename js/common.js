document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  var html = document.querySelector('html'),
    menuToggle = document.querySelector(".hamburger"),
    menuList = document.querySelector(".main-nav"),
    toggleTheme = document.querySelector(".toggle-theme-js"),
    btnScrollToTop = document.querySelector(".top");


  /* =======================================================
  // Menu + Theme Switcher
  ======================================================= */
  menuToggle.addEventListener("click", () => {
    menu();
  });

  function menuOpen() {
    menuList.classList.add("is-open");
  }


  // Menu
  function menu() {
    menuToggle.classList.toggle("is-open");
    menuList.classList.toggle("is-visible");
  }

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      darkMode();
    });
  };


  // Theme Switcher
  function darkMode() {
    if (html.classList.contains('dark-mode')) {
      html.classList.remove('dark-mode');
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("dark");
    } else {
      html.classList.add('dark-mode');
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("dark", "");
    }
  }


  /* ================================================================
  // Stop Animations During Window Resizing and Switching Theme Modes
  ================================================================ */
  let disableTransition;

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      stopAnimation();
    });

    window.addEventListener("resize", () => {
      stopAnimation();
    });

    function stopAnimation() {
      document.body.classList.add("disable-animation");
      clearTimeout(disableTransition);
      disableTransition = setTimeout(() => {
        document.body.classList.remove("disable-animation");
      }, 100);
    }
  }


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post iframe:not(.reframe-off), .page iframe:not(.reframe-off)");


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page img, .post img, .gallery__image img"),
  imageLink = document.querySelectorAll(".page a img, .post a img, .gallery__image a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page img:not(.no-lightense), .post img:not(.no-lightense), .gallery__image img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }


  // =====================
  // Load More Posts
  // =====================
  var load_posts_button = document.querySelector('.load-more-posts');

  load_posts_button&&load_posts_button.addEventListener("click",function(e){e.preventDefault();var o=document.querySelector(".pagination"),e=pagination_next_url.split("/page")[0]+"/page/"+pagination_next_page_number+"/";fetch(e).then(function(e){if(e.ok)return e.text()}).then(function(e){var n=document.createElement("div");n.innerHTML=e;for(var t=document.querySelector(".grid"),a=n.querySelectorAll(".grid__post"),i=0;i<a.length;i++)t.appendChild(a.item(i));new LazyLoad({elements_selector:".lazy"});pagination_next_page_number++,pagination_next_page_number>pagination_available_pages_number&&(o.style.display="none")})});


  /* =======================
  // Scroll Top Button
  ======================= */
  window.addEventListener("scroll", function () {
    window.scrollY > window.innerHeight ? btnScrollToTop.classList.add("is-active") : btnScrollToTop.classList.remove("is-active");
  });

  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  });

});







// document.addEventListener("DOMContentLoaded", function() {
//   var tagSelect = document.getElementById("tagSelect");

//   tagSelect.addEventListener("change", function() {
//     var selectedOption = tagSelect.options[tagSelect.selectedIndex];
//     var url = selectedOption.getAttribute('data-url');

//     if (url) {
//       localStorage.setItem('selectedTag', this.value); // Save selected value
//       window.location.href = url; // Redirect to selected URL
//     }
//   });

//   // Get the current selected value from localStorage
//   var selectedValue = localStorage.getItem('selectedTag');

//   // Set the selected value in the dropdown
//   if (selectedValue) {
//     tagSelect.value = selectedValue;
//   } else {
//     // If no selected value is found, default to "Todas"
//     tagSelect.value = "all";
//   }
// });


document.addEventListener("DOMContentLoaded", function() {
  var tagSelect = document.getElementById("tagSelect");

  tagSelect.addEventListener("change", function() {
    var selectedOption = tagSelect.options[tagSelect.selectedIndex];
    var url = selectedOption.getAttribute('data-url');

    if (url) {
      localStorage.setItem('selectedTag', this.value); // Save selected value
      window.location.href = url; // Redirect to selected URL
    }
  });

  // Get the current selected value from localStorage
  var selectedValue = localStorage.getItem('selectedTag');

  // Set the selected value in the dropdown
  if (selectedValue) {
    tagSelect.value = selectedValue;
  } else {
    // If no selected value is found, default to "all"
    tagSelect.value = "all";
  }

  // Add event listeners to your nav menu items
  var navMenuItems = document.querySelectorAll('.nav-menu-item');
  navMenuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Set the selected value to "all"
      tagSelect.value = "all";
      // Save the selected value to localStorage
      localStorage.setItem('selectedTag', 'all');
    });
  });
});

