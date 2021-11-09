const attendees = document.querySelector("#attendees");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    data.forEach((user) => {
      html += `<div class="card"><h2>${user.name}</h2>${user.email}</div>`;
    });
    attendees.innerHTML = html;
  })
  .catch((err) => {
    console.error("error : ", err.message);
  });
