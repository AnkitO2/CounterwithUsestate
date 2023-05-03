import React, {   } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function Product({setIsActive}) {
 
  return (
    <>
      <Form className="shadow-lg p-3 mb-5 bg-body rounded">
        <Label className="d-flex justify-content-center bg-light text-dark p-2">
          Registration Form
        </Label>
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
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input
            id="exampleAddress"
            name="address"
            placeholder="Enter Your Address"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCity">City</Label>
          <Input id="exampleCity" name="city" placeholder="Enter Your City" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleState">State</Label>
          <Input
            id="exampleState"
            name="state"
            placeholder="Enter Your State"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleZip">Zip</Label>
          <Input id="exampleZip" name="zip" />
          <div className=" d-flex justify-content-center">
            <Button className="bg-primary" onClick={()=>setIsActive(false)}>
              Sign In
            </Button>
          </div>
        </FormGroup>
      </Form>
   
    </>
  );
}
