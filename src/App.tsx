import { text } from 'node:stream/consumers';
import React, { useEffect, useState, } from 'react';
import './App.css';
import BackgroundImage1 from './images/home/project.jpg'
import BackgroundImage2 from './images/home/art.jpg'
import BackgroundImage3 from './images/home/life.jpg'


function App() {
  let timer:any = null
  const textDistance = 136
  const backgrounds = [``, BackgroundImage1, BackgroundImage2, BackgroundImage3]

  const [scroll, setScroll] = useState(0)

  //check whether user is clickign with mouse, if held down dont auto scroll 
  const [mouseDown, setMouseDown] = useState(false)
  //Aligns the text in the scrollBox to the "Explore My"
  const easeScroll = (x:any) => {
    setTimeout(() => {
      //distance from pref text in scrollbox
      let prevDistance = x.target.scrollTop % textDistance
          //distance from next text in scrollbox
      let nextDistance = textDistance - prevDistance

      if (nextDistance > prevDistance) {
        x.target.scrollTop -= Math.min(4, prevDistance)
      }
      else {
        x.target.scrollTop += Math.min(4, nextDistance)
      }
      if (Math.round(x.target.scrollTop) % textDistance !== 0 && !timer){
        easeScroll(x)
      }
      else{
        // console.log(x.target.scrollTop)
      }
    }, 10)
  }
  //If timer doesn't get cancelled, it means user has  stopped scrollign for 500 ms, and we run easeScroll
  const onScroll = ({nativeEvent}: any) => {
    setScroll(nativeEvent.target.scrollTop)
    if (timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      if (!mouseDown) easeScroll(nativeEvent)
    }, 300)
  }
  const scrollToBackgroundOpacity = (x: number) => {
    let y = (Math.cos((1/21.65) * x)) + 1
    if (y >= 0.3){
      return 0.3
    }
    else return y
  }
  const scrollToTextOpacity = (x: number) => {
    let y = (-(x ** 2) / 30000) + 1
    if (y < 0) return 0
    else return y
  }

  return (
    <div
      className='App'
      style={{
        backgroundImage: `linear-gradient(rgba(14,14,14,${1 - scrollToBackgroundOpacity(scroll)}), rgba(14,14,14,${1 -scrollToBackgroundOpacity(scroll)})), url(${backgrounds[Math.round(scroll / 136)]})`,
      }}
    >
      <div className='centerBox'>
        <h1 className='explore'>
          Explore My&nbsp;
        </h1>
          <div 
            className='scrollbox'
            onScroll={onScroll}
            onMouseDown={() => {
              setMouseDown(true)
            }}
            onMouseUp={({nativeEvent}: any) => {
              setMouseDown(false)
              easeScroll(nativeEvent)
            }}
          >
            <div className='block'/>
            <h1 
              className='title'
              style={{
                color: `rgba(255,255,255, ${scrollToTextOpacity(scroll)})`,
              }}
            >
              ----
            </h1>
            <h1
              className='title'
              style={{
                color: `rgba(255,255,255, ${scrollToTextOpacity(scroll - textDistance)})`
              }}
            >
              Projects
            </h1>
            <h1
              className='title'
              style={{
                color: `rgba(255,255,255, ${scrollToTextOpacity(scroll - (2 * textDistance))})`
              }}
            >
              Art
            </h1>
            <h1 
              className='title'
              style={{
                color: `rgba(255,255,255, ${scrollToTextOpacity(scroll - (3 * textDistance))})`
              }}
            >
              Life
            </h1>
            <div className='block'/>
          </div>
      </div>
      <div className='contact'>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
          Twitter
        </a>
        &nbsp;|&nbsp;
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
          Github
        </a>
        &nbsp;|&nbsp;
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
          LinkedIn
        </a>
        &nbsp;|&nbsp;
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
          Resume
        </a>
      </div>
    </div>
  );
}

export default App;
