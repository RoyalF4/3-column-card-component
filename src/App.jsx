import Card from './Card';

function App() {
  return (
    <main className="card-container">
      <h1 className="sr-only">3 column card component</h1>
      <Card type="sedans">
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </Card>
      <Card type="suvs">
        Take an SUV for its spacious interior, power, and versatility. Perfect
        for your next family vacation and off-road adventures.{' '}
      </Card>
      <Card type="luxury">
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </Card>
    </main>
  );
}

export default App;
