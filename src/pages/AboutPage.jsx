
import React from "react";

const allImages = [
  {
    name: "Jose",
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
    name: "Roxangelica",
    mainImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Eo_circle_orange_letter-r.svg",
      alt: "Roxangelica Pic",
      link: "https://github.com/rrolanbaez",
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
    name: "Dalton",
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
    name: "Kenneth",
    mainImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Eo_circle_red_letter-k.svg",
      alt: "Kenneth Letter",
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
            <div className="small-images nameimages-img-small-container">
              {person.smallImages.map((smallImage, smallIndex) => (
                <a
                  href={smallImage.link}
                  key={smallIndex}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={smallImage.img}
                    alt={smallImage.alt}
                    className="nameimages-img-small"
                  />

                </a>
              ))
              }</div> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;

