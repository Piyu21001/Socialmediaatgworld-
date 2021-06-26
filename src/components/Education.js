import React from 'react';

function Education(props) {
    return (
        <div className="postBlock">
            <div className="Article">
                <img className="Article-img" src={props.img}
                   />
                <div className="PostType">
                    {props.Category}
                </div>
                <div className="Subject">
                    <li >{props.Topic}</li>
                    <li><i class="fas fa-ellipsis-h" aria-hidden="true" id="ellipsis"></i></li>

                </div>
                <div className="Description">
                    {props.Description}
                </div>

                <ul className="ProfileMenu">
                    <li><img src={props.profileImage} className="profileImage" /></li>
                    <li> <div className="profileName">{props.profileName}</div></li>
                    <li> <div className="eyeIcon"><i class="fas fa-eye" aria-hidden="true"></i> {props.views}
                    </div>
                    </li>
                    <li><div className="share"><i class="fas fa-share-alt" aria-hidden="true" id="share"></i></div></li>
                </ul>

            </div>

        </div>
    );
}

export default Education;