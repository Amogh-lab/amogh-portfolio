import React from 'react';
import './myimage.css'; // your CSS file

function MyImage() {
  return (
    <div className="my-image-wrapper">
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="my-image-border">
        <img src="/myimage.png" alt="My Profile" className="my-image" />
      </div>
    </div>
  );
}

export default MyImage;
