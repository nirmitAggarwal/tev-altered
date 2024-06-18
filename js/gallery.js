document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("galleryContainer");
  const loader = document.getElementById("loader");
  const imagesToLoad = 8; // Number of images to load
  let imagesLoaded = 0; // Counter for images that have loaded

  // Show loader while fetching data
  loader.style.display = "block";

  fetch("https://back.theeditverse.in/gallery")
    .then((response) => response.json())
    .then((data) => {
      // Function to check if all images are loaded
      function checkAllImagesLoaded() {
        imagesLoaded++;
        if (imagesLoaded === imagesToLoad) {
          // Hide loader once all images are loaded
          loader.style.display = "none";
        }
      }

      data.forEach((item) => {
        const link = document.createElement("a");
        link.href = item.val2;
        link.target = "_blank";

        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";

        const image = document.createElement("img");
        image.src = item.val1;
        image.className = "mask-target";

        const title = document.createElement("p");
        title.className = "vid-title";
        title.textContent = item.val3;

        // Increment counter when each image loads
        image.addEventListener("load", checkAllImagesLoaded);
        image.addEventListener("error", checkAllImagesLoaded); // Handle error case as well

        // Append title immediately to the image container
        imageContainer.appendChild(image);
        imageContainer.appendChild(title);

        // Append link with image container to gallery container
        link.appendChild(imageContainer);
        galleryContainer.appendChild(link);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      // Hide loader in case of error
      loader.style.display = "none";
    });
});
