# aura.js
<pre><b>✨ Aura.js is a lightweight, blazing-fast, and deeply intuitive JavaScript Utility Library designed to infuse 
your web projects with an unparalleled level of dynamism and elegance. Stop writing verbose boilerplate and start building magic.
</b>Aura.js is here to streamline your development workflow and make every line of code a pleasure to write.
<strong>
🚀 Why Aura.js?
</strong>
In a world full of utility libraries, why choose Aura.js?
    <b>
⚡ Blazing Fast: Highly optimized internal functions ensure minimal performance overhead for high-speed execution.
🧘 Intuitive API: Built with developer experience in mind, 
making complex tasks like DOM manipulation and asynchronous sequencing feel simple and declarative.
📦 Lightweight: Minimal footprint (typically < 5kb gzipped) means quicker load times for your users.
🛠️ Versatile: Packed with essential utilities for DOM interaction, array operations, function management, 
and robust asynchronous handling.You'll be shocked at how quickly you can achieve complex results!
</b><hr>
<strong>
📦 Installation (Get Started in Seconds)
Via npm (Recommended)
<em><h2>NPM</h2></em>
<b><i>Bash: npm install aura.js</i></b>
<p align="center"><button onclick="navigator.clipboard.writeText('npm install aura.js')"></button></p>        
Via CDN You can include Aura.js directly in your HTML file via a CDN for instant use in HTML
</strong>
<h2>CDN</h2>
<code><big>
<script src="https://cdn.jsdelivr.net/npm/aura.js/dist/aura.min.js"></script>
</big></code>
<p align="center"><button onclick="navigator.clipboard.writeText('<script src=&quot;https://cdn.jsdelivr.net/npm/aura.js/dist/aura.min.js&quot;></script>')"></button></p>
<hr>
💡Usage Once installed, you can import and use the utility functions in your project. 
ES Module Import You can import specific functions to keep your bundle small, 
or import the entire library object.
<strong>
JavaScript: import { select, delay, mapAsync } from 'aura.js'; 
// OR import the entire library
import Aura from 'aura.js';
Example: DOM Manipulation Aura.js makes selecting and manipulating elements incredibly simple and readable.
JavaScript // Using the 'select' function (equivalent to document.querySelector)
const button = Aura.select('#submit-button');
// Add a click handler using Aura.on()
Aura.on(button, 'click', () => {
    // Easily toggle a class
    Aura.toggleClass(button, 'is-loading');
// Show a console message
Aura.log('Button clicked and class toggled!');
});
Example: Asynchronous Tasks Managing time and parallel async operations becomes effortless with delay and map Async.
JavaScript import { delay } from 'aura.js';
async function performTask() {
Aura.log('Starting task...');
// Wait for 2 seconds before continuing (non-blocking)
await delay(2000); 
Aura.log('Task completed after 2 seconds.');
}
performTask();
</strong>
<hr>
<b>
📖 API Reference
</b>
<strong>
(Key Functions) Function Description Example
</strong>
<em>
select(selector) Alias for document.querySelector.select('.header')selectAll(selector) 
Alias for document.querySelectorAll.selectAll('li')
on (el, event, handler)
Attaches an event listener to an element.on(btn, 'click', fn) toggleClass(el, className) 
Toggles a class on an element.toggleClass(div, 'active')delay(ms)
Returns a Promise that resolves after ms milliseconds.await delay(100)isEmail(str)
Checks if a string is a valid email format.isEmail('test@a.co')mapAsync(arr, fn)
Runs a map operation asynchronously (in parallel).mapAsync(urls, fetch)
</em>
<p>
For a full list of features, including utilities for arrays, objects, and types, please refer to the Documentation.
We welcome contributions! Whether it's reporting a bug, suggesting a new feature, or submitting a pull request, your help is appreciated. Please see our CONTRIBUTING.md for guidelines on how to get started.
</p>
<hr>
📝 License Aura.js is open-source software licensed under the MIT License.1MIT License
<b>
Copyright (c) 2024 Tayyab Nasir
</b>
<p>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
</p>
<strong>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</strong>
<hr>
<cite>
👨‍💻 Author: Tayyab Nasir
GitHub: (Add your GitHub profile link here) 
Website/Portfolio: (Add your website or portfolio link here)
</cite>
</pre>
