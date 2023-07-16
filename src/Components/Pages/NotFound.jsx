import React from 'react';

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound-content">
        <h1>Oops! 404 Not Found</h1>
        <p>Looks like you've reached the end of the internet.</p>
        <img src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" alt="404 Not Found" />
        <p>Don't worry, it happens to the best of us. Let's go back and try again.</p>
        <a href="/" className="back-btn">Go Back</a>
      </div>
    </div>
  );
};

export default NotFound;
