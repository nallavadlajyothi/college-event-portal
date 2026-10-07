```javascript
// View Events button
const viewEventsBtn = document.getElementById("viewEventsBtn");

viewEventsBtn.addEventListener("click", function () {

    document.getElementById("events").scrollIntoView({
        behavior: "smooth"
    });

});


// Search events
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const eventCards = document.querySelectorAll(".event-card");

    eventCards.forEach(function (card) {

        const eventText = card.textContent.toLowerCase();

        if (eventText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// Register buttons
const registerButtons = document.querySelectorAll(".register-btn");

registerButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const eventName = button.getAttribute("data-event");

        const studentName = prompt(
            "Enter your name to register for " + eventName + ":"
        );

        if (studentName === null) {
            return;
        }

        if (studentName.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        alert(
            "Registration Successful!\n\n" +
            "Student Name: " + studentName + "\n" +
            "Event: " + eventName
        );

    });

});
```
