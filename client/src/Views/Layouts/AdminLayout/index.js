import AdminHeader from "../../../Components/AdminHeader";

const AdminLayout = ({ children }) => {
    return (
        <div className="admin-layout">


            <div className="header-admin">
                <AdminHeader />
            </div>
            <div className="body-admin">
                {children}
            </div>
            <div className="footer-admin">
                Footer
            </div>
        </div>
    );
};

export default AdminLayout;