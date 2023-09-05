import { useForm } from "react-hook-form";
import { TextField } from "../TextField/TextField";

export const Form = () => {
  const {register, handleSubmit, formState: { errors },} = useForm();

  const submit = (data) => {
    console.log(data);
  };

  const myForm = [
    {
      type: "text",
      name: "FirstName",
      placeholder: "Enter your first name",
    },
    {
      type: "number",
      name: "Age",
      placeholder: "Enter your age",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Enter your email",
    },

    {
      type: "text",
      name: "Address",
      placeholder: "Enter your address",
    },
  ];

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        {myForm.map((item, index) => {
          return (
            <TextField
              errors={errors}
              register={register}
              key={index}
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
            />
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );
};
