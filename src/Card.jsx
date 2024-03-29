import { useMotionValue, useTransform, motion } from "framer-motion";
import logo from "../src/assets/logo.png";
import shoe from "../src/assets/shoe.png";
const Card = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
    return (
        <div
        className="flex h-screen items-center justify-center bg-[#B0A19C]"
        style={{ perspective: 2000 }}
      >
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 2, right: 2, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="relative w-[350px] cursor-grab rounded-lg border-[4px] border-white bg-[#e4dfdc] px-6 py-11"
        >
          {/* logo */}
          <div className="mb-5">
            <img src={logo} alt="" />
          </div>
          {/* title */}
          <div className="max-w-2xl space-y-5">
            <h1 className="text-3xl font-extrabold">Nike Air Max Pre-Day</h1>
            <p className="max-w-[300px] text-sm text-gray-600">
              Taking the classic look of heritage Nike Running into a new realm,
              the Nike Air Max Pre-Day brings you a fast-paced look thats ready
              for todays world
            </p>
          </div>
          {/* button */}
          <div className="my-6 flex items-center gap-2">
            <button className="rounded-md bg-black px-4 py-3 text-white ">
              Add to bag
            </button>
            <p className="text-lg font-extrabold">$495.00</p>
          </div>
          {/* colors */}
          <div>
            <ul className="flex items-center justify-start gap-2">
              <li className="size-6 rounded-full bg-[#b6a179]"></li>
              <li className="size-6 rounded-full bg-[#272425]"></li>
              <li className="size-6 rounded-full bg-[#6389cb]"></li>
              <li className="size-6 rounded-full bg-[#f2c758]"></li>
            </ul>
          </div>
          {/* card image */}
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100000 }}
            className="absolute -right-24 top-32 w-[280px]"
          >
            <img src={shoe} alt="" draggable="false" />
          </motion.div>
        </motion.div>
      </div>
    );
};

export default Card;