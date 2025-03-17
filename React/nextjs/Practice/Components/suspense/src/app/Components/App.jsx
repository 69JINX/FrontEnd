'use client'
import React, { Suspense, useState } from "react";

function createJokeComponent() {
  return React.lazy(() =>
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => ({
        default: () => (
          <div className="p-4 bg-white text-gray-600 shadow-md rounded-md text-center">
            <h2 className="text-xl font-semibold">Random Joke:</h2>
            <p className="mt-2">{data.setup}</p>
            <p className="font-bold">{data.punchline}</p>
          </div>
        ),
      }))
  );
}

export default function App() {
  const [JokeComponent, setJokeComponent] = useState(createJokeComponent);

  const refreshJoke = () => {
    setJokeComponent(() => createJokeComponent()); // Reloads the component
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Suspense fallback={<div className="text-black">Loading joke...</div>}>
        <JokeComponent />
      </Suspense>
      <button
        onClick={refreshJoke}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Get New Joke
      </button>
    </div>
  );
}
