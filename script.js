```javascript
// View Events Button
function showEvents() {

    document
        .getElementById("events")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// Register for an Event
function registerEvent(eventName) {

    let studentName = prompt(
        "Enter your name to register for " +
        eventName + ":"
    );


    if (
        studentName !== null &&
        studentName.trim() !== ""
    ) {

        alert(
            "Registration Successful!\n\n" +
            "Student Name: " +
            studentName +
            "\nEvent: " +
            eventName
        );

    }

    else {

        alert(
            "Please enter your name."
        );

    }

}


// Search Events
function searchEvents() {

    let searchText =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    let events =
        document.querySelectorAll(
            ".event-card"
        );


    events.forEach(function(event) {

        let eventText =
            event.innerText.toLowerCase();


        if (
            eventText.includes(searchText)
        ) {

            event.style.display = "block";

        }

        else {

            event.style.display = "none";

        }

    });

}
```
