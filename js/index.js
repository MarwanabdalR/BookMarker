var siteUrl = document.getElementById("bookmarkURL");
var siteName = document.getElementById("bookmarkName");
var submitButton = document.getElementById("submitBtn");
var tableBody = document.getElementById("tableBody");
var index = 1;

siteUrl.addEventListener("blur", function () {
  var siteNameValue = siteUrl.value;
  if (siteNameValue !== "") {
    var siteNameRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (siteNameRegex.test(siteNameValue)) {
      console.log("Site name is valid");
      siteUrl.classList = "form-control is-valid";
    } else {
      console.log("Site name is not valid");
      siteUrl.classList = "form-control is-invalid";
    }
  }
});

siteName.addEventListener("blur", function () {
  var siteNameValue = siteName.value;
  if (siteNameValue !== "") {
    var siteNameRegex = /^[a-zA-Z0-9.-]{4,}$/;
    if (siteNameRegex.test(siteNameValue)) {
      console.log("Site name is valid");
      siteName.classList = "form-control is-valid";
    } else {
      console.log("Site name is not valid");
      siteName.classList = "form-control is-invalid";
    }
  }
});

submitButton.addEventListener("click", function () {
  var siteName = document.getElementById("bookmarkName").value;
  var siteUrl = document.getElementById("bookmarkURL").value;
  if (siteName !== "" && siteUrl !== "") {
    var tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <td>${index}</td>
        <td>${siteName}</td>
        <td><button class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i> <a href="${siteUrl}">${siteUrl}</a></button></td>
        <td><button class="btn btn-delete delete-btn"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        `;
    tableBody.appendChild(tableRow);
    index++;
    document.getElementById("bookmarkName").value = "";
    document.getElementById("bookmarkURL").value = "";
  }
});


tableBody.addEventListener("click", function(event) {
    console.log("Delete button clicked");
    if (event.target.classList.contains("delete-btn")) {
      console.log("Delete button identified");
      var row = event.target.parentNode.parentNode;
      console.log("Row to be deleted:", row);
      tableBody.removeChild(row);
    }
  });