import { useContext, useState } from "react";
import { Card, Col, Container, Row, Modal, Button } from "react-bootstrap";
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
  const setTodos = useContext(TodoContext).setTodos;
  const [showModal, setShowModal] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const handleShowDeleteModal = (todoId) => {
    setSelectedTodoId(todoId);
    setShowModal(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedTodoId(null);
    setShowModal(false);
  };

  const deleteTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== selectedTodoId)
    );
    handleCloseDeleteModal();
  };

  return (
    <>
      {todos.map((todo) => {
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
                <Card.Link
                  href="#"
                  onClick={() => handleShowDeleteModal(todo.id)}
                >
                  Delete
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        );
      })}

      <Modal show={showModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this todo?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteTodo}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
