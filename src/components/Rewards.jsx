import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Rewards() {
  const points = 9000; // abhi test ke liye
  const target = 10000;

  const percentage = (points / target) * 100;

  const getColor = () => {
    if (percentage < 30) return "#ef4444"; // red
    if (percentage < 60) return "#f97316"; // orange
    if (percentage < 90) return "#eab308"; // yellow
    return "#22c55e"; // green
  };

  return (
    <section className="py-20 bg-[white]">
      <div className="max-w-6xl mx-auto px-8">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold text-center mb-10">
            Reward Progress
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">

            <div className="w-56 h-56">
              <CircularProgressbar
                value={percentage}
                text={`${points}`}
                styles={buildStyles({
                  pathColor: getColor(),
                  textColor: "#111",
                  trailColor: "#e5e7eb",
                  textSize: "16px",
                })}
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">
                🎁 Free Meal Reward
              </h3>

              <p className="text-gray-600 text-lg">
                Target: <span className="font-bold">10,000 Points</span>
              </p>

              <p className="text-gray-600 text-lg mt-2">
                Current: <span className="font-bold">{points} Points</span>
              </p>

              <p className="text-orange-500 font-bold text-xl mt-4">
                {target - points} points remaining
              </p>

              <button
                disabled={points < target}
                className={`
                  mt-6 px-8 py-3 rounded-xl text-white font-bold
                  ${
                    points >= target
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-400 cursor-not-allowed"
                  }
                `}
              >
                Claim Reward
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Rewards;