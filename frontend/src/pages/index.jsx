import {Link} from "react-router-dom";

export function Index() {
  return (
    <div>
      <div>
        <Link to="/create">Create</Link>
      </div>
      <div>
        <Link to="/view">View</Link>
      </div>
    </div>
  );
}
