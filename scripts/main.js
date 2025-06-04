
// Lazy loading animation with javascript with intersection observer API.
const home = document.getElementById("Home001");
const about = document.getElementById("about");
const motive = document.querySelector(".motive");
const services = document.getElementById("Services");
const projects = document.getElementById("Projects");
const blogs = document.getElementById("Blogs");
const team = document.getElementById("Team");
const testimonials = document.getElementById("Testimonials");
const FAQS = document.getElementById("FAQS");
const contact = document.getElementById("Contact");


function callBackFunction(entries){
    entries.forEach(entry =>{
        if(entry.isIntersecting){

            if(entry.target === home){
                home.classList.add("loaded")
            }

            if(entry.target === about){
                about.classList.add("active")
            }

            if(entry.target.id === motive){
                home.classList.add("switchIn")
            }

            if(entry.target === FAQS){
                FAQS.classList.add("fadeIn")
            }

            console.log(entry.target);
            observer.unobserve(entry.target);
        }
    })
}

const options = {
    threshold:0.1
}

const observer = new IntersectionObserver(callBackFunction,options);
observer.observe(home);
observer.observe(about);
observer.observe(motive);
observer.observe(services);
observer.observe(projects);
observer.observe(blogs);
observer.observe(team);
observer.observe(testimonials);
observer.observe(FAQS);
observer.observe(contact);
