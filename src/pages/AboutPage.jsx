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
      <hr />
      {allImages.map((image, index) => (
        <a href={image.link} key={index} taregt="_blank" rel="noopener noreferrer"> 
        <img src={image.url} alt={image.alt} className="nameimages-img" />
        </a>
      ))}
    </div>
  );
}

export default AboutPage;
