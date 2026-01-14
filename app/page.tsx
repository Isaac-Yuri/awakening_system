import {redirect} from "next/navigation";

export default function Home() {

  const hasCompletedOnboarding = false;

  if (hasCompletedOnboarding) {
    return (
      redirect("/dashboard")
    );
  }

  return (
    redirect("/onboarding")
  );
}
