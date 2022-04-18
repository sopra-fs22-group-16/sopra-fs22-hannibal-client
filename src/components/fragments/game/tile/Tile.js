import PropTypes from "prop-types";
import React from "react";
import TileModel from "../../../../models/TileModel";
import TileBackground from "./TileBackground";
import TileIndicator from "./TileHighlight";
import Unit from "../unit/Unit";

const Tile = props => {

    const onClickTile = () => {
        if (props.onClick) {
            props.onClick(props.tile);
        }
    }

    let unit = null;
    if(props.tile.unit){
        unit = <Unit unit={props.tile.unit}/>;
    }

    return (
        <div className="tileContainer" onClick={onClickTile}>
            <TileBackground type={props.tile.type} variant={props.tile.variant}/>
            <TileIndicator indicatorType={props.tile.indicatorType}/>
            {unit}
        </div>
    );
}

Tile.propTypes = {
    tile: PropTypes.instanceOf(TileModel).isRequired,
    onClick: PropTypes.func,
}

export default Tile;