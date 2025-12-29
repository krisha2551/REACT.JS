import { Card, Button } from "react-bootstrap";

const ReviewCard = ({ review, onDelete, onEdit }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <h6 className="fw-bold">{review.name}</h6>
          <div>
            <Button
              size="sm"
              variant="outline-info"
              className="me-2"
              onClick={() => onEdit(review)}
            >
              Edit
            </Button>
            <Button
              size="sm"
              variant="outline-danger"
              onClick={() => onDelete(review.id)}
            >
              Delete
            </Button>
          </div>
        </div>

        <div>
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} style={{ color: num <= review.rating ? "gold" : "lightgray" }}>
              ★
            </span>
          ))}
        </div>

        <p className="mt-2 mb-0">{review.comment}</p>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
