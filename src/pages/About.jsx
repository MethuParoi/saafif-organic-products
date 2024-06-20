import Button from "../ui/Button";

function About() {
  return (
    <div className="lg:min-h-[55dvh] min-h-[45dvh] py-5 px-10 flex flex-col">
      <div>
        <h1 className="lg:text-[5rem] text-[3rem] font-semibold text-primary ">
          SAAFIF
        </h1>
        <h3 className="text-2xl font-light text-primary tracking-[.5rem] pb-10">
          ORGANIC PRODUCTS
        </h3>
      </div>

      <div>
        <p className="lg:text-xl text-lg text-gray-900 pr-8 xl:pr-[45rem]">
          Saafif.com is dedicated to enriching lives with the purity of nature.
          Our mission is to deliver premium organic products that promote
          health, well-being, and environmental sustainability. We are committed
          to fostering a connection between consumers and the natural world,
          providing transparency, and ensuring the integrity of our supply
          chain. By choosing Saafif.com, you choose a life in harmony with
          nature.
        </p>
      </div>

      <div className="lg:pt-10 pt-16">
        <Button label={"Get in Touch"} type={"standard"} />
      </div>
    </div>
  );
}

export default About;
