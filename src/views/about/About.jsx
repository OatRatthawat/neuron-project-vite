import "./About.css"
import { useState } from 'react';
import { queryNetwork } from "../../api/admin.jsx";

function About(){
    // const [versionData, setVersionData] = useState({
    //     version: "",
    //     build_date: ""
    // });

    // const [netWorkInterface, setNetworkInterface] = useState([]);

    // const [isLoading, setIsLoading] = useState(false);

    // const init = () => {
    //     try{
    //         Promise.allSettled([queryVersion(), queryNetwork()])
    //             .then = (values) => {
    //                 const versionInfo = values[0]?.value || { version: '', build_date: '' };
    //                 const networks = values[1]?.value || [];

    //                 setVersionData(versionInfo);
    //                 setNetworkInterface(networks);

    //             }
    //     }
    //     catch (error){
    //         console.log(error);
    //     }
    // }

    // init();


    return(
        <div className="about">
            <div className="about-card" style={{width: `220px`}}>
                <div className="about-card-body">
                    <h3 className="card-title">About</h3>
                    <div className="card-description">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="card-description-label">Version</span>
                                        <span className="card-description-content"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="card-description-label">System Status</span>
                                        <span className="card-description-content"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="card-description-label">Up Time</span>
                                        <span className="card-description-content"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="card-description-label">Memory Usage</span>
                                        <span className="card-description-content"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="card-description-label">Built date</span>
                                        <span className="card-description-content"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="card-description-label">Network</span>
                                        <span className="card-description-content"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;