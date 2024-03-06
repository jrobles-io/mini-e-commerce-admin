const allImages = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eo_circle_blue_letter-j.svg",
    alt: "Jose Letter",
    link: "https://github.com/jrobles-io",
  },
  
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Eo_circle_orange_letter-r.svg",
    alt: "Roxangelica Letter",
    link: "https://github.com/rrolanbaez",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Eo_circle_teal_letter-d.svg",
    alt: "Dalton Letter",
    link: "https://github.com/DaltonB25",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Eo_circle_red_letter-k.svg",
    alt: "Kenneth Letter",
    link: "https://github.com/kcoss123",
  },
];

function AboutPage() {
  return (
    <div className="AboutPage">
      <h1>Learn About our Members!</h1>
      
      <div className="images">
      {allImages.map((image, index) => (
        <a href={image.link} key={index} taregt="_blank" rel="noopener noreferrer"> 
        <img src={image.url} alt={image.alt} className="nameimages-img" />
        </a>
      ))}
      </div>
    </div>
  );
}

export default AboutPage;



/* 




import React from 'react';

const allImages = [
  {
    name: "Jose",
    mainImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eo_circle_blue_letter-j.svg",
      alt: "Jose Pic",
      
    },
    smallImages: [
      {
        url: "https://camo.githubusercontent.com/6859b81bad9211632c09ba0ba5aff3ce23d87f38bd199a05cfdd67b70d8ef58e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667",
        alt: "GitHub",
        link: "https://github.com/jrobles-io",
      },
      {
        url: "https://commons.wikimedia.org/wiki/File:LinkedIn_icon.svg#/media/File:LinkedIn_logo_initials.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com",
      },
    ],
  },
  {
    name: "Roxangelica",
    mainImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Eo_circle_orange_letter-r.svg",
      alt: "Roxangelica Pic",
      link: "https://github.com/rrolanbaez",
    },
    smallImages: [
      {
        url: "https://camo.githubusercontent.com/6859b81bad9211632c09ba0ba5aff3ce23d87f38bd199a05cfdd67b70d8ef58e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667",
        alt: "GitHub",
        link: "https://github.com/rrolanbaez",
      },
      {
        url: "path-to-smaller-image-roxangelica-2.jpg",
        alt: "Smaller Image 2",
        link: "https://example.com/roxangelica-link2",
      },
    ],
  },
  {
    name: "Dalton",
    mainImage: {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Eo_circle_teal_letter-d.svg",
    alt: "Dalton Pic",
    
      
    },
    smallImages: [
      {
        url: "https://camo.githubusercontent.com/6859b81bad9211632c09ba0ba5aff3ce23d87f38bd199a05cfdd67b70d8ef58e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667",
        alt: "GitHub",
        link: "https://github.com/DaltonB25",
      },
      {
        url: "https://commons.wikimedia.org/wiki/File:LinkedIn_icon.svg#/media/File:LinkedIn_logo_initials.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com",
      },
    ],
  },
  {
    name: "Kenneth",
    mainImage: {
    url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Eo_circle_red_letter-k.svg",
    alt: "Kenneth Letter",
      
    },
    smallImages: [
      {
        url: "https://camo.githubusercontent.com/6859b81bad9211632c09ba0ba5aff3ce23d87f38bd199a05cfdd67b70d8ef58e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667",
        alt: "GitHub",
        link: "https://github.com/kcoss123",
      },
      {
        url: "https://commons.wikimedia.org/wiki/File:LinkedIn_icon.svg#/media/File:LinkedIn_logo_initials.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com",
      },
    ],
  },  
];

function AboutPage() {
  return (
    <div className="AboutPage">
      <h1>Learn About our Members!</h1>
      
      <div className="images">
        {allImages.map((person, index) => (
          <div key={index}>
            <a href={person.mainImage.link} target="_blank" rel="noopener noreferrer"> 
              <img src={person.mainImage.url} alt={person.mainImage.alt} className="nameimages-img" />
            </a>
            <div className="small-images">
              {person.smallImages.map((smallImage, smallIndex) => (
                <a href={smallImage.link} key={smallIndex} target="_blank" rel="noopener noreferrer"> 
                  <img src={smallImage.url} alt={smallImage.alt} className="nameimages-img-small" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;



















*/