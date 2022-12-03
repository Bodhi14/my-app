export function HelloWorld(props) {
  return <h2>{props.text}</h2>;
} // props is treated as the instance or object, just like self in python

export function ByeWorld(props) {
  return <h3>{props.comment}</h3>;
}

// No default function is used here
