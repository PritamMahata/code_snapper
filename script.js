function downloadFile() {
  var textToDownload = document.getElementById("codeInput_id").value;
  var fileName = document.getElementById("fileName").value || "untitled";
  var blob = new Blob([textToDownload], { type: "text/plain" });
  var downloadLink = document.createElement("a");
  downloadLink.download = fileName;
  downloadLink.href = URL.createObjectURL(blob);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function clearInput() {
  var inputElement = document.getElementById("codeInput_id");
  inputElement.value = "";
}

function closeWebsite() {
  if (confirm("Are you sure you want to close the website?")) {
    window.close();
  }
}

let device = 0;
if (window.innerWidth < 600) {
  device = 0;
  console.log("mobile");
} else {
  device = 1;
  console.log("desktop");
}

function resizeWindow() {
  var maindivElement = document.getElementById("main");
  if (maindivElement.style.width == "100%" && device == 0) {
    maindivElement.style.width = "90%";
    maindivElement.style.height = "45%";
    console.log("mobile fullscreen");
  } else if (maindivElement.style.width == "100%" && device == 1) {
    maindivElement.style.width = "70%";
    maindivElement.style.height = "70%";
    console.log("desktop fullscreen");
  } else {
    maindivElement.style.width = "100%";
    maindivElement.style.height = "100%";
    wide_screen = false;
  }
}

// background image
const imagePaths = [
  "./assets/background/2.jpg",
  "./assets/background/10.jpg",
  "./assets/background/100.jpg",
  "./assets/background/100.png",
  "./assets/background/101.jpg",
  "./assets/background/102.jpg",
  "./assets/background/103.jpg",
  "./assets/background/104.jpg",
  "./assets/background/105.jpg",
  "./assets/background/106.jpg",
  "./assets/background/107.jpg",
  "./assets/background/108.jpg",
  "./assets/background/109.jpg",
  "./assets/background/11.jpg",
  "./assets/background/110.jpg",
  "./assets/background/111.jpg",
  "./assets/background/112.jpg",
  "./assets/background/113.jpg",
  "./assets/background/114.jpg",
  "./assets/background/115.jpg",
  "./assets/background/116.jpg",
  "./assets/background/117.jpg",
  "./assets/background/118.jpg",
  "./assets/background/119.jpg",
  "./assets/background/12.jpg",
  "./assets/background/120.jpg",
  "./assets/background/121.jpg",
  "./assets/background/122.jpg",
  "./assets/background/123.jpg",
  "./assets/background/124.jpg",
  "./assets/background/125.jpg",
  "./assets/background/126.jpg",
  "./assets/background/127.jpg",
  "./assets/background/129.jpg",
  "./assets/background/13.jpg",
  "./assets/background/130.jpg",
  "./assets/background/131.jpg",
  "./assets/background/14.jpg",
  "./assets/background/15.jpg",
  "./assets/background/16.jpg",
  "./assets/background/17.jpg",
  "./assets/background/17.png",
  "./assets/background/18.jpg",
  "./assets/background/19.jpg",
  "./assets/background/2.jpg",
  "./assets/background/20.jpg",
  "./assets/background/21.jpg",
  "./assets/background/22.jpg",
  "./assets/background/23.jpg",
  "./assets/background/24.jpg",
  "./assets/background/25.jpg",
  "./assets/background/26.jpg",
  "./assets/background/27.jpg",
  "./assets/background/28.jpg",
  "./assets/background/29.jpg",
  "./assets/background/3.jpg",
  "./assets/background/30.jpg",
  "./assets/background/31.jpg",
  "./assets/background/32.jpg",
  "./assets/background/33.jpg",
  "./assets/background/34.jpg",
  "./assets/background/35.jpg",
  "./assets/background/36.jpg",
  "./assets/background/37.jpg",
  "./assets/background/38.jpg",
  "./assets/background/39.jpg",
  "./assets/background/4.jpg",
  "./assets/background/40.jpg",
  "./assets/background/41.jpg",
  "./assets/background/42.jpg",
  "./assets/background/43.jpg",
  "./assets/background/44.jpg",
  "./assets/background/45.jpg",
  "./assets/background/46.jpg",
  "./assets/background/47.jpg",
  "./assets/background/48.jpg",
  "./assets/background/49.jpg",
  "./assets/background/5.jpg",
  "./assets/background/50.jpg",
  "./assets/background/51.jpg",
  "./assets/background/52.jpg",
  "./assets/background/53.jpg",
  "./assets/background/54.jpg",
  "./assets/background/55.jpg",
  "./assets/background/56.jpg",
  "./assets/background/57.jpg",
  "./assets/background/58.jpg",
  "./assets/background/6.jpg",
  "./assets/background/60.jpg",
  "./assets/background/61.jpg",
  "./assets/background/62.jpg",
  "./assets/background/63.jpg",
  "./assets/background/64.jpg",
  "./assets/background/65.jpg",
  "./assets/background/67.jpg",
  "./assets/background/68.jpg",
  "./assets/background/69.jpg",
  "./assets/background/7.jpg",
  "./assets/background/70.jpg",
  "./assets/background/71.jpg",
  "./assets/background/72.jpg",
  "./assets/background/73.jpg",
  "./assets/background/74.jpg",
  "./assets/background/75.jpg",
  "./assets/background/76.jpg",
  "./assets/background/77.jpg",
  "./assets/background/78.jpg",
  "./assets/background/8.jpg",
  "./assets/background/80.jpg",
  "./assets/background/81.jpg",
  "./assets/background/82.jpg",
  "./assets/background/83.jpg",
  "./assets/background/84.jpg",
  "./assets/background/85.jpg",
  "./assets/background/86.jpg",
  "./assets/background/87.jpg",
  "./assets/background/88.jpg",
  "./assets/background/89.jpg",
  "./assets/background/90.jpg",
  "./assets/background/91.jpg",
  "./assets/background/92.jpg",
  "./assets/background/93.jpg",
  "./assets/background/94.jpg",
  "./assets/background/95.jpg",
  "./assets/background/96.jpg",
  "./assets/background/97.jpg",
  "./assets/background/99.jpg",
];
let currentImageIndex = 0;
function changeBackgroundImage() {
  const imageUrl = imagePaths[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  document.body.style.backgroundImage = `url(${imageUrl})`;
}
// setInterval(changeBackgroundImage, 10000); // auto background image change
changeBackgroundImage(); // reload to change background image

function redirectToWebsite() {
  const websiteUrl = "https://pritam-mahata.netlify.app";
  window.open(websiteUrl, "_blank");
}
// unplash background image api

// const accessKey = 'add your unplash api key';
// const unsplashURL = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;
// function changeBackgroundImage() {
//   fetch(unsplashURL)
//     .then((response) => response.json())
//     .then((data) => {
//       const imageUrl = data.urls.regular;
//       document.body.style.backgroundImage = `url(${imageUrl})`;
//     })
//     .catch((error) => console.error("Error fetching image:", error));
// }
