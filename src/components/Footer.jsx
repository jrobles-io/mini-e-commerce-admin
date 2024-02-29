const Footer = () => {
  return (
    //Modify button to open link in a new tab.
    // <button onClick={ () => {location.href = 'https://github.com/jrobles-io/mini-e-commerce-admin'}}> Click here </button>
    <div className="footer">
      <a href='https://github.com/jrobles-io/mini-e-commerce-admin'>GitHub Repository</a>
      <img src='src/images/github-mark.svg' />
    </div>
  );
};

export default Footer