import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import {database} from './firebase';
import './Restaurants.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state={};
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }
  handleSelect(key) {
    const currentUser = this.props.user;
    database.ref('/restaurants').child(key).child('votes').child(currentUser.uid).set(currentUser.displayName);
  }
  handleDeselect(key) {
    const currentUser = this.props.user;
    database.ref('/restaurants').child(key).child('votes').child(currentUser.uid).remove();
  }

  render () {
    const {restaurants, user} = this.props;
    return (
      <section className="Restaurants">
        {map (restaurants, (restaurant, key) => (<Restaurant key={key}
        {...restaurant} 
        handleSelect={()=> this.handleSelect(key)}
        handleDeselect={()=> this.handleDeselect(key)}
        user={user} />))}
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
