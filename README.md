CHROME EXTENSION FOR TIME TRACKING AND PRODUCTIVITY ANALYTICS

COMPANY : CODTECH IT SOLUTIONS

NAME : MANIYARI LATHA SREE

INTERN ID : CT06DG2732

DOMAIN : FULL STACK WEB DEVELOPMENT

DURATION : 6 WEEKS

MENTOR : Neela Santhosh Kumar

Description:-

Time Tracker and Productivity Analytics is a Chrome Extension with a Node.js backend that helps users monitor the time they spend on different websites. It automatically classifies websites as either productive or unproductive and provides weekly reports based on the time spent on each. This tool is designed to help users improve their digital habits and make data-driven decisions about how they use their time online.

The Chrome extension runs silently in the background and uses the Chrome Tabs API to track when users switch between websites. It stores this information locally and displays a summary in a clean and simple popup interface. The backend, powered by Node.js and MongoDB, can be used to store these logs and generate more detailed analytics, either for personal tracking or organizational insights.

Features:-

Real-time tracking of time spent on websites

Automatic classification of websites as productive or unproductive

Weekly productivity report with a summary of time spent

Option to reset tracking data at any time

Chrome storage API used for data persistence in the extension

Optional Node.js backend to log and manage usage data

Modular code structure that is easy to extend or modify

Technologies and Tools Used:-

The frontend (Chrome extension) is built using HTML, CSS, and JavaScript, and it uses Chrome's built-in extension APIs such as tabs and storage. The backend is built with Node.js, Express.js, and MongoDB using Mongoose as the object modeling tool. Git and GitHub are used for version control and collaboration. Visual Studio Code is the primary code editor, and Postman can be used for testing API endpoints.

How It Works:-

When a user opens a new tab or switches between tabs, the extension captures the URL of the active tab. It uses a classification function to determine whether the website is productive or unproductive based on predefined domains. The time spent on each site is recorded along with a timestamp and the category of the site. This data is stored using Chrome's local storage API.

The popup interface displays the total time spent on productive and unproductive websites over the last seven days. If the user prefers, the log data can be sent to the backend for additional storage and analysis. The backend receives data through a REST API and stores it in a MongoDB database. It can also return summarized reports when requested.

Real-World Use Cases:-

This tool is ideal for remote workers who want to manage their time better. Students can use it to distinguish between learning and distraction time. Productivity coaches and personal development enthusiasts can use the data to track and optimize habits. It can also be used by small teams or organizations to monitor general trends in web usage, ensuring ethical and transparent productivity tracking.

How to Run the Project Locally:-

To run the Chrome Extension, open the Chrome browser and go to chrome://extensions. Enable Developer Mode. Click on Load Unpacked and select the client folder that contains the extension files. The extension will now appear in the Chrome toolbar and start tracking activity.

To run the backend, open a terminal and navigate to the server folder. Install the dependencies using npm install. Start the server by running node index.js. Make sure MongoDB is running on your system or update the database connection string to point to your cloud instance.

OUTPUT:-
