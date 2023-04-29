import React from 'react';
import './blog.css';
import  Card  from '../components/Card';
import img01  from '../assets/img1.png';
import img02  from '../assets/img2.png';
import img03  from '../assets/img3.png';
import img04  from '../assets/img4.png';
import img05  from '../assets/img5.png';


export default function Blog() {
  return (
    <div  className='blog section-padding'>
          <h2 className='gradient-text'> A lot is happening, <br/> We are blogging about it. </h2>
     <div className='blog_card-container'>
        <Card
          imageUrl={img01}
          date={'Sep 26, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          onButtonClick={() => alert("text")}
          size={true}
        />
        <Card
          imageUrl={img05}
          date={'Sep 27, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          onButtonClick={() => alert("text")}
          size={false}
        />
        <Card
          imageUrl={img02}
          date={'Sep 28, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          onButtonClick={() => alert("text")}
          size={false}
        />
        <Card
          imageUrl={img03}
          date={'Sep 29, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          onButtonClick={() => alert("text")}
          size={false}
        />
        <Card
          imageUrl={img04}
          date={'Sep 30, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          onButtonClick={() => alert("text")}
          size={false}
        />
      </div>
    </div>
  )
}
