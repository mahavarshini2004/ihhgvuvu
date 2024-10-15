import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 


const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to EAT FRESH Grocery Store!</h1>
      <p>
        Shop the freshest fruits, vegetables, dairy products, and more at the best prices. 
        We pride ourselves on offering a wide variety of high-quality products to cater to your everyday needs.
      </p>

      <h2>Explore Our Categories</h2>
      <div className="categories">
        <div className="category">
          <Link to="/dairy-products">
            <img 
              src="https://images.creativemarket.com/0.1.0/ps/7744934/1820/1213/m1/fpnw/wm1/r0f9czk1ehsznjw26u1yj43lzywfxwdusn34shbh41v2zvt19whz7kynrxc6zvdb-.jpg?1581446551&s=0f2bfa53b11e58a08063de8ec11dee52" 
              alt="Dairy Products" 
            />
            <h3>Dairy Products</h3>
          </Link>
        </div>
        <div className="category">
          <Link to="/kitchenware">
            <img 
              src="https://images.creativemarket.com/0.1.0/ps/8510059/1820/1213/m1/fpnw/wm1/ndyt0lwge7humf6s0ze2xmpuv3nn6cvs7jsx8u6h7v0cnkdarz8cgr111xih3ulf-.jpg?1591824666&s=bbf9c741faa295d92630452f4c7e9b2b" 
              alt="Kitchenware" 
            />
            <h3>Kitchenware</h3>
          </Link>
        </div>
        <div className="category">
          <Link to="/greens">
            <img 
              src="https://tse1.mm.bing.net/th?id=OIP.DpvsT_gLBActzKY_P2w8swHaE7&pid=Api&P=0&h=220" 
              alt="Greens" 
            />
            <h3>Greens</h3>
          </Link>
        </div>
        <div className="category">
          <Link to="/vegetables">
            <img 
              src="https://images.creativemarket.com/0.1.0/ps/4861962/1820/1213/m1/fpnw/wm1/ajpw3l5iii1555k6joes3ljabjb2zqmf3rvqhdn9soplsphibukyhroffngkcnbm-.jpg?1533550819&s=54a763cf63e4598876307293eccd9951" 
              alt="Vegetables" 
            />
            <h3>Vegetables</h3>
          </Link>
        </div>
        <div className="category">
          <Link to="/fruits">
            <img 
              src="https://tse1.mm.bing.net/th?id=OIP.R2JyhmvJYgwPhiGitL3UnQHaE7&pid=Api&P=0&h=220" 
              alt="Fruits" 
            />
            <h3>Fruits</h3>
          </Link>
        </div>
      </div>

      <p>Thank you for choosing us for your grocery shopping!</p>
    </div>
  );
};

export default Home;
