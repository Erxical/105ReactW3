import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../App.css';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <div class="jumbotron">
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </div>
    </React.Fragment>
    );
  }
}

export default Header;