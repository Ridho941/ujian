import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const home = () => {
    return (
        <>
        <Navbar />
        <div class="bg-gray-100 min-h-screen">
            <section class="bg-red-300 py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 class="text-4xl font-bold text-gray-800">Welcome to Donut!</h1>
                    <p class="mt-4 text-lg text-gray-600">Donuts (round dough) are fried snacks made from a mixture of flour, sugar, egg yolks, bread yeast and butter. It was so good!</p>
                    <a href="https://m.jcodonuts.com/id" class="mt-8 inline-block bg-white hover:bg-gray-100 text-black text-lg font-semibold py-3 px-6 rounded">Get Started</a>
                </div>
            </section>
            <h2 class="text-3xl font-bold text-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 ">Highlights Donut</h2>
            <div class="container gap-7 p-16">

                <div class="card" >
                    <div class="imgbox">
                        <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                    </div>
                    <div class="content">
                        <h2> Glazed Donut </h2>
                        <p>Our signature glazed donut made with a perfect balance of sweetness and softness.</p>
                    </div>
                </div>

                <div class="card">
                    <div class="imgbox">
                        <img src="https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
                    </div>
                    <div class="content">
                        <h2> Sprinkled Donut </h2>
                        <p>Indulge in the rich flavor of chocolate with our sprinkled donut.</p>
                    </div>
                </div>

                <div class="card" >
                    <div class="imgbox">
                        <img src="https://images.unsplash.com/photo-1631143070457-c1aecc92abbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80donut" alt="" />
                    </div>
                    <div class="content">
                        <h2> Fruit-Filled Donut </h2>
                        <p>Experience a burst of fruity goodness with our delicious fruit-filled donut.</p>
                    </div>
                </div>
        </div>    
    </div >

    <div class="bg-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-semibold text-gray-800">About Us</h2>
            <div class="flex flex-col md:flex-row mt-8">
                <div class="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1631143070457-c1aecc92abbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80donut" alt="About Us" class="w-full h-auto" />
                </div>
                <div class="md:w-1/2 md:pl-10 mt-6 md:mt-0">
                    <p class="text-lg text-gray-600">We are a passionate donut seller that has been serving delicious donuts for over a decade. Our mission is to create the best donut experience for our customers.</p>
                    <p class="mt-4 text-lg text-gray-600">Our donuts are made from the finest ingredients and carefully crafted to perfection. We offer a wide variety of flavors and styles, from classic glazed donuts to unique and creative creations.</p>
                    <p class="mt-4 text-lg text-gray-600">At our donut shop, customer satisfaction is our top priority. We strive to provide excellent service and a welcoming atmosphere for everyone. Whether you're craving a sweet treat or looking to satisfy your donut cravings, we've got you covered!</p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default home