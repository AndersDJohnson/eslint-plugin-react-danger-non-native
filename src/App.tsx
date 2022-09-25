export default function App() {
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: "<span>innerHTML</span>" }} />
    </div>
  );
}
