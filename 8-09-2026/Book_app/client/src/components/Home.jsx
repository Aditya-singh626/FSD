import Item from "./Item";
const Home = () => {
  const iteamdata = [
    { image: "", title: "ReactJS", price: 29.99 },
    { image: "", title: "VueJS", price: 29.99 },
    { image: "", title: "AngularJS", price: 29.99 },
  ];
  return (
    <div className="home">
      <h1 className="home-title">Welcome to My Book App</h1>
      <p className="home-description">
        Discover a world of books at your fingertips. Browse, read, and manage
        your favorite titles with ease.
      </p>
      <div className="home-items">
        {iteamdata.map((item, index) => {
          return <Item key={index} props={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
