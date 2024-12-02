import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons/faCameraRetro'
import { faPalette } from '@fortawesome/free-solid-svg-icons/faPalette'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple'
import { faContactBook } from '@fortawesome/free-solid-svg-icons/faContactBook'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faCube } from '@fortawesome/free-solid-svg-icons/faCube'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons/faPersonRunning'

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className='flex h-screen maincover'>
      <div className='md:mx-auto md:my-auto'>

        {/* GRID-WRAP*/} 
        <div className='main flex flex-col md:grid md:grid-cols-[7%_40%_53%]'>

          {/* SIDE NAV */} 
          <div className='tabs fixed w-screen z-30 md:w-auto md:z-0 md:relative text-white md:mt-6 md:mb-6 rounded-tl-md rounded-bl-md flex'>
            <div className='flex flex-row gap-8 w-screen justify-center md:w-auto md:flex-col md:gap-1 my-auto mx-auto'>
              <div className='group flex flex-col mt-5 mb-5 hover:cursor-pointer' id='about-toggle' onClick={()=>handleTabToggle('about')}>
                <FontAwesomeIcon className={`text-3xl group-hover:text-my-yellow ${activeTab === 'about' ? 'text-my-yellow' : 'text-gray-300'}`} icon={faUser} />
                <div className={`mx-auto mt-1 group-hover:text-my-yellow text-xl ${activeTab === 'about' ? 'text-my-yellow' : 'text-gray-300'}`}>About</div>
              </div>
              <div className='group flex flex-col mt-5 mb-5 hover:cursor-pointer' id='grades-toggle' onClick={()=>handleTabToggle('grades')}>
                <FontAwesomeIcon className={`text-3xl group-hover:text-my-yellow ${activeTab === 'grades' ? 'text-my-yellow' : 'text-gray-300'}`} icon={faChartSimple} />
                <div className={`mx-auto mt-1 group-hover:text-my-yellow text-xl ${activeTab === 'grades' ? 'text-my-yellow' : 'text-gray-300'}`}>Grades</div>
              </div>
              <div className='group flex flex-col mt-5 mb-5 hover:cursor-pointer' id='activity-toggle' onClick={()=>handleTabToggle('activity')}>
                <FontAwesomeIcon className={`text-3xl group-hover:text-my-yellow ${activeTab === 'activity' ? 'text-my-yellow' : 'text-gray-300'}`} icon={faPalette} />
                <div className={`mx-auto mt-1 group-hover:text-my-yellow text-xl ${activeTab === 'activity' ? 'text-my-yellow' : 'text-gray-300'}`}>Activity</div>
              </div>
              <div className='group flex flex-col mt-5 mb-5 hover:cursor-pointer' id='projects-toggle' onClick={()=>handleTabToggle('projects')}>
                <FontAwesomeIcon className={`text-3xl group-hover:text-my-yellow ${activeTab === 'projects' ? 'text-my-yellow' : 'text-gray-300'}`} icon={faCameraRetro} />
                <div className={`mx-auto mt-1 group-hover:text-my-yellow text-xl ${activeTab === 'projects' ? 'text-my-yellow' : 'text-gray-300'}`}>Projects</div>
              </div>
              <div className='group flex flex-col mt-5 mb-5 hover:cursor-pointer' id='contact-toggle' onClick={()=>handleTabToggle('contact')}>
                <FontAwesomeIcon className={`text-3xl group-hover:text-my-yellow ${activeTab === 'contact' ? 'text-my-yellow' : 'text-gray-300'}`} icon={faContactBook} />
                <div className={`mx-auto mt-1 group-hover:text-my-yellow text-xl ${activeTab === 'contact' ? 'text-my-yellow' : 'text-gray-300'}`}>Contact</div>
              </div>
            </div>
          </div>

          {/* MIDDLE TAB */} 
          <div className='relative md:col-span-1 md:overflow-hidden tabs text-white rounded-md z-10 flex flex-col md:grid md:grid-rows-[55%_1%_44%]'>
            
            <div className='flex bg-black'>
              <img className='my-auto h-full w-full' src="./src/assets/1369866.PNG" alt="" />
            </div>

            <div className='overflow-hidden -my-20 md:-my-20 mx-auto flex border-4 bg-my-yellow w-40 h-40 top-56 rounded-full'>
              <img className='mx-auto scale-125 grayscale' src="./src/assets/mypict.PNG" alt="" />
            </div>
            
            <div className='flex flex-col justify-between mt-24'>
              <div className='inline-block mx-auto text-4xl text-center font-bold'>Siraphop Raksaphol</div>
              <div className='info inline-block mx-auto text-xl text-my-yellow'>Student</div>
              <div className='flex gap-6 mx-auto mb-10 mt-4'>
                <a className='group' href="#"><FontAwesomeIcon className='icon text-3xl group-hover:text-my-yellow' icon={faDiscord} /></a>
                <a className='group' href="#"><FontAwesomeIcon className='icon text-3xl group-hover:text-my-yellow' icon={faInstagram} /></a>
                <a className='group' href="#"><FontAwesomeIcon className='icon text-3xl group-hover:text-my-yellow' icon={faFacebook} /></a>
                <a className='group' href="#"><FontAwesomeIcon className='icon text-3xl group-hover:text-my-yellow' icon={faGithub} /></a>
              </div>
            </div>
          </div>
          
          {/* RIGHT-TAB */} 
          <div className='tabs md:overflow-auto text-white mt-6 mb-6 rounded-tr-md rounded-br-md'>
            <div className='m-10'>

              {/* ABOUT ME */} 
              <div className={`about-me-tab ${activeTab === 'about' ? 'block' : 'hidden'}`}>
                
                <div className='flex gap-2'><div className='text-4xl text-my-yellow font-bold'>About</div><div className='text-4xl font-bold'>Me</div></div>
                
                <div className='mt-10 text-xl'>I'm a programmer. I continuously learning about new programming language and mastering them. With some experience and a master's in web coding, My expertise can help customers modernize with websites and appeal to expanding customer populations.</div>
               
                <div className='flex flex-col gap-2 lg:gap-0 lg:grid lg:grid-cols-2 mt-10'>
                  <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 text-lg'><div className='font-bold'>Age:</div><div>15</div></div>
                    <div className='flex gap-2 text-lg'><div className='font-bold'>Hometown:</div><div>Chonburi,Thailand</div></div>
                    <div className='flex gap-2 text-lg'><div className='font-bold'>Birthdate:</div><div>16th June 2009</div></div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 text-lg'><div className='font-bold'>School:</div><div>CRU</div></div>
                    <div className='flex gap-2 text-lg'><div className='font-bold'>Class:</div><div>M.3/4</div></div>
                    <div className='flex gap-2 text-lg'><div className='font-bold'>Student No.:</div><div>51178</div></div>
                  </div>
                </div>

                {/* ABOUT ME - My Skills */} 
                <div className='flex gap-2 mt-10'><div className='text-4xl text-my-yellow font-bold'>My</div><div className='text-4xl font-bold'>Skills</div></div>

                <div className='grid grid-cols-2 mt-10'>

                  <div className='flex flex-col mt-10 md:mt-0'>
                    <div className='mx-auto flex flex-col gap-2'>
                      <div className='mx-auto bg-my-yellow w-16 h-16 rounded-full flex'><FontAwesomeIcon className='text-3xl mx-auto my-auto' icon={faCode} /></div>
                      <div className='font-bold text-xl mx-auto'>Coding</div>
                      <div className='text-lg text-gray-300'>Java, JS, Py, C# etc.</div>
                    </div>
                  </div>

                  <div className='flex flex-col mt-10 md:mt-0'>
                    <div className='mx-auto flex flex-col gap-2'>
                      <div className='mx-auto bg-my-yellow w-16 h-16 rounded-full flex'><FontAwesomeIcon className='text-3xl mx-auto my-auto' icon={faCube} /></div>
                      <div className='font-bold text-xl mx-auto'>Modeling</div>
                      <div className='text-lg text-gray-300'>Blender3D</div>
                    </div>
                  </div>

                  <div className='flex flex-col mt-10'>
                    <div className='mx-auto flex flex-col gap-2'>
                      <div className='mx-auto bg-my-yellow w-16 h-16 rounded-full flex'><FontAwesomeIcon className='text-3xl mx-auto my-auto' icon={faPalette} /></div>
                      <div className='font-bold text-xl mx-auto'>Art</div>
                      <div className='text-lg text-gray-300'>Drawing, web design</div>
                    </div>
                  </div>

                  <div className='flex flex-col mt-10'>
                    <div className='mx-auto flex flex-col gap-2'>
                      <div className='mx-auto bg-my-yellow w-16 h-16 rounded-full flex'><FontAwesomeIcon className='text-3xl mx-auto my-auto' icon={faPersonRunning} /></div>
                      <div className='font-bold text-xl mx-auto'>Sport</div>
                      <div className='text-lg text-gray-300'>Football, basketball, sepak takraw</div>
                    </div>
                  </div>
                </div>

                {/* ABOUT ME - My Experience */} 
                <div className='flex gap-2 mt-10'><div className='text-4xl text-my-yellow font-bold'>My</div><div className='text-4xl font-bold'>Experience</div></div>
                <div className='text-gray-300 font-bold mt-10 text-xl'>Coming Soon...</div>
              </div>

              {/* GRADES */} 
              <div className={`grades-tab ${activeTab === 'grades' ? 'block' : 'hidden'}`}>
                <div className='flex gap-2 mt-10'><div className='text-4xl text-my-yellow font-bold'>My</div><div className='text-4xl font-bold'>Grades</div></div>
                <div className='text-gray-300 font-bold mt-10 text-xl'>Coming Soon...</div>
              </div>

              {/* ACTIVITY */} 
              <div className={`activity-tab ${activeTab === 'activity' ? 'block' : 'hidden'}`}>
                <div className='flex gap-2 mt-10'><div className='text-4xl text-my-yellow font-bold'>My</div><div className='text-4xl font-bold'>Activity</div></div>
                <div className='text-gray-300 font-bold mt-10 text-xl'>Coming Soon...</div>
              </div>

              {/* PROJECTS */} 
              <div className={`projects-tab ${activeTab === 'projects' ? 'block' : 'hidden'}`}>
                <div className='flex gap-2 mt-10'><div className='text-4xl text-my-yellow font-bold'>My</div><div className='text-4xl font-bold'>Projects</div></div>
                <div className='text-gray-300 font-bold mt-10 text-xl'>Coming Soon...</div>
              </div>

              {/* CONTACT */} 
              <div className={`contact-tab ${activeTab === 'contact' ? 'block' : 'hidden'}`}>
                <div className='flex gap-2 mt-10'><div className='text-4xl text-my-yellow font-bold'>My</div><div className='text-4xl font-bold'>Contact</div></div>
                <div className='flex flex-col mt-10 gap-2'>
                  <div className='text-gray-300 flex flex-row gap-2 text-xl'><div className='font-bold'>Country:</div><div>Chonburi, Thailand</div></div>
                  <div className='text-gray-300 flex flex-row gap-2 text-xl'><div className='font-bold'>Village:</div><div>The Village Bangsaen</div></div>
                  <div className='text-gray-300 flex flex-row gap-2 text-xl'><div className='font-bold'>Road:</div><div>Kaolarm Road</div></div>
                  <div className='text-gray-300 flex flex-row gap-2 text-xl'><div className='font-bold'>Postal Code:</div><div>20130</div></div>
                </div>

                <div className='flex flex-col mt-10 gap-2'>
                  <div className='text-gray-300 flex flex-row gap-2 text-xl'><div className='font-bold'>E-mail:</div><div>kururumainacc@gmail.com</div></div>
                  <div className='text-gray-300 flex flex-row gap-2 text-xl'><div className='font-bold'>Instagram:</div><div>@cclorinho</div></div>
                  <div className='text-gray-300 flex flex-row gap-2 text-xl'><div className='font-bold'>Discord:</div><div>clorinho</div></div>
                  <div className='text-gray-300 flex flex-row gap-2 text-xl'><div className='font-bold'>X/Twitter:</div><div>@rikkudayo1</div></div>
                  <div className='text-gray-300 flex flex-row gap-2 text-xl'><div className='font-bold'>Tel. (+66):</div><div>084-090-3336</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
                       
