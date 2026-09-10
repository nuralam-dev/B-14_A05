🚀 Project Name :
DevStack - Technology Stack Builder.
A simple and modern React project built to practice and demonstrate my React skills. This project focuses on reusable components, state management, API/JSON data handling, and conditional rendering.

🛠️ Technologies Used
⚛️ React
📘 TypeScript
🎨 Tailwind CSS
🧩 DaisyUI
📦 JSON
🌐 Vite

✨ Features

1. 📱 Responsive Design
   The website works smoothly on desktop, tablet, and mobile devices.
2. 🔄 Dynamic Data
   The project loads data from a JSON file and displays it dynamically using React components.
3. ⚡ Interactive UI
   Users can interact with the application, and the UI updates automatically based on the current state.
   ⚛️ React Questions & Answers

4. What is JSX, and why is it used in React?
   JSX is a syntax that lets us write HTML-like code inside JavaScript.
   React uses JSX because it makes creating UI components easier and more readable.
   const title = <h1>Hello React!</h1>;
5. What is the difference between props and state?
   Props are used to send data from a parent component to a child component.
   State is data that belongs to a component and can change over time.
   Simple way to remember:
   Props → receive data
   State → manage changing data
6. What does the useState hook do, and where did you use it in this project?
   useState is used to create and manage changing data inside a React component.
   In this project, I used useState to manage the application's interactive data, such as selected items or the current UI state.
   Example:
   const [items, setItems] = useState([]);
   Here, items stores the data and setItems updates it.
7. What does the useEffect hook do, and why did you need it to load the JSON data?
   useEffect lets us run code when a component renders or when specific data changes.
   I used useEffect to load the JSON data when the component starts.
   useEffect(() => {
   fetch("/data.json")
   .then((res) => res.json())
   .then((data) => setItems(data));
   }, []);
   The empty [] means the effect runs when the component loads.

8. Why does every item in a .map() list need a unique key prop?
   React needs a unique key to identify each item in a list.
   It helps React understand which item was added, removed, or changed.
   Example:
   {items.map((item) => (
   <Card key={item.id} item={item} />
   ))}
   The id should be unique for every item.

9. What is conditional rendering?
Conditional rendering means showing different UI depending on a condition.
For example, if there are no items, I can show an empty message:
{items.length === 0 ? (
  <p>No items available.</p>
) : (
  items.map((item) => <Card key={item.id} item={item} />)
)}
Here, the empty message is shown when the array has no items.

10. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
    A parent sends data to a child using props.
    <PlayerCard player={player} />
    The child receives it through props:
    const PlayerCard = ({ player }) => {
    return <h2>{player.name}</h2>;
    };
    To send something back, the parent can pass a function as a prop.
    The child calls that function when something happens.
    <Child onSelect={handleSelect} />
    So:
    Parent → Child: Props
    Child → Parent: Callback function through props

📌 Conclusion
This project helped me understand the fundamentals of React, including:
Components
Props
State
Hooks
useState
useEffect
Conditional rendering
.map()
Unique keys
JSON data
Parent-child communication
⭐ Thanks for visiting my project!
