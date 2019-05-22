import React, { Component } from 'react';
import {RoomContext} from '../Context';
import defaultbcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default class SingleRoom extends Component {
  constructor(props){
super(props);
this.state={
  slug:this.props.match.params.slug
}
  }

  componentDidMount(){

  }

  render() {
    let value = this.context;
    let {rooms} =value;
    let slug = this.state.slug;
    let room = rooms.find(room=> room.slug ===slug);
    console.log(room);
    if(!room){
      return (
        <div className="error">
          <h3>No such room could be found</h3>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      )
    }
    const  {breakfast,capacity,description,extras,featured,id,images,name,pets,price,size,type} = room;
    console.log(images[0]);
    
    return (
      <>
        <Hero hero ='roomsHero' bcg = {images[0]}>
          <Banner title = {`${name} room`}>
            <Link to="/" className ="btn-primary">Back to rooms</Link>
          </Banner>
        </Hero>
      </>
    )
  }
}
SingleRoom.contextType = RoomContext;