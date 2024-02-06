const BrandHeader = () => {
  return (
    <div className="hidden h-8 bg-black md:flex items-center">
      <div className="text-12 flex items-center justify-between w-full max-screen-width">
        <p className="text-light font-bold">Students Get 10% Discount</p>
        <div className="flex items-center justify-between text-light font-bold gap-4">
          <a href="#" title="Find a Store">
            Find a Store
          </a>
          <span>|</span>
          <a href="#" title="Help">
            Help
          </a>
          <span>|</span>
          <a href="#" title="Join Us">
            Join Us
          </a>
          <span>|</span>
          <a href="#" title="Sign In">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
