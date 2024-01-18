import React, { useState } from 'react'
import icon_minus from '../assets/images/icon-minus.svg'
import icon_plus from '../assets/images/icon-plus.svg'



export const NewFaq = ({question, answer, isVisible}) => { 

  const [visible, setVisible] = useState(false);
  const [iconPlus, setImage] = useState(icon_plus);

  const toggleVisibility = () => {
    setVisible(!visible);
    setImage(visible ? icon_plus : icon_minus);
  }

  return (
    <>
    {/* Content*/}
        <article className="border-b-[1px] last:border-none last:pb-1 py-5 ">
            <div onClick={toggleVisibility} className="flex w-full hover:cursor-pointer items-center sm:items-center">
                <dt className="font-semibold leading-5 hover:text-purple-600 w-[70%] sm:w-[90%]">{question}</dt>
                <button className="ml-14 sm:ml-10">
                    <img src={iconPlus} alt="Icon plus/minus"/>
                </button>
            </div>
            {visible && (
              <dd className="text-Grayish-purple text-sm mr-4 mt-6">{answer}</dd>
            )}
        </article>

        
    </>
        
   
    
  )
}
