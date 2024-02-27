export default function Testimonials() {
  return (
    <section className="w-auto px-[8%] md:px-[15%] py-[8%] bg-brandoffwhite xl:px-[15%] 2xl:px-[22%]">
      <h2 className="text-center">Testimonials</h2>
      <div className="lg:grid lg:grid-cols-2 lg:gap-[36px]">
        <div className="testimonial">
          <img />
          <h3 className="test-name">Thank Binh Tran</h3>
          <p className="test-title">Founder of Human of LHP</p>
          <blockquote className="quote">
            “Dylan is a curious young man who never ceases to amaze! He might
            not be perfect, but it's his learning attitude that counts.”
          </blockquote>
        </div>
        <div className="testimonial">
          <img />
          <h3 className="test-name">Khanh Ha To</h3>
          <p className="test-title">Social Media Coordinator</p>
          <blockquote className="quote">
            “Dylan was an inspiring team member of our media project. I was
            impressed with Dylan's professionalism and delightful personality...
            ”
          </blockquote>
        </div>
        <div className="testimonial">
          <img />
          <h3 className="test-name">Brianna Yee</h3>
          <p className="test-title">Graphic Artist</p>
          <blockquote className="quote">
            “Dylan brings a positive and honest work ethic to any environment.
            He is patient and takes the time to help teach other coworkers when
            needed...”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
