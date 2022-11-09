AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_085cq1x";
  const templateID = "template_nsqrk0x";
  let strLength = params.name;
  let emailValue = params.email;

  if (params.name === "") {
    swal({
      text: "Please add your name!",
      icon: "error",
      buttons: {
        cancel: true,
        confirm: "Confirm",
        roll: {
          text: "Do a barrell roll!",
          value: "roll",
        },
      },
    });

    return;
  } else if (strLength.length <= 1) {
    swal({
      text: "Name isn't valid!",
      icon: "error",
      button: false,
    });

    return;
  } else if (params.email === "") {
    swal({
      text: "Please add your email!",
      icon: "error",
      button: false,
    });

    return;
  } else if (emailValue.indexOf("@") >= 0) {
    console.log("yes");
  } else {
    swal({
      text: "Please include an @ in your email adress!",
      icon: "error",
      button: false,
    });

    console.log("no");
    return;
  }

  if (params.message === "") {
    swal({
      text: "Please add your message!",
      icon: "error",
      button: false,
    });

    return;
  }

  const jsConfetti = new JSConfetti();
  {
    emailjs.send(serviceID, templateID, params).then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      jsConfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber: 750,
      });
      swal({
        title: "Thank You!",
        text: "I will get back to you asap!",
        icon: "success",
        button: false,
      });
    });
  }
}
