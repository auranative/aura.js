# aura.js
✨ Aura.js
Aura.js is a lightweight, blazing-fast, and deeply intuitive JavaScript utility library designed to infuse your web projects with an unparalleled level of dynamism and elegance. Stop writing boilerplate and start building magic. Aura.js is here to streamline your development workflow and make every line of code a pleasure to write.

🚀 Why Aura.js?
In a world full of utility libraries, why choose Aura.js?

⚡ Blazing Fast: Highly optimized functions ensure minimal performance overhead.

🧘 Intuitive API: Built with developer experience in mind, making complex tasks feel simple.

📦 Lightweight: Minimal footprint means quicker load times for your users.

🛠️ Versatile: Packed with essential utilities for DOM manipulation, array operations, asynchronous tasks, and more.

You'll be shocked at how quickly you can achieve complex results!

📦 Installation
Via npm (Recommended)
Bash

npm install aura.js
Via CDN
You can include Aura.js directly in your HTML file via a CDN:

HTML

<script src="https://cdn.jsdelivr.net/npm/aura.js/dist/aura.min.js"></script>
💡 Usage
Once installed, you can import and use the utility functions in your project.

ES Module Import
JavaScript

import { select, delay, mapAsync } from 'aura.js';
// OR import the entire library
import Aura from 'aura.js';
Example: DOM Manipulation
Aura.js makes selecting and manipulating elements incredibly simple.

JavaScript

// Using the 'select' function (equivalent to document.querySelector)
const button = select('#submit-button');

// Add a click handler
Aura.on(button, 'click', () => {
    // Easily toggle a class
    Aura.toggleClass(button, 'is-loading');

    // Show a message
    Aura.log('Button clicked and class toggled!');
});
Example: Asynchronous Tasks
Managing time and async operations becomes effortless with delay.

JavaScript

import { delay } from 'aura.js';

async function performTask() {
    Aura.log('Starting task...');
    
    // Wait for 2 seconds before continuing
    await delay(2000); 

    Aura.log('Task completed after 2 seconds.');
}

performTask();
📖 API Reference (Key Functions)
Function	Description	Example
select(selector)	Alias for document.querySelector.	select('.header')
selectAll(selector)	Alias for document.querySelectorAll.	selectAll('li')
on(el, event, handler)	Attaches an event listener to an element.	on(btn, 'click', fn)
toggleClass(el, className)	Toggles a class on an element.	toggleClass(div, 'active')
delay(ms)	Returns a Promise that resolves after ms milliseconds.	await delay(100)
isEmail(str)	Checks if a string is a valid email format.	isEmail('test@a.co')
mapAsync(arr, fn)	Runs a map operation asynchronously (in parallel).	mapAsync(urls, fetch)

Export to Sheets

For a full list of features, please refer to the Documentation.

🤝 Contributing
We welcome contributions! Whether it's reporting a bug, suggesting a new feature, or submitting a pull request, your help is appreciated. Please see our CONTRIBUTING.md for guidelines.

📝 License
Aura.js is released under the MIT License.

The MIT License is a permissive free software license, meaning you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, and to permit persons to whom the software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

👨‍💻 Author
Tayyab Nasir

GitHub: (Add your GitHub profile link here)

Website/Portfolio: (Add your website or portfolio link here)
