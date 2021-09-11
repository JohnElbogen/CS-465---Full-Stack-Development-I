# CS-465

**Architecture**

* *Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).*
The different types of development all had their own unique challenges. One of the more confusing portions was getting each component to interact successfully. This often meant implementing calls and imports in the correct spots.  SPA was great for loading speed and creating unique elements to implement different features and have full control over each component. Express HTML and JavaScript were straightforward and less complex.

* *Why did the backend use a NoSQL MongoDB database?*
NoSQL database has many advantages. For one, information that is sensitive can be easily protected and secured. Also RESTful api is easily implemented through Mongo queries. Information storage and management just becomes easier when utilizing Mongodb.

**Functionality**

* *How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?* *
JSON data allows clients and servers to more easily share data, while JavaScript is the basis for JSON, and provides more functionality. Since JSON is a string representation of an object, it is much easier to convert objects and transfer them (ex. client to server to client). This may be less effective when working in the same structure, and that's where java script excels. JS values can be valid in any JS structure and do not have to parsed into strings.

* *Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.* *
Refactoring occurred often in the full stack process. For example, at the start, my html code consisted of large blocks of html formatting. Then I utilized handlebars to have an overall structure for the html, and call using handlebar syntax with files such as header and footer containing the bulky html information. This allowed my to more easily read and edit components of the front end html early in the process. Another major refactoring process involved moving the application data into the mongoDB database. After utilzing seedgoose and mongodb, I was able to populate a database to store the data I previously had. This made it easy to make RESTful api calls on that information. Also writing the logic became simplified.

**Testing**

* *Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.* *
Methods, endpoints, and security are straightforward. Security is used to make sure endpoints within an application remain safe. Methods are used to provide services for the users or agents using an application. These services are where security breaches can occur. In order to secure API endpoints, different layers must be added and tested for each endpoint. Not only is security important for the application provider, but the user must have their data secure as well from interceptions.

**Reflection**

* *How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?* *
Overall I learned a massive amount from this course. Full stack development is a major part of the software development field. The greatest skill is organization and understanding how to problem solve. For example, when an error occurs or the outcome is not as expected, I have improved how to break apart these problems and locate the route cause. Finding a fix once you have diagnosed the problem is much more simple.
