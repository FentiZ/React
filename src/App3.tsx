import './App3.css'
import ipadImg from './assets/project3/ipad.jpg' // положи сюда картинку

type ProductProps = {
  title: string
  price: string
}

const ProductCard = ({ title, price }: ProductProps) => {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={ipadImg} alt="ipad" />
      </div>

      <div className="card-content">
        <p className="title">{title}</p>

        <div className="price">
          {price} <span>грн</span>
        </div>

        <div className="buttons">
          <button className="buy">Купити</button>
          <button className="credit">В кредит</button>
        </div>

        <div className="availability">Є в наявності</div>
      </div>
    </div>
  )
}

export default function App3() {
  const products = [
    { title: 'Apple iPad Pro 13 2025 Wi-Fi 1TB Silver (MDYP4)', price: '94 990' },
    { title: 'Apple iPad Pro 13 2025 Wi-Fi + Cellular 256GB Silver (ME7X4)', price: '64 849' },
    { title: 'Apple iPad Pro 13 2025 Wi-Fi + Cellular 2TB Silver with Nano-texture Glass (ME8N4)', price: '88 799' },
    { title: 'Apple iPad Pro 13 2025 Wi-Fi + Cellular 1TB Space Black (ME8D4)', price: '94 895' },

    { title: 'Apple iPad Pro 13 2025 Wi-Fi + Cellular 2TB Space Black with Nano-texture Glass (ME8M4)', price: '88 799' },
    { title: 'Apple iPad Pro 13 2025 Wi-Fi + Cellular 2TB Space Black (ME8J4)', price: '86 599' },
    { title: 'Apple iPad Pro 13 2025 Wi-Fi + Cellular 1TB Space Black with Nano-texture Glass (ME8G4)', price: '99 899' },
    { title: 'Apple iPad Pro 13 2025 Wi-Fi 512GB Space Black (MDYL4)', price: '70 270' },

    { title: 'Apple iPad Pro 13 2025 Wi-Fi 512GB Silver (MDYM4)', price: '73 050' },
    { title: 'Apple iPad Pro 13 2025 Wi-Fi 256GB Silver (MDYK4)', price: '60 650' },
    { title: 'Apple iPad Pro 13 2025 Wi-Fi 256GB Space Black (MDYJ4)', price: '58 599' },
    { title: 'Apple iPad Pro 13 2025 Wi-Fi 1TB Space Black (MDYN4)', price: '95 190' },
  ]

  return (
    <div className="wrapper">
      <div className="grid">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}