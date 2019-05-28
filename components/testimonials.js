class Testimonial {
  constructor(testimonial) {
    this.testimonial = testimonial;
    this.blockquote = testimonial.querySelector('blockquote');
    this.photo = testimonial.querySelector('.customers-photos');
    this.cite = testimonial.querySelector('cite');
  }
}


const testimonials = document.querySelectorAll('.inside-of-testimonials');
testimonials.forEach(testimonial => new Testimonial(testimonial));
