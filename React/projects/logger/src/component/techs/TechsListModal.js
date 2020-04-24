import React, {useEffect} from 'react'
import TechItem from './TechItem'
import { connect} from 'react-redux'
import { getTechs } from '../../actions/techActions'
import PropTypes from 'prop-types'


const TechsListModal = ({tech, getTechs}) => {
    const {loading,techs } = tech;

    console.log(techs)
    useEffect(()=>{
       
        getTechs();
        console.log('this is running')
        //esling-disable-next-line
    },[]);

    

   
    return (
       <div id="tech-list-modal" className="modal">
           <div className="modal-content">
               <h4>Tech list</h4>
               <ul className="collection">
                   {!loading && 
                    techs !==null &&
                    techs.map(tech =>(
                        <TechItem tech={tech} key={tech.id}/>
                    ))}
               </ul>
           </div>

       </div>
    )
}

TechsListModal.propTypes ={
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    tech: state.tech
})
export default connect(mapStateToProps,{getTechs})(TechsListModal)
