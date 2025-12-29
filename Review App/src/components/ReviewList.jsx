import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews, onDelete, onEdit }) => {
  if (reviews.length === 0) return <p className="text-center">No reviews yet.</p>;

  return reviews.map((r) => (
    <ReviewCard
      key={r.id}
      review={r}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ));
};

export default ReviewList;
