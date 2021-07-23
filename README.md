# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

## The challenge

The challenge is to build out this clock application and get it looking as close to the design as possible. I used the following APIs to retrieve the necessary data:

- [World Time API](http://worldtimeapi.org/) to set the time based on the visitor's IP adress. This API will also be used for additional data, like the day of the year shown in the expanded state.
- [IP Geolocation API](https://freegeoip.app/) to set the city and country underneath the time
- [Quotes API](https://api.quotable.io/) to generate random quotes.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Expected Behaviour

- Change the greeting depending on the time of day. It should say:
  - "Good morning" between 5am and 12pm
  - "Good afternoon" between 12pm and 6pm
  - "Good evening" between 6pm and 5am
- Change the greeting icon and background image depending on the time of day. They should show:
  - The sun icon and the daytime background image between 5am and 6pm
  - The moon icon and the nighttime background image between 6pm and 5am
- Generate a new random programming quote whenever the refresh icon is clicked

### Screenshot

![Design preview for daytime desktop layout](src\assets\react-clock-app-desktop-daytime.jpg)
![Design preview for nighttime desktop layout](src\assets\react-clock-app-desktop-nighttime.jpg)
![Design preview for daytime tablet layout](src\assets\react-clock-app-mobile-daytime.jpg)
![Design preview for daytime mobile layout](src\assets\react-clock-app-tablet-daytime.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/react-clock-app-Ao-91TaCf)
- Live Site URL: [Add live site URL here](https://react-clock-app.vercel.app/)

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- React Query - Data fetching
- Vercel - Deployment

### What I learned

I learned to use react-query for data fetching, it made it super easy to handle all of the different states like isLoading, isError and isSuccess, etc.

### Continued development

Here are some things I want to do in the future: test the application, make it accessible as much as possible, and use typescript.

## Author

- Portfolio Site - [Salym Akhmedov](https://www.salymakhmedov.dev/)
- LinkedIn - [@salym-akhmedov](https://www.linkedin.com/in/salym-akhmedov/)
- Frontend Mentor - [@salymk](https://www.frontendmentor.io/profile/salymk)
