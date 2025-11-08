
import React, { Component } from 'react'
import Logo from './Logo4.png'

export default class Navbar extends Component {
  render() {
    return (
      <div>
<nav>
  <div className=" max-w-[1100px] w-full flex mx-auto items-center justify-between px-6 mt-[40px]">

<img src={Logo} alt="" />
      <div className=" flex text-[16px] font-medium gap-[60px] ">
       <a href="#!">About amid</a>
       <a href="#!">Features</a>
       <a href="#!">Portfolio</a>
       <a href="#!">Reviews</a>
      </div>
<button className='bg-[#124F48] px-[39px] py-[18px] rounded-[32px] text-[18px] font-bold text-[#fff]'>login</button>
    </div>

</nav>
      </div>
    )
  }
}
