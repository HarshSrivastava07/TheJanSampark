import React from 'react'
import "./App.css"
import Header from "../src/Header/header"
import Body from "../src/Body/body"
import Footer from "../src/Footer/footer"
const App = () => {

  return (
    <div>
<Header />
<Body />
<Footer />

      <script src="./assets/js/script.js"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
}

export default App