import Alert from "react-bootstrap/Alert";

const AlertMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <Alert variant="success" dismissible onClose={onClose}>
      {message}
    </Alert>
  );
};

export default AlertMessage;
