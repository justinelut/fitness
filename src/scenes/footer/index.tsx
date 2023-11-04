import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" width={`30%`} src={Logo} />
          <p className="my-5">
            We are dedicated to providing you with the best services and products. Our commitment to quality and customer satisfaction is our top priority. Contact us to learn more about our offerings.
          </p>
          <p>© Pixelayout. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Learn more about our services</p>
          <p className="my-5">Explore our product catalog</p>
          <p>Contact us for any inquiries</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Reach out to us for any questions or assistance.</p>
          <p>
            <a href="tel:+254740455300">+254 740 455 300</a>
          </p>
          <p>
            <a href="mailto:support@pixelayout.site">support@pixelayout.site</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
