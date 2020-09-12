
//shows header array 

let showsTitle = [
  {
    header:'Shows',
  }
]

function displayHeader(headerArray) {
  headerArray.forEach(pageHeader => {
    generateShowsHeader(pageHeader)
  })
}

function generateShowsHeader(showsTitle) {

  let showsInfo = document.createElement('div');
  showsInfo.classList.add('shows__info');

  let showsHeader = document.createElement('h2');
  showsHeader.classList.add('shows__header');
  console.log(showsHeader);
  showsHeader.innerText = showsTitle.header;
  showsInfo.appendChild(showsHeader);
  document.body.querySelector('div').appendChild(showsInfo);

  let showsHeader2 = document.createElement('h2');
  showsHeader2.classList.add('shows__header2');
  showsHeader2.innerText = showsTitle.header;
  showsInfo.appendChild(showsHeader2);
  document.body.querySelector('div').appendChild(showsInfo);

}

displayHeader(showsTitle)

let subHeadings = [
  {
    tabletdate: 'DATES',
    tabletvenue: 'VENUE',
    tabletlocation: 'LOCATION',
  }
]

//shows sub headings array tablet, desktop

function displaySubs(subsArray) {
  subsArray.forEach(secondHeadings => {
    generateSubHeadings(secondHeadings)
  })
}

function generateSubHeadings(subHeadings) {

let showsInfo = document.createElement('div');
showsInfo.classList.add('shows__info');

let showsDateTablet = document.createElement('h3');
 showsDateTablet.classList.add('shows__date-tablet');
 showsDateTablet.innerText = subHeadings.tabletdate;
 showsInfo.appendChild(showsDateTablet);
 document.body.querySelector('div').appendChild(showsInfo);

let showsVenueTablet = document.createElement('h3');
showsVenueTablet.classList.add('shows__venue-tablet');
showsVenueTablet.innerText = subHeadings.tabletvenue;
showsInfo.appendChild(showsVenueTablet);
document.body.querySelector('div').appendChild(showsInfo);

let showsLocationTablet = document.createElement('h3');
showsLocationTablet.classList.add('shows__location-tablet');
showsLocationTablet.innerText = subHeadings.tabletlocation;
showsInfo.appendChild(showsLocationTablet);
document.body.querySelector('div').appendChild(showsInfo);

}
displaySubs(subHeadings)

// GET show dates

let apiURL = ('https://project-1-api.herokuapp.com/showdates/?api_key=bb318ef9-e40b-4118-b16d-03eabed8d71b');

window.onload = generateShowsTable()

function displayShows() {
    
  generateShowsTable();
    
}

function generateShowsTable() {

      axios.get(apiURL)
      .then(response => {
      response.data.forEach((response) => {

  let showsInfo = document.createElement('div');
  showsInfo.classList.add('shows__info');

  let showsDate = document.createElement('h3');
  showsDate.classList.add('shows__date');
  console.log(showsDate);
  showsDate.innerText = 'DATE';
  showsInfo.appendChild(showsDate);
  document.body.querySelector('div').appendChild(showsInfo);

  let showsDateDetails = document.createElement('p');
  showsDateDetails.classList.add('shows__date-details');
  showsDateDetails.innerText = response.date;
  showsInfo.appendChild(showsDateDetails);
  document.body.querySelector('div').appendChild(showsInfo);

  let showsVenue = document.createElement('h3');
  showsVenue.classList.add('shows__venue');
  showsVenue.innerText = 'VENUE';
  showsInfo.appendChild(showsVenue);
  document.body.querySelector('div').appendChild(showsInfo);

  let showsVenueDetails = document.createElement('p')
  showsVenueDetails.classList.add('shows__venue-details');
  showsVenueDetails.innerText = response.place;
  showsInfo.appendChild(showsVenueDetails);
  document.body.querySelector('div').appendChild(showsInfo);

  let showsLocation = document.createElement('h3');
  showsLocation.classList.add('shows__location');
  showsLocation.innerText = 'LOCATION';
  showsInfo.appendChild(showsLocation);
  document.body.querySelector('div').appendChild(showsInfo);

  let showsLocationDetails = document.createElement('p');
  showsLocationDetails.classList.add('shows__location-details');
  showsLocationDetails.innerText = response.location;
  showsInfo.appendChild(showsLocationDetails);
  document.body.querySelector('div').appendChild(showsInfo);

  let showsButton = document.createElement('button');
  showsButton.classList.add('shows__button');
  showsButton.innerText = 'BUY TICKETS';
  showsInfo.appendChild(showsButton);
  document.body.querySelector('div').appendChild(showsInfo);

  let showsButtonUnderline = document.createElement('span');
  showsButtonUnderline.classList.add('shows__button-underline');
  showsInfo.appendChild(showsButtonUnderline);
  document.body.querySelector('div').appendChild(showsInfo);
  
})
})
  .catch(error => {
  console.log(error)
})
}
