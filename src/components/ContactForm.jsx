
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import userSchema from "../validations/userSchema";
import "./ContactForm.css";

const ContactForm = () => {
  const toast = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Message sent successfully",
      life: 3000,
    });

    reset();
  };

  return (
    <div className="contact-form-wrapper">
      <Toast ref={toast} position="top-center" />  {/**position="top-right" */}

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Contact Us</h2>

        {/* Name */}
        <div className="field">
          <label>Name</label>
          <InputText {...register("name")} className={errors.name ? "p-invalid" : ""} />
          {errors.name && <small className="p-error">{errors.name.message}</small>}
        </div>

        {/* Email */}
        <div className="field">
          <label>Email</label>
          <InputText {...register("email")} className={errors.email ? "p-invalid" : ""} />
          {errors.email && <small className="p-error">{errors.email.message}</small>}
        </div>

        {/* Phone */}
        <div className="field">
          <label>Phone</label>
          <InputText {...register("phone")} className={errors.phone ? "p-invalid" : ""} />
          {errors.phone && <small className="p-error">{errors.phone.message}</small>}
        </div>

        {/* Message */}
        <div className="field">
          <label>Message</label>
          <InputTextarea rows={5} {...register("message")} className={errors.message ? "p-invalid" : ""} />
          {errors.message && <small className="p-error">{errors.message.message}</small>}
        </div>

        <Button
          type="submit"
          label={isSubmitting ? "Sending..." : "Send Message"}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default ContactForm;

