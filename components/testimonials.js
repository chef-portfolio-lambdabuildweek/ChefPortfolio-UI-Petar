class Testimonial {
  constructor(testimonial) {
    this.testimonial = testimonial;
    this.blockquote = document.querySelector('blockquote');
    this.photo = document.querySelector('.customers-photos');
    this.cite = document.querySelector('cite');
  }
}


const testimonials = document.querySelectorAll('.inside-of-testimonials');
testimonials.forEach(testimonial => new Testimonial(testimonial));
