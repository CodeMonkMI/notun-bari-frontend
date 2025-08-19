const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h4 className="font-bold text-white mb-2">United Pets</h4>
          <p>We care about your pets with love and dedication.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Contact Us</h4>
          <p>email@yoursite.com</p>
          <p>(123) 456-789</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Working Hours</h4>
          <p>Mon - Fri: 9am - 6pm</p>
          <p>Weekends: Closed</p>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 United Pets. Designed by IngridK.
      </div>
    </footer>
  );
};

export default Footer;
