function showOffer(type) {
  // Remove active class from all offer boxes
  const offerBoxes = document.querySelectorAll(".offer-boxes");
  offerBoxes.forEach((box) => box.classList.remove("active"));

  // Hide all images and content
  const images = document.querySelectorAll(".offer-images img");
  const contents = document.querySelectorAll(".offer-content > div");

  images.forEach((img) => (img.style.display = "none"));
  contents.forEach((content) => (content.style.display = "none"));

  // Show specific content based on type
  if (type === "www") {
    document.getElementById("image-offer-www").style.display = "block";
    document.getElementById("our-offer-www").style.display = "block";
    document.getElementById("offer-www").classList.add("active");
  } else if (type === "shop") {
    document.getElementById("image-offer-shop").style.display = "block";
    document.getElementById("our-offer-shop").style.display = "block";
    document.getElementById("offer-shop").classList.add("active");
  } else if (type === "support") {
    document.getElementById("image-offer-support").style.display = "block";
    document.getElementById("our-offer-support").style.display = "block";
    document.getElementById("offer-support").classList.add("active");
  } else {
    document.getElementById("image-offer").style.display = "block";
    document.getElementById("our-offer").style.display = "block";
  }
}

// Default state: show general offer
showOffer();
