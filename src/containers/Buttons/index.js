import TextButtons from "./TextButtons";
import ContainedButtons from "./ContainedButtons";
import OutlinedButtons from "./OutlinedButtons";
import IconButtons from "./IconButtons";

export default function Index () {
  return (
    <div>
      <TextButtons />

      <ContainedButtons />

      <OutlinedButtons />

      <IconButtons />
    </div>
  );
}