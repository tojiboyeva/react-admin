import React, { Component } from 'react'
import Netflix from './Rectangle161.png'
import Forbes from './Rectangle164.png'
import Itel from './image35.png'
import Fedex from './Rectangle162.png'
import Audiomack from './Rectangle163.png'
import Penguines from './Group191.png'
import Roud from './Ellipse91.png'
import Goto from './image36.png'

export default class Section1 extends Component {
  render() {
    return (
      <div>
        <section  className=" max-w-[1110px] w-full flex mx-auto items-center justify-between px-6 mt-[40px]">
            <div className='mb-[100px]'>
            <div className='flex justify-between gap-[30px] mt-[90px]'>
<button className='bg-[#F1FAF9] pl-[26px] pr-[36px] py-[10px] rounded-[10px] '><img src={Netflix} alt="" /></button>
<button className='bg-[#F1FAF9] pl-[60px] pr-[61px] py-[21px] rounded-[10px] '><img src={Forbes} alt="" /></button>
<button className='bg-[#F1FAF9] pl-[55px] pr-[48px] pt-[14px] pb-[9px] rounded-[10px] '><img src={Itel} alt="" /></button>
<button className='bg-[#F1FAF9] pl-[45px] pr-[46px] py-[25px] rounded-[10px] '><img src={Fedex} alt="" /></button>
            </div>
            <div className='flex justify-between gap-[30px] mt-[30px]'>
<button className='bg-[#F1FAF9] pl-[62px] pr-[72px] py-[20px] rounded-[10px] '><img src={Audiomack} alt="" /></button>
<button className='bg-[#F1FAF9] pl-[60px] pr-[60px] pt-[26px] pb-[27px] rounded-[10px] '><img src={Penguines} alt="" /></button>
<button className='bg-[#F1FAF9] pl-[100px] pr-[93px] pt-[20px] pb-[21px] rounded-[10px] '><img src={Roud} alt="" /></button>
<button className='bg-[#F1FAF9] pl-[19px] pr-[19px] pt-[22px] pb-[29px] rounded-[10px] '><img src={Goto} alt="" /></button>
            </div>
            </div> 

        </section>
      </div>
    )
  }
}
