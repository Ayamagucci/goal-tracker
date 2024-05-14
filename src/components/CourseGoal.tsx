/* "TYPE" DECORATOR
Indicates only importing TYPE (vs. entire module)

NOTE: Can help w/ TREE SHAKING
  • Build tool recognizes only TYPE used
  • Removes unnecessary code (assoc. w/ other exports) from that module
*/
import {
  // type ReactNode,
  type PropsWithChildren,
  type FC, // "Functional Component"
  type MouseEventHandler
} from 'react'; // NOTE: actually "@types/react" + "@types/react-dom" **

/*
interface GoalProps {
  title: string;
  children: ReactNode; // Props obj —> "children" prop (w/ nested elems)
}
*/
type GoalProps = PropsWithChildren<{ // implicit "children" prop
  title: string;
  description: string;
  handleClick: MouseEventHandler<HTMLButtonElement>; // typing distinctly diff from "handleDelete" **
}>;

const CourseGoal: FC<GoalProps> = (
  { title, description, children, handleClick }
) => (
  <article>
    <div>
      <h2>{ title }</h2>
      <h4>{ description }</h4>

      { children }
    </div>

    <button onClick={ handleClick }>
      DELETE
    </button>
  </article>
);

export default CourseGoal;

/* ChatGPT: (REACT) EVENT HANDLERS

In React, event handlers are functions that are called when certain events occur, such as a button click, mouse movement, or key press. These event handlers are typically assigned to specific HTML elements using event attributes like "onClick", "onMouseOver", "onChange", etc.

Behind the scenes, React uses a synthetic event system to manage and handle these events consistently across different browsers. When an event occurs, React creates a synthetic event object that contains information about the event, such as the type of event, target element, and any additional data associated with the event.

For example, when a button is clicked and its "onClick" event handler is triggered, React creates a synthetic "MouseEvent" object representing the click event. This object contains properties like "target", "clientX", "clientY", etc., which provide information about the event.

React then calls the event handler function and passes the synthetic event object as an argument. This allows you to access information about the event and perform any necessary logic based on it. For instance, you can access the target element using "event.target", prevent the default behavior of the event using "event.preventDefault()", or extract data from the event payload.

By using synthetic events, React provides a consistent and efficient way to handle events across different browsers and ensures that event handling in your application remains declarative and easy to manage. Additionally, TypeScript's type system helps enforce type safety by ensuring that event handler functions have the correct type signatures, preventing common errors and improving code quality.
*/