import "/Users/emma/techpod_frontend/src/images/TechPodLogo.png";

const Landing = () => {
  return (
    <div>
      <img
        src={require("/Users/emma/techpod_frontend/src/images/TechPodLogo.png")}
        className="logo"
      ></img>
      <h1>Welcome to TechPod</h1>
    </div>
  );
};

export default Landing;
