import Button from "../Button";
import InputField from "../InputField";

const NewsletterSignUp = () => {
  return (
    <div className="py-16 mt-24 border border-gray-700">
      <div className="max-screen-width flex flex-col md:flex-row md:items-center justify-between">
        <h2 className="font-bold text-20 text-pretty max-w-64">
          Join our newsletter to keep up to date with us!
        </h2>
        <form className="flex items-center justify-start md:justify-end gap-x-2 w-full md:w-auto pt-4 md:pt-0">
          <InputField type="text" placeholder="Enter your email" />
          <Button type="button" width="w-32">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignUp;
