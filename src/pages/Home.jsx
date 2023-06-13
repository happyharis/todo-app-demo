import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";

export default function Home() {
  const todos = useContext(TodoContext).todos;
  return (
    <Container>
      <h1 className="my-3">Your todos</h1>
      <Row>
        <CardGroup todos={todos} />
      </Row>
    </Container>
  );
}

function CardGroup({ todos }) {
  return todos.map((todo) => {
    const completed = todo.completed;
    const bg = completed ? "success" : "danger";
    return (
      <Col md={4} key={todo.id}>
        <Card border={bg} className="my-3">
          <Card.Header>{!completed && "Not"} Completed</Card.Header>
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <Card.Link href={`todo/${todo.id}`}>Edit</Card.Link>
            <br />
          </Card.Body>
        </Card>
      </Col>
    );
  });
}
