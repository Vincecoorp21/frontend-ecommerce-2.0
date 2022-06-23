 import { useContext, useEffect } from 'react';
// import { OrdersContext } from '../../context/OrdersContext/OrdersState';
import { UserContext } from '../../context/UserContext/UserState';

import './Profile.scss';
const Profile = () => {
  const { getUserInfo, user, orderproduct } = useContext(UserContext);
  // const { order, getOrder } = useContext(OrdersContext);
  // console.log(orderproduct);
  useEffect(() => {
    getUserInfo();
    // getOrder();
  }, []);
  // const orders = order.map(el => {
  //   console.log(orderproduct);
  //   return (
  //     <div key={el.id}>
  //       <span>{el.product}</span>
  //       <span>{el.price}</span>
  //     </div>
  //   );
  // });
  if (!user) {
    return <span>Cargando...</span>;
  }
  return (
    // {/* <div className='profile-card'>
    //   <div className='tarjeta'>
    //     <img src='...' class='card-img-top' alt='...' />
    //     <div class='card-body'>
    //       <h5 class='card-title'>Card title</h5>
    //       <p class='card-text'>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </p>
    //       <a href='#' class='btn btn-primary'>
    //         Go somewhere
    //       </a>
    //     </div>
    //   </div>
    // </div> */}

    <>
      <div class='card'>
        <div
          class='card-header'
          styler='background-image: url(https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077482/profile-card/images/profile-picture.png)'
        >
          <div class='card-header-bar'>
            <a href='#' class='btn-message'>
              <span class='sr-only'>Message</span>
            </a>
            <a href='#' class='btn-menu'>
              <span class='sr-only'>Menu</span>
            </a>
          </div>

          <div class='card-header-slanted-edge'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 200'>
              <path class='polygon' d='M-20,200,1000,0V200Z' />
            </svg>
            <a href='#' class='btn-follow'>
              <span class='sr-only'>Follow</span>
            </a>
          </div>
        </div>

        <div class='card-body'>
          <h2 class='name'>{user.name}</h2>
          <h4 class='job-title'>{user.email}</h4>
          <div class='bio'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, aperiam.
          </div>
          <div class='social-accounts'>
            <a href='#'>
              <img
                src='https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/dribbble.svg'
                alt=''
              />
              <span class='sr-only'>Dribbble</span>
            </a>
            <a href='#'>
              <img
                src='https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/twitter.svg'
                alt=''
              />
              <span class='sr-only'>Twitter</span>
            </a>
            <a href='#'>
              <img
                src='https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/instagram.svg'
                alt=''
              />
              <span class='sr-only'>Instagram</span>
            </a>
          </div>
        </div>

        <div class='card-footer'>
          <div class='stats'>
            <div class='stat'>
              <span class='label'>Following</span>
              <span class='value'>56K</span>
            </div>
            <div class='stat'>
              <span class='label'>Followers</span>
              <span class='value'>940</span>
            </div>
            <div class='stat'>
              <span class='label'>Likes</span>
              <span class='value'>320</span>
            </div>
          </div>
        </div>
      </div>

      <div>{orderproduct.data}</div>
    </>
  );
};
export default Profile;
