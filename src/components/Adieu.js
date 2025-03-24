// filepath: /c:/Users/Jakob/theo/theoaws/src/components/Adieu.js
import React from 'react';

const Adieu = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      <video className="w-full h-full object-cover" controls>
        <source src="https://drqlcggpj7pli.cloudfront.net/adieu_les_demoiselle" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Adieu;