import { useState } from 'react';
import arrowDown from '../images/arrow-down.png';
import arrowUp from '../images/arrow-up.png';
type Props = {
  title: string;
  content: string;
};
export default function Accordion({ title, content }: Props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="accordion-container">
      <div className="accordion">
        <button
          className={
            !isShowing ? 'accordion-button' : 'accordion-button active'
          }
          onClick={toggle}
          type="button"
        >
          <p className="accordion-title">{title}</p>
          <img
            className="accordion-icon"
            src={!isShowing ? `${arrowDown.src}` : `${arrowUp.src}`}
            alt=""
          />
        </button>
        <div
          className="accordion-content"
          style={{ display: isShowing ? 'block' : 'none' }}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </div>
  );
}
