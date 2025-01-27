import React from 'react';
import './Tech.css';
import icon from '../../assets/icon.jpg';
import image1 from '../../assets/icon.jpg'; // Add your images
import image2 from '../../assets/icon.jpg';
import image3 from '../../assets/icon.jpg';
import image4 from '../../assets/icon.jpg';
import image5 from '../../assets/icon.jpg';
import image6 from '../../assets/icon.jpg';

const Tech = () => {
  return (
    <div className='s'>
      <div className='s-title'>
        <h1>Skills</h1>
      </div>
      <div className='s-sections'>
        {/* First Section */}
        <div className='s-1'>
          <div className='flip-card-front'>
            <p>Frontend Technologies</p>
          </div>
          <div className='flip-card-back'>
            <img src={image1} alt="Tile 1" className="tile-image" />
            <img src={image2} alt="Tile 2" className="tile-image" />
            <img src={image3} alt="Tile 3" className="tile-image" />
            <img src={image4} alt="Tile 4" className="tile-image" />
            <img src={image5} alt="Tile 5" className="tile-image" />
            <img src={image6} alt="Tile 6" className="tile-image" />
          </div>
        </div>
        
        {/* Second Section */}
        <div className='s-2'>
          <div className='flip-card-front'>
            <p>Frontend Technologies</p>
          </div>
          <div className='flip-card-back'>
            <img src={image1} alt="Tile 1" className="tile-image" />
            <img src={image2} alt="Tile 2" className="tile-image" />
            <img src={image3} alt="Tile 3" className="tile-image" />
            <img src={image4} alt="Tile 4" className="tile-image" />
            <img src={image5} alt="Tile 5" className="tile-image" />
            <img src={image6} alt="Tile 6" className="tile-image" />
          </div>
        </div>

        {/* Third Section */}
        <div className='s-3'>
          <div className='flip-card-front'>
            <p>Frontend Technologies</p>
          </div>
          <div className='flip-card-back'>
            <img src={image1} alt="Tile 1" className="tile-image" />
            <img src={image2} alt="Tile 2" className="tile-image" />
            <img src={image3} alt="Tile 3" className="tile-image" />
            <img src={image4} alt="Tile 4" className="tile-image" />
            <img src={image5} alt="Tile 5" className="tile-image" />
            <img src={image6} alt="Tile 6" className="tile-image" />
          </div>
        </div>
      </div>
      
      {/* Repeat sections for other cards */}
      <div className='s-sections'>
        <div className='s-4'>
          <div className='flip-card-front'>
            <p>Backend Technologies</p>
          </div>
          <div className='flip-card-back'>
            <img src={image1} alt="Tile 1" className="tile-image" />
            <img src={image2} alt="Tile 2" className="tile-image" />
            <img src={image3} alt="Tile 3" className="tile-image" />
            <img src={image4} alt="Tile 4" className="tile-image" />
            <img src={image5} alt="Tile 5" className="tile-image" />
            <img src={image6} alt="Tile 6" className="tile-image" />
          </div>
        </div>
        <div className='s-5'>
          <div className='flip-card-front'>
            <p>Backend Technologies</p>
          </div>
          <div className='flip-card-back'>
            <img src={image1} alt="Tile 1" className="tile-image" />
            <img src={image2} alt="Tile 2" className="tile-image" />
            <img src={image3} alt="Tile 3" className="tile-image" />
            <img src={image4} alt="Tile 4" className="tile-image" />
            <img src={image5} alt="Tile 5" className="tile-image" />
            <img src={image6} alt="Tile 6" className="tile-image" />
          </div>
        </div>
        <div className='s-6'>
          <div className='flip-card-front'>
            <p>Backend Technologies</p>
          </div>
          <div className='flip-card-back'>
            <img src={image1} alt="Tile 1" className="tile-image" />
            <img src={image2} alt="Tile 2" className="tile-image" />
            <img src={image3} alt="Tile 3" className="tile-image" />
            <img src={image4} alt="Tile 4" className="tile-image" />
            <img src={image5} alt="Tile 5" className="tile-image" />
            <img src={image6} alt="Tile 6" className="tile-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
