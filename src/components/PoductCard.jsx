export default function ProductCrard({ copy, userId, setUserId, userData }) {
  return (
    <>
      {copy.map((user) => {
        return (
          <>
            <div className="productCard">
              <img
                src={`https://robohash.org/${user.id}?200x200`}
                alt="roboImage"
              />
              <br />
              <br />
              <span>{user.name}</span>
              <br />
              <span>{user.email}</span>
            </div>
          </>
        );
      })}
    </>
  );
}
