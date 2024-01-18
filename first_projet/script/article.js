let titleh = document.querySelector('.comment h3')
let commentBoxElt = document.querySelector('.comment_box')
let showCommentBox = false
if (showCommentBox) {
    commentBoxElt.classList.remove('close')
    commentBoxElt.classList.add('open')
}else{
    commentBoxElt.classList.add('close')
    commentBoxElt.classList.remove('open')
}


titleh.addEventListener('click',e=>{
    console.log('fock you')
    showCommentBox = !showCommentBox
    if (showCommentBox) {
        commentBoxElt.classList.remove('close')
        commentBoxElt.classList.add('open')
    }else{
        commentBoxElt.classList.add('close')
        commentBoxElt.classList.remove('open')
    }
})

commentBoxElt.classList.add('bobo')
commentBoxElt.classList.remove('bobo')