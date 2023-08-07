import "./aboutPage.css";

export const AboutPage = () => {
  return (
    <div>
      <h1 className="about-header">About Velosphere</h1>
      <h2 className="change-password-message">
        Return to <a href="/login">Login</a>
      </h2>
      <h2 className="about-subheading">What is Velosphere?</h2>
      <h3 className="about-content">
        Velosphere is a <span className="about-emphasis">networking tool</span>{" "}
        designed for the{" "}
        <span className="about-emphasis">Velocity Internship Program</span> for
        Scotiabank, Tangerine, and MD Financial
      </h3>
      <h3 className="about-content">
        More specifically, it is a tool designed to help interns{" "}
        <span className="about-emphasis">search for</span> and{" "}
        <span className="about-emphasis">connect with</span> one another other
        based on criteria such as internship position, location, interests and
        schools!
      </h3>
      <h3 className="about-content">
        <span className="about-emphasis">Features include:</span> Profile Page,
        Search Feature, Connection Feature
      </h3>
      <h2 className="about-subheading">Why did I create Velosphere?</h2>
      <h3 className="about-content">
        The Velocity cohort is really large -{" "}
        <span className="about-emphasis">more than 200 students</span> per term!
        It can be difficult to meet everyone, especially when we are all working
        hybrid and in different offices! It can be really difficult to meet
        interns outside of Velocity events!
      </h3>
      <h3 className="about-content">
        Back in June 2023 (my co-op term, I decided I wanted to book coffee
        chats with the other interns! I tried using LinkedIn and constantly hit
        a paywall (who wants to pay $40 a month?!?) I also tried using the
        Microsoft Teams Organization Chart, but it was difficult to navigate!{" "}
      </h3>
      <h3 className="about-content">
        <span className="about-emphasis">
          So I decided to take matters into my own hands!
        </span>
      </h3>
      <h2 className="about-subheading">Technical Aspects</h2>
      <h3 className="about-content">
        <span className="about-emphasis">Backend:</span> JavaScript, Node.js,
        Express.js, Redis
      </h3>
      <h3 className="about-content">
        <span className="about-emphasis">Frontend:</span> JavaScript, React.js,
        HTML, CSS
      </h3>
      <h3 className="about-content">
        <span className="about-emphasis">Database:</span> PostgreSQL
      </h3>
      <h3 className="about-content">
        <span className="about-emphasis">Other Libraries/Tools I used:</span>{" "}
        JWT (authentication), Bcrypt (security - password hashing), React
        Router, Git (Version control), GitHub (Version control), Render.com,
        Postman
      </h3>
      <h2 className="about-subheading">Open Source:</h2>
      <h3 className="about-content">
        <span className="about-emphasis">Frontend Repository:</span>{" "}
        <a href="https://github.com/amaanjaved1/velosphere-frontend">
          Contribute Now!
        </a>
      </h3>
      <h3 className="about-content" style={{ marginBottom: "30px" }}>
        <span className="about-emphasis">Backend Repository:</span>{" "}
        <a href="https://github.com/amaanjaved1/velosphere-backend">
          Contribute Now!
        </a>
      </h3>
    </div>
  );
};
