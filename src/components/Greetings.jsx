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
    <h3>
      Good {wish} , {userName}
    </h3>
  );
};

export { Greetings };
