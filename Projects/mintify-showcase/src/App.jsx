import { Download, Features, SectionWrapper } from "./components";

import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Mintify NFTs.
      Start selling in minutes!"
        description="Buy, sell, and discover rare digital items. 
      Join 25+ million users on Mintify, the world’s largest NFT marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart user interface marketplace.
      "
        description="Experience a minimalist UI design with Mintify NFT marketplace. Aesthetically pleasing and easy to use."
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment"
        description="Mintify is built using Expo CLI, a cross-platform toolchain for React Native. It allows the application to run natively on all users' devices. Now you can get your app into the hands of your users instantly."
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="A creative way to sell your NFTs."
        description="The app contains specific screens for authentication while two more screens for showcasing. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center text-center bg-primary flex-col banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="font-bold">Sharjeel Riaz</span>
        </p>
      </div>
    </>
  );
};

export default App;
