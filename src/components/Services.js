import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor tenetur tempora! Illum iste illo quis omnis quibusdam enim, ad veniam at doloremque, alias cupiditate cum doloribus pariatur quas mollitia.'

            },
            {
                icon: <FaHiking />,
                title: "free hiking",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor tenetur tempora! Illum iste illo quis omnis quibusdam enim, ad veniam at doloremque, alias cupiditate cum doloribus pariatur quas mollitia.'

            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor tenetur tempora! Illum iste illo quis omnis quibusdam enim, ad veniam at doloremque, alias cupiditate cum doloribus pariatur quas mollitia.'

            },
            {
                icon: <FaBeer />,
                title: "free beer",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor tenetur tempora! Illum iste illo quis omnis quibusdam enim, ad veniam at doloremque, alias cupiditate cum doloribus pariatur quas mollitia.'

            }


        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">{this.state.services.map((item,index)=>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6 style={{textTransform:"capitalize"}}>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>                       
                    
                })}
                </div>
            </section>
        )
    }
}
