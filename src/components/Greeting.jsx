function Greeting({ user }) {
    return (
      <div className="w-full">
        <span>
          <h1 className="text-black font-bold">
            {`Good Morning, ${user?.name}`}
          </h1>
          <p className="text-black text-lg">
            Check all your incoming and outgoing transactions here
          </p>
        </span>
      </div>
    );
  }
  
  export default Greeting;