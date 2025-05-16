import Welcome from '@kombination/ui-components/Welcome.tsx';

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 lg:p-12 md:p-6">
      <h1 className="text-xl font-bold my-4">Pack your things, get on the kombi!</h1>
      <Welcome />
    </div>
  )
}

export default App
