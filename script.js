const announcementBox = document.getElementById("announcement-box");
const hidePermanentlyCheckbox = document.getElementById("hide-permanently");

function hideAnnouncement() {
  if (hidePermanentlyCheckbox.checked) {
    localStorage.setItem("hideAnnouncement", "true");
  }
  announcementBox.style.display = "none";
}

document.getElementById("got-it-btn").addEventListener("click", hideAnnouncement);

if (localStorage.getItem("hideAnnouncement") === "true") {
  announcementBox.style.display = "none";
}
