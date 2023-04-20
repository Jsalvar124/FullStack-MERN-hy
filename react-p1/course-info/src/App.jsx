import './App.css'

// Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.
// Define the new components in the file App.js.

// ORIGINAL FILE

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

// const course = 'Half Stack application development' CASE 2
// const part1 = {
//   name: 'Fundamentals of React',
//   exercises: 10
// }
// const part2 = {
//   name: 'Using props to pass data',
//   exercises: 7
// }
// const part3 = {
//   name: 'State of a component',
//   exercises: 14
// }

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

// export default App

//Header Component
export function Header (props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
//Content Component
export function Content (props) {

  return(
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

//Part Component
export function Part (props) {
  return(
      <p>
        {props.part.name} {props.part.exercises}
      </p>
  )
}

//Total Component
export function Total (props) {
  return(
    <p>Number of exercises {props.total}</p>
  )
}

//App Calling the created components with its props.
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={31}/>
    </div>
  )
}

export default App