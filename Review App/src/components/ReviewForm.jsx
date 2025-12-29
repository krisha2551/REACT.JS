import { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const ReviewForm = ({ onAddReview, onUpdateReview, editData }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setRating(editData.rating);
      setComment(editData.comment);
    }
  }, [editData]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    if (editData) {
      onUpdateReview({ ...editData, name, rating, comment });
    } else {
      onAddReview({
        id: Date.now(),
        name,
        rating,
        comment,
      });
    }

    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <Card className="p-4 mb-4 shadow-sm">
      <h5 className="mb-3 text-info">
        {editData ? "Edit Review" : "Write a Review"}
      </h5>

      <Form onSubmit={submitHandler}>
        <Form.Control
          className="mb-3"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="mb-3">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              onClick={() => setRating(num)}
              style={{
                fontSize: "22px",
                cursor: "pointer",
                color: num <= rating ? "gold" : "lightgray",
              }}
            >
              ★
            </span>
          ))}
        </div>

        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Write your review..."
          className="mb-3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Button type="submit">
          {editData ? "Update Review" : "Submit Review"}
        </Button>
      </Form>
    </Card>
  );
};

export default ReviewForm;
