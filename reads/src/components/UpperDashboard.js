import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import DocumentList from "./DocumentList";

export default function UpperDashboard() {
  const userName = firebase.auth().currentUser?.displayName;
  const userID = firebase.auth().currentUser?.uid;
  const pfp = firebase.auth().currentUser?.photoURL;

  return (
    <div style={{ borderBottom: "1px solid #cdd1da", minHeight: "20px" }}>
      <h4 className="welcome" style={{ display: "flex", alignItems: "center" }}>
      <img src={pfp} style={{borderRadius: "100%", width: "3em", height: "3em", marginRight: "1em", verticalAlign: "middle"}}/> Welcome, {userName}.
      </h4>
      {userID && <DocumentList userID={userID} />}
    </div>
  );
}