export function HelloWorld(props) {
  return <h2>{props.text}</h2>;
} // props is treated as the instance or object, just like self in python

export function ByeWorld(props) {
  return <h2>{props.comment}</h2>;
}

// No default function is used here
