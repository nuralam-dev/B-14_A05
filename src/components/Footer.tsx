import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
          <div className="max-w-sm flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center space-x-2 text-gray-700 font-medium pt-2">
              <a href="#" className="hover:text-gray-900 transition">
                GitHub
              </a>
              <span className="hidden md:inline">•</span>
              <span className="inline md:hidden">•</span>
              <a href="#" className="hover:text-gray-900 transition">
                Twitter
              </a>
              <span className="hidden md:inline">•</span>
              <span className="inline md:hidden">•</span>
              <a href="#" className="hover:text-gray-900 transition">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-3 gap-12 pt-1">
            <div className="space-y-3">
              <h3 className="font-bold text-xs uppercase text-gray-900 tracking-wider">
                PRODUCT
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xs uppercase text-gray-900 tracking-wider">
                COMPANY
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xs uppercase text-gray-900 tracking-wider">
                LEGAL
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-600 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
