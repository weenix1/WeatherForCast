import { useState } from "react";
import {
  Form,
  FormControl,
  Breadcrumb,
  Button,
  Container,
} from "react-bootstrap";

const Search = () => {
  const [input, setInput] = useState("");

  return (
    <Breadcrumb>
      <Container>
        <div className="search">
          <Form inline className="mr-5">
            <FormControl
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Breadcrumb.Item href="#">Different Weather?</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </div>
      </Container>
    </Breadcrumb>
  );
};

export default Search;
