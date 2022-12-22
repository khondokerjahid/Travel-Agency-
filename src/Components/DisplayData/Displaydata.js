import React from 'react';
import Data from "../.././Targetingdata.json"
import "../DisplayData/Displaydata.css"

const Displaydata = () => {
    console.log(Data.flightOffer[0].class)

    
    return (
        <div>
          
         <div>
            {
                Data.flightOffer.map( next=>{
                    return(
                        <div>
                           <table className='table table-striped'>
                                  
                           <thead>
                                      <tr>
                                      <th>Flight</th>
                                      <th>Aircraft</th>
                                        <th>Class</th>
                                        <th>Fare</th> 
                                        <th>Route</th>
                                        <th>Departure</th>
                                        <th>Arrival</th>
                                        <th>Duration</th>
                                        <th>Price</th>
                                     </tr>
                                    </thead> 
                                   
                                    <tr>
                                        
                                     <td>
                                        {next.itineraries[0].segments[0].marketingCarrier} {next.itineraries[0].segments[0].aircraft}  <br></br>
                                        {next.itineraries[0].segments[1].marketingCarrier} {next.itineraries[0].segments[1].aircraft} 
                                        </td>   
                                        
                                        <td>
                                            {next.itineraries[0].segments[0].flightNumber}<br></br>
                                            {next.itineraries[0].segments[1].flightNumber} 
                                        </td>
                                    
                                        <td>
                                            {next.class[0]}<br></br>
                                            {next.class}
                                        </td>
                                     
                                         <td>
                                         
                                            {next.fareBasis}
                                     
                                        </td> 
                                        <td>
                                        {next.itineraries[0].segments[0].departure.iataCode}-{next.itineraries[0].segments[0].arrival.iataCode}<br></br>
                                        {next.itineraries[0].segments[1].departure.iataCode}-{next.itineraries[0].segments[1].arrival.iataCode}
                                        
                                        </td>
                                        <td>
                                        {next.itineraries[0].segments[0].departure.at} <br></br>
                                          {next.itineraries[0].segments[1].departure.at} 

                                        </td>
                                        <td>
                                        {next.itineraries[0].segments[0].arrival.at} <br></br>
                                          {next.itineraries[0].segments[1].arrival.at} 
                                        </td>
                                        <td>
                                            {next.itineraries[0].duration}
                                        </td>
                                        <td>{next.price}</td>
                                      </tr>      
                                    
                           </table>
                           
        
                        </div>
                    )
                }

                )
            }
         </div>
        </div>

        
    );
};
export default Displaydata;