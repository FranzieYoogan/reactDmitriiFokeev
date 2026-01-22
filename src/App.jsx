
const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];


function App() {


  return (

    <div>
      
      <Header></Header>
      <Product products={productData}></Product>
      <Footer footer="Footer"></Footer>
      </div>

  )
}

function Header() {

  const date = new Date();
  let hours = date.getHours();

  return (

    <header className="headerStyle">
      
      <div className="containerHeader">

          <div>
                <h1 className="headerTitle">Eletronic Store</h1>
          </div>

          <div className="containerAnchorsHeader">

                <a className="anchorHeaderStyle" href="#home">Home</a>
                <a className="anchorHeaderStyle" href="#catalog">Catalog</a>
                <a className="anchorHeaderStyle" href="#about">About Us</a>
                <a className="anchorHeaderStyle" href="#contact">Contact</a>
                
          </div>

          <div className="containerHourHeader">

                {hours >= 8 && hours < 21 ? ( 
                  <><p>We are currently <span className="headerOpen">OPEN</span> Hours: {hours}:00 - 21:00</p></>) : (

                  <>We are <span className="headerClosed">CLOSED.</span> Open from 8:00 to 21:00</>
                )}
                     

          </div>
            
      </div>
      
    </header>

  )

}

function Product(props) {

  return(

    <main className="containerProducts">

      
    {props.products.map((product) => (
      
      <div key={product.name} className="productCard">
      <ul className="ulStyle">
        <li className={`${product.soldOut ? "liCardSoldOut" : ""}`}>
          <img className="imgStyle" src={`${product.photoName}`} alt={product.photoName} />
          <h3 className="titleCard">{product.name}</h3>
          <p className="descriptionCard">{product.description}</p>
          <span className={`${!product.soldOut ? "priceCard" : "priceCardSoldOut"}`}>
            {product.soldOut ? "Sold Out" : `${product.price}`}</span>
        </li>
      </ul>
      </div>

    ))} 

</main>

  )

}

function Footer(props) {

  return(

    <footer>
      <div className="containerFooter">

          <h2 className="footerTitle">{props.footer}</h2>

      </div>
      
    </footer>

  )

}

export default App
