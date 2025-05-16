
const validPasswords = ["abc123", "xyz789", "hello2025"];

function checkPswd() {
  let input = document.getElementById("pswd").value;
  if (validPasswords.includes(input)) {
    document.getElementById("loginDiv").style.display = "none";
    document.getElementById("gallery").style.display = "block";
  } else {
    alert("密碼錯誤，請再試一次");
  }
}

function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
