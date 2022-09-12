import './App.css';
import React,{useRef,useState} from 'react'

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:"pink"}}>Higher Order Components </h1>
      <div>Higher Order Function is a function which takes a wrapped Component as an input argument and returns a new enhanced Component.<br/>
      
Higher-Order Components are not part of the React API. They are the pattern that emerges from React's compositional nature. <br/>
      The component transforms props into UI, and a higher-order component converts a component into another component. <br/>
      The examples of HOCs are Redux's connect and Relay's createContainer.
      <br/>
     However, they have to render some UI. In such a case, React hooks seem to be a perfect mechanism for code reuse. Hence, HOCs are inconvenient when you want to share some non-visual logic. In such a case, React hooks seem to be a perfect mechanism for code reuse.
     <br/>
     <h1>Pure Components</h1>A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.
     <br/>

PureComponent Is Primarily Used for Performance Optimization. <br/> As outlined in the React docs: If your React component's render() function renders the same result given the same props and state, you can use React. PureComponent for a performance boost in some cases.
     
     
     </div>
      {/* <Counter/>
      <Counter/> */}
      <HOCRed cmp={Counter}/>
      <HOCGreen cmp={Counter}/>
      <HOCBlue cmp={Counter}/>

</div>
  );
}
function HOCRed(props)
{
  return <h2 style={{backgroundColor:"red",width:200,textAlign:"center"}}>Counter 1<props.cmp/></h2>
}
function HOCGreen(props)
{
  return <h2 style={{backgroundColor:"green",width:200}}>Counter 2<props.cmp/></h2>
}
function HOCBlue(props)
{
  return <h2 style={{backgroundColor:"blue",width:200}}>Counter 3<props.cmp/></h2>
}
function Counter()
{
  const [count,setCount]=useState(0)
  return<div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update Me !!</button>
  </div>
   
}
export default App;
