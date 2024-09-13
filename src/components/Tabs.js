import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("About me");
  return (
    <div className="relative mb-8 pt-2 bg-gray-600 rounded-xl h-1/3">
      <div className="flex justify-between m-2 bg-black text-gray-300 rounded-2xl">
        <button
          className={`m-1 py-2 px-4 ${
            activeTab === "About me" ? "bg-gray-800 text-white" : ""
          } rounded-2xl`}
          onClick={() => setActiveTab("About me")}
        >
          About me
        </button>
        <button
          className={`m-1 py-2 px-4 ${
            activeTab === "Experiences" ? "bg-gray-800 text-white" : ""
          } rounded-2xl`}
          onClick={() => setActiveTab("Experiences")}
        >
          Experiences
        </button>
        <button
          className={`m-1 py-2 px-4 ${
            activeTab === "Recommended" ? "bg-gray-800 text-white" : ""
          } rounded-2xl`}
          onClick={() => setActiveTab("Recommended")}
        >
          Recommended
        </button>
      </div>

      <div className="p-4 overflow-auto no-scrollbar max-h-40 bg-gray-600 rounded-xl text-gray-400">
        {activeTab === "About me" && (
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now. I was born and
            raised in Albany, NY& have been living in Santa Carla for the past
            10 years my wife Tiffany and my 4 year old twin daughters- Emma and
            Ella. Both of them are just starting school, so my calender is
            usually blocked between 9-10 AM. This is a...
          </p>
        )}
        {activeTab === "Experiences" && (
          <p>
            I have 5 years of experience in sales and have been working at
            Salesforce for the past 3 years. I've been able to close 50 deals in
            the past 6 months, and I'm looking forward to closing more deals in
            the future. I have a Bachelor's degree in Computer Science from the
            University of California, Berkeley. I've also...
          </p>
        )}
        {activeTab === "Recommended" && (
          <div>
            <p>
              I would recommend the following products based on your previous
              purchases:
            </p>
            <ul className="list-disc ml-6">
              <li>
                <span className="font-bold">Salesforce CRM:</span>
                <br /> Salesforce CRM helps businesses manage their sales,
                marketing, and customer service activities.
              </li>
              <li>
                <span className="font-bold">HubSpot CRM:</span>
                <br /> HubSpot CRM is a free CRM solution that helps manage
                sales, marketing, and customer service.
              </li>
              <li>
                <span className="font-bold">Zoho CRM:</span>
                <br /> Zoho CRM helps businesses manage their sales, marketing,
                and customer service activities.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Tabs;
