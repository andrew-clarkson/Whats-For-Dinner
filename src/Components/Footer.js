const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className='mt-5'>
      <footer className='footer bg-dark fixed-bottom pt-3 '>
        <div className='container'>
          <h5>
            <a
              className='text-light m-1'
              href='https://github.com/TallSoup/Whats-For-Dinner'
            >
              <i className='bi bi-github'></i>
            </a>
            <a
              className='text-light m-1'
              href='https://www.linkedin.com/in/andrewtclarkson'
            >
              <i className='bi bi-linkedin'></i>
            </a>

            <span className='text-light'>
              <a
                className='text-light text-decoration-none'
                href='https://github.com/TallSoup'
              >
                Andrew Clarkson
              </a>
              &copy;{year}
            </span>
          </h5>
          <a
            className='text-light text-decoration-none'
            href='https://spoonacular.com/food-api/'
          >
            Built With Spoontacular
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
