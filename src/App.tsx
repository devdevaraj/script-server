import './App.css'

function App() {
 const copy = () => {
  navigator.clipboard.writeText(`curl -s ${location}scripts/hello-world.sh | sh`);
 }
 return (
  <main className="p-4">
   <h1 className="text-2xl text-center">Scripts</h1>
   <ol className="w-64">
    <li className="flex items-center justify-center gap-4">
     <a
      className="text-blue-600"
      href="/hello-world.sh"
     >
      Hello world
     </a>
     <button onClick={copy}>
      copy
     </button>
    </li>
   </ol>
  </main>
 )
}

export default App;
