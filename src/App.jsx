import { useState } from 'react';
import moment from 'moment';
import './App.css'
/*eslint-disable*/
function App() {

  let [title,setTitle] = useState(['강남 우동 맛집', '파이썬 독학', '남자 코트 추천', '리액트 독학']);
  let [like,setLike] = useState([0,0,0,0]);
  let [modal, setModal] = useState(false);
  let [mtitle, setMtitle] = useState(0);
  let [inputData, setInputdata] = useState('');
  let today = new Date();
  let formatDate = moment(today).format('YYYY-MM-DD'); //moment 라이브러리 사용
  let [writeDate, setWritedate] = useState(['2025-05-17','2025-05-18','2025-05-25','2025-05-30']);

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
              <h4 onClick={(e)=>{ setModal(!modal); setMtitle(i) }}>{title[i]}
                <span onClick={(e)=>{ e.stopPropagation();
                  let copyLike = [...like];
                  copyLike[i] = like[i] + 1;
                  setLike(copyLike)}}>🤍</span>{like[i]} 
                  <span style={{paddingLeft : '20px'}} />
                  <button onClick={(e)=>{ e.stopPropagation(); 
                      let copyTitle = [...title];
                      let copyLike = [...like];
                      copyTitle.splice(i, 1); //함수사용 arr데이터 삭제
                      copyLike.splice(i, 1);
                      setTitle(copyTitle); 
                      setLike(copyLike);
                      // copyTitle[i];
                      // setTitle(copyTitle.filter(word => word !== copyTitle[i])); //이것도 됨.
                    }}>글삭제</button>
              </h4>
              <p>{writeDate[i]} 발행</p>
            </div> 
            );
          })
        }
      </div>
      <span style={{paddingRight: '10px'}}>글제목</span><input onChange = {(e)=>{setInputdata(e.target.value)}}></input>
      <button onClick = { inputData.length == 0 ? ()=>{alert("글제목을 입력바랍니다.")} : ()=>{ // 사용자 입력데이터 length에 따른 데이터 유무 확인
        let copyTitle = [...title,inputData]; //추가되는 arr 데이터를 뒤에 생성하려고 씀 ㅇㅇ
        // copyTitle.unshift(inputData) //함수사용 arr데이터 추가 기존데이터 맨 앞으로 추가함
        let copyLike = [...like,0];
        console.log(formatDate);
        let copyWritedate = [...writeDate,formatDate];
        setWritedate(copyWritedate);
        setTitle(copyTitle);
        setLike(copyLike);
      }}>발행</button>

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
