$(document).ready(() => {
  setActiveTab();

  // Primary color changer of the website.
  const colorPicker = document.getElementById("color-picker");
  const colorPicker2 = document.getElementById("color-picker2");
  colorPicker.addEventListener("input", function () {
    const newPrimaryColor = colorPicker.value;
    colorPicker2.value = newPrimaryColor;
    document.documentElement.style.setProperty("--primary", newPrimaryColor);
  });
  colorPicker2.addEventListener("input", function () {
    const newPrimaryColor = colorPicker2.value;
    colorPicker.value = newPrimaryColor;
    document.documentElement.style.setProperty("--primary", newPrimaryColor);
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    dotsEach: true,
    autoplay: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.5,
      },
    },
  });

  $(document).on("scroll", () => {
    if ($(window).scrollTop() > 10) {
      $("#header").addClass("shrink");
    } else {
      $("#header").removeClass("shrink");
    }
  });

  //Accordian for FAQs section
  const accordionItems = document.querySelectorAll(".faqs__accordian");
  accordionItems.forEach((item) => {
    const header = item.querySelector(".faqs__accordian-header");
    const content = item.querySelector(".faqs__accordian-content");
    header.addEventListener("click", () => {
      accordionItems.forEach((item) => {
        const otherHeader = item.querySelector(".faqs__accordian-header");
        const otherContent = item.querySelector(".faqs__accordian-content");
        if (otherContent !== content) {
          otherHeader.classList.remove("active");
          otherHeader.children?.[1].classList.replace(
            "arrow--up",
            "arrow--down"
          );
          otherContent.style.maxHeight = null;
        }
      });
      header.classList.toggle("active");
      if (header.classList.contains("active")) {
        header.children?.[1].classList.replace("arrow--down", "arrow--up");
      } else {
        header.children?.[1].classList.replace("arrow--up", "arrow--down");
      }
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  $(".hamburger").on("click", () => {
    $("#aside-overlay")?.[0].classList.remove("hidden");
    $("aside")?.[0].classList.toggle("expanded");
  });

  $("#aside-overlay").on("click", () => {
    $("#aside-overlay")?.[0].classList.add("hidden");
    $("aside")?.[0].classList.toggle("expanded");
  });

  $("#mobile__dropdown__container1").on("click", () => {
    const asideDropdown = document.getElementById('aside__dropdown');
    $("#aside__dropdown")?.[0].classList.toggle("expanded");
    if($("#aside__dropdown")?.[0].classList.contains("expanded"))
    {
      document.getElementById('mobile__dropdown__container1').children?.[0].children?.[1].children?.[0].classList.add('opened');
      asideDropdown.style.maxHeight = asideDropdown.scrollHeight + "px";
    }
    else {
      document.getElementById('mobile__dropdown__container1').children?.[0].children?.[1].children?.[0].classList.remove('opened');
      asideDropdown.style.maxHeight = null;
    }
  });
});

function setActiveTab() {
  document.getElementsByClassName("tablinks")[0].click();
}

function openTab(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("show--off");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}
