import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="m-auto max-w-6xl p-4">
      <div className="flex flex-col items-start justify-center gap-4 border-b-2 pb-10 font-poppins md:flex-row">
        <div className="flex w-full flex-col items-center space-y-4 md:w-2/6 md:items-start">
          <Logo />
          <p className="text-center text-sm text-muted-foreground md:text-start">
            Discover a world of products curated just for you. From the latest
            tech gadgets to stylish fashion trends, our handpicked selections
            cater to your every need.
          </p>
        </div>
        <div className="flex w-full flex-col items-center space-y-4 md:w-1/6 md:items-start">
          <p className="text-center text-xl font-medium md:text-start ">
            Get to know us
          </p>
          <ul className="flex flex-row flex-wrap items-center gap-4 space-y-0 text-sm text-muted-foreground md:flex-col md:items-start md:gap-0 md:space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Our value</li>
            <li>Contact</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="flex w-full flex-col items-center space-y-4 md:w-1/6 md:items-start">
          <p className="text-center text-xl font-medium md:text-start ">
            For consumers
          </p>
          <ul className="flex flex-row flex-wrap items-center gap-4 space-y-0 text-sm text-muted-foreground md:flex-col md:items-start md:gap-0 md:space-y-2">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Product Returns</li>
            <li>FAQ</li>
            <li>Shop Checkout</li>
          </ul>
        </div>
        <div className="flex w-full flex-col items-center space-y-4 md:w-1/6 md:items-start">
          <p className="text-center text-xl font-medium md:text-start ">
            Best selling
          </p>
          <ul className="flex flex-row flex-wrap items-center gap-4 space-y-0 text-sm text-muted-foreground md:flex-col md:items-start md:gap-0 md:space-y-2">
            <li>Clothes</li>
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>Furniture</li>
            <li>Skincare</li>
          </ul>
        </div>
        <div className="flex w-full flex-col items-center space-y-4 md:w-1/6 md:items-start">
          <p className="text-center text-xl font-medium md:text-start ">Help</p>
          <ul className="flex flex-row flex-wrap items-center gap-4 space-y-0 text-sm text-muted-foreground md:flex-col md:items-start md:gap-0 md:space-y-2">
            <li>Security</li>
            <li>Return Orders</li>
            <li>Track Orders</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center  py-6 text-sm font-medium text-muted-foreground md:justify-between">
        <div className="flex items-center gap-4 ">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <p> &copy; {new Date().getFullYear()} NexBuy. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
