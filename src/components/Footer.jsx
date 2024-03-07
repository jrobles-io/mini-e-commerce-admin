const Footer = () => {
  return (
    //Modify button to open link in a new tab.
    // <button onClick={ () => {location.href = 'https://github.com/jrobles-io/mini-e-commerce-admin'}}> Click here </button>
    <div className="footer">
      <p>Made by: Roxangélica Rolán, Jose Robles, Dalton Baker, and Kenneth Coss</p>
      <a href='https://github.com/jrobles-io/mini-e-commerce-admin' target="_blank" className='footer-img'>      
       <img src='src/images/github-mark.svg' />
      </a>
    </div>
  );
};

export default Footer