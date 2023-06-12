import React, { useState } from 'react'
import { data } from "../data/data"
import 'swiper/css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import ScrollToTop from 'react-scroll-to-top';
import '../menu.css';
import Bleehhh from '../components/navbar';
import Footer from '../components/footer';

const Menu = () => {
  Aos.init({
    duration: 1800,
    offset: 3,
  })
  const [donut, setDonut] = useState(data)

  const filterType =(category) => {
    setDonut(
        data.filter((item) => {
            return item.category === category;
        })
    )
}

  return (

    <div>
      <Bleehhh />
      <div pt-4 data-aos="zoom-in">
        <h1 className='text-center text-[26px] pt-10 font-bold'>MENU LIST</h1>
        <p className='text-center underline decoration-2 decoration-pink-600  font-bold text-white'>UNDERLINE UNDERLINE UNDERLINE</p>
      </div>

      <div className='pt-5 pl-72 flex-col' data-aos="zoom-in">
        <div className='flex gap-8 ml-60'>
          <button onClick={() => setDonut(data)} className='text-amber-600 pl-2 hover:scale-110 duration-300'>All Menu</button>
          <button onClick={() => filterType('donut')} className='text-amber-600 hover:scale-110 duration-300'>Donut</button>
          <button onClick={() => filterType('drink')} className='text-amber-600 hover:scale-110 duration-300'>Drink</button>
          <button onClick={() => filterType('other')} className='text-amber-600 hover:scale-110 duration-300'>Other</button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 p-14">
        {donut.map((item, index) => (
          <div key={index} className="border shadow-lg hover:scale-110 duration-300" data-aos="fade-up">
            <img className="w-full h-[200px] object-cover rounded-t-lg" src={item.image} alt={item.name} />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className='grid grid-cols-3 p-14 pt-20 pb-14 gap-10 gap-y-20 ' id='donut'>

          <div className="container ">
            <div className="card">
              <div className="imgbox">
                <img src={Donut2} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Enak</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="imgbox">
                <img src={Donut3} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Enak</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="imgbox">
                <img src={Donut4} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Enak</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="imgbox">
                <img src={Donut5} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Donutan</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="imgbox">
                <img src={Donut6} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Enak</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="imgbox">
                <img src={Donut7} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Enak</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>


        </div>

        <hr class="border-pink-300 border-2 mx-16"></hr>

        <div className='grid grid-cols-3 p-14 pt-20 pb-14 gap-10 gap-y-20' id='drink'>

          <div className="container">
            <div className="card">
              <div className="imgbox">
                <img src={Drink1} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Enak</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="imgbox">
                <img src={Drink2} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Enak</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="imgbox">
                <img src={Drink3} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Enak</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="imgbox">
                <img src={Drink4} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Donutan</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="imgbox">
                <img src={Drink5} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Enak</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <div className="imgbox">
                <img src={Drink1} alt="" />
              </div>
              <div className="content">
                <div className="color">
                  <h2 className='text-amber-800 text-[25px] pb-3'>Donut Enak</h2>
                  <p className='text-justify'>Wow donat enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm enak mm hmmm mpph mmm enak mmm mph mm enak banget mmmm</p>
                </div>
              </div>
            </div>
          </div>


        </div> */}

      <ScrollToTop smooth top="20" color="#f2772e" />
      <Footer />
    </div >

  )
}

export default Menu
{/* <p className='text-white underline decoration-2 decoration-pink-400 text-[5px]'>All Menuaaaaaaaaaaaaaaaa</p> */ }