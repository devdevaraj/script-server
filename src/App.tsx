import toast, { Toaster } from "react-hot-toast";
import { Copy, Terminal } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import './App.css';

function App() {
 const copy = (script: string) => {
  navigator.clipboard.writeText(`curl -s ${location.origin}${script} | sh`);
  toast.success("Command copied to clipboard!");
 };

 const scripts = [
  { path: "/hello-world.sh", description: "A simple Hello World script to test the setup." },
  { path: "/run-init.sh", description: "Initialize the environment with necessary configurations." },
 ];

 const getScriptName = (path: string) => {
  return path.split("/")[1].split(".sh")[0].replace("-", " ");
 };

 return (
  <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
   <Toaster
    position="bottom-center"
    toastOptions={{
     style: {
      background: '#333',
      color: '#fff',
     },
     className: 'dark:bg-gray-800 dark:text-white',
    }}
   />

   <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
     <div className="flex items-center gap-2">
      <Terminal className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
      <h1 className="text-xl font-bold tracking-tight">DevScripts</h1>
     </div>
     <ThemeToggle />
    </div>
   </header>

   <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="text-center mb-16">
     <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
      One-Line Install Scripts
     </h2>
     <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Simplify your workflow with our curated collection of shell scripts.
      Just copy, paste, and run.
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {scripts.map((script) => (
      <div
       key={script.path}
       className="group bg-white dark:bg-gray-950 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col"
      >
       <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-4">
         <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
          <Terminal className="w-6 h-6" />
         </div>
         <a
          href={script.path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
         >
          View Source
         </a>
        </div>
        <h3 className="text-xl font-bold mb-2 capitalize text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
         {getScriptName(script.path)}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
         {script.description}
        </p>
       </div>

       <div className="bg-gray-50 dark:bg-gray-900/50 p-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3">
        <code className="text-xs font-mono bg-gray-200 dark:bg-black px-2 py-1 rounded text-gray-700 dark:text-gray-300 truncate flex-1 select-all">
         curl -s {location.origin}{script.path} | sh
        </code>
        <button
         onClick={() => copy(script.path)}
         className="p-2 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 rounded-lg text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all active:scale-95"
         title="Copy path to clipboard"
        >
         <Copy className="w-5 h-5" />
        </button>
       </div>
      </div>
     ))}
    </div>
   </main>

   <footer className="border-t border-gray-200 dark:border-gray-800 mt-20 bg-white dark:bg-black">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
     <p className="text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} DevScripts. All rights reserved.
     </p>
     <div className="flex items-center gap-6">
      <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Privacy</a>
      <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Terms</a>
      <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Contact</a>
     </div>
    </div>
   </footer>
  </div>
 );
}

export default App;
