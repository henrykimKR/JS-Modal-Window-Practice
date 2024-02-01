# Modal Window Documentation

Welcome to the documentation for the Modal Window feature in our project. This section provides details on how to use and customize the modal window.

## Table of Contents

- [Usage](#usage)
- [Customization](#customization)
- [Event Listeners](#event-listeners)
- [Keyboard Shortcuts](#keyboard-shortcuts)

## Usage

To utilize the modal window feature, follow these steps:

1. Include the necessary HTML structure in your HTML file:

    ```html
    <!-- Include the modal window HTML structure -->
    <button class="show-modal">Show Modal</button>

    <div class="hidden modal">
      <button class="close-modal">×</button>
      <!-- Modal content goes here -->
    </div>
    <div class="overlay hidden"></div>
    ```

2. Link the modal window JavaScript file:

    ```html
    <script src="script.js"></script>
    ```

3. Add the `show-modal` class to any button or element you want to trigger the modal window.

4. Customize the modal content as needed.

## Customization

You can customize the modal window by modifying the HTML structure and styles in your CSS file. The relevant elements are:

- `.modal`: The container for the modal content.
- `.overlay`: The overlay behind the modal.
- `.show-modal`: The buttons or elements that trigger the modal.

Feel free to update the text content, styles, and other elements based on your project's design requirements.

## Event Listeners

The modal window includes event listeners for the following actions:

- Clicking on a button with the class `.show-modal` will open the modal window.
- Clicking on the close button (`.close-modal`) or the overlay will close the modal window.

You can further customize the event listeners in the `script.js` file if needed.

## Keyboard Shortcuts

The modal window supports the following keyboard shortcut:

- Pressing the 'Escape' key will close the modal window.

Feel free to explore and modify the JavaScript code to adapt it to your specific needs.
