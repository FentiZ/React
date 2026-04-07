import mini1 from './assets/mini1.png'
import mini2 from './assets/mini2.png'
import mini3 from './assets/mini3.png'
import mini4 from './assets/mini4.png'
import mini5 from './assets/mini5.png'
import mini6 from './assets/mini6.png'
import mini7 from './assets/mini7.png'
import mini8 from './assets/mini8.png'
import big from './assets/bigpicture.png'
import ToEval from './assets/ToEvaluate.png'
import ToFav from './assets/ToFavourite.png'
import ProcAct from './assets/ProcentAction.png'
import arrow from './assets/Arrow.png'
import giftpic from './assets/gift.png'

import './App.css'

function App() {
  return (
    <>
      <div className='leftblock'>
        <div className='minimenu'>
          <img src={mini1} />
          <img src={mini2} />
          <img src={mini3} />
          <img src={mini4} />
          <img src={mini5} />
          <img src={mini6} />
          <img src={mini7} />
          <img src={mini8} />
        </div>

        <div className='bigpicture'>
          <img src={big} />
        </div>
      </div>

      <div className='rightblock'>
        <div className='description'>

          <div className='passway'>
            <p>
              Оружейный магазин {'>'} AR оружие {'>'} AR-15 {'>'} AR-15 Daniel Defense {'>'}<br />
              Карабин Daniel Defense DDM4 7 PRO GUN METAL GRAY кал.223Rem 18"
            </p>
          </div>

          <div className='ProductName'>
            <h1>Карабин Daniel Defense DDM4 7 PRO GUN METAL GRAY кал.223Rem 18"</h1>
            <p>Артикул: 0212809375047</p>
            <button className='feedbackbutton'>Оставить отзыв</button>
          </div>

          <div className='costandbuyblock'>

            <p className='cost'>197 460 грн</p>

            <div className='specialbuttonscontainer'>
              <img src={ToEval} />
              <div className='specialbutton'>К сравнению</div>

              <img src={ToFav} />
              <div className='specialbutton'>В желания</div>
            </div>

            <p className='status'>В наличии</p>

            <div className='discount'>
              <img src={ProcAct} />
              <span className='login'>Войти</span>
              <img src={arrow} />
              <span>Скидка 5% для зарегистрированных</span>
            </div>

            <div className='buyrow'>
              <div className='ammount'>
                <p className='minus'>-</p>
                <p>1</p>
                <p className='minus'>+</p>
              </div>

              <div className='buy'>Купить</div>

              <div className='orderinone'>Заказать в 1 клик</div>
            </div>

          </div>

          <div className='giftcontainer'>
            <div className='rightgift'>
              <img src={giftpic} />
            </div>

            <div className='leftgift'>
              <h2>Подарок</h2>
              <div className='giftdesc'>
                <p>Сертификат на тренировку "Все включено"</p>
                <p>
                  <span className='giftaction'>4000 грн</span>
                  бесплатно
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App