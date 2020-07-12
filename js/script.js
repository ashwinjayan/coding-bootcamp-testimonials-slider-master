var btn = document.querySelector('.slider-icons');

const testimonials = [{
    main: `“ I’ve been interested in coding for a while but never taken the jump, until now.
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so
    excited about the future. ”`,
    author: `Tanya Sinclair`,
    designation: `UX Engineer`,
    img: `images/image-tanya.jpg`
}, {
    main: `“ If you want to lay the best foundation possible I’d recommend taking this course.
    The depth the instructors go into is incredible. I now feel so confident about
    starting up as a professional developer. ”`,
    author: `John Tarkpor`,
    designation: `Junior Front-end Developer`,
    img: `images/image-john.jpg`
}
]

let num = 0;

btn.addEventListener("click", function () {
    if (num === 0) {
        htmlchanger(1);
        num = 1;
    } else {
        htmlchanger(0);
        num = 0;
    }
    selectAllElements();
});

const htmlchanger = (num) => {
    document.querySelector('.content p:first-of-type').innerHTML = testimonials[num].main;
    document.querySelector('.author-name').innerHTML = testimonials[num].author;
    document.querySelector('.designation').innerHTML = testimonials[num].designation;
    document.querySelector('.author-image img').setAttribute('src', testimonials[num].img);
}