export default function About() {
  return (
    <>
      <section
        id="about"
        className="w-auto bg-[#001039] text-[#F5F5F5] px-[8%] py-[5%] md:px-[15%] xl:px-[8%] 2xl:px-[15%] "
      >
        <h2>Hi, my name is Dylan Luc.</h2>
        <p className="about-text ">
          Throughout my journey of personal growth, I've found myself drawn to
          both the arts and programming. I've tried out a range of different
          options, but it was the full-stack design that really clicked for me.
          It's allowed me to move effortlessly between these two worlds and to
          experiment with new ideas.
        </p>
        <p className="about-text">
          I've been competing in programming contests since I was young, and I
          really thrive in fast-paced, challenging environments like that. Those
          experiences have helped me sharpen my technical skills and develop a
          strategic mindset that I bring to every project I work on.
        </p>
        <p className="about-text mb-[48px] md:mb-[64px] 2xl:mb-[128px]">
          I am on track to receive a Bachelor of Communications and Media
          Studies from the University of Calgary and Southern Alberta Institute
          of Technology this upcoming April. My specialties include Graphic
          Design, UX/UI, and Web Design/Development.
        </p>
        <a
          className="btn text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[24px]"
          target="_blank"
          href="https://www.linkedin.com/in/dylan-luc/"
        >
          Let's connect
        </a>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#001039"
          fillOpacity="1"
          d="M0,160L34.3,133.3C68.6,107,137,53,206,80C274.3,107,343,213,411,224C480,235,549,149,617,133.3C685.7,117,754,171,823,170.7C891.4,171,960,117,1029,90.7C1097.1,64,1166,64,1234,85.3C1302.9,107,1371,149,1406,170.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
