import React, { Component } from 'react'
import items from './data';
const RoomContext = React.createContext(); //create the context

//room provider sets the value as it calls roomcontext.provider
 class RoomProvider extends Component {
    state ={
        rooms:[],
        featuredRooms:[],
        sortedRooms:[],
        loading:true
    }

    componentDidMount(){
        let rooms = this.formatData(items);
        // console.log(rooms);
        let sortedRooms = rooms;
        let featuredRooms = rooms.filter(room=> room.featured);
        // console.log(featuredRooms);
        let loading = false;

        this.setState(
            {
                rooms,
                featuredRooms,
                sortedRooms,
                loading
            }
        )
        
    }

    formatData(items){
        let tempItems = items.map(item=>{
            let id= item.sys.id;
            let images = item.fields.images.map(image=> image.fields.file.url);
            let room ={...item.fields,images:images,id};
            return room;
        })
        return tempItems;
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                   {this.props.children} 
            </RoomContext.Provider>
                
            
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider,RoomConsumer,RoomContext }
