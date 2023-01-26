const idea = document.querySelectorAll('.idea');
const close = document.querySelectorAll('.close');
const hidden = document.querySelector('.hidden');
const body = document.body;

idea.forEach(btn => {
  btn.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('idea__name')) {
      const path = target.dataset.view;

      document.querySelectorAll(`[data-idea="${path}"]`).forEach(idea => {
        idea.closest('.view-idea').classList.add('active')
      })

      hidden.classList.add('active');
      body.classList.add('no-scroll');
    }
  })
})



const btnComment = document.querySelectorAll('.reviews-idea__comment')
const backComment = document.querySelectorAll('.comment-idea__back')
const vommentIdea = document.querySelectorAll('.comment-idea')

btnComment.forEach(btn => {
  btn.addEventListener('click', e => {
    const target = e.target
    const path = target.dataset.btncomment

    document.querySelectorAll('.view-idea').forEach(idea => {
      idea.classList.remove('active')
    })

    hidden.classList.remove('active');

    document.querySelectorAll(`[data-vievcomment="${path}"]`).forEach(comment => {
      comment.closest('.comment-idea').classList.add('active')
    })
  })
})

backComment.forEach(back => {
  back.addEventListener('click', e => {
    const target = e.target
    const path = target.dataset.backcomment
    console.log(path)

    vommentIdea.forEach(el => {
      el.classList.remove('active')
    })

    hidden.classList.add('active');
    document.querySelectorAll(`[data-idea="${path}"]`).forEach(idea => {
      idea.closest('.view-idea').classList.add('active')
    })
  })
})




close.forEach(el => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.view-idea').forEach(idea => {
      idea.classList.remove('active');
    })

    hidden.classList.remove('active');
    createIdeaForm.classList.remove('active');
    createReviews.classList.remove('active');

    body.classList.remove('no-scroll');
  })
})



const createIdea = document.querySelector('.filter__button');
const createIdeaForm = document.querySelector('.create-idea');

createIdea.addEventListener('click', () => {
  createIdeaForm.classList.add('active');
  hidden.classList.add('active');
  body.classList.add('no-scroll');
})



const reviewsButton = document.querySelectorAll('.view-idea__button-reviews');
const createReviews = document.querySelector('.create-reviews');

reviewsButton.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-idea').forEach(idea => {
      idea.classList.remove('active');
    })

    createReviews.classList.add('active');
  })
})