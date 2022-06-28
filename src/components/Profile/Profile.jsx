// import { Button } from 'bootstrap';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { ProductContext } from '../../context/ProductContext/ProductState';
import './Profile.scss';
const URL_IMAGE = 'http://localhost:8000';

const Profile = () => {
  const { getUserInfo, user, orderproduct } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);
  if (!user) {
    return <span>Cargando...</span>;
  }
  console.log(user);
  const listOrders = user.Orders.map((order, i) => {
    return (
      <div className='order-top' key={i}>
        <span className='order-title'>Orden num {order.order_num}:</span>
        <br />
        <div>
          <br />
          {order.Products.map(product => {
            console.log(product);
            const pic = product.image_path;

            return (
              <>
                <ul>
                  <li>
                    <img className='pic-cart' src={URL_IMAGE + pic} alt='' />
                  </li>
                  <li>{product.product} -</li>
                  <li>{product.price} €</li>
                </ul>
              </>
            );
          })}
        </div>
        {/* <span>Nombre del producto: {product.product}</span> */}
        <br />
        {/* <span>Descripción: {product.sectionId}</span> */}
        <br />
      </div>
    );
  });
  // console.log(listOrders);

  return (
    <>
      <div class='card'>
        <div class='card-body'>
          <h2 class='name'>{user.name}</h2>
          <h4 class='job-title'>{user.email}</h4>
          <div>{listOrders}</div>
        </div>
      </div>
    </>
  );
};
export default Profile;
