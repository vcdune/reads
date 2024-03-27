//firbase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function SignUp() {
  return (
    <div className="page-view" style={{ marginTop: "5%" }}>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign-up</button>
    </div>
  );
}
