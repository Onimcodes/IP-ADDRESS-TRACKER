 const ip = document.querySelector('#d-ipaddress')
 const address = document.querySelector('#location')
 const timezone = document.querySelector('#timezone')
 const isp = document.querySelector('#isp')
 const addressform = document.querySelector('#input-address')
 const map = L.map('map').setView([0, 0],13);



 
 window.addEventListener('DOMContentLoaded', getMe())
  

 function getMe () {
     fetch('https://api.ipify.org/?format=json')
     .then(response => response.json())
       .then(data => {
         let myIp = data.ip
         const xml = new XMLHttpRequest()
        // xml.open('GET',`https://geo.ipify.org/api/v2/country,city?apiKey={use your own api key}&ipAddress=${myIp}`, true)
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
        //  xml.send()
       })

 }




 addressform.addEventListener('submit', (e) => {
    
 
   let ipAddress = e.target[0].value
  
    const xhr = new XMLHttpRequest()
// xhr.open('GET',`https://geo.ipify.org/api/v2/country,city?apiKey=at_{use you own api key}&ipAddress=${ipAddress}`, true)
xhr.onload = function() {
  
    if(this.status === 200) {
        const response = JSON.parse(this.responseText)
  ip.innerHTML=  response.ip 
  isp.innerHTML = response.isp
  address.innerHTML = `${response.location.region}, ${response.location.city}`
  timezone.innerHTML = response.location.timezone
const latitude = response.location.lat
const longitude = response.location.lng
// console.log(latitude, longitude)


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([latitude, longitude]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

    }
}

// xhr.send()
e.preventDefault()
e.target[0].value =''

 })








// class Location {
//     constructor() {
//         this.graph = new map()
        
//     }
//    async getLocation() {
//        const response = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_nMfIvrpIkjbzynKtfwb8jmKtCdOyc&ipAddress=129.56.51.187')
//         const responseData = await response.json()
//         console.log(responseData)
//     }
// }
    
