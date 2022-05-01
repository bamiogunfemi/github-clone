import { Profile, Repositories } from "../components";
import { Layout } from "../components";

function Home() {
  return (
    <Layout>
      <div className="flex md:px-8 px-3 justify-center flex-col md:flex-row">
        <div className="md:w-1/5 w-auto -mt-12 ">
          <Profile />
        </div>
        <div className="md:ml-4 md:w-3/5 w-auto">
          <Repositories />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
