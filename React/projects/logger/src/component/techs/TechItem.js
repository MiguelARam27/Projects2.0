import React from 'react'
import { connect} from 'react-redux'
import { deleteTech } from '../../actions/techActions'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech}) => {

    const onDelete=() =>{
        deleteTech(tech.id)

        M.toast({html: `${tech.firstName} was deleted`})
    }
    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text" onClick={onDelete}>delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech:PropTypes.object.isRequired,
}

export default connect(null,{deleteTech})(TechItem)
