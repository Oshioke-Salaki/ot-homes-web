import ChooseCard from "../../ui/ChooseCard";
import tickIcon from "../../assets/shield-tick.png";
import question from "../../assets/message-question.png";
import money from "../../assets/moneys.png";
import deal from "../../assets/like-shapes.png";

function WhyChooseSection() {
  return (
    <div className="text-textPrimary">
      <div className="mb-[49px] text-center capitalize">
        <h1 className="text-[32px] font-semibold">Why choose us</h1>
        <h2 className="text-lightBorder text-sm font-normal">
          Reasons why you people love our services
        </h2>
      </div>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-1">
        <ChooseCard
          img={tickIcon}
          description={
            "Plans change that is why we offer you free cancellation on most hotels"
          }
          title={"Flexible Bookings"}
        />
        <ChooseCard
          img={question}
          description={
            "We’re always here for you reach us 24 hours a day, 7 days a week"
          }
          title={"Customer services 24/7"}
        />
        <ChooseCard
          img={money}
          description={
            "We’re always here for you reach us 24 hours a day, 7 days a week"
          }
          title={"Easy payments"}
        />
        <ChooseCard
          img={deal}
          description={"Price line members always get our best price"}
          title={"Incredible deals"}
        />
      </div>
    </div>
  );
}

export default WhyChooseSection;
