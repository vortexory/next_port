import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { getTechskills } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import { ProgressCircle } from "../elements";

const TechSkills = () => {
  const { data } = useQuery("tech-skills", getTechskills);

  if (!data) return null;

  return (
    <div className="grid grid-cols-4 gap-7">
      {data?.map((skill, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 * index }}
          variants={childrenAnimation}
          className="col-span-4 sm:col-span-2 lg:col-span-1"
          key={skill.id}
        >
          <ProgressCircle skill={skill} />
        </motion.div>
      ))}
    </div>
  );
};

export default TechSkills;
