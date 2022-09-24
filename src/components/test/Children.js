import React from 'react';

// Render only when props changes
const ChildA = React.memo(function ChildA(props) {
  console.log('ChildA rendered');
  return <>Hello, {props.value}!</>;
});

// Render whenever parent component renders
const ChildB = (props) => {
  console.log('ChildB rendered');
  return <>Goodbye, {props.value}!</>;
};

// Render whenever parent component renders
const ChildC = React.memo(function ChildC({onClick, value}) {
  console.log('ChildC triggered');
  return (
    <>
      <input type="button" value={value} onClick={onClick} />
    </>
  );
});

// Render whenever parent component renders
const ChildD = ({onClick, value}) => {
  React.useMemo(() => {
    console.log('ChildD triggered');
  }, []);
  return (
    <>
      <input type="button" value={value} onClick={onClick} />
    </>
  );
};

const ChildRef = React.forwardRef(function ChildRef(props, ref) {
  const [msg, setMsg] = React.useState('Someone');

  React.useImperativeHandle(ref, () => ({
    getAlert() {
      setMsg('World');
      alert('getAlert from Child');
    },
  }));

  return <p>Hello, {msg}!</p>;
});

export {ChildA, ChildB, ChildC, ChildD, ChildRef};
