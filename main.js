var typed = new Typed(".text", {
  strings: ["Nurse", "CareTaker"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

//Email js
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  //serviceID - templateID -#form -publickey
  emailjs
    .sendForm(
      "service_7go6dpi",
      "template_51axmu4",
      "#contact-form",
      "2HYOWT1tJ4Xf7CoIo"
    )
    .then(
      () => {
        //show sent message
        contactMessage.textContent = "Message sent successfully!";

        //Remove message after five sec
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 4000);

        //clear input fields
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "message not sent (service error)";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);

//toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onClick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

//scroll section

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggle icon and navbar

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};
