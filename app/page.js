import DocumentationSec from "./_components/Document";
import LandingSec from "./_components/LandingSec";
import PlaygroundSec from "./_components/PlaygroundSec";

export default function Home() {
  return (
    <div>
      <LandingSec />
      <PlaygroundSec />
      <DocumentationSec />
    </div>
  );
}
