import { text } from 'node:stream/consumers';
import React, { useEffect, useState, } from 'react';
import './App.css';


function App() {
  let timer:any = null
  //Aligns the text in the scrollBox to the "Explore My"
  const easeScroll = (x:any) => {
    setTimeout(() => {
      let textDistance = 136
      //distance from pref text in scrollbox
      let prevDistance = x.target.scrollTop % textDistance
          //distance from next text in scrollbox
      let nextDistance = textDistance - prevDistance

      if (nextDistance > prevDistance) {
        x.target.scrollTop -= Math.min(2, prevDistance)
      }
      else {
        x.target.scrollTop += Math.min(2, nextDistance)
      }
      console.log(x.target.scrollTop, prevDistance, nextDistance)
      if (Math.round(x.target.scrollTop) % textDistance != 0){
        easeScroll(x)
      }
      else{
        // console.log(x.target.scrollTop)
      }
    }, 4)
  }
  //If timer doesn't get cancelled, it means user has  stopped scrollign for 500 ms, and we run easeScroll
  const onScroll = ({nativeEvent}: any) => {
    if (timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      easeScroll(nativeEvent)
    }, 500)
  }
  return (
    <div className='App'>
      <div className='centerBox'>
        <h1 className='explore'>
          Explore My&nbsp;
        </h1>
          <div 
            className='scrollbox'
            onScroll={onScroll}
          >
            <div className='block'/>
            <h1 className='title'>
              ----
            </h1>
            <h1 className='title'>
              Projects
            </h1>
            <h1 className='title'>
              Art
            </h1>
            <h1 className='title'>
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
