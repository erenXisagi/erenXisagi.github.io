// document.addEventListener('DOMContentLoaded', function () {
//     // Get the "King Yes" button
//     var kingYesButton = document.querySelector('.king-yes-btn');

//     // Add click event listener to the "King Yes" button
//     kingYesButton.addEventListener('click', function () {
//         // Redirect to the king page.html when "King Yes" button is clicked
//         window.location.href = 'kingpage.html';
//     });
// });

const yesButton = document.getElementById('#yes-btn');
yesButton.addEventListener('click', function () {
    alert('You are a king!');
});
