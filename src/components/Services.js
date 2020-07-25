import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail , FaHiking , FaShuttleVan, FaBeer, FaAlignRight } from 'react-icons/fa'



export default class Services extends Component {
    state={
        services:[
     {    icon:<FaCocktail/>,
         title: "Free Cocktail",
         info : "Lorem ipsum is dnsjvndbfv lvnkdv s v sbs sd  d bfhndsbn fvhbdfbhef dsdnbbdsjf  gdfvfd"
     },
            
     {   icon:<FaHiking/>,
        title: "endless Hiking",
        info : "Lorem ipsum is dnsjvndbfv lvnkdv s v sbs sd  d bfhndsbn fvhbdfbhef dsdnbbdsjf  gdfvfd"
    },
    {    icon:<FaShuttleVan/>,
        title: "Free Shuttle",
        info : "Lorem ipsum is dnsjvndbfv lvnkdv s v sbs sd  d bfhndsbn fvhbdfbhef dsdnbbdsjf  gdfvfd"
    },

    {    icon:<FaBeer/>,
        title: "Free Beer",
        info : "Lorem ipsum is dnsjvndbfv lvnkdv s v sbs sd  d bfhndsbn fvhbdfbhef dsdnbbdsjf  gdfvfd"
    }   

  ]
       }
    
    
    
    render() {
        return (
            <section className='services'>
             <Title title="services"/>   
           <div className='services-center'>
           {this.state.services.map((item,index)=>{
            return <article key={index} className='service'>
                  <span >{item.icon}</span>
                  <h6> {item.title} </h6>
                  <p>{item.info}</p>                  
 

              </article>
              


           })}


           </div>

           
           
            </section>
        )
    }
}
