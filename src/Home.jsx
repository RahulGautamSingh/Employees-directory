import "./styles.css";
import UserCard from "./UserCard";
import users from "./users.js";

function Home() {
  return (
    <>
      <h1>Users at Acmne Inc.</h1>

      <div className="card-container">
        {users.map((user) => 
          <UserCard
          image={user.picture.medium}
            name={user.name.title + user.name.first + user.name.last}
            email={user.email}
          />
        )}
      </div>
    </>
  );
}

export default Home;
