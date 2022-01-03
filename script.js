let i = 1;
let left = 1;
let right = 6;
let activeImageID = "image-1";
const activeColor = "#c0c0c0";
const inactiveColor = "#000000";
let currentActiveImage = 1;
let descriptions = [
  "Taj Mahal, Agra", //1
  "India Gate, New Delhi", //2
  "Sun Temple, Konark", //3
  "Qutub Minar, New Delhi", //4
  "Agra Fort, Agra", //5
  "Humayun's Tomb, New Delhi", //6
  "Amer Fort, Jaipur", //7
  "Hawa Mahal, Jaipur", //8
  "Jaisalmer Fort, Jaisalmer", //9
  "Rani ki Vaav, Patan", //10
  "Gateway of India, Mumbai", //11
  "Victoria Memorial, Kolkata", //12
  "Ajanta and Ellora Caves, Aurangabad", //13
  "Basilica of Bom Jesus, Goa", //14
  "Mysore Palace, Mysore", //15
];
const changeBorderColor = function (element, color) {
  element.style.borderColor = color;
};
let arr = Array(15);
const returnArray = function () {
  for (let i = 0; i < 15; i++) {
    let n = i + 1;
    arr[i] = document
      .querySelector("#image-" + n)
      .getElementsByTagName("img")[0];
  }
  return arr;
};
function show() {
  arr = returnArray();
  for (i = left; i <= right; i++) {
    document.getElementById("image-" + i).style.display = "inline-block";
  }
  arr[0].style.borderColor = activeColor;
  document.getElementById("frame").src = "images/image1.jpg";
  for (let k = 0; k < 15; k++) {
    arr[k].addEventListener("click", function (event) {
      for (let i = 0; i < 15; i++) {
        arr[i].style.borderColor = inactiveColor;
      }
      arr[k].style.borderColor = activeColor;

      //displaying the image in the below frame
      document.getElementById("frame").src = `images/image${k + 1}.jpg`;
      currentActiveImage = k + 1;
      setDescription();
    });
    arr[k].addEventListener("mouseenter", function () {
      arr[k].style.borderColor = activeColor;
    });
    arr[k].addEventListener("mouseleave", function () {
      if (currentActiveImage != k + 1) {
        arr[k].style.borderColor = inactiveColor;
      }
    });
  }
  setDescription();
}

const setDescription = function () {
  let p = document.getElementById("image-description");
  console.log(descriptions[currentActiveImage - 1]);

  p.innerHTML = descriptions[currentActiveImage - 1];
};
function moveByOne(direction) {
  let imgsrc = "";
  let newImageInFrame;
  arr = returnArray();
  if (direction == -1) {
    if (currentActiveImage - 1 == 0) {
      imgsrc = "images/image15.jpg";
      newImageInFrame = 15;
    } else {
      newImageInFrame = currentActiveImage - 1;
      imgsrc = `images/image${newImageInFrame}.jpg`;
    }
    arr[currentActiveImage - 1].style.borderColor = inactiveColor;
    arr[newImageInFrame - 1].style.borderColor = activeColor;
  } else {
    if (currentActiveImage + 1 == 16) {
      imgsrc = "images/image1.jpg";
      newImageInFrame = 1;
    } else {
      newImageInFrame = currentActiveImage + 1;
      imgsrc = `images/image${newImageInFrame}.jpg`;
    }
    arr[currentActiveImage - 1].style.borderColor = inactiveColor;
    arr[newImageInFrame - 1].style.borderColor = activeColor;
  }
  document.getElementById("frame").src = imgsrc;
  currentActiveImage = newImageInFrame;
  setDescription();
}

function moveLeft() {
  if (left <= 9 && right <= 14) {
    document.getElementById("image-" + left).style.display = "none";
    left += 1;
    right += 1;
    arr = returnArray();
    for (let i = 0; i < 15; i++) {
      arr[i].style.borderColor = inactiveColor;
    }
    if (currentActiveImage >= left && currentActiveImage <= right) {
      arr[currentActiveImage - 1].style.borderColor = activeColor;
    } else if (currentActiveImage + 1 == left) {
      arr[left - 1].style.borderColor = activeColor;
      currentActiveImage++;
      document.getElementById("frame").src =
        "images/image" + currentActiveImage + ".jpg";
    }
    for (i = left; i <= right; i++) {
      document.getElementById("image-" + i).style.display = "inline-block";
    }
  }
  setDescription();
}
function moveRight() {
  if (left >= 2 && right >= 7) {
    document.getElementById("image-" + right).style.display = "none";
    left -= 1;
    right -= 1;
    arr = returnArray();
    for (let i = 0; i < 15; i++) {
      arr[i].style.borderColor = inactiveColor;
    }
    if (currentActiveImage <= right && currentActiveImage >= left) {
      arr[currentActiveImage - 1].style.borderColor = activeColor;
    } else if (currentActiveImage - 1 == right) {
      arr[right - 1].style.borderColor = activeColor;
      currentActiveImage--;
      document.getElementById("frame").src =
        "images/image" + currentActiveImage + ".jpg";
    }
    for (i = left; i <= right; i++) {
      document.getElementById("image-" + i).style.display = "inline-block";
    }
  }
  setDescription();
}
