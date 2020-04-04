import React, {useEffect,useState} from 'react'
import TechItem from './TechItem'


const TechsListModal = () => {

    const [techs,setTechs] = useState([]);
    const [loading,setLoading] = useState([]);
    useEffect(()=>{
        getTechs();
        //esling-disable-next-line
    },[]);

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('http://localhost:5000/techs');
        const data = await res.json();
        setTechs(data);
        
        setLoading(false);
        
    }

   
    return (
       <div id="tech-list-modal" className="modal">
           <div className="modal-content">
               <h4>Tech list</h4>
               <ul className="collection">
                   {!loading && 
                    techs.map(tech =>(
                        <TechItem tech={tech} key={tech.id}/>
                    ))}
               </ul>
           </div>

       </div>
    )
}

export default TechsListModal
