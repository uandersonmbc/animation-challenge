import { useEffect, CSSProperties } from 'react';

import './styles.scss';

interface Props {
  outLine?: boolean;
  style?: CSSProperties;
}

const Button: React.FC<Props> = ({ children, outLine, style }) => {
  useEffect(() => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
      ['mouseenter', 'mouseout'].forEach((evt) => {
        button.addEventListener(evt, (e: any) => {
          let parentOffset = button.getBoundingClientRect(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          const span = button.getElementsByTagName('span');
          span[0].style.top = relY + 'px';
          span[0].style.left = relX + 'px';
        });
      });
    });

    return () => {};
  }, []);
  return (
    <a
      className={`button ${outLine && 'button-border'} button-primary `}
      style={style}
    >
      {children}
      <span></span>
    </a>
  );
};

Button.defaultProps = {
  outLine: false,
};

export default Button;
