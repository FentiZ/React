import { useState } from 'react'
import mini1 from './assets/project2/mini1.png'
import mini2 from './assets/project2/mini2.png'
import mini3 from './assets/project2/mini3.png'
import mini4 from './assets/project2/mini4.png'
import mini5 from './assets/project2/mini5.png'
import mini6 from './assets/project2/mini6.png'
import mini7 from './assets/project2/mini7.png'
import mini8 from './assets/project2/mini8.png'
import big from './assets/project2/bigpicture.png'
import ToEval from './assets/project2/ToEvaluate.png'
import ToFav from './assets/project2/ToFavourite.png'
import ProcAct from './assets/project2/ProcentAction.png'
import arrow from './assets/project2/Arrow.png'
import giftpic from './assets/project2/gift.png'


import './App2.css'

function App() {
  return (
    <>
    <div className='leftblock'>
        <div className='minimenu'>
            <img src={mini1}></img>
            <img src={mini2}></img>
            <img src={mini3}></img>
            <img src={mini4}></img>
            <img src={mini5}></img>
            <img src={mini6}></img>
            <img src={mini7}></img>
            <img src={mini8}></img>
        </div>
        <div className='bigpicture'>
            <img src={big}></img>
        </div>

    </div>
    <div className='rightblock'>
        <div className='description'>
            <div className='passway'>
                <p>Оружейный магазин {'>'} AR оружие {'>'} AR-15 {'>'} AR-15 Daniel Defense {'>'}<br></br>
                   Карабин Daniel Defense DDM4 7 PRO GUN METAL GRAY кал.223Rem 18"</p>
            </div>
            <div className='ProductName'>
                <h1>Карабин Daniel Defense DDM4 7 PRO GUN METAL GRAY кал.223Rem 18"</h1>
                <br></br>
                <p>Артикул: 0212809375047</p>
                <button className='feedbackbutton'>Оставить отзыв</button>
            </div>
            <div className='costandbuyblock'>
                <p className='cost'></p>
                <div className='specialbuttonscontainer'>
                    <img src={ToEval}></img>
                    <div className='specialbutton'>К сравнению</div>
                    <img src={ToFav}></img>
                    <div className='specialbutton'>В желания</div>
                </div>
                <p className='status'>В наличии</p>
                <img src={ProcAct}></img>
                <div className='specialbutton'>Войти</div>
                <img src={arrow}></img>
                <p>Скидка 5% для зарегистрированных</p>

                <div className='ammount'>
                    <p className='minus'>-</p>
                    <p>1</p>
                    <p className='minus'>+</p>
                </div>
                <div className='buy'>
                    <p>Купить</p>
                </div>
                <div className='orderinone'>
                    <p>Заказать в 1 клик</p>
                </div>

            </div>
            <div className='giftcontainer'>
                <div className='rightgift'>
                    <img src={giftpic}></img>
                </div>
                <div className='leftgift'>
                    <h2><b>Подарок</b></h2>
                    <div className='giftdesc'>
                        <p>Сертификат на тренировку "Все включено"</p>
                        <br></br>
                        <p className='giftaction'>4000 грн</p>
                        <p>бесплатно</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default App
