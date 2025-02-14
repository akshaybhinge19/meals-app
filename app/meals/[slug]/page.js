// "use client";
import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

const MealDetailsPage = async ({ params }) => {
  console.log("props--> more details", params);
  const meal = await getMeal(params.slug);
  // console.log("meal--->", meal);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill priority />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
