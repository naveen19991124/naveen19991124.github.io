const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="footer__copyright">
        <span className="thanks">© 2023, Made with ❤️ by Naveen</span>
      </div>
      <div className="footer__links">
        <a
          href="mailto:naveen19991124@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="email"
        >
          {/* <span className="text">email</span> */}
          <img
            src={require("../Assets/Images/Social/gmail.png")}
            alt="email"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://twitter.com/naveen19991124"
          target="_blank"
          rel="noopener noreferrer"
          title="twitter"
        >
          {/* <span className="text">twitter</span>{" "} */}
          <img
            src={require("../Assets/Images/Social/twitter.png")}
            alt="twitter"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://github.com/naveen19991124"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          {/* <span className="text">github</span> */}
          <img
            src={require("../Assets/Images/Social/github.png")}
            alt="github"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/naveen-kumar-01b45419a"
          rel="noopener noreferrer"
          target="_blank"
          title="linkedin"
        >
          {/* <span className="text">linkedin</span> */}
          <img
            src={require("../Assets/Images/Social/linkedin.png")}
            alt="linkedin"
            width={24}
            height={24}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
