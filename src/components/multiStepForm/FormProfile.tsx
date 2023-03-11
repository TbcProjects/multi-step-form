import { Form } from "formik";

import Header from "../shared/Header";
import Input from "../shared/Input";

export default function ProfileForm() {
  return (
    <>
      <Header
        heading="Personal info"
        subHeading="Please provide your name, email address, and phone number."
      />
      <Form>
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="e.g. Steven King"
        />
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
        />
      </Form>
    </>
  );
}
