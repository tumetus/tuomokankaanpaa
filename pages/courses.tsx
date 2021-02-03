import { css } from "@emotion/css";
import Button from "@material-ui/core/Button";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Meta from "../components/meta";

const EnrollButton = (props) => {
  return (
    <Button
      {...props}
      target="_blank"
      variant="contained"
      style={{
        backgroundColor: "#0070f3",
        color: "#fff",
        marginTop: "15px",
        marginRight: "10px",
      }}
    >
      {props.children}
    </Button>
  );
};

export default function Courses() {
  return (
    <Layout activePage={"courses"}>
      <Meta title={`Courses | Tuomo Kankaanpää`}></Meta>
      <h1>Courses</h1>
      <section className={css(`margin: 0 0 3rem 0;`)}>
        <p>
          I am a teacher at{" "}
          <a href="https://www.udemy.com/user/tuomokankaanp/" target="_blank">
            Udemy
          </a>{" "}
          and{" "}
          <a
            href="https://www.skillshare.com/r/profile/Tuomo-Kankaanp%C3%A4%C3%A4/5153218"
            target="_blank"
          >
            Skillshare
          </a>
          . Below I have listed the courses that I am currently teaching.
        </p>
      </section>
      <section className={css(`margin: 0 0 3rem 0;`)}>
        <h2>
          React for Beginners: Complete Guide to Mastering React Fundamentals
        </h2>
        <img
          src="/images/react-basic-course-thumb.png"
          className={css(`width: 100%;`)}
        />
        <p>
          Learn React without distractions! In this course you will learn the
          fundamentals of React.js and learn to create your first React
          application.
        </p>
        <p>
          The internet is full of tutorials and guides about React. As a
          newcomer to React, this isn’t always the best case. The quality of
          tutorials may vary and it is hard to know which things are actually
          important and which are not. It can be also confusing because you
          don’t know in what order should you study topics to learn React
          efficiently.
        </p>
        <p>
          This course will teach you the very fundamentals of React! You don’t
          have to worry if you are learning things in the right order or what
          might be important and what is not. We will cover only the most
          important things you need to know about React to get started. After
          this course you will have very solid knowledge about React and you
          will be able to create your own interactive application using React.
        </p>
        <p>Some of the topics we will cover</p>
        <ul>
          <li>React Elements & Components</li>
          <li>Working with JSX</li>
          <li>Using data with Props</li>
          <li>State</li>
          <li>How to create stateless & stateful components</li>
          <li>Building your first application</li>
        </ul>
        <p>What prior knowledge is required?</p>
        <ul>
          <li>Basic knowledge of HTML, CSS and JavaScript is required</li>
          <li>No prior knowledge of React is required</li>
        </ul>
        <EnrollButton href="https://skl.sh/2XAKn7u">
          Take this course on skillshare
        </EnrollButton>
      </section>
      <section className={css(`margin: 0 0 3rem 0;`)}>
        <h2>Rich Text Editing In React With Draft.js</h2>
        <img
          src="/images/draft-js-basics-course-cover.jpg"
          className={css(`width: 100%;`)}
        />
        <p>
          In this course we will go through how to add rich text editing
          features (such as <strong>bold</strong>, <u>underline</u>,{" "}
          <i>italic</i>) to your React application, using an open source
          framework called Draft.js.
        </p>
        <p>You will learn</p>
        <ul>
          <li>
            How to add rich text editor component to your React application
          </li>
          <li>How to add features like bold and underline to the editor</li>
          <li>How to save rich text content to database</li>
          <li>How to load rich text content from database</li>
          <li>How to edit saved content</li>
          <li>How to display saved rich text content e.g. as HTML</li>
        </ul>
        <EnrollButton href="https://skl.sh/2EdvAFz">
          Take this course on skillshare
        </EnrollButton>
        <EnrollButton href="https://www.udemy.com/rich-text-editing-in-react-with-draftjs/?couponCode=CODEPULSE">
          Buy this course
        </EnrollButton>
      </section>
      <section className={css(`margin: 0 0 3rem 0;`)}>
        <h2>Create a Modern Professional Looking Website with HTML & CSS</h2>
        <img
          src="/images/Create-Modern-Website-with-HTML-_-CSS-2.jpg"
          className={css(`width: 100%;`)}
        />
        <p>
          On this course Tuomo Kankaanpää teaches how to create modern and
          professional looking website for your business. This course is totally
          beginner friendly and requires no previous knowledge about creating
          websites. At the end of this course, you will have the skills to
          create a modern professional looking website from scratch using HTML
          and CSS.
        </p>
        <p>
          Websites are everywhere and creating websites, especially great
          looking websites is a needed skill in this day and age. Often it is
          thought to be a difficult and complicated task. This is not the case
          however!
        </p>
        <p>
          So whether you are a photographer looking to create a business or
          portfolio website, a business owner looking to create a modern website
          for your business or if you are just interested in learning how to
          create a modern professional looking website, this course is for you!
        </p>
        <EnrollButton href="https://skl.sh/2JdpwP5">
          Take this course on skillshare
        </EnrollButton>
        <EnrollButton href="https://www.udemy.com/create-a-modern-professional-looking-website-with-html-css/?couponCode=CODEPULSE">
          Buy this course
        </EnrollButton>
      </section>
      <Footer />
    </Layout>
  );
}
