import React from 'react';
import './Home.scss';

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
    <div class='product-collection'>
      <div class='container'>
        <div class='product-collection-wrapper'>
          {/* <!-- product col left --> */}
          <div class='product-col-left flex'>
            <div class='product-col-content'>
              <h2 class='sm-title'>SmartPhones</h2>
              <h2 class='md-title'>SmartPhones</h2>
              <p class='text-light'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae consequatur facilis eligendi quibusdam voluptatibus
                exercitationem autem voluptatum, beatae architecto odit,
                quisquam repellat. Deleniti, architecto ab.
              </p>
              <button type='button' class='btn-dark'>
                Shop now
              </button>
            </div>
          </div>

          {/* <!-- product col right --> */}
          <div class='product-col-right'>
            <div class='product-col-r-top flex'>
              <div class='product-col-content'>
                <h2 class='sm-title'>Laptops</h2>
                <h2 class='md-title'>Laptops</h2>
                <p class='text-light'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae consequatur facilis eligendi quibusdam voluptatibus
                  exercitationem autem voluptatum, beatae architecto odit,
                  quisquam repellat. Deleniti, architecto ab.
                </p>
                <button type='button' class='btn-dark'>
                  Shop now
                </button>
              </div>
            </div>
            <div class='product-col-r-top2 flex'>
              <div class='product-col-content'>
                <h2 class='sm-title'>Tablets</h2>
                <h2 class='md-title'>Tablets</h2>
                <p class='text-light'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae consequatur facilis eligendi quibusdam voluptatibus
                  exercitationem autem voluptatum, beatae architecto odit,
                  quisquam repellat. Deleniti, architecto ab.
                </p>
                <button type='button' class='btn-dark'>
                  Shop now
                </button>
              </div>
            </div>
            <div class='product-col-r-top3 flex'>
              <div class='product-col-content'>
                <h2 class='sm-title'>Wereables</h2>
                <h2 class='md-title'>Wereables</h2>
                <p class='text-light'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae consequatur facilis eligendi quibusdam voluptatibus
                  exercitationem autem voluptatum, beatae architecto odit,
                  quisquam repellat. Deleniti, architecto ab.
                </p>
                <button type='button' class='btn-dark'>
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
