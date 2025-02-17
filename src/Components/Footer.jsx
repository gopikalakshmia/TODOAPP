function Footer({ handleFilter }) {
  return (
    <footer className="text-white mt-5 border-1 border-lime-800">
      <button onClick={() => handleFilter("all")} className="p-2">All</button>
      <button onClick={() => handleFilter("active")} className="p-2">Active</button>
      <button onClick={() => handleFilter("completed")} className="p-2">Completed</button>
    </footer>
  );
}

export default Footer;
