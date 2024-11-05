import { Clock } from "./components/Clock";
import { Form } from "./components/Form";
import { SubmitButton } from "./components/SubmitButton";

export function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center font-bold gap-14">
      <Form formId="form" />

      <Clock />

      <SubmitButton formId="form" />
    </main>
  );
}
