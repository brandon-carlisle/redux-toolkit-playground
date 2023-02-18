interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <section className="flex flex-col items-center pb-8 border-b-2 border-blue-700 mb-20">
      {children}
    </section>
  );
}
export default Section;
