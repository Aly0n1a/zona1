import React from 'react'
import '../TarifCard/TarifCard'
import s from './Tarif2.module.scss'
const Tarif2 = () => {
  return (
    <>
     <div className={s.tarif2}>
                <div className="container">
                    <p className={s.title}>ТАРИФЫ И ЦЕНЫ</p>
                    <div className={s.cards}>

                        <TarifCard  tarif={"Тариф «1 Час»"} accessTf={"Доступен 24/7"}  img={"/tarif1.svg"} oldprice={"Стандартный тариф"} price={"240 ₽"} color={"color1"} border={"border1"}/>
                        <TarifCard  tarif={"Тариф «3 Часа»"} accessTf={"Доступен 24/7"}  img={"/tarif2.svg"} oldprice={"Выгода: Час = 165 ₽  "} price={"490 ₽"} color={"color7"} border={"border2"}/>
                        <TarifCard  tarif={"Тариф «5 Часов»"} accessTf={"Доступен 24/7"}  img={"/tarif3.svg"} oldprice={"Выгода: Час = 140 ₽  "} price={"690 ₽"} color={"color8"} border={"border3"}/>
                        <TarifCard  tarif={"Тариф «7 Часов»"} accessTf={"Доступен 24/7"}  img={"/tarif4.svg"} oldprice={"Выгода: Час = 115 ₽ "} price={"790 ₽"} color={"color9"} border={"border4"}/>
                        <TarifCard  tarif={"Тариф «Ночь»"} accessTf={"23:00 ‒ 10:00"}  img={"/tarif5.svg"} oldprice={"Выгода: Час = 80 ₽  "} price={"890 ₽"} color={"color10"} border={"border5"}/>
                        <TarifCard  tarif={"Тариф «День»"} accessTf={"10:00 ‒ 23:00"}  img={"/tarif6.svg"} oldprice={"Выгода: Час = 75 ₽ "} price={"950 ₽"} color={"color11"} border={"border6"}/>
                    </div>
                        
                </div>
            </div>
    </>
  )
}

export default Tarif2