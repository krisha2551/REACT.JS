import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  const [reviews, setReviews] = useState([]);
  const [editReview, setEditReview] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reviews"));
    if (saved) setReviews(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReviewHandler = (review) => {
    setReviews((prev) => [review, ...prev]);
  };

  const updateReviewHandler = (updated) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === updated.id ? updated : r))
    );
    setEditReview(null);
  };

  const deleteReviewHandler = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold mb-4">Customer Reviews</h2>

      <ReviewForm
        onAddReview={addReviewHandler}
        onUpdateReview={updateReviewHandler}
        editData={editReview}
      />

      <ReviewList
        reviews={reviews}
        onDelete={deleteReviewHandler}
        onEdit={setEditReview}
      />
    </Container>
  );
}

export default App;
