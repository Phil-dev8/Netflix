import "./App.css";
import netflix from "./netflix.json";
import logo from "./logo-netflix.png";

const App = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="logo de la marque" />
      </header>
      {netflix.map((elem) => {
        console.log(elem.images);
        return (
          <div>
            <h2>{elem.category}</h2>
            <div className="photos">
              {elem.images.map((img) => {
                console.log(img);
                return (
                  <div>
                    <img className="picture" src={img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
