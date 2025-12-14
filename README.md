# aura.js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aura.js README</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            line-height: 1.6;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1, h2, h3 {
            border-bottom: 1px solid #eaecef;
            padding-bottom: 0.3em;
            margin-top: 1.5em;
        }
        h1 {
            font-size: 2em;
        }
        h2 {
            font-size: 1.5em;
        }
        code {
            background-color: #f6f8fa;
            border-radius: 3px;
            padding: 0.2em 0.4em;
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
            font-size: 90%;
            color: #24292e;
        }
        pre {
            background-color: #f6f8fa;
            padding: 16px;
            overflow: auto;
            line-height: 1.45;
            border-radius: 6px;
            margin-bottom: 1.5em;
        }
        pre code {
            background-color: transparent;
            padding: 0;
        }
        ul {
            padding-left: 20px;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 1em;
            margin-bottom: 1.5em;
        }
        th, td {
            border: 1px solid #dfe2e5;
            padding: 8px 13px;
            text-align: left;
        }
        th {
            background-color: #f6f8fa;
        }
        /* Style for the main title's emoji */
        h1 span {
            font-size: 1.2em;
            margin-right: 5px;
        }
    </style>
</head>
<body>

    <h1><span>✨</span> Aura.js</h1>

    <p><strong>Aura.js</strong> is a lightweight, blazing-fast, and deeply intuitive JavaScript utility library designed to infuse your web projects with an unparalleled level of dynamism and elegance. Stop writing boilerplate and start building magic. Aura.js is here to streamline your development workflow and make every line of code a pleasure to write.</p>

    <h2><span>🚀</span> Why Aura.js?</h2>

    <p>In a world full of utility libraries, why choose Aura.js?</p>

    <ul>
        <li><strong>⚡ Blazing Fast:</strong> Highly optimized functions ensure minimal performance overhead.</li>
        <li><strong>🧘 Intuitive API:</strong> Built with developer experience in mind, making complex tasks feel simple.</li>
        <li><strong>📦 Lightweight:</strong> Minimal footprint means quicker load times for your users.</li>
        <li><strong>🛠️ Versatile:</strong> Packed with essential utilities for DOM manipulation, array operations, asynchronous tasks, and more.</li>
    </ul>

    <p><strong>You'll be shocked at how quickly you can achieve complex results!</strong></p>

    <h2><span>📦</span> Installation</h2>

    <h3>Via npm (Recommended)</h3>

    <pre><code>npm install aura.js</code></pre>

    <h3>Via CDN</h3>

    <p>You can include Aura.js directly in your HTML file via a CDN:</p>

    <pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/aura.js/dist/aura.min.js"&gt;&lt;/script&gt;</code></pre>

    <h2><span>💡</span> Usage</h2>

    <p>Once installed, you can import and use the utility functions in your project.</p>

    <h3>ES Module Import</h3>

    <pre><code>import { select, delay, mapAsync } from 'aura.js';
// OR import the entire library
import Aura from 'aura.js';</code></pre>

    <h3>Example: DOM Manipulation</h3>

    <p>Aura.js makes selecting and manipulating elements incredibly simple.</p>

    <pre><code>// Using the 'select' function (equivalent to document.querySelector)
const button = select('#submit-button');

// Add a click handler
Aura.on(button, 'click', () => {
    // Easily toggle a class
    Aura.toggleClass(button, 'is-loading');

    // Show a message
    Aura.log('Button clicked and class toggled!');
});</code></pre>

    <h3>Example: Asynchronous Tasks</h3>

    <p>Managing time and async operations becomes effortless with <code>delay</code>.</p>

    <pre><code>import { delay } from 'aura.js';

async function performTask() {
    Aura.log('Starting task...');
    
    // Wait for 2 seconds before continuing
    await delay(2000); 

    Aura.log('Task completed after 2 seconds.');
}

performTask();</code></pre>

    <h2><span>📖</span> API Reference (Key Functions)</h2>

    <table>
        <thead>
            <tr>
                <th>Function</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>select(selector)</code></td>
                <td>Alias for <code>document.querySelector</code>.</td>
                <td><code>select('.header')</code></td>
            </tr>
            <tr>
                <td><code>selectAll(selector)</code></td>
                <td>Alias for <code>document.querySelectorAll</code>.</td>
                <td><code>selectAll('li')</code></td>
            </tr>
            <tr>
                <td><code>on(el, event, handler)</code></td>
                <td>Attaches an event listener to an element.</td>
                <td><code>on(btn, 'click', fn)</code></td>
            </tr>
            <tr>
                <td><code>toggleClass(el, className)</code></td>
                <td>Toggles a class on an element.</td>
                <td><code>toggleClass(div, 'active')</code></td>
            </tr>
            <tr>
                <td><code>delay(ms)</code></td>
                <td>Returns a Promise that resolves after <code>ms</code> milliseconds.</td>
                <td><code>await delay(100)</code></td>
            </tr>
            <tr>
                <td><code>isEmail(str)</code></td>
                <td>Checks if a string is a valid email format.</td>
                <td><code>isEmail('test@a.co')</code></td>
            </tr>
            <tr>
                <td><code>mapAsync(arr, fn)</code></td>
                <td>Runs a map operation asynchronously (in parallel).</td>
                <td><code>mapAsync(urls, fetch)</code></td>
            </tr>
        </tbody>
    </table>

    <p>*For a full list of features, please refer to the **[Documentation](link-to-documentation-later)**.</p>

    <h2><span>🤝</span> Contributing</h2>

    <p>We welcome contributions! Whether it's reporting a bug, suggesting a new feature, or submitting a pull request, your help is appreciated. Please see our <code>CONTRIBUTING.md</code> for guidelines.</p>

    <h2><span>📝</span> License</h2>

    <p>Aura.js is released under the <strong>MIT License</strong>.</p>

    <p>The MIT License is a permissive free software license, meaning you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, and to permit persons to whom the software is furnished to do so, subject to the following conditions:</p>

    <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>

    <h2><span>👨‍💻</span> Author</h2>

    <p><strong>Tayyab Nasir</strong></p>

    <ul>
        <li><strong>GitHub:</strong> (Add your GitHub profile link here)</li>
        <li><strong>Website/Portfolio:</strong> (Add your website or portfolio link here)</li>
    </ul>

</body>
</html>
