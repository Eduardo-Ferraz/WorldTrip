import Navbar_home from './Navbar_home'
const Layout_home = ({ children }) =>
{
    return (
        <div className="content">
            <Navbar_home>
                {children}
            </Navbar_home>
        </div>
    )

}
export default Layout_home