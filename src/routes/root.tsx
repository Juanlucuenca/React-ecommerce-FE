import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/Theme-Provider";
import { Toaster } from "@/components/ui/toaster";

export default function Root() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <div className="px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
          <div className="flex flex-col min-h-screen my-4">
            <Outlet />
            <Toaster />
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}
