import type { NextPage } from "next";
import styles from "../styles/Contact.module.css";
import StoreHours from "./StoreHours";

const Contact: NextPage = () => (
  <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
    <div id="contact" className="py-12">
      <h1
        className={`flex justify-center text-4xl font-extrabold text-gray-900 mb-6 ${styles.contactTitle}`}
      >
        Contact Us
      </h1>
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2">
          <StoreHours />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
