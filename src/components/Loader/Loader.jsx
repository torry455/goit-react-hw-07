import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="rgba(24, 146, 0, 0.7)"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperClass={css.loader}
      />
    </div>
  );
};

export default Loader;
