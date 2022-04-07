import { useData } from "../context";

const Greetings = () => {
  const {
    dataState: {
      userName,
      time: { hours },
    },
  } = useData();

  let wish = "Morning";

  if (hours > 12 && hours < 16) {
    wish = "Afternoon";
  } else if (hours <= 18) {
    wish = "Evening";
  } else {
    wish = "Night";
  }

  return (
    <h1 className="txt-5xl">
      Good {wish} , {userName}
    </h1>
  );
};

export { Greetings };
