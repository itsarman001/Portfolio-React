import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid Email";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  // Validation Not Working

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) setErrors(validateErrors);
    setErrors({});
    setIsSending(true);

    emailjs
      .send("Service_Id", "Template_Id", formData, "Public_Key")
      .then((response) => {
        toast.success("Message Sent Successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("Failed: " + error);
        toast.error("Failed to send message, Please try agian");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="p-4 lg-w/3" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {error.name && (
              <p className="text-sm text-rose-800">{error.name}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="email"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {error.email && (
              <p className="text-sm text-rose-800">{error.email}</p>
            )}
          </div>
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            rows={6}
          />
          {error.message && (
            <p className="text-sm text-rose-800">{error.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Sending..." : "Send"}
            <FiSend />
          </div>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
