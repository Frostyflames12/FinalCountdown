import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import { challenges } from "./util/Challenges.js";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {/* {challenges.map((challengeItem) => (
          <TimerChallenge
            key={challengeItem.level}
            title={challengeItem.level}
            targetTime={challengeItem.time}
          />
        ))} */}
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
