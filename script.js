import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES CLICK
if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    push(ref(database, "valentines"), {
      accepted: true,
      time: new Date().toISOString()
    });

    window.location.href = "disclaimer.html";
  });
}

// NO ESCAPE
if (noBtn) {
  function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  }

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);
}

// SURVEY SUBMIT
const surveyForm = document.getElementById("surveyForm");

if (surveyForm) {
  surveyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      q1: document.getElementById("q1").value,
      q2: document.getElementById("q2").value,
      q3: document.getElementById("q3").value,
      q4: document.getElementById("q4").value,
      q5: document.getElementById("q5").value,
      submittedAt: new Date().toISOString()
    };

    push(ref(database, "surveyResponses"), data);

    window.location.href = "thankyou.html";
  });
}
