import React from "react";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Article from "./components/Article";
import Education from "./components/Education";
import Job from "./components/Job";
import Event from "./components/Event";
function App() {
  return (
    
    <div>
      <Header />

      <Navbar />

      <Article
        img="https://api.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg"
        Category="✍️ Article"
        Topic="What if famous brands had regular fonts? Meet RegulaBrands!"
        Description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
        profileImage="https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.jpg"
        profileName="Sarthak Kamra"
        views="1.4k views"
      />

      <Education
        img="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"
        Category="🔬️ Education"
        Topic="Tax Benefits for Investment under National Pension Scheme launched"
        Description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
        profileImage="https://www.faxburner.com/blog/wp-content/uploads/2017/12/iStock-628536910.jpg"
        profileName="Sarah West"
        views="1.4k views"
      />

      <Event
        Category="🗓️ Event "
        Topic="Finance & Investment Elite Social Mixer @Lujiazui"
        Description="Fri, 12 Oct, 2018."
        Location="Ahmedabad,India."
        profileImage="https://www.nenco.az/img/avatars/avatar.jpg"
        profileName="Ronal Jones"
        views="1.4k views" />

      <Job
        Category="💼️ Job "
        Topic="Software Developer"
        Description="Innovaccer Analytics Pte.Ltd."
        Location="Noida, India"
        profileImage="https://www.adobe.com/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=2000&format=webply&optimize=medium"
        profileName="Joseph Gray"
        views="1.4k views"
      />

      <footer />
      
    </div>
  )
}
export default App;