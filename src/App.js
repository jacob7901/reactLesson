import './App.css';
// State를 사용하고 싶으면 useState를 import 해야함 
import React, { useState } from 'react';

function App() {

  let [ postTitle, setPostTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'] );
  let [ pageTitle, setPageTitle] = useState('reactBlog');
  let [ like, setLike ] = useState([0,0,0]);
  let [ disLike, setDisLike ] = useState([0,0,0]);
  let [ modal, setModal ] = useState(false);
  let [ title, setTitle ] = useState(0);

  /* [1,2,3].map( callback function() {})
  1. 모든 어레이 자료 뒤에 .map()을 붙일 수 있다. 
  2. 맵함수를 쓸 때는 콜백함수를 붙일 수 있다. 
  3. 역할: function(또는 콜백함수) 안에 적은 코드들을 array(어레이) 개수만큼 실행(반복)한다. 
                                                */ 
  
  return (
    <div className="App">
      <div className="black-nav">
       <h4 style={{ fontSize : '20px'}}>{ pageTitle }</h4> 
      </div>
        
        {/* <h4> { postTitle[0] } <span onClick={ () => { setLike(like + 1) }}>👍</span> { like } 
          <span onClick={() => { setDislike(disLike + 1) }}>👎</span> { disLike }
        </h4>
 */}

        {
          postTitle.map( (data, i) => {
            return (
              <div className="list" key={i}>
                <h4 onClick={ () => { setModal(true); setTitle(i); }}> { data } </h4>
                <p>2월 17일 발행</p>
                <span onClick={ (e) => { e.stopPropagation(); setLike (like +1)} }>👍</span> { like }
                <span onClick={ (e) => { e.stopPropagation(); setDisLike(disLike+1)}}>👎</span> { disLike }
              </div>              
            )
          })
        }
        



{/* 버튼 하나를 만든다. 
    버튼을 누르면 첫글이 여자 추천으로 바뀌도록 한다. */}
      <button className='listButton' onClick= {() => {
        // ...postTitle : postTitle의 내용을 그대로 가져와서 새로운 배열을 만들어준다. 새로운 배열을 만들어 주기 때문에 화살표도 달라진다. 
        let copy = [...postTitle];
        copy[0] = '여자 코트 추천';
         setPostTitle(copy)
         }}>첫글 바꾸기</button> 
         <button className='listButton'onClick= {() => {
            let arrange = [...postTitle];
            arrange.sort();
            // arrange sort reverse
            // arrange.reverse();
            setPostTitle(arrange)
         }}>가나다순 정렬</button>

{/* 모달창을 만들어 하단에 상세 페이지 제공 */}
         {/* <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세 내용</p>
         </div> */}

         {/*  input tag 로 입력창 받기  */}
         {/* <input type="text" onChange={ () => {console.log(1) }  } /> */}
         {/* <input type='text' onMouseover={} */}
         <input type="text" onChange={ (e) => {console.log(e.target.value) }  } />



         {
            modal === true ? <Modal title={title} setPostData={ setPostTitle} postTitle={ postTitle }/> : null
         }

    </div>
  );
}

// 응용, 백그라운드 파란색 모달창이 필요하다. 
    // <div className='modal' style={{badckground : 'yellow' }}></div>
    // props로 구멍을 뚫어 준다. 그리고 위에서 props를 받아서 사용한다.
    // <div className='modal' style={{badckground : props.color }}></div>

function Modal(props) {
  return(
    <div className='modal'>
      <h4>{ props.postTitle[props.title] }</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={ () => { props.setPostData(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']) } }>글수정</button>
    </div> 
  )
}


export default App;
