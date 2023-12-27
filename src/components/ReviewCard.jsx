import { Star } from "lucide-react";

const ReviewCard = ({ customerName, imgURL, rating, feedback }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="object-contain w-[120px] h-[120px] rounded-full"
      />
      <p className="info-text mt-6 max-w-sm text-center ">{feedback}</p>
      <div className="flex gap-2.5 items-center justify-center">
        <Star className="text-coral-red w-6 h-6 m-0" />
        <p className="text-slate-gray font-montserrat text-xl">({rating})</p>
      </div>
      <h1 className="font-palanquin mt-1 text-3xl text-center font-bold ">{customerName}</h1>
    </div>
  );
};

export default ReviewCard;
