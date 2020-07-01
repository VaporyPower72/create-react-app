import React, { useState } from "react"; // <- note the added import of useState

export default function ArticleButton() {
  const initial_text = "Like this";
  const [text, set_text] = useState(initial_text); // <- using state!
  const switchItUp = () => {
    if (text === "Like this") {
      set_text("You've liked this. Click to unlike");
    } else {
      set_text(initial_text);
    }
  };
  return (
    <div>
      <p>
        <button onClick={switchItUp}>{text}</button>
      </p>
    </div>
  );
}
