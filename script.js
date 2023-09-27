// Select element for the notification count
const countElement = document.getElementById("notification-count");

// Select all unread notification messages
const markRead = document.querySelectorAll(".unread");

// Set the notification count to the number of unread messages
let count = markRead.length;
countElement.innerText = count;

// Removes the "unread" class from the notification message
// Decrements the notification count
// Removes the event listener from the notification message
const markReadHandler = (event) => {
  const notification = event.target;
  notification.classList.remove("unread");
  --count;
  countElement.innerText = count;
  notification.removeEventListener("click", markReadHandler);
};

// Add event listener to each notification message
markRead.forEach((notification) => {
  notification.addEventListener("click", markReadHandler);
});

// Select the "Mark All Read" button
const markAllRead = document.getElementById("mark-all-read");

// Add event listener to the "Mark All Read" button
// Removes the "unread" class from all notification messages
markAllRead.addEventListener("click", () => {
  markRead.forEach((notification) => {
    notification.classList.remove("unread");
    countElement.innerText = 0;
  });
});
