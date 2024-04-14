import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import DocumentList from "./DocumentList";

export default function UpperDashboard() {
  const userName = firebase.auth().currentUser?.displayName;
  const userID = firebase.auth().currentUser?.uid;
  const pfp = firebase.auth().currentUser?.photoURL;

  return (
    <div className="upper-dash">
      <h4>
      <img src={pfp} style={{borderRadius: "100%", width: "2.5em", height: "2.5em", marginRight: "1em", verticalAlign: "middle"}}/> Welcome, {userName}.
      </h4>
      {userID && <DocumentList userID={userID} />}
    </div>
  );
}