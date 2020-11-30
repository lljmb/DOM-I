const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = 'img/logo.png'

const ctaContent = document.querySelector('.cta')

const ctaImg = ctaContent.querySelector('img')
const ctaTitle = ctaContent.querySelector('h1')
const ctaButton = ctaContent.querySelector('button')

ctaImg.src = 'img/header-img.png'
ctaTitle.textContent = siteContent["cta"]["h1"]
ctaButton.textContent = siteContent['cta']['button']

// navigation 

const navigate = document.querySelector('nav').style.color = 'green';

const servicesLink = document.createElement('a');
servicesLink.textContent = 'Services';
servicesLink.href = '#';
document.querySelector('nav').appendChild(servicesLink); 

const featuresLink = document.createElement('a');
featuresLink.textContent = 'Features';
featuresLink.href = '#';
document.querySelector('nav').appendChild(featuresLink); 

const productLink = document.createElement('a');
productLink.textContent = 'Product';
productLink.href = '#';
document.querySelector('nav').appendChild(productLink); 

const visionLink = document.createElement('a');
visionLink.textContent = 'Vision';
visionLink.href = '#';
document.querySelector('nav').appendChild(visionLink); 

const aboutLink = document.createElement('a');
aboutLink.textContent = 'About';
aboutLink.href = '#';
document.querySelector('nav').appendChild(aboutLink); 

const contactLink = document.createElement('a');
contactLink.textContent = 'Contact';
contactLink.href = '#';
document.querySelector('nav').appendChild(contactLink); 

// added two links

const drakeLink = document.createElement('a');
drakeLink.textContent = 'Take Care';
drakeLink.href = 'https://www.youtube.com/watch?v=-zzP29emgpg';
document.querySelector('nav').prepend(drakeLink); 

const otherDrakeLink = document.createElement('a');
otherDrakeLink.textContent = 'Hold On...';
otherDrakeLink.href = 'https://youtu.be/GxgqpCdOKak';
document.querySelector('nav').appendChild(otherDrakeLink)

// changing the color of nav text
const header = document.querySelector('header');
header.style.fontColor = 'green'


// main content

const mainContent = document.querySelector('.main-content');

// top content

const topContent = mainContent.querySelector('.top-content');

const featuresContent = topContent.querySelector('.text-content:nth-child(1) p');
const featuresTitle = topContent.querySelector('.text-content:nth-child(1) h4');

const aboutContent = topContent.querySelector('.text-content:nth-child(2) p');
const aboutTitle = topContent.querySelector('.text-content:nth-child(2) h4');


featuresContent.textContent = siteContent['main-content']['features-content'];
featuresTitle.textContent = siteContent['main-content']['features-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];
aboutTitle.textContent = siteContent['main-content']['about-h4'];

// middle image

const middleImg = mainContent.querySelector('img');
middleImg.src = 'img/mid-page-accent.jpg';

// bottom content

const bottomContent = mainContent.querySelector('.bottom-content');

const servicesContent = bottomContent.querySelector('.text-content:nth-child(1) p')
const servicesTitle = bottomContent.querySelector('.text-content:nth-child(1) h4')

const productContent = bottomContent.querySelector('.text-content:nth-child(2) p')
const productTitle = bottomContent.querySelector('.text-content:nth-child(2) h4')

const visionContent = bottomContent.querySelector('.text-content:nth-child(3) p')
const visionTitle = bottomContent.querySelector('.text-content:nth-child(3) h4')

servicesContent.textContent = siteContent['main-content']['services-content'];
servicesTitle.textContent = siteContent['main-content']['services-h4'];
productContent.textContent = siteContent['main-content']['product-content'];
productTitle.textContent = siteContent['main-content']['product-h4'];
visionContent.textContent = siteContent['main-content']['vision-content'];
visionTitle.textContent = siteContent['main-content']['vision-h4'];


// contact 
const contact = document.querySelector('.contact');
const contactTitle = contact.querySelector('h4');
const address = contact.querySelector('p');
const phone = address.nextElementSibling;
const email = phone.nextElementSibling;

contactTitle.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];


// footer

const footerContent = document.querySelector('footer');
const footerText = footerContent.querySelector('p');
footerText.textContent = siteContent['footer']['copyright'];

