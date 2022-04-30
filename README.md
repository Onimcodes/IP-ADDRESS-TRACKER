# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot





Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free .


### Links


- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
I first wrote my html. I created three containers.One for the container, the second for the ip location details i.e ip address, location , timezone and isp.The last container was for my map div . I then gave every element I would be selecting in my html from my javascript an id.
  Secondly, I wrote my css style for each containers and their child elements. I particularly made container two to overlap the first container.
 In my javascript, I selected all the needed ids from my html i.e the form's id, the ip's id, location id's, the isp's id and so on. Having done this,I created a function to fetch  data from the given api (ip geolocation api) and passed it into the innerhtml of the different ids.I then instantiated the map api I was provided with (leaflet). I recommend you check the page on how to create a map.
A very helpful resource link is included resource below. It is a youtube video that teaches you how to properly use the map.

There are two major functions in my javascript. One to get any users ip address location on initial page load. I hope my code is readable enough.Have fun.
  



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow



### What I learned

I learnt how to correctly use the map library (leafletjs) and I also got to practice getting data from an array.
```html
              <input type="text"  placeholder="Search for any IP address or domain" minlength="7" maxlength="15" size="15" pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$">

```
```css
.container2{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 80%;
    margin:0 auto;
    border-radius: 10px;
    color:black;
    background: white;
    padding: 2%;
    position: absolute;
    top: 30%;
    left: 8%;
    z-index: 10;
   
}
```
```js
 window.addEventListener('DOMContentLoaded', getMe())
  

 function getMe () {
     fetch('https://api.ipify.org/?format=json')
     .then(response => response.json())
       .then(data => {
         let myIp = data.ip
         const xml = new XMLHttpRequest()
        xml.open('GET',`https://geo.ipify.org/api/v2/country,city?apiKey={use your own api key}&ipAddress=${myIp}`, true)
         xml.onload = function() {
             if(this.status === 200) {
               const response = JSON.parse(this.responseText)
               ip.innerHTML =  response.ip 
               isp.innerHTML = response.isp
               address.innerHTML = `${response.location.region}, ${response.location.city}`
               timezone.innerHTML = response.location.timezone
             const latitude = response.location.lat
             const longitude = response.location.lng

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            L.marker([latitude, longitude]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
                 
             }
         }
         xml.send()
       })

 }

}
```


### Continued development

- I will improve on my design skill which will enable me build responsive designs


### Useful resources

-  https://www.youtube.com/watch?v=nZaZ2dB6pow - This helped me to know how to properly use the map 
- I also searched on google  the input type for ip address to set up my input tag to only recieve ip addresses


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@Onimcodes](https://www.twitter.com/yourusername)

