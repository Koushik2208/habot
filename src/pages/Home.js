import React, { useState } from "react";
import "./pages.css";
import "../index.css";
import { MdLocationPin, MdMail } from "react-icons/md";
const Home = () => {
  const [activeTab, setActiveTab] = useState("buyer");

  const listItems = [
    "Post your requirements.",
    "Sit back for multiple suppliers to contact you.",
    "Choose among the suppliers based on the ratings and reviews.",
  ];

  const ListItem = ({ text }) => (
    <li className="flex items-start gap-2 text-gray-800">
      <img
        src={require("../assets/images/check.png")}
        alt="check"
        className="w-5 shrink-0 mt-1"
      />
      <span className="text-white">{text}</span>
    </li>
  );

  return (
    <div>
      <section className="bg-img text-white">
        <h2 className="font-bold">ARE YOU A SUPPLIER?</h2>
        <h2>Explore Matching Opportunities.</h2>
        <div className="flex gap-2 my-4 max-sm:flex-col">
          <div className="flex items-center gap-2 bg-white rounded-sm px-4 py-2 w-[400px] max-sm:w-full">
            <MdMail color="#E7760D" size={30} />
            <input
              type="text"
              className="text-black w-full outline-none"
              placeholder="Search your required service here"
            />
          </div>
          <div className="flex items-center gap-2 bg-white rounded-sm px-4 py-2 w-[400px] max-sm:w-full">
            <MdLocationPin color="#E7760D" size={30} />
            <input
              type="text"
              className="text-black w-full outline-none"
              placeholder="Search your desired location here"
            />
          </div>
          <button className="solid-green-btn">Search</button>
        </div>
        <h6>
          <span className="font-bold me-2">Are you a buyer?</span>
          <a href="/" className="text-white">
            Click here if you are looking to post a requirements
          </a>
        </h6>
      </section>
      <section>
        <div className="container flex flex-wrap max-sm:gap-10">
          <div className="w-1/2 max-sm:w-full">
            <h3 className="font-bold">Ready to dive into HABOT?</h3>
            <p className="text-justify pr-10 max-sm:pr-0">
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            <button className="solid-green-btn">Sign up Today !</button>
          </div>
          <div className="w-1/2 max-sm:w-full grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            <button className="outline-red-btn max-w-[260px] py-[16px] px-4">
              Abu Dhabi
            </button>
            <button className="outline-red-btn max-w-[260px] py-[16px] px-4">
              Dubai
            </button>
            <button className="outline-red-btn max-w-[260px] py-[16px] px-4">
              Sharjah & Ajman
            </button>
            <button className="outline-red-btn max-w-[260px] py-[16px] px-4">
              Fujairah
            </button>
            <button className="outline-red-btn max-w-[260px] py-[16px] px-4">
              Ras Al Khaimah
            </button>
            <button className="outline-red-btn max-w-[260px] py-[16px] px-4">
              Umm Al Quwain
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container bg-section text-white flex flex-wrap max-sm:gap-10 px-[72px] py-[130px] rounded-sm">
          <div className="w-1/2 max-sm:w-full">
            <img
              alt="requirements"
              src={require("../assets/images/requirements.png")}
              className="max-h-[350px]"
            />
          </div>
          <div className="w-1/2 pl-10 max-sm:w-full max-sm:pl-0">
            <div className="tabs mb-6">
              <button
                className={`px-4 py-2 w-[200px] ${
                  activeTab === "buyer"
                    ? "text-red border-red border-b-4"
                    : "text-white"
                }`}
                onClick={() => setActiveTab("buyer")}
              >
                Buyer
              </button>
              <button
                className={`px-4 py-2 w-[200px] ${
                  activeTab === "seller"
                    ? "text-red border-red border-b-4"
                    : "text-white"
                }`}
                onClick={() => setActiveTab("seller")}
              >
                Seller
              </button>
            </div>

            {activeTab === "buyer" && (
              <div className="tab-content">
                <ul className="flex flex-col gap-2">
                  {listItems.map((item, index) => (
                    <ListItem key={index} text={item} />
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "seller" && (
              <div className="tab-content">
                <h2 className="text-xl font-semibold">Seller Content</h2>
                <p>Here you can add content for sellers.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="bg-section-card">
        <div className="container flex flex-wrap max-sm:gap-10">
          <h3 className="w-1/2 text-center max-sm:w-full">
            Let Suppliers{" "}
            <span className="border-b-4 border-red">Find You</span>
          </h3>
          <div className="w-1/2 text-center max-sm:w-full">
            <button className="solid-red-btn">Get Verified</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <h2 className="font-bold">How It Works?</h2>
          <p className="px-40 max-sm:px-0">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20">
            <div className="bg-section-card min-h-[254px] p-[40px] flex flex-col items-center justify-center gap-10">
              <img
                src={require("../assets/images/role.png")}
                alt="role"
                className="w-1/6"
              />
              <p>Select Your Role and Sign Up</p>
            </div>
            <div className="min-h-[254px] p-[40px] flex flex-col items-center justify-center gap-10">
              <img
                src={require("../assets/images/document.png")}
                alt="document"
                className="w-1/6"
              />
              <p>Buyers Post Your Requirements</p>
            </div>
            <div className="bg-section-card min-h-[254px] p-[40px] flex flex-col items-center justify-center gap-10">
              <img
                src={require("../assets/images/Layer.png")}
                alt="review"
                className="w-1/6"
              />
              <p> Review, Select, and Contact the Best Suppliers</p>
            </div>
            <div className="min-h-[254px] p-[40px] flex flex-col items-center justify-center gap-10">
              <img
                src={require("../assets/images/edit.png")}
                alt="edit"
                className="w-1/6"
              />
              <p>
                {" "}
                Suppliers Complete your profile and get notified for
                opportunities
              </p>
            </div>
            <div className="bg-section-card min-h-[254px] p-[40px] flex flex-col items-center justify-center gap-10">
              <img
                src={require("../assets/images/quote-request.png")}
                alt="contact"
                className="w-1/6"
              />
              <p>Contact to Buyers and Share your Quote for the service</p>
            </div>
            <div className="min-h-[254px] p-[40px] flex flex-col items-center justify-center gap-10">
              <img
                src={require("../assets/images/hands.png")}
                alt="hands"
                className="w-1/6"
              />
              <p>
                Both the Parties can Connect and Make Business Leave a Feedback
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
