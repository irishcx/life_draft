'use client'
import { useState } from "react";
import Human from "@/components/Human";


export default function HumanTextModifier() {
  const [text, setText] = useState("Hello, I am a human figure!");


  const textDictionary = [
    "Hello, I am a human figure!",
    "This is a random message.",
    "React is fun!",
    "Next.js makes development easier.",
    "Click again to see more!"
  ];

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * textDictionary.length);
    setText(textDictionary[randomIndex]);
  };
// TODO : a function to decide the level
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Human
        healthLevel={Math.floor(Math.random()*10)}
        luckyLevel={Math.floor(Math.random())}
        socialLevel={Math.floor(Math.random())}
        specialLevel={Math.floor(Math.random())}
      />
      <p className="mt-4 text-lg text-gray-700">{text}</p>
      <button
        className="text-gray-700"
        onClick={handleClick}
      >
        Next
      </button>
      <button
        className="text-red-700"
        onClick={handleClick}
      >
        restart
      </button>
    </div>
  );
}
