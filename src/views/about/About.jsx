import "./About.css"
import { useEffect, useState } from 'react';
import { queryVersion } from "../../api/admin.jsx";
import { NodeCatogery } from '../../constants/nodeCategory.jsx';
import { getStatisticByType } from "../../api/statistics.jsx";

function About(){
    const [versionData, setVersionData] = useState('');
    const [generalStatistics, setGeneralStatistics] = useState({
        systemRunningTime: '',
        systemStatus: '',
        memUsedBytes: '',
        memTotalBytes: '',
        memPercent: 0,
        startupTimeMatchReg: /(uptime_seconds=?)(\s*\d*)(?=\n)/g,
        // debugFilesMatchReg: /(core_dumped=?)(\s*\d*)(?=\n)/g,
    })
    const [error, setError] = useState(null);

    useEffect(() => {
        const getStatistic = async () => {
            try{
                const debugFilesMatchReg = /(core_dumped=?)(\s*\d*)(?=\n)/g;

                const res = await getStatisticByType(NodeCatogery.GLOBAL)

                const { data } = res;

                const startupTime = data.match(generalStatistics.startupTimeMatchReg);
                const isDebugFiles = data.match(debugFilesMatchReg);

                setGeneralStatistics((prevState) => ({
                    ...prevState,
                    systemRunningTime: startupTime ? startupTime[0].split(' ')[1] : '',
                    systemStatus: isDebugFiles ? isDebugFiles[0]. split(' ')[1] : '',
                }))
            }
            catch (error){
                setError(error);
            }
        }
        
        getStatistic();
    }, []);

    useEffect(() => {
        const getVersionInfo = async () => {
            try {
                const data = await queryVersion();
                setVersionData(data)
            }
            catch (error) {
                setError(error.message);
            }
        }

        getVersionInfo();
    }, []);

    // const systemRunningTime = () => {
    //     return
    // }

    console.log(generalStatistics);

    const systemStatusText = () => {
        return generalStatistics.systemStatus === '0' ? 'Normal' : 'Exceptions'
    }

    if (error) return <div>Error: {error}</div>
    if (!versionData) return <div></div>
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
                                        <span className="card-description-content">{versionData.version}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="card-description-label">System Status</span>
                                        <span className="card-description-content">{systemStatusText()}</span>
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
                                        <span className="card-description-content">{versionData.build_date}</span>
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