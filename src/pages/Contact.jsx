import React from "react";
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xleyqoqe");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

const Contact = () => {
//   const handleContact = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const number = form.number.value;
//     const description = form.description.value;
//     const customer = {name, email, number, description}
//     console.log(customer)

//   };
  return (
    <div className="max-w-[1440px] min-h-screen mx-auto px-10">
      <h1 className="font-bold text-4xl my-10 mx-auto text-center">
        Contact Me
      </h1>
      {/* <div>
        <form onSubmit={handleContact}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email Address</span>
            </div>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Phone Number</span>
            </div>
            <input
              name="number"
              type="number"
              placeholder="Your Phone Number"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
            ></textarea>
          </label>
          <div className="mx-auto text-center my-5">
            <input
              className="btn btn-primary mx-auto"
              name="description"
              type="submit"
              value="Submit"
              required
            />
          </div>
        </form>
      </div> */}
       <ContactForm />
    </div>
  );
};

export default Contact;
