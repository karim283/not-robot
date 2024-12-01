I'm Not Robot
This project implements a CAPTCHA verification system where users need to select all images of a specific category (such as "cars," "trees," or "birds") to prove that they are not a robot. The CAPTCHA is dynamically loaded with images, and the user is instructed to click on all images that match the randomly selected category.

Project Overview:
This CAPTCHA system consists of a front-end HTML interface and JavaScript code for functionality. Users are presented with a set of images, and they must select all images of a specific category (e.g., "cars") to pass the CAPTCHA. The system verifies whether the selected images match the correct category, and the user is notified if their selection is correct or incorrect.

Features:
Dynamic CAPTCHA Generation: The CAPTCHA dynamically selects a random category and displays images from that category (cars, trees, birds).
Image Selection: The user clicks on images to select them.
Selection Validation: Once the user clicks the "Submit" button, the system verifies if the selected images match the selected category.
Responsive Design: The layout adjusts for different screen sizes to ensure the CAPTCHA is usable on both desktop and mobile devices.
Success and Error Messages: After submitting, the user is informed whether their selection was correct or not.
Overlay and Modal Design: The CAPTCHA appears as a modal window with an overlay that blocks the background.
Technologies Used
HTML5: For creating the structure of the webpage.
CSS3: For styling the page, including responsive design with media queries.
JavaScript: For dynamic CAPTCHA logic, handling user interactions, and validating the selections.
Browser Compatibility: This project is designed to work across modern web browsers (Chrome, Firefox, Edge, Safari).

File Structure:
1. index.html
This file contains the initial page with a "Verify I'm Not a Robot" button and an image.

2. style.css
This file styles the initial page, including the layout of the text and image, as well as responsiveness for mobile devices.

3. main.css
This file styles the CAPTCHA modal, the images grid, and includes the styles for the buttons, success, and error messages.

4. main.js
This file contains all the JavaScript code for:

Selecting a random category.
Generating the CAPTCHA grid with images.
Handling user selection and validation of the CAPTCHA.
Displaying success or error messages based on the user's selection.
How to Use
Load the Page: When the user opens the webpage, they will see a prompt: "Please confirm you're not a robot." There is a button labeled "Click here" that, when clicked, opens the CAPTCHA modal.

CAPTCHA Modal: In the modal:

A random category (either "car," "tree," or "bird") will be selected, and the instructions will indicate which images the user needs to select.
The user must click on the images that match the selected category. The selected images will be highlighted with a blue border.
Submit or Close:

The user can click the "Submit" button to verify their selections. If they selected the correct images, a success message will appear. Otherwise, an error message will be shown.
The user can click the "Close" button to dismiss the CAPTCHA modal and return to the main page.
Responsive Design: The CAPTCHA grid will adjust automatically to different screen sizes. On smaller screens (e.g., tablets or mobile devices), the images are resized and displayed in a single-column layout.

Additional Notes:
This project uses image URLs from Bing (for placeholders), but you can replace them with your own image sources as needed.
The CAPTCHA images are shuffled each time the CAPTCHA is loaded, ensuring that the experience is different for every session.



