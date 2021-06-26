import React from 'react';

function Job(props) {
    return (
        <div className="postBlock">
            <div className="Job">
                    <div className="PostType">
                    {props.Category}
                </div>
                <div className="Subject">
                    <li >{props.Topic}</li>
                    <li><i class="fas fa-ellipsis-h" aria-hidden="true" id="ellipsis"></i></li>

                </div>
                <div className="Description2">
                    {props.Description}
                    </div>
                    <div className="Location">
                    <i class="fas fa-map-marker" aria-hidden="true"></i>
                    {props.Location}
                </div>
                <div >
                    <button type="button" className="jobApply btn btn-outline-success btn-lg">Apply For Job</button>
                </div>
                <ul className="ProfileMenu">
                    <li><img src={props.profileImage} className="profileImage" /></li>
                    <li> <div className="profileName">{props.profileName}</div></li>
                    <li> <div className="eyejob"><i class="fas fa-eye" aria-hidden="true"></i> {props.views}
                    </div>
                    </li>
                  <li><div className="sharejob"><i class="fas fa-share-alt" aria-hidden="true" id="share"></i></div></li>
                </ul>

            </div>

        </div>
    );
}

export default Job;