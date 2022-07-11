import { useState } from "react";

const BoxDisplay = props => {
    return (
        <div>
            <h3>Here are your boxes</h3>
            <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
                
                {
                    props.boxList.filter(box => box.size  > 1).map(
                        (box, i) => 
                        <div key={ i } style={{backgroundColor:`${box["color"]}`, height:`${box["size"]}px`, width:`${box["size"]}px`}}></div>
                    )
                }
            </div>
        </div>
    );
}

export default BoxDisplay;