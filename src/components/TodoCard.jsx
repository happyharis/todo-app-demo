import { Card } from "react-bootstrap";

export default function TodoCard({ todo, onClick }) {
  const completed = todo.completed;
  const bg = completed ? "success" : "danger";
  return (
    <Card border={bg} className="my-3">
      <Card.Header>{!completed && "Not"} Completed</Card.Header>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>{todo.description}</Card.Text>
        <Card.Link href={`todo/${todo.id}`}>Edit</Card.Link>
        <Card.Link href="#" onClick={onClick}>
          Delete
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
