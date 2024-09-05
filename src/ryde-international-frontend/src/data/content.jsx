const content = {
  backgroundImage: (
    <img
      src="/media/images/logo_Ryde_international.png"
      alt="Background Logo"
      className="background-image"
    />
  ),
  sec1con1: {
    title: "Our Founder",
    text: "As the founder of Ryde International, I started this journey with a vision to redefine the boundaries of global consulting. With over a decade of experience in the industry, my story is one of innovation, perseverance, and a relentless pursuit of excellence.",
    image: (
      <div className="teaser-image">
        <img src="/media/images/sec2_con1_slide_1.jpg" alt="Teaser Image" />
      </div>
    ),
    slides: [
      {
        id: "slide1",
        content: (
          <div className="slide1">
            <div className="slide1-image-div">
              <img
                src="/media/images/low-resolution.png"
                alt="Consistency"
                className="slide1-image"
              />
            </div>
            <div className="slide1-title">
              <h1>Nathan Woodrow</h1>
            </div>
            <div className="slide1-text">
              <p>
                Nayth Woodrow founded Ryde International with the belief that
                growing up doesn’t mean growing old. His journey from the
                Riverland to a global community is driven by passion, purpose,
                and the power of storytelling
              </p>
            </div>
            <div className="slide1-tagline">
              <p>The way you do one thing is the way you do everything</p>
            </div>
          </div>
        ),
      },
      // {
      //   id: "slide2",
      //   content: (
      //     <div className="slide2">

      //     </div>
      //   ),
      // },
      // {
      //   id: "slide3",
      //   content: (
      //     <div className="slide3">

      //     </div>
      //   ),
      // },
    ],
  },
  sec1con2: {
    title: "We Believe In",
    text: "At Ryde International, we believe in the power of collaboration, integrity, and innovation. Our core values guide everything we do, from the way we interact with clients to the solutions we deliver. We are committed to driving meaningful change for businesses worldwide.",
    image: (
      <div className="teaser-image">
        <img src="/media/images/sec2_con1_slide_1.jpg" alt="Teaser Image" />
      </div>
    ),
    slides: [
      {
        id: "slide1",
        content: (
          <div className="slide-content slide4">
            <div className="slide4-header">
              <h2 className="slide-title">Collaboration at the Core</h2>
            </div>
            <div className="slide4-main">
              <p className="slide-text">
                At Ryde, we believe in leveraging community for sustainable
                growth and resilience. Our regional focus is our strength.
              </p>
              <div className="key-points">
                <div className="point">
                  <div className="point-icon icon1"></div>
                  <h3>Regional Strength</h3>
                  <p>Community-driven, sustainable growth.</p>
                </div>
                <div className="point">
                  <div className="point-icon icon2"></div>
                  <h3>Community Connection</h3>
                  <p>Thriving through collaboration.</p>
                </div>
                <div className="point">
                  <div className="point-icon icon3"></div>
                  <h3>Innovation & Resilience</h3>
                  <p>Solving local problems with local solutions.</p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "slide2",
        content: (
          <div className="slide-content slide5">
            <div className="integrity-container">
              <div className="text-content">
                <h2 className="slide-title">Integrity Above All</h2>
                <p className="slide-text">
                  Integrity guides our actions, ensuring that we always do
                  what's right for our clients and our community.
                </p>
              </div>
              <div className="image-content">
                <img
                  src="/media/images/sec2_con1_slide_1.jpg"
                  alt="Integrity Image"
                  className="card-image slide5-image"
                />
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-cube"></div>
              <div className="floating-sphere"></div>
              <div className="floating-tetrahedron"></div>
            </div>
          </div>
        ),
      },
      {
        id: "slide3",
        content: (
          <div className="slide-content slide6">
            <div className="innovation-container">
              <div className="image-content">
                <img
                  src="/media/images/sec2_con1_slide_1.jpg"
                  alt="Innovation Image"
                  className="card-image slide6-image"
                />
              </div>
              <div className="text-content">
                <h2 className="slide-title">Innovation Drives Us</h2>
                <p className="slide-text">
                  We constantly innovate to bring fresh, impactful solutions to
                  our clients' most pressing challenges.
                </p>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-hexagon"></div>
              <div className="floating-triangle"></div>
              <div className="floating-ring"></div>
            </div>
          </div>
        ),
      },
    ],
  },
  sec1con3: {
    title: "Our Journey",
    text: "Our journey began with a single idea: to create a consulting firm that truly understands the unique challenges of today's global market. Over the years, we have grown into a trusted partner for businesses across various industries, providing them with the insights and strategies needed to thrive.",
    image: (
      <div className="teaser-image">
        <img src="/media/images/sec2_con1_slide_1.jpg" alt="Teaser Image" />
      </div>
    ),
    slides: [
      {
        id: "slide1",
        content: (
          <div className="slide-content slide7">
            <div className="beginning-container">
              <div className="text-content">
                <h2 className="slide-title">The Beginning</h2>
                <p className="slide-text">
                  Our journey began with a simple idea: to understand and solve
                  the unique challenges of today's global market.
                </p>
              </div>
              <div className="image-content">
                <img
                  src="/media/images/sec2_con1_slide_1.jpg"
                  alt="Beginning Image"
                  className="card-image slide7-image"
                />
              </div>
            </div>
            <div className="dynamic-layers">
              <div className="layer layer1"></div>
              <div className="layer layer2"></div>
              <div className="layer layer3"></div>
            </div>
          </div>
        ),
      },
      {
        id: "slide2",
        content: (
          <div className="slide-content slide8">
            <div className="growth-expansion">
              <div className="text-content">
                <h2 className="slide-title">Growth & Expansion</h2>
                <p className="slide-text">
                  From a small team to a global powerhouse, our growth story is
                  a testament to our vision and drive.
                </p>
              </div>
              <div className="image-container">
                <img
                  src="/media/images/sec2_con1_slide_1.jpg"
                  alt="Growth Image"
                  className="card-image slide8-image"
                />
                <div className="growth-bars">
                  <div className="bar bar1"></div>
                  <div className="bar bar2"></div>
                  <div className="bar bar3"></div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "slide3",
        content: (
          <div className="slide-content slide9">
            <div className="vision-container">
              <div className="vision-header">
                <h2 className="vision-title">Our Vision Forward</h2>
              </div>
              <div className="vision-main">
                <div className="vision-text-box">
                  <p className="vision-text">
                    As we look to the future, our vision remains clear: to lead
                    the way in global consulting, one partnership at a time.
                  </p>
                </div>
                <div className="vision-image-box">
                  <img
                    src="/media/images/sec2_con1_slide_1.jpg"
                    alt="Future Image"
                    className="vision-image"
                  />
                </div>
              </div>
              <div className="vision-elements">
                <div className="vision-circle"></div>
                <div className="vision-lines"></div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },

  sec2con1: {
    title: "NWBrand",
    text: "Throughout my career, I have had the privilege of working with some of the most forward-thinking companies around the world. My work is centered on delivering actionable insights, sustainable growth strategies, and transformative solutions that empower businesses to succeed.",
    image: (
      <div className="teaser-image">
        <img src="/media/images/sec2_con1_slide_1.jpg" alt="Teaser Image" />
      </div>
    ),
    slides: [
      {
        id: "slide1",
        content: (
          <div className="slide-content slide10">
            <div className="slide10-header">
              <div className="slide10-title-wrapper">
                <h2 className="slide10-title">A Philosophy of Consistency</h2>
              </div>
              <div className="slide10-subtext-wrapper">
                <p className="slide10-subtext">
                  The way you approach one task reflects how you approach all.
                  This guiding principle shapes my every action and decision.
                </p>
              </div>
            </div>
            <div className="slide10-main">
              <img
                src="/media/images/sec2_con1_slide_1.jpg"
                alt="Philosophy of Consistency"
                className="slide10-image"
              />
            </div>
          </div>
        ),
      },
      {
        id: "slide2",
        content: (
          <div className="slide-content slide11">
            <div className="slide11-title-wrapper">
              <h2 className="slide11-title">Consistency in Every Step</h2>
            </div>

            <div className="slide11-subtext-wrapper">
              <p className="slide11-subtext">
                The way you approach one task defines how you approach
                everything. This mindset guides every decision.
              </p>
              <p className="slide11-subtext">
                Purposeful actions create meaningful change, underpinning shifts
                in understanding and belief.
              </p>
            </div>

            <div className="slide11-main">
              <img
                src="/media/images/sec2_con1_slide_1.jpg"
                alt="Consistency"
                className="slide11-image"
              />
              <div className="floating-panel panel1"></div>
              <div className="floating-panel panel2"></div>
            </div>
          </div>
        ),
      },
      {
        id: "slide3",
        content: (
          <div className="slide-content slide3">
            <h2 className="slide-title">Let’s Collaborate</h2>
            <div className="slide3-content">
              <p className="slide-text">
                Whether it's storytelling or sparking innovation, together we
                can create something extraordinary.
              </p>
              <img
                src="/media/images/sec2_con1_slide_1.jpg"
                alt="Collaboration"
                className="card-image slide3-image"
              />
            </div>
          </div>
        ),
      },
    ],
  },
  sec2con2: {
    title: "What We Do",
    text: "Ryde International specializes in providing tailored consulting services that address the complex needs of modern businesses. From strategy development to digital transformation, we offer a comprehensive range of services designed to help our clients navigate the challenges of today's dynamic market environment.",
    image: (
      <div className="teaser-image">
        <img src="/media/images/sec2_con1_slide_1.jpg" alt="Teaser Image" />
      </div>
    ),
    slides: [
      {
        id: "slide1",
        content: (
          <div>
            <h2>What Do We Do - Slide 1</h2>
            <p>This is the content of the first slide.</p>
            <div className="additional-info">
              <p>More details about the first slide.</p>
            </div>
          </div>
        ),
      },
      {
        id: "slide2",
        content: (
          <div>
            <h2>What Do We Do - Slide 2</h2>
            <p>This is the content of the second slide.</p>
            <div className="additional-info">
              <p>More details about the second slide.</p>
            </div>
          </div>
        ),
      },
      {
        id: "slide3",
        content: (
          <div>
            <h2>What Do We Do - Slide 3</h2>
            <p>This is the content of the third slide.</p>
            <div className="additional-info">
              <p>More details about the third slide.</p>
            </div>
          </div>
        ),
      },
    ],
  },
  sec2con3: {
    title: "Our Work",
    text: "Over the years, I have partnered with a diverse range of clients, from startups to Fortune 500 companies. My focus has always been on building long-lasting relationships that are based on trust, mutual respect, and a shared commitment to achieving outstanding results.",
    image: (
      <div className="teaser-image">
        <img src="/media/images/sec2_con1_slide_1.jpg" alt="Teaser Image" />
      </div>
    ),
    slides: [
      {
        id: "slide1",
        content: (
          <div>
            <h2>Who I've Worked With - Slide 1</h2>
            <p>This is the content of the first slide.</p>
            <div className="additional-info">
              <p>More details about the first slide.</p>
            </div>
          </div>
        ),
      },
      {
        id: "slide2",
        content: (
          <div>
            <h2>Who I've Worked With - Slide 2</h2>
            <p>This is the content of the second slide.</p>
            <div className="additional-info">
              <p>More details about the second slide.</p>
            </div>
          </div>
        ),
      },
      {
        id: "slide3",
        content: (
          <div>
            <h2>Who I've Worked With - Slide 3</h2>
            <p>This is the content of the third slide.</p>
            <div className="additional-info">
              <p>More details about the third slide.</p>
            </div>
          </div>
        ),
      },
    ],
  },

  sec3con1: {
    title: "Ryde Design",
    text: "At Ryde International, design is at the heart of everything we do. Our design philosophy is about creating solutions that are not only functional but also visually compelling. We believe that great design can transform businesses and create meaningful connections with customers.",
    image: (
      <div className="teaser-image">
        <img src="/media/images/sec2_con1_slide_1.jpg" alt="Teaser Image" />
      </div>
    ),
    slides: [
      {
        id: "slide1",
        content: (
          <div>
            <h2>Ryde Design - Slide 1</h2>
            <p>This is the content of the first slide.</p>
            <div className="additional-info">
              <p>More details about the first slide.</p>
            </div>
          </div>
        ),
      },
      {
        id: "slide2",
        content: (
          <div>
            <h2>Ryde Design - Slide 2</h2>
            <p>This is the content of the second slide.</p>
            <div className="additional-info">
              <p>More details about the second slide.</p>
            </div>
          </div>
        ),
      },
      {
        id: "slide3",
        content: (
          <div>
            <h2>Ryde Design - Slide 3</h2>
            <p>This is the content of the third slide.</p>
            <div className="additional-info">
              <p>More details about the third slide.</p>
            </div>
          </div>
        ),
      },
    ],
  },
  sec3con2: {
    title: "Ryde Growth",
    text: "Growth is more than just expanding your business; it's about creating sustainable success. At Ryde International, we work` closely with our clients to develop growth strategies that are innovative, data-driven, and tailored to their unique needs. We help businesses scale and succeed in today's competitive market.",
    image: (
      <div className="teaser-image">
        <img src="/media/images/sec2_con1_slide_1.jpg" alt="Teaser Image" />
      </div>
    ),
    slides: [
      {
        id: "slide1",
        content: (
          <div>
            <h2>Ryde Growth - Slide 1</h2>
            <p>This is the content of the first slide.</p>
            <div className="additional-info">
              <p>More details about the first slide.</p>
            </div>
          </div>
        ),
      },
      {
        id: "slide2",
        content: (
          <div>
            <h2>Ryde Growth - Slide 2</h2>
            <p>This is the content of the second slide.</p>
            <div className="additional-info">
              <p>More details about the second slide.</p>
            </div>
          </div>
        ),
      },
      {
        id: "slide3",
        content: (
          <div>
            <h2>Ryde Growth - Slide 3</h2>
            <p>This is the content of the third slide.</p>
            <div className="additional-info">
              <p>More details about the third slide.</p>
            </div>
          </div>
        ),
      },
    ],
  },
  sec3con3: {
    title: "Ryde Clothing",
    text: "Creating memorable experiences is key to building lasting customer relationships. Ryde International specializes in designing experiences that resonate with your audience, from digital platforms to physical spaces. We help you create impactful, meaningful interactions that drive engagement and loyalty.",
    image: (
      <div className="teaser-image">
        <img src="/media/images/sec2_con1_slide_1.jpg" alt="Teaser Image" />
      </div>
    ),
    slides: [
      {
        id: "slide1",
        content: (
          <div>
            <h2>Ryde Experiences - Slide 1</h2>
            <p>This is the content of the first slide.</p>
            <div className="additional-info">
              <p>More details about the first slide.</p>
            </div>
          </div>
        ),
      },
      {
        id: "slide2",
        content: (
          <div>
            <h2>Ryde Experiences - Slide 2</h2>
            <p>This is the content of the second slide.</p>
            <div className="additional-info">
              <p>More details about the second slide.</p>
            </div>
          </div>
        ),
      },
      {
        id: "slide3",
        content: (
          <div>
            <h2>Ryde Experiences - Slide 3</h2>
            <p>This is the content of the third slide.</p>
            <div className="additional-info">
              <p>More details about the third slide.</p>
            </div>
          </div>
        ),
      },
    ],
  },
};

export default content;
