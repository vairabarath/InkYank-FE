import Lottie from "lottie-react";

type LottieBackgroundProps = {
  animationData: unknown; // or any if you prefer
  className?: string;
};

const LottieBackground = ({
  animationData,
  className = "",
}: LottieBackgroundProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Lottie
        animationData={animationData}
        autoplay={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieBackground;
