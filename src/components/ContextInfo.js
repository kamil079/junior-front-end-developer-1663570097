const ContextInfo = () => {
    return (
        <div className="context-info">
            <div className="info-header">
                <p className="info-header-title">
                    Application has been accepted 🎉🙌
                </p>
            </div>
            <div className="info-container">
                <div className="info-user-logo">
                    <div className="user-avatar"></div>
                </div>
                <div className="info-content">
                    <p>
                        <span className="bold-name">Kristen Anistion</span>{" "}
                        &#8901; Today, Dec 17 &#8901;{" "}
                        {new Date().toLocaleTimeString()}
                    </p>
                    <p>
                        Hello!
                        <br /> My name is Kirsten, and I'm super happy to
                        announce that your application to join Coders Family has
                        been accepted! 🎉 🙌
                    </p>
                    <p>
                        You really impressed us during the interview process,
                        and we'd like to offer you a project with NERD.FAMILY.
                        We've been working with NERD.FAMILY for quite some time,
                        and it's important for us to keep them satisfied with
                        our services — hence why we believe you'll be a great
                        fit for this job.
                    </p>
                    <p>
                        Here's the project overview: <br /> You'll be
                        responsible for building a database and page for
                        recording and displaying book ratings. We'd like to work
                        in two week-long sprints, we've already given you a head
                        start and prepared your tasks to deliver in your first
                        sprint.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ContextInfo;
