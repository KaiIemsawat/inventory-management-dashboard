import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`light flex min-h-screen w-full bg-gray-50 text-gray-900`}>
      <Sidebar />
      <main
        className={`flex h-full w-full flex-col bg-gray-50 px-9 py-7 md:pl-24`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};
export default DashboardWrapper;
