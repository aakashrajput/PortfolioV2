import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Intern</h4>
                <h5>Darkhorse AI</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Built responsive UI components in React.js to enhance application
              usability in a remote role.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Administrator Intern</h4>
                <h5>HP Inc., Bangalore</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Delivered high-quality tech support with a 95% satisfaction score
              and improved service turnaround by 20%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Stavtar Solutions, Bangalore</h5>
              </div>
              <h3>2021 - 2025</h3>
            </div>
            <p>
              Led end-to-end development of StavPay, a global finance platform
              handling payments, reconciliation, and vendor integrations with
              .NET and Angular. Engineered real-time integrations with
              QuickBooks, NetSuite, and Sage Intacct.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer II</h4>
                <h5>Geoserves</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on maritime and finance-focused enterprise products using
              .NET, Angular, SQL Server, and ABP Framework. Designed REST APIs,
              implemented custom JWT authentication, and built a Finance Cost
              Calculation Engine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
