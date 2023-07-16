import { useState } from "react";
import Icon from "./icon";

export default function Carousel(props) {
  const [elements, setElements] = useState(props.elements);
  const [bounds, _] = useState({ start: 0, end: 3 });

  const cycleRight = () => {
    const eltCopy = elements.slice(1);
    eltCopy.push(elements[0]);
    setElements(eltCopy);
  };

  const cycleLeft = () => {
    const eltCopy = [elements.at(-1), ...elements.slice(0, -1)];
    console.log(eltCopy);
    setElements(eltCopy);
  };

  return (
    <div className="flex justify-between">
      <button onClick={cycleLeft}>
        <Icon name="arrow-left" />
      </button>
      <div className="w-full flex justify-center gap-4">
        {elements.slice(bounds.start, bounds.end)}
      </div>
      <button onClick={cycleRight}>
        <Icon name="arrow-right" />
      </button>
    </div>
  );
}
