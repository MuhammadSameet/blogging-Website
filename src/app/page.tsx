import Blogs from "./blogs/page";
import Heading from "./components/heading";
import Script from 'next/script';

export default function Home() {
  return (
    <>
    <div>
      <Script src="https://kit.fontawesome.com/703ed2d958.js" crossOrigin="anonymous" />
      {/* <Script>
      
            const navIcon = document.getElementById("nav-icon");
            const headerButton = document.getElementById("header-button");

            navIcon.addEventListener("click", () => headerButton.classList.toggle("active"));
      </Script>
    
     */}
         <Heading/>
         <Blogs/>
         </div>
    </>
  );
}




