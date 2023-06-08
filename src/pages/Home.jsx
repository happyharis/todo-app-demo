import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";

export default function Home() {
  const todos = useContext(TodoContext).todos;

  return (
    <Container>
      <h1 className="my-3">Your todos</h1>
      <CardGroup todos={todos} />
    </Container>
  );
}

function CardGroup({ todos }) {
  return todos.map((todo) => {
    return (
      <Row key={todo.key}>
        <Col md={4}>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>{todo.title}</Card.Title>
              <Card.Text>{todo.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  });
}
