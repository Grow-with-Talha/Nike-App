import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h1 className="font-palanquin font-bold text-4xl text-center">
        What our <span className="text-coral-red">Customers</span> Say?
      </h1>
      <p className="info-text m-auto mt-4 text-center max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex-1 flex justify-evenly items-center max-lg:flex-col gap-14 ">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
