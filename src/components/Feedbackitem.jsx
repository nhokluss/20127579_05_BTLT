import Card from "./shared/Card";
import React from "react";
import {FaTimes,FaEdit} from "react-icons/fa";
import PropTypes from 'prop-types';

function Feedbackitem({item,handleDelete,editFeedback})
{
    
    return(
        
    <Card >

        <div className="num-display">{item.rating}</div>
        <button onClick={()=>handleDelete(item.id)} className='close'>
            <FaTimes color='purple'/>
        </button>
        <button onClick={()=>editFeedback(item)} className="edit">
            <FaEdit color='purple'/>
        </button>
        <div className="text-display"> {item.text} </div>
    </Card>
    
        
    )
}
Feedbackitem.propTypes={
    item:PropTypes.object.isRequired,
}
export default Feedbackitem;