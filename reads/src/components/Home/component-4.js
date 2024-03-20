export default function Component4() {
  return (
    <div
      className="page-view"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        marginBottom: "5%",
      }}
    >
      <div
        className="page-container"
        style={{ backgroundColor: "white", marginTop: "0" }}
      >
        <h1>
          <span className="" style={{ fontSize: "70px" }}>
            Think Startup. Think Dune.
          </span>
        </h1>
        <h1>
          <span className="keyterm">
            The platform for MENA's startup community
          </span>
        </h1>
        <br />
        <div id="mc_embed_shell">
          <link
            href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
            rel="stylesheet"
            type="text/css"
          />
          <div id="mc_embed_signup">
            <form
              action="https://app.us18.list-manage.com/subscribe/post?u=8a7259975399e517f1b8d4e09&amp;id=f25d986b26&amp;f_id=009d15e1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <h2>Stay knowing.</h2>
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required=""
                    value=""
                  />
                  <span id="mce-EMAIL-HELPERTEXT" className="helper_text">
                    no worries, we dont spam.
                  </span>
                </div>
                <div id="mce-responses" className="clear foot">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-5000px" }}
                >
                  <input
                    type="text"
                    name="b_8a7259975399e517f1b8d4e09_f25d986b26"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                      value="Subscribe"
                    />
                    <p style={{ margin: "0px auto" }}>
                      <a
                        href="http://eepurl.com/iMsmZY"
                        title="Mailchimp - email marketing made easy and fun"
                      >
                        <span
                          style={{
                            display: "inline-block",
                            backgroundColor: "transparent",
                            borderRadius: "4px",
                          }}
                        >
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
