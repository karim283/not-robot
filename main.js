// const images = [
//   { src: "https://via.placeholder.com/100?text=Animal1", type: "animal" },
//   { src: "https://via.placeholder.com/100?text=Fish1", type: "fish" },
//   { src: "https://via.placeholder.com/100?text=Bird1", type: "bird" },
//   { src: "https://via.placeholder.com/100?text=Animal2", type: "animal" },
//   { src: "https://via.placeholder.com/100?text=Fish2", type: "fish" },
//   { src: "https://via.placeholder.com/100?text=Bird2", type: "bird" },
//   { src: "https://via.placeholder.com/100?text=Animal3", type: "animal" },
//   { src: "https://via.placeholder.com/100?text=Fish3", type: "fish" },
//   { src: "https://via.placeholder.com/100?text=Bird3", type: "bird" },
// ];
const images = [
  {
    src: "https://th.bing.com/th/id/R.b4290b2cf6217d205ff6c12ce810acb3?rik=Y0UlClMLsc%2bxwg&pid=ImgRaw&r=0",
    type: "car",
  },
  {
    src: "https://th.bing.com/th/id/OIP.xeUH9roUVb-lJrTZTPUHsAHaE8?rs=1&pid=ImgDetMain",
    type: "tree",
  },
  {
    src: "https://th.bing.com/th/id/OIP.qLc7CKA1SnBvANPyTe5zeAHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    type: "bird",
  },
  {
    src: "https://th.bing.com/th/id/OIP.T0C7kIhW5MhEoCFzcj7-VgHaFj?rs=1&pid=ImgDetMain",
    type: "car",
  },
  {
    src: "https://th.bing.com/th/id/OIP.rcidTOZmJFVe9_qJlJ3wBQHaE8?rs=1&pid=ImgDetMain",
    type: "tree",
  },
  {
    src: "https://th.bing.com/th/id/OIP.w_2OXxo9bqKnWI2ZvDk1QAHaEl?rs=1&pid=ImgDetMain",
    type: "bird",
  },
  {
    src: "https://th.bing.com/th/id/OIP.egoNCrwZ9q_ML3FdF8a1xgHaEA?rs=1&pid=ImgDetMain",
    type: "car",
  },
  {
    src: "https://th.bing.com/th/id/R.01df5f6b152e01d594e38b6f2c55c1c0?rik=6klCtSmocYXQ9Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f-oiz7MS0Li5Q%2fT0kBgelQrCI%2fAAAAAAAACgM%2fhNfpAJLmfIM%2fs1600%2ftree2.jpg&ehk=6kdRlDSzfYjCnfoBp%2bROHmqBXjbvefzHKAC42xkPTk0%3d&risl=&pid=ImgRaw&r=0",
    type: "tree",
  },
  {
    src: "https://th.bing.com/th/id/OIP.qYvxQch6x89nkC3oIPqbUgHaE8?rs=1&pid=ImgDetMain",
    type: "bird",
  },
];

const categories = ["car", "tree", "bird"];
let selectedCategory = "";
const selectedImages = [];

function openCaptcha() {
  selectedCategory = categories[Math.floor(Math.random() * categories.length)];
  document.getElementById(
    "captcha-instructions"
  ).textContent = `Click on all the images of ${selectedCategory}s to verify you're not a robot.`;
  loadCaptcha();
  document.getElementById("captcha-container").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function loadCaptcha() {
  const grid = document.getElementById("captcha-grid");
  grid.innerHTML = "";
  selectedImages.length = 0;
  images.sort(() => Math.random() - 0.5);

  images.forEach((image, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = `Image ${index + 1}`;
    imgElement.addEventListener("click", () =>
      toggleSelection(index, imgElement)
    );
    grid.appendChild(imgElement);
  });
}

function toggleSelection(index, imgElement) {
  const isSelected = selectedImages.includes(index);

  if (isSelected) {
    const idx = selectedImages.indexOf(index);
    selectedImages.splice(idx, 1);
    imgElement.style.borderColor = "transparent";
  } else {
    selectedImages.push(index);
    imgElement.style.borderColor = "#007BFF";
  }
}

function verifyCaptcha() {
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");
  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  const isCorrect =
    selectedImages.every((index) => images[index].type === selectedCategory) &&
    selectedImages.length ===
      images.filter((img) => img.type === selectedCategory).length;

  if (isCorrect) {
    successMessage.style.display = "block";
  } else {
    errorMessage.style.display = "block";
  }
}

function closeCaptcha() {
  document.getElementById("captcha-container").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("success-message").style.display = "none";
  document.getElementById("error-message").style.display = "none";
  selectedImages.length = 0;
}
