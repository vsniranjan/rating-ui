import Rating from "./components/Rating";
const App = () => {
  return (
    <div className='container'>
      <Rating />
      <Rating question='How is you experience learning JS?' />
      <Rating
        question='What are you opinions on Pineaple on Pizza'
        feedbackMessages={[
          "Hate it",
          "Dislike it",
          "Meh",
          "Like it",
          "Love it",
        ]}
      />
    </div>
  );
};

export default App;
