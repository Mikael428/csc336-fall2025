My project: https://csc336-fall2025-1-ytfc.onrender.com/Schedule (web_service version)
https://csc336-fall2025-2-final.onrender.com (static_version)

This project is supposed to be a simple website, where you get a home page of an organization, then get to see the schedule of events coming up (data retrival with GET /api/schedule) as well as (POST api/register), for the register page, which handles form submission and saves registration records to a local JSON file.

There are three "pages" in total. You can navigate using the router-header on the top of the page.

For the schedule page, the 'schedule' and conference image on the page is the data retrival, and on the register page, you can enter your name and email to register for the day. There are restrictions for what is allowed (such as not being able to register the name email more than once).

I used express, cors, body-parser, toast, react, react-dom, vite and devDependencies (for tools).