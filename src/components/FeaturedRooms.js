import React, { Component } from 'react';
import {RoomContext} from '../Context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
     
    render() {
        let value = this.context;
        let {loading,featuredRooms:rooms} =value;
        // console.log(rooms);

        rooms = rooms.map(room =>{
            return(
                <Room key={room.id} room ={room}></Room>
            )
        } ) 
        
        return (
            <section className="featured-rooms"> 
               <Title title = "Featured Rooms"></Title>
               <div className="featured-rooms-center">{
                   loading?<Loading/>:rooms
               }</div>
                
            </section>
        )
    }
}
FeaturedRooms.contextType = RoomContext;