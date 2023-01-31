import "./App.css";
import netflix from "./netflix.json";
//import Section from "./components/Section";

const category = netflix.map((elem) => {
  return elem.category;
});
console.log(category);

const images = netflix.map((elem) => {
  return elem.images;
});
console.log(images);

function App() {
  return (
    <div>
      <h2>{category[0]}</h2>
      <ul>
        <li>{images[0]}</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h2>{category[1]}</h2>
      <ul></ul>
      <h2>{category[2]}</h2>
      <ul></ul>
      <h2>{category[3]}</h2>
      <ul></ul>
      <h2>{category[4]}</h2>
      <ul></ul>
      <h2>{category[5]}</h2>
      <ul></ul>
    </div>
  );
}

export default App;
