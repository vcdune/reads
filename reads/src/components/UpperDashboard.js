import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import DocumentList from "./DocumentList";

export default function UpperDashboard() {
  const userName = firebase.auth().currentUser?.displayName;
  const userID = firebase.auth().currentUser?.uid;
  const pfp = firebase.auth().currentUser?.photoURL;

  return (
    <div className="upper-dash">
      {userID && <DocumentList userID={userID} />}
    </div>
  );
}