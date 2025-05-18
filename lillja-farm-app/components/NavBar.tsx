// import Link from 'next/link'
// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex-shrink-0">
//               <Link href="/">
//                 {/* <a className="text-white font-bold text-2xl"> */}
//                     Lillja Farm
//                 {/* </a> */}
//               </Link>
//             </div>
//           </div>
//           <div className="hidden sm:block sm:ml-6">
//             <div className="flex space-x-4">
//               <Link href="/">
//                 {/* <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> */}
//                     Home
//                 {/* </a> */}
//               </Link>
//               <Link href="/products">
//                 {/* <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> */}
//                     Products
//                 {/* </a> */}
//               </Link>
//               <Link href="/about">
//                 {/* <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> */}
//                     About
//                 {/* </a> */}
//               </Link>
//               <Link href="/contact">
//                 {/* <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> */}
//                     Contact
//                 {/* </a> */}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }
// export default Navbar

//import { useMediaQuery } from 'usehooks-ts'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiCloseFill, RiMenu4Line } from "react-icons/ri";
import { useSsr } from "usehooks-ts";
//import { event } from 'nextjs-google-analytics'

type Props = {};

const NavBar = (props: Props) => {
  function useBetterMediaQuery(mediaQueryString: string) {
    const [matches, setMatches] = React.useState<boolean | null>(null);

    React.useEffect(() => {
      const mediaQueryList = window.matchMedia(mediaQueryString);
      const listener = () => setMatches(!!mediaQueryList.matches);
      listener();
      mediaQueryList.addListener(listener);
      return () => mediaQueryList.removeListener(listener);
    }, [mediaQueryString]);

    return matches;
  }
  function useScroll() {
    const { isBrowser } = useSsr();

    // storing this to get the scroll direction
    const [lastScrollTop, setLastScrollTop] = useState(0);
    // the offset of the document.body
    const [bodyOffset, setBodyOffset] = useState(
      isBrowser ? document.body.getBoundingClientRect() : { top: 0, left: 0 }
    );
    // the vertical direction
    const [scrollY, setScrollY] = useState<number>(bodyOffset.top);
    // the horizontal direction
    const [scrollX, setScrollX] = useState<number>(bodyOffset.left);
    // scroll direction would be either up or down
    const [scrollDirection, setScrollDirection] = useState<"down" | "up">();

    const listener = (e: Event) => {
      isBrowser && setBodyOffset(document.body.getBoundingClientRect());
      setScrollY(-bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
      setLastScrollTop(-bodyOffset.top);
    };

    useEffect(() => {
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    });

    return {
      scrollY,
      scrollX,
      scrollDirection,
    };
  }

  const { scrollX, scrollY, scrollDirection } = useScroll();
  const isNotMobile = useBetterMediaQuery("(min-width: 768px)");
  const [isVisible, setIsVisible] = React.useState(true);
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  React.useEffect(() => {
    scrollDirection && setIsVisible(scrollDirection === "down");
    scrollDirection !== "down" && setIsMenuVisible(false);
  }, [scrollDirection]);

  return (
    <div
      className={`bg-primary-background pt-8 sticky top-0 pb-4 z-20 transition-all delay-250 duration-500 drop-shadow-md px-8 md:px-20
            ${isVisible ? "translate-y-0" : "-translate-y-32"}
        `}
    >
      <div className="flex flex-row flex-1 justify-between">
        <Link className={`transition-opacity duration-500`} href="/">
          <Image
            src="/logo.png"
            className="object-contain"
            alt="Lillja Farm"
            width={250}
            height={150}
          />
          {/* <img src='/logo.png' className='w-2 object-contain' alt='Lillja Farm'></img> */}
        </Link>
        <div className="hidden md:flex items-center">
          <Link
            className="text-primary-text mr-4 hover:text-primary animate-slide-down hover:text-primary hover:scale-150"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-primary-text mr-4 hover:text-primary animate-slide-down-2 hover:text-primary hover:scale-150"
            href="/#products"
          >
            Products
          </Link>
          <Link
            className="text-primary-text mr-4 hover:text-primary animate-slide-down-3 hover:text-primary hover:scale-150"
            href="/#about"
          >
            About
          </Link>
          <Link
            className="text-primary-text mr-4 hover:text-primary animate-slide-down-4 hover:text-primary hover:scale-150"
            href="/#contact"
          >
            Contact
          </Link>
        </div>
        <div className={`md:hidden flex flex-col items-end`}>
          <div
            className={`flex flex-col p-4 rounded-lg transition-colors
                                    ${
                                      isMenuVisible
                                        ? "bg-sec-background md:bg-transparent"
                                        : ""
                                    }`}
          >
            <button
              className="visible md:hidden self-end"
              onClick={() => setIsMenuVisible((prev) => !prev)}
            >
              {isMenuVisible ? (
                <RiCloseFill
                  className="text-secondary-text transition-transform hover:text-primary hover:scale-110"
                  size="2rem"
                />
              ) : (
                <RiMenu4Line
                  className={
                    "text-secondary-text transition-transform hover:text-primary hover:scale-110"
                  }
                  size="2rem"
                />
              )}
            </button>
            {isMenuVisible && (
              <div className="md:hidden flex flex-col pr-8 pl-4 animate-fade">
                <Link
                  className="text-primary-text text-xl mb-4 hover:text-primary"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-primary-text text-xl mb-4 hover:text-primary"
                  href="/#products"
                >
                  Products
                </Link>
                <Link
                  className="text-primary-text text-xl mb-4 hover:text-primary"
                  href="/#about"
                >
                  About
                </Link>
                <Link
                  className="text-primary-text text-xl mb-4 hover:text-primary"
                  href="/#contact"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
