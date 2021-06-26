import React from 'react';

function Template(props) {
    return (
        <div className="Post">
            <div className="Template">
                <img src={props.img}
                    height="220px" width="692px" />
                <div className="Category">
                    {props.Category}
                </div>
                <div className="Topic">
                    <li >{props.Topic}</li>
                    <li><i class="fa fa-ellipsis-h" aria-hidden="true" id="ellipsis"></i></li>

                </div>
                <div className="Description">
                    {props.Description}
                </div>

                <ul className="icons">
                    <li><img src={props.profileImage} className="profileImage" /></li>
                    <li> <div className="profileName">{props.profileName}</div></li>
                    <li> <div className="eye"><i class="fa fa-eye" aria-hidden="true"></i> {props.views}
                    </div>
                    </li>
                    <li><i class="fa fa-share-alt" aria-hidden="true" id="share"></i></li>
                </ul>
                
            </div>

        </div>
    );
}

export default Template;