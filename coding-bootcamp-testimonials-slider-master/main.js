import { select , text} from './utilite-dom.js'


function  next() {
  select('p span',{
  text:`“
If you want to lay the best foundation possible I’ d recommend taking this course.
The depth the instructors go into is incredible.I now feel so confident about
starting up as a professional developer."`,

    
  })
  
  select('h2',{
    html:`John Tarkpor <span class="opt">Junior Front-end Developer</span>`
  })
  
    select('img', {
    attr: {
      src: './images/image-john.jpg'
    }
  })
}
function  prev() {
  select('p span',{
  text:`“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,

    
  })
  
  select('h2',{
    html:`Tanya Sinclair <span class="opt">UX Engineer</span>`
  })
  
  select('img',{
    attr:{
      src:'./images/image-tanya.jpg'
    }
  })
}


select('#next',{
  events:{
    click:next
  }
})
select('#prev',{
  events:{
    click:prev
  }
})



//next()