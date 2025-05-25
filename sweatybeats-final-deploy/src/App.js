import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white font-sans">
        <header className="p-4 shadow-lg bg-black flex justify-between items-center">
          <h1 className="text-2xl font-bold">SWEAT Productions</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/vinyl" className="hover:underline">Used Vinyl</Link>
            <Link to="/merch" className="hover:underline">Merch</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/gallery" className="hover:underline">Photography</Link>
            <Link to="/catalog" className="hover:underline">Music Catalog</Link>
            <Link to="/subscribe" className="hover:underline">Subscribe</Link>
          </nav>
        </header>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/vinyl" element={<Vinyl />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section>
      <h2 className="text-3xl font-bold">Welcome to SWEAT Productions</h2>
      <p className="mt-2">Sounds With Energy & Taste. Listen to DJ mixes, shop vinyl, view photography, and more. <a className="underline" href="https://on.soundcloud.com/wX1nWozs9LspctxV9">Soundcloud Mixes</a></p>
    </section>
  );
}
function Services() { return <h2 className="text-2xl font-bold">Services Page</h2>; }
function Vinyl() { return <h2 className="text-2xl font-bold">Used Vinyl Page</h2>; }
function Merch() { return <h2 className="text-2xl font-bold">Merch Page</h2>; }
function Blog() { return <h2 className="text-2xl font-bold">Blog Page</h2>; }
function Gallery() { return <h2 className="text-2xl font-bold">Gallery Page</h2>; }
function Catalog() { return <h2 className="text-2xl font-bold">Music Catalog Page</h2>; }
function Subscribe() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Join Our Email List</h2>
      <form className="mt-4">
        <input type="email" placeholder="Your email address" className="p-2 rounded text-black" required />
        <button type="submit" className="ml-2 bg-blue-600 px-4 py-2 rounded">Subscribe</button>
      </form>
    </section>
  );
}
