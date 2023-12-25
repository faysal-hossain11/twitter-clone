import FollowBar from "./Layout/FollowBar";
import Sidebar from "./Layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-gray-900">
      <div className="h-full xl:px-30 max-w-[1320px] mx-auto">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>
          <div>
            <FollowBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
