import React, { Component } from 'react'
import Icon from './Group9.png'
import Human from './pleased.png'



export default class Header extends Component {
  render() {
    return (
      <div>
        <header className='max-w-[1319px] w-full mx-auto bg-[#E9FBF9] rounded-[30px] mt-[70px] '>

          <div className=' max-w-[1100px] w-full flex mx-auto items-center justify-between px-6 my-[20px] '>
            <div className='flex'>
              <div className=''>
              <button className='px-[22px] py-[4px] bg-[#fff] rounded-[4px] text-[16px] font-normal text-[#FF823B] mt-[70px]'>it works!</button>
              <h1 className=' text-[64px] font-extrabold text-[#021D1A] w-[570px] leading-[80px] py-[31px]'>Try Our Business Ideas to grow Rapidly</h1>
              <p className='text-[18px] font-bold text-[#464646] w-[428px] leading-[30px] pb-[51px]'>We understand how desperatly you want to grow
                in the business world & our motto is to help
                you with practicale idea and plan </p>
              <div className='flex items-center mb-[106px]'>
                <button className='px-[39px] py-[18px] bg-[#FF823B] rounded-[32px] text-[18px] font-bold text-[#fff]'>Get Started</button>
                <div className='flex items-center '>
                 <img src={Icon} alt="" />

                  <a className=' text-[18px] font-bold text-[#FF823B]' href="#!">DEMO VIDEO</a>
                  <div>
                  </div>


                  </div>
                </div>
                </div>
                </div>
                <div className=' '>
                    <img src={Human} alt=""  className='max-w-[999px] w-full h-[673px] mt-[65px]' />
                    
                    </div>
              

           
          </div>
        </header>
      </div>

    )
  }
}
