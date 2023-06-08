import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container>
      <h1 className="my-3">Add Todo</h1>
      <Form
        onSubmit={(e) => {
          // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
          e.preventDefault();
        }}
      >
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Get software developer job"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            rows={3}
            placeholder={`1. Create amazing project\n2. Apply to Google & Netflix\n3. Crush interview`}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
