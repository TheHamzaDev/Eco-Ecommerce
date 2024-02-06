const Banner = () => {
  return (
    <div className="bg-black py-2 text-light">
      <div className="max-screen-width flex flex-col items-center justify-center gap-1">
        <h4 className="font-bold text-15">Free Delivery & Returns</h4>
        <p className="font-regular text-12 text-center">
          Memebers get free delivery and free 30-day return.{" "}
          <span className="link">Join Us</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
