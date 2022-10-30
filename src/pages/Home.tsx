import CTA from "styled/CTA";
import { Accent, StyledTitle } from "styled/Random";

console.log(import.meta.env.VITE_AIRTABLE_API_KEY);
console.log(import.meta.env.VITE_AIRTABLE_BASE);
console.log(import.meta.env.VITE_AIRTABLE_TABLE);

export default function Home(): JSX.Element {
  return (
    <div>
      <StyledTitle>Ready to Play?</StyledTitle>
      <CTA to="/game">
        Click or type <Accent>'s'</Accent> to start playing!
      </CTA>
    </div>
  );
}
