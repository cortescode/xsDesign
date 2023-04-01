
const default_delay = 200;


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
                entry.target.classList.remove('no-opacity');
            }, default_delay);    
        } else {
            setTimeout(() => {
                entry.target.classList.remove('animate');
                entry.target.classList.add('no-opacity');
            }, default_delay);
        }
    })
})

export function animate() {
    let elements = document.getElementsByClassName('animate');
    console.log(elements)
    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.add('no-opacity')
        observer.observe(elements[i])
    }
    
}



