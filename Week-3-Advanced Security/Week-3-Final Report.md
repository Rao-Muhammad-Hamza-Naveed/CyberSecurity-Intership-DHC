\# Week 3 – Advanced Security \& Final Reporting  

\*\*Cybersecurity Internship – Development Hub Corporation\*\*



---



\## 🔐 Objective



The goal of Week 3 was to perform basic penetration testing, implement

application logging, follow security best practices, and prepare final

documentation for submission.



---



\## 🧪 1. Basic Penetration Testing



Basic penetration testing was performed using the OWASP Juice Shop

application and browser-based testing techniques.



\### Activities Performed:

\- Tested input fields for XSS payloads

\- Observed client-side and server-side behavior

\- Verified alert execution using harmless JavaScript payloads

\- Analyzed responses to identify vulnerabilities



\### Tools Used:

\- Web Browser (Manual Testing)

\- OWASP Juice Shop

\- Developer Tools (Console \& Network tab)



---



\## 📝 2. Application Logging (Winston)



Logging was implemented using the \*\*Winston\*\* logging library to record

application events and potential security incidents.



\### Implementation:

\- Console logging for real-time monitoring

\- File-based logging for persistent record keeping



\### Sample Code:

```js

const winston = require('winston');



const logger = winston.createLogger({

&nbsp; transports: \[

&nbsp;   new winston.transports.Console(),

&nbsp;   new winston.transports.File({ filename: 'security.log' })

&nbsp; ]

});



logger.info('Application started');

logger.warn('Invalid login attempt detected');

logger.error('Multiple failed login attempts');



