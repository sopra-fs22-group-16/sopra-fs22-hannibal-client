import PropTypes from "prop-types";
import React, {useState} from "react";
import UnitImage from "./UnitImage";
import UnitShadow from "./UnitShadow";

const Unit = props => {

    const [animationState, setAnimationState] = useState("idle_" + props.unit.viewDirection);

    let unitColor = "";
    switch(props.unit.teamId){
        case 0: unitColor = "red"; break;
        case 1: unitColor = "blue"; break;
    }

    // TODO: Set animation dynamically when performing command

    return (
        <div>
            <UnitShadow type={props.unit.type} color={unitColor} animation={animationState}/>
            <UnitImage type={props.unit.type} color={unitColor} animation={animationState}/>
        </div>
    );
}

Unit.propTypes = {
   unit: PropTypes.object.isRequired
}

export default Unit;