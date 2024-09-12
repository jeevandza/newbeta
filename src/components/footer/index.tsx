export function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We are dedicated to delivering top-notch services tailored to your
              needs. Our focus is on quality and customer satisfaction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services/development" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:underline">About</a>
              </li>
              <li>
                <a href="/contact-us" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a href="mailto:info@yourapp.com" className="hover:underline">
                  stratavatech@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:underline">
                  +91-9019838637
                </a>
              </li>
              {/* <li>Address: 1234 Street Name, City, Country</li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">&copy; 2024 @stratava. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
