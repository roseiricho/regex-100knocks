import React, { useRef } from 'react';
import useScrollSpy from "react-use-scrollspy";

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Table from './components/Table';
import Question from './components/Question';
import Footer from './components/Footer';
import contents from './contents.json';



const app_version = 'v.0.0.0'

const App = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: 0,
  });

  return (
    <div className="mx-auto">
      <Header
        app_version = { app_version }
      />
      <div class="max-w-[90rem] mx-auto">
        <Sidebar 
          activeSection = { activeSection }
        />
        <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-[22rem]">
          <div class="max-w-3xl mx-auto xl:max-w-none xl:ml-0 xl:pr-16" ref={sectionRefs[0]}>
            <About />
            <Table />
            <div class="space-y-4 mx-3">
              {
                contents.data.map((chapter) => (
                  <div>
                    <h2 id={chapter.chapter}></h2>
                    {
                      chapter.questions.map((content, index) => (
                        <section ref={sectionRefs[content.id]}>
                          <Question 
                            id={ content.id }
                            chapter={chapter.chapter}
                            difficulty={ content.difficulty }
                            type={ content.type }
                            title={ content.title }
                            tags={ content.tags }
                            question={ content.question }
                            targetData={ content.targetData }
                            hint={ content.hint }
                            answer={ content.answer }
                          />
                        </section>
                      ))
                    }
                  </div>
                ))
              }
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )

}

export default App;
