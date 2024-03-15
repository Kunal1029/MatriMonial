/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// // /* eslint-disable no-unused-vars */
// // // search bar
// function toggleVisibility(elementIds) {
//   elementIds.forEach((elementId) => {
//     const element = document.getElementById(elementId);
//     if (element) {
//       element.hidden = !element.hidden;
//     }
//   });
//  }

// const mysearch = document.getElementById("mysearch");
// const searchInput = document.getElementById("searchInput");
// const searchButton = document.getElementById("searchButton");

// mysearch.addEventListener("click", () => {
//   toggleVisibility(["searchInput", "searchButton"]);
// });

 // navbar

// const header = document.querySelector("header");

// // window.addEventListener("scroll", () => {
// //   if (window.scrollY > 0) {
// //     header.classList.add("myheadercolor");
// //     header.classList.add("myheader");
// //     header.classList.remove("mt-4");
// //   } else {
// //     header.classList.remove("myheadercolor");
// //     header.classList.add("mt-4");
// //   }
// // });

// let oldScrollY = window.scrollY;

// window.onscroll = function (e) {
//   if (window.scrollY > 0) {
//     if (oldScrollY < window.scrollY && window.scrollY > 630) {
//       header.classList.remove("myheadercolor");
//       header.classList.add("myheader");
//       header.classList.add("mt-4");
//       header.hidden = true;
//     } else {
//       header.classList.add("myheadercolor");
//       header.classList.add("myheader");
//       header.classList.remove("mt-4");
//       header.hidden = false;
//     }

//     oldScrollY = window.scrollY;
//   } else {
//     header.classList.remove("myheadercolor");
//     header.classList.add("myheader");
//     header.classList.add("mt-4");
//     header.hidden = false;
//   }
// };

// // //about us

// document.addEventListener('DOMContentLoaded', function() {
//   const mission = document.getElementById("mission");
//   const team = document.getElementById("team");

//   const ourMission = document.getElementById("Ourmission");
//   const ourTeam = document.getElementById("Ourteam");

//   if (mission && team && ourMission && ourTeam) {
//     ourMission.hidden = true;
//     ourTeam.hidden = true;

//     mission.addEventListener("click", () => {
//       mission.classList.add("active");
//       team.classList.remove("active");
//       ourMission.hidden = false;
//       ourTeam.hidden = true;
//     });

//     team.addEventListener("click", () => {
//       team.classList.add("active");
//       mission.classList.remove("active");
//       ourMission.hidden = true;
//       ourTeam.hidden = false;
//     });
//   }
// });

// // //set Timeout

// const modal = document.getElementById("mymodal");
// setInterval(() => {
//   const bootstrapModal = new bootstrap.Modal(modal);
//   bootstrapModal.show();
// }, 3000);
