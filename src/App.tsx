import tw from "twin.macro"

const P = tw.p`text-3xl font-light text-blue-700`
function App() {
  return (
    <div className="container mx-auto mt-10">
    <h1 className="text-3xl underline font-extrabold">
      Hello world!
    </h1>
    <P>test twin </P>
    </div>
  )
}

export default App
