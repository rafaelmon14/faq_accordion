import React from 'react'
import { NewFaq } from './NewFaq'
import icon_star from '../assets/images/icon-star.svg'

export const FaqContainer = () => {
  return (
    <div className="rounded-md bg-White w-[328px] ml-6 mt-[-80px] p-5 sm:w-[550px] sm:p-10 sm:rounded-xl sm:m-auto sm:mt-[-110px]">
        {/*Title */}
        <div className="flex">
          <img className="w-6 mr-6" src={icon_star} alt="Icon star" />
          <h1 className="font-bold text-3xl">FAQs</h1>
        </div>
        <NewFaq  
            question="What is Fronted Mentor, and how will it help me?"
            answer="Fronted Mentor offers realistic coding challenges to help developers imporve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        />
        <NewFaq 
            question="Is Fronted Mentor free?"
            answer="The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference."
        />
        <NewFaq 
            question="Can I use Fronted Mentor projects in my portfolio?"
            answer="Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!"
        />
        <NewFaq 
            question="How can I get help if I'm stuck on a challenge?"
            answer="The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated 'help' channel! If you haven't joined yet, you can get an invite to our Discord server here."
        />
    </div>
  )
}
