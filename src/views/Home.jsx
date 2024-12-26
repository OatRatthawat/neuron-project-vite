import Header from '../components/header/Header.jsx';
import SideNav from '../components/sideNav/SideNav.jsx';
import "./Home.css";
import { Outlet } from 'react-router';

function Home(){
    return(
        <>
            <div>
                <Header />
            </div>
            <div className="el-container">
                <aside>
                    <SideNav />
                </aside>
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Home;