interface InputFieldProps {
  type: "text" | "email" | "password";
  placeholder: string;
  maxWidth?: string;
}

const InputField = ({ type, placeholder, maxWidth }: InputFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input input-bordered w-full ${
        maxWidth ? maxWidth : "md:min-w-64"
      } font-regular bg-transparent border border-black border-solid rounded-full`}
    />
  );
};

export default InputField;
