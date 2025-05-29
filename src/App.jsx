import { useState } from 'react';
import './App.css'
/*eslint-disable*/
function App() {

  let [title,setTitle] = useState([ '강남 우동 맛집', '파이썬 독학', '남자 코트 추천', '리액트 독학']);
  let [like,setLike] = useState([0,0,0,0]);
  let [modal, setModal] = useState(false);
  let [mtitle, setMtitle] = useState(0);

  return (
    <div className='App'>
      <button style={{color : 'red'}} onClick={()=>{
        let copy = [...title];
        copy[0] = '서초 우동 맛집';
        setTitle(copy)}}>수정버튼</button>
      <button style={{color : 'red'}} onClick={()=>{
        let sortcopy = [...title];
        sortcopy.sort();
        setTitle(sortcopy)}}>문자열오름차순버튼</button>
        <button style={{color : 'red'}} onClick={()=>{
        let dsortcopy = [...title];
        dsortcopy.sort((a, b) => b.localeCompare(a));
        setTitle(dsortcopy)}}>문자열내림차순버튼</button>

      <div className='black-nav'>
        <h4 style={{color : 'white', fontSize : '16px'}}>ReactBlog</h4>
      </div>
      <div>
        {
          title.map(function(a, i){      
            return ( 
            <div className='list' key={i}>
              <h4 onClick={()=>{ setModal(!modal), setMtitle(i)}}>{title[i]}
                <span onClick={()=>{
                  let copyLike = [...like];
                  copyLike[i] = like[i] + 1;
                  setLike(copyLike)}}>🤍</span>{like[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div> 
            )
          })
        }
      </div>
      {
        modal == 1 ? <Modal mtitle = {mtitle} setTitle = {setTitle} title = {title}></Modal> : null
      }
    </div>
  )
}
function Modal(props){
   return(
    <div className='modal'>
      <h4 style={{color : 'black'}}>{props.title[props.mtitle]}</h4>
      <p style={{color : 'black'}}>date</p>
      <p style={{color : 'black'}}>detail</p>
      <button onClick={()=>{
        let copyTitle = [...props.title];
        copyTitle[0] = '서초 우동 맛집';
        props.setTitle(copyTitle)}}>글수정</button>
    </div>
  )
}
export default App
