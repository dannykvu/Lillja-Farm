/* eslint-disable @next/next/no-img-element */
import styles from "../styles/About.module.css";

import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-full md:w-1/2 p-4">
        <div
          id="home"
          className={`${styles.aboutSection} align-center justify-center animate-fade`}
        >
          <h2
            className={"text-6xl md:text-8xl font-bold text-primary-text mb-2"}
          >
            Lillja Farm
          </h2>
          <h1 className={"text-3xl md:text-4xl font-bold text-primary mb-6"}>
            Houston, Texas
          </h1>
          <p className={"text-lg mt-6 text-secondary-text"}>
            We are a family-owned chicken farm that specializes in providing the
            freshest processed poultry and eggs to our local community.
          </p>

          <div className="grid py-8  grid-cols-6 max-xs:grid-cols-3 md:flex md:flex-wrap">
            <a className="mr-8 mb-4 animate-fade-in-5" href="" target="_blank">
              <FiInstagram
                className="text-secondary-text transition-transform hover:text-primary hover:scale-110"
                size="2rem"
              />
            </a>
            <a className="mr-8 mb-4 animate-fade-in-6" href="" target="_blank">
              <FaFacebook
                className="text-secondary-text transition-transform hover:text-primary hover:scale-110"
                size="2rem"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <img
          src="/babychick.jpg"
          alt="baby chicken"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
