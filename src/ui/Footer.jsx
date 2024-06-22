import { IoCallSharp, IoLocation } from "react-icons/io5";
import logo from "../assets/logo.png";
import { IoIosMail } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-gray-100 text-gray-900 transition-all duration-200 py-4">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-5">
          <img className="md:w-60 w-32 h-auto" src={logo} alt="Logo" />
        </div>

        <div className="flex flex-col items-start justify-around lg:flex-row lg:justify-between mx-auto pb-4 pl-4 md:pl-0">
          <div className="min-h-[10rem]">
            <ul>
              <li>
                <h3 className="text-xl font-semibold text-primary">
                  Our Address
                </h3>
              </li>
              <li className="pt-2">
                <p>
                  <IoLocation className="text-2xl text-primaryHover inline-block" />
                  <span className="text-lg text-gray-900 pl-2">
                    123 Street, New York, USA
                  </span>
                </p>
              </li>
              <li className="pt-2">
                <p>
                  <IoCallSharp className="text-2xl text-primaryHover inline-block" />
                  <span className="text-lg text-gray-900 pl-2">
                    +012 345 67890
                  </span>
                </p>
              </li>
              <li className="pt-2">
                <p>
                  <IoIosMail className="text-2xl text-primaryHover inline-block" />
                  <span className="text-lg text-gray-900 pl-2">
                    info@example.com
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <div className="min-h-[10rem]">
            <nav className=" block">
              <ul className="list-none text-md">
                <li>
                  <h3 className="text-xl font-semibold text-primary">
                    Useful Link
                  </h3>
                </li>
                <li className="block md:mr-6 last:mr-0 pt-2">
                  <button
                    onClick={() => {
                      console.log("button clicked");
                    }}
                    className="text-gray-900  no-underline uppercase inline-block hover:text-primaryHover hover:shadow-lg hover:rotate-5 hover:scale-110"
                  >
                    About
                  </button>
                </li>
                <li className="block md:mr-6 last:mr-0 pt-2">
                  <button
                    onClick={() => {
                      console.log("button clicked");
                    }}
                    className="text-gray-900  no-underline uppercase inline-block hover:text-primaryHover hover:shadow-lg hover:rotate-5 hover:scale-110"
                  >
                    Contact
                  </button>
                </li>
                <li className="block md:mr-6 last:mr-0 pt-2">
                  <button
                    onClick={() => {
                      console.log("button clicked");
                    }}
                    className="text-gray-900  no-underline uppercase inline-block hover:text-primaryHover hover:shadow-lg hover:rotate-5 hover:scale-110"
                  >
                    Location
                  </button>
                </li>
                <li className="block md:mr-6 last:mr-0 pt-2">
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
          </div>
          <div className="mt-4 lg:mt-0">
            <ul>
              <li>
                <h3 className="text-xl font-semibold text-primary">
                  Customer Service
                </h3>
              </li>
              <li className="pt-2">
                <p>
                  <RiCustomerService2Fill className="text-2xl text-primaryHover inline-block" />
                  <span className="text-lg text-gray-900 pl-2">
                    +012 345 67890
                  </span>
                </p>
              </li>
              <li className="pt-2">
                <p>
                  <RiCustomerService2Fill className="text-2xl text-primaryHover inline-block" />
                  <span className="text-lg text-gray-900 pl-2">
                    +012 345 67891
                  </span>
                </p>
              </li>
              <li className="pt-2">
                <p>
                  <IoIosMail className="text-2xl text-primaryHover inline-block" />
                  <span className="text-lg text-gray-900 pl-2">
                    info@example.com
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <div className=" inline-block mt-4 lg:mt-0">
            <h3 className="text-xl font-semibold text-primary">In a breif</h3>
            <p className="max-w-[25rem] pt-2">
              Saafif.com is dedicated to enriching lives with the purity of
              nature. Our mission is to deliver premium organic products that
              promote health, well-being, and environmental sustainability. We
              are committed to fostering a connection between consumers and the
              natural world, providing transparency, and ensuring the integrity
              of our supply chain. By choosing Saafif.com, you choose a life in
              harmony with nature.
            </p>
          </div>
        </div>
        <div className="text-center border-t-primaryHover border-t">
          <p className="text-gray-900 font-normal lg:font-medium p-2">
            Copyright © saafif.com@2024, All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
