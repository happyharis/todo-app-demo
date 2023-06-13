import { useContext, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import TodoCard from "../components/TodoCard";
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
        return (
          <Col md={4} key={todo.id}>
            <TodoCard
              todo={todo}
              onClick={() => handleShowDeleteModal(todo.id)}
            />
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
