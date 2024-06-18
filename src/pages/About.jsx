import Button from "../ui/Button";

function About() {
  return (
    <div className="h-[55dvh] py-5 px-10 flex flex-col">
      <div>
        <h1 className="text-[5rem] font-bold text-primary ">SAAFIF</h1>
        <h3 className="text-4xl font-light text-primary tracking-[1rem] pb-10">
          ORGANIC PRODUCTS
        </h3>
      </div>

      <div>
        <p className="text-xl text-gray-900 pr-[45rem]">
          Saafif.com is dedicated to enriching lives with the purity of nature.
          Our mission is to deliver premium organic products that promote
          health, well-being, and environmental sustainability. We are committed
          to fostering a connection between consumers and the natural world,
          providing transparency, and ensuring the integrity of our supply
          chain. By choosing Saafif.com, you choose a life in harmony with
          nature.
        </p>
      </div>

      <div className="pt-10">
        <Button label={"Get in Touch"} type={"standard"} />
      </div>
    </div>
  );
}

export default About;
