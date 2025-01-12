function showOffer(type) {
  // Hide all images and content
  const images = document.querySelectorAll(".offer-images img");
  const contents = document.querySelectorAll(".offer-content > div");

  images.forEach((img) => (img.style.display = "none"));
  contents.forEach((content) => (content.style.display = "none"));

  if (type === "www") {
    document.getElementById("image-offer-www").style.display = "block";
    document.getElementById("our-offer-www").style.display = "block";
  } else if (type === "shop") {
    document.getElementById("image-offer-shop").style.display = "block";
    document.getElementById("our-offer-shop").style.display = "block";
  } else if (type === "support") {
    document.getElementById("image-offer-support").style.display = "block";
    document.getElementById("our-offer-support").style.display = "block";
  } else {
    document.getElementById("image-offer").style.display = "block";
    document.getElementById("our-offer").style.display = "block";
  }
}

// Default state: show general offer
showOffer();
