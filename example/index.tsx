import * as React from 'react';
import { CSSProperties } from 'react';
import { render } from 'react-dom';
import { Shortcuts, ShortcutProvider } from '../src';

const keymap = {
  BOX: {
    MOVE_LEFT: ['left', 'a'],
    MOVE_RIGHT: ['right', 'd'],
    MOVE_UP: ['up', 'w'],
    MOVE_DOWN: ['down', 's'],
  },
};

type CustomTagProps = {
  style: any;
  className?: string;
  children?: React.ReactNode;
};

const CustomTag = React.forwardRef(function(props: CustomTagProps, ref: any) {
  const { style, children, className } = props;
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
});

const Box = ({ x, y, color, index, onMoveRequest }) => {
  const style: React.CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    textAlign: 'center',
    lineHeight: '100px',
    position: 'absolute',
    top: `${y + index * 120}px`,
    left: `${x + index * 120}px`,
  };
  const SHIFT = 10;
  const handleMove = action => {
    switch (action) {
      case 'MOVE_LEFT':
        onMoveRequest({ x: x - SHIFT }, index);
        break;
      case 'MOVE_RIGHT':
        onMoveRequest({ x: x + SHIFT }, index);
        break;
      case 'MOVE_UP':
        onMoveRequest({ y: y - SHIFT }, index);
        break;
      case 'MOVE_DOWN':
        onMoveRequest({ y: y + SHIFT }, index);
        break;
    }
  };

  return (
    <Shortcuts tag={<CustomTag style={style} />} name="BOX" handler={handleMove}>
      {index + 1}
    </Shortcuts>
  );
};

class App extends React.Component {
  state = {
    boxes: this.getBoxes(),
  };

  getBoxes() {
    const boxes: any[] = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ];
    return boxes.map(box => {
      box.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      return box;
    });
  }

  handleMove = (newPosition, index) => {
    const boxes = this.state.boxes.slice();
    boxes[index] = Object.assign(boxes[index], newPosition);
    this.setState({ boxes });
  };

  render() {
    const style: CSSProperties = {
      textAlign: 'center',
      fontFamily: 'sans-serif',
    };

    return (
      <ShortcutProvider keymap={keymap}>
        <div>
          <h1 style={style}>Click on any box and use arrow keys or WSAD</h1>
          {this.state.boxes.map(({ x, y, color }: any, index) => (
            <Box key={index} color={color} index={index} x={x} y={y} onMoveRequest={this.handleMove} />
          ))}
        </div>
      </ShortcutProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
