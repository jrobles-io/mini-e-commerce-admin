
import React from "react";

const allImages = [
  {
    name: "Jose Robles",
    mainImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eo_circle_blue_letter-j.svg",
      alt: "Jose Pic",
    },
    smallImages: [
      {
        img: "src/images/github-mark.svg",
        alt: "GitHub",
        link: "https://github.com/jrobles-io",
      },
      {
        img: "src/images/linkedin-logo.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/jose-robles-49121a212/",
      },
    ],
  },
  {
    name: "Roxangélica Rolán",
    mainImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Eo_circle_orange_letter-r.svg",
      alt: "Roxangelica Pic",
    },
    smallImages: [
      {
        img: "src/images/github-mark.svg",
        alt: "GitHub",
        link: "https://github.com/rrolanbaez",
      },
      {
        img: "src/images/linkedin-logo.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/roxang%C3%A9lica-rol%C3%A1n-246606127/",
      },
    ],
  },
  {
    name: "Dalton Baker",
    mainImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Eo_circle_teal_letter-d.svg",
      alt: "Dalton Pic",
    },
    smallImages: [
      {
        img: "src/images/github-mark.svg",
        alt: "GitHub",
        link: "https://github.com/DaltonB25",
      },
      {
        img: "src/images/linkedin-logo.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/dalton-baker-ab46732b7/",
      },
    ],
  },
  {
    name: "Kenneth Coss",
    mainImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Eo_circle_red_letter-k.svg",
      alt: "Kenneth Pic",
    },
    smallImages: [
      {
        img: "src/images/github-mark.svg",
        alt: "GitHub",
        link: "https://github.com/kcoss123",
      },
      {
        img: "src/images/linkedin-logo.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/kenneth-coss-979a99199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
];


function AboutPage() {
  return (
    <div className="AboutPage">
      <h1>Meet our Members!</h1>
      
      <div className="images"> 
        {allImages.map((person, index) => (
          <div key={index} className="person-container">
            <a
              href={person.mainImage.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={person.mainImage.url}
                alt={person.mainImage.alt}
                className="nameimages-img"
              />
            </a>
            <p className="person-name">{person.name}</p>
            <div className="nameimages-img-small-container">
              {person.smallImages.map((smallImage, smallIndex) => (
                <a
                  href={smallImage.link}
                  key={smallIndex}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`small-image-${smallIndex}`}
                >
                  <img
                    src={smallImage.img}
                    alt={smallImage.alt}
                    className="nameimages-img-small"
                  />
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
