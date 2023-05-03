import { Form, FormGroup, Label, Input, Button } from "reactstrap";


import React  from "react";
export default function Navbar({setIsActive}) {

  return (
    <Form className="shadow-lg p-3 mb-5 bg-body rounded">
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter Your Email"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter Your Password"
          type="password"
        />
      </FormGroup>
      <div className="d-flex justify-content-center">
        <Button onClick={()=>setIsActive(true)} className="bg-primary">Log In</Button>
      </div>

    </Form>
  );
}
