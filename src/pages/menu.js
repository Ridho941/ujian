import React, { useState } from 'react'
import { data } from "../data/data"
import 'swiper/css';
import ScrollToTop from 'react-scroll-to-top';
import '../menu.css';
import Bleehhh from '../components/navbar';
import Footer from '../components/footer';
import { Link as LinkRoute } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import Donut2 from '../assets/donut2.jfif';
import Donut3 from '../assets/donut3.jfif';
import Donut4 from '../assets/donut4.jfif';
import Donut5 from '../assets/donut5.jfif';
import Donut6 from '../assets/donut6.jfif';
import Donut7 from '../assets/donut7.jfif';
import Drink1 from '../assets/minuman1.jfif';
import Drink2 from '../assets/minuman2.jfif';
import Drink3 from '../assets/minuman3.jfif';
import Drink4 from '../assets/minuman4.jfif';
import Drink5 from '../assets/minuman5.jfif';

const Menu = () => {
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
      <div pt-4>
        <h1 className='text-center text-[26px] pt-10 font-bold'>MENU LIST</h1>
        <p className='text-center underline decoration-2 decoration-pink-600  font-bold text-white'>UNDERLINE UNDERLINE UNDERLINE</p>
      </div>

      <div className='pt-5 pl-72 flex-col'>
        <div className='flex gap-8 ml-60'>
          <button onClick={() => setDonut(data)} className='text-amber-600 pl-2'>All Menu</button>
          <button onClick={() => filterType('donut')} href='' className='text-amber-600'>Donut</button>
          <button onClick={() => filterType('drink')} href='' className='text-amber-600'>Drink</button>
          <button className='text-amber-600'>Other</button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 p-14" data-aos="fade-up">
        {donut.map((item, index) => (
          <div key={index} className="border shadow-lg hover:scale-105 duration-300">
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