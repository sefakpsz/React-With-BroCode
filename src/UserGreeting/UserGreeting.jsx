import PropTypes from "prop-types";
import styles from "./UserGreeting.module.css";

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className={styles.welcome_message}>Welcome {props.username}</h2>
  );
  const loginPrompt = (
    <h2 className={styles.login_prompt}>Please log in to continue</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

UserGreeting.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
};

export default UserGreeting;
