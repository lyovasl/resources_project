import { PropsWithChildren } from "react";

// interface GlobalCourseProps {
//   title: string;
//   children: ReactNode;
// }

type GlobalCourseProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: GlobalCourseProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}

// const CourseGoal: FC<GlobalCourseProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
