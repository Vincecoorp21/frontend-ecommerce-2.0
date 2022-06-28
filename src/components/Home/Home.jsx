import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    //
    // <div className='hero-content'>
    //   <h1 className='hero-title'>Welcome to My Personal Place</h1>
    //   <h2 className='hero-subtitle'>
    //     I'm <span>VinceBC</span>....a Fullstack Web Developer
    //   </h2>
    //   <button
    //     type='button'
    //     class='hero-button'
    //     onClick="parent.location='/pages/aboutme.html'"
    //   >
    //     Welcome
    //   </button>
    // </div>
    // <div>
    //   <h1>Hola Home</h1>
    // </div>
    <div className='product-collection'>
      <div className='container'>
        <div className='product-collection-wrapper'>
          {/* <!-- product col left --> */}
          <div className='product-col-left flex'>
            <div className='product-col-content'>
              <h2 className='sm-title sm-title-home'>SmartPhones</h2>
              <h2 className='md-title md-title-home'>SmartPhones</h2>
              <p className='text-light'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae consequatur facilis eligendi quibusdam voluptatibus
                exercitationem autem voluptatum, beatae architecto odit,
                quisquam repellat. Deleniti, architecto ab.
              </p>
              <Link to='/products'>
                <button type='button' className='btn-dark'>
                  Shop now
                </button>
              </Link>
            </div>
          </div>

          {/* <!-- product col right --> */}
          <div className='product-col-right'>
            <div className='product-col-r-top flex'>
              <div className='product-col-content'>
                <h2 className='sm-title sm-title-home'>Laptops</h2>
                <h2 className='md-title md-title-home'>Laptops</h2>
                <p className='text-light'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae consequatur facilis eligendi quibusdam voluptatibus
                  exercitationem autem voluptatum, beatae architecto odit,
                  quisquam repellat. Deleniti, architecto ab.
                </p>
                <Link to='/products'>
                  <button type='button' className='btn-dark'>
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
            <div className='product-col-r-top2 flex'>
              <div className='product-col-content'>
                <h2 className='sm-title sm-title-home'>Tablets</h2>
                <h2 className='md-title md-title-home'>Tablets</h2>
                <p className='text-light'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae consequatur facilis eligendi quibusdam voluptatibus
                  exercitationem autem voluptatum, beatae architecto odit,
                  quisquam repellat. Deleniti, architecto ab.
                </p>
                <Link to='/products'>
                  <button type='button' className='btn-dark'>
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
            <div className='product-col-r-top3 flex'>
              <div className='product-col-content'>
                <h2 className='sm-title sm-title-home'>Wereables</h2>
                <h2 className='md-title md-title-home'>Wereables</h2>
                <p className='text-light'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae consequatur facilis eligendi quibusdam voluptatibus
                  exercitationem autem voluptatum, beatae architecto odit,
                  quisquam repellat. Deleniti, architecto ab.
                </p>
                <Link to='/products'>
                  <button type='button' className='btn-dark'>
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
