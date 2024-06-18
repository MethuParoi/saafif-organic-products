import logo from "../assets/logo.png";

function Footer() {
  return (
    <div>
      <div className="bg-gray-100 text-gray-900 transition-all duration-200 px-[8rem] py-4">
        <div className="flex justify-center items-center mb-5">
          <img className="w-60 h-auto" src={logo} alt="Logo" />
        </div>
        <div className="flex gap-[30rem]">
          <nav className="border-t border-gray-400 ml-[17rem] inline-block">
            <ul className="list-none flex">
              <li className="inline-block mr-6 last:mr-0">
                <button
                  onClick={() => {
                    console.log("button clicked");
                  }}
                  className="text-gray-900  no-underline uppercase inline-block hover:text-primaryHover hover:shadow-lg hover:rotate-5 hover:scale-110"
                >
                  About
                </button>
              </li>
              <li className="inline-block mr-6 last:mr-0">
                <button
                  onClick={() => {
                    console.log("button clicked");
                  }}
                  className="text-gray-900  no-underline uppercase inline-block hover:text-primaryHover hover:shadow-lg hover:rotate-5 hover:scale-110"
                >
                  Contact
                </button>
              </li>
              <li className="inline-block mr-6 last:mr-0">
                <button
                  onClick={() => {
                    console.log("button clicked");
                  }}
                  className="text-gray-900  no-underline uppercase inline-block hover:text-primaryHover hover:shadow-lg hover:rotate-5 hover:scale-110"
                >
                  Location
                </button>
              </li>
              <li className="inline-block mr-6 last:mr-0">
                <button
                  onClick={() => {
                    console.log("button clicked");
                  }}
                  className="text-gray-900  no-underline uppercase inline-block hover:text-primaryHover hover:shadow-lg hover:rotate-5 hover:scale-110"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </nav>
          <div className="border-t border-gray-400 pt-4 inline-block">
            Saafif.com is dedicated to enriching lives with the purity of
            nature. Our mission is to deliver premium organic products that
            promote health, well-being, and environmental sustainability. We are
            committed to fostering a connection between consumers and the
            natural world, providing transparency, and ensuring the integrity of
            our supply chain. By choosing Saafif.com, you choose a life in
            harmony with nature.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
