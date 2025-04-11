console.log("working");

const cardContainer = document.querySelector("#root");
const saveButton = document.querySelector(".save");

let cards = "";
let data = [
  {
    companyName: "TechNova Solutions",
    position: "Software Engineer",
    jobProfile: "full-time",
    level: "junior level",
    salary: "$65,000",
    address: "123 Innovation Drive, San Francisco, CA",
  },
  {
    companyName: "HealthSync Corp",
    position: "Data Analyst",
    jobProfile: "part-time",
    level: "junior level",
    salary: "$30,000",
    address: "456 Wellness Blvd, Austin, TX",
  },
  {
    companyName: "FinEdge Analytics",
    position: "Senior Financial Consultant",
    jobProfile: "full-time",
    level: "senior level",
    salary: "$120,000",
    address: "789 Finance St, New York, NY",
  },
  {
    companyName: "EcoSmart Systems",
    position: "Project Manager",
    jobProfile: "full-time",
    level: "senior level",
    salary: "$95,000",
    address: "321 Greenway Ave, Portland, OR",
  },
  {
    companyName: "PixelForge Studios",
    position: "Graphic Designer",
    jobProfile: "part-time",
    level: "junior level",
    salary: "$35,000",
    address: "654 Artistry Ln, Los Angeles, CA",
  },
  {
    companyName: "LogiTech Dynamics",
    position: "Logistics Coordinator",
    jobProfile: "full-time",
    level: "junior level",
    salary: "$50,000",
    address: "987 Supply Chain Rd, Chicago, IL",
  },
  {
    companyName: "CyberNetics Inc.",
    position: "Cybersecurity Specialist",
    jobProfile: "full-time",
    level: "senior level",
    salary: "$110,000",
    address: "111 Secure Loop, Arlington, VA",
  },
  {
    companyName: "EduCore Learning",
    position: "Curriculum Developer",
    jobProfile: "part-time",
    level: "senior level",
    salary: "$60,000",
    address: "222 Knowledge Way, Boston, MA",
  },
  {
    companyName: "AeroSpaceX",
    position: "Mechanical Engineer",
    jobProfile: "full-time",
    level: "junior level",
    salary: "$70,000",
    address: "333 Rocket Park, Houston, TX",
  },
  {
    companyName: "MarketMinds Ltd.",
    position: "Digital Marketing Specialist",
    jobProfile: "part-time",
    level: "junior level",
    salary: "$40,000",
    address: "444 Commerce Circle, Seattle, WA",
  },
];

data.forEach((card, index) => {
  cards += `<div class="card" >
        <div class="top">
          <div class="left-logo">${card.companyName[0]}</div>
          <button class="save" id=${index}>Save 🏳️</button>
        </div>
        <div class="mid">
          <p>${card.companyName} <span>5 days ago</span></p>
          <h2>${card.position}</h2>
          <div class="job">
            <span>${card.jobProfile}</span>
            <span>${card.level}</span>
          </div>
        </div>
        <div class="bottom">
          <div class="offer">
            <p>${card.salary}</p>
            <p>${card.address}</p>
          </div>
          <button class="c-t-a">Apply now</button>
        </div>
      </div>`;
});

cardContainer.innerHTML = cards;

cardContainer.addEventListener("click", (details) => {
  if (
    details.target.className === "save" ||
    details.target.className === "save switch"
  ) {
    console.log("save button clicked");
    const elementID = details.target.id;
    console.log(elementID);
    const element = document.getElementById(elementID);
    element.innerText =
      element.innerText === "Save 🏳️" ? "Saved 🏴" : "Save 🏳️";
    element.classList.toggle("switch");
  }
  // let goldenValue = data[details.target.id];
  // console.log(goldenValue);
});
