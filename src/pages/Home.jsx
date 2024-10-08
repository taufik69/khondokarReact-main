import React from 'react'
import Header from "../components/HomeConponents/Header/Index.jsx"
import Banner from "../components/HomeConponents/Banner/Index.jsx"
// import Product from "../components/HomeConponents/Product/Index.jsx"
// import Vedio from "../components/HomeConponents/vedio/Index.jsx"
// import Client from "../components/HomeConponents/Client/Index.jsx"
// import Award from "../components/HomeConponents/Award/Index.jsx"
// import WhatWeDo from "../components/HomeConponents/WhatWeDo/Index.jsx"
// import Footer from "../components/HomeConponents/Footer/Index.jsx"
const Home = () => {
    return (
        <div>
            <section>
                <Header />
            </section>
            <section id="Banner">
                <Banner />
            </section>
            {/* <section id="Product">
                <Product />
            </section>
            <section id="Vedio">
                <Vedio />
            </section>
            <section id="Client">
                <Client />
            </section>
            <section id="Award">
                <Award />
            </section>
            <section id="Whatwedo">
                <WhatWeDo />
            </section>
            <section id="Whatwedo">
                <Footer />
            </section>
            <ScroolTop /> */}
        </div>
    )
}

export default Home