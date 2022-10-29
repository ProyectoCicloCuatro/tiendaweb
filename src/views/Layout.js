import { Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
        <main className="App-content">
          <Outlet />
        </main>
     );
}
 
export default Layout;