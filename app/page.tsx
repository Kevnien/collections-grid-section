import CollectionsGridSection from "./collections-grid-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <main className="flex flex-col gap-4 m-8">
        <CollectionsGridSection />
      </main>
      <footer>
        <div className="credits">
          A challenge by
          <a
            href="https://www.greatfrontend.com/projects?ref=challenges"
            target="_blank"
          >
            GreatFrontEnd Projects
          </a>
          . Built by
          <a href="https://www.greatfrontend.com/u/kevinn858" target="_blank">
            Kevin Nguyen
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
