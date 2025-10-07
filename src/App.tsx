import './App.css'

function App() {
 const copy = (script: string) => {
  navigator.clipboard.writeText(`curl -s ${location}${script} | sh`);
 }
 const scripts = [
  "/hello-world.sh",
  "/run-init.sh",
 ];
 return (
  <main className="p-4">
   <h1 className="text-2xl text-center">Scripts</h1>
   <ol className="w-64">
    {scripts.map((e) => (
     <li key={e} className="flex items-center justify-center gap-4">
      <a
       className="text-blue-600"
       href={e}
      >
       {e.split("/")[1].split(".sh")[0]}
      </a>
      <button onClick={() => copy(e)}>
       copy
      </button>
     </li>
    ))}
   </ol>
  </main>
 )
}

export default App;
