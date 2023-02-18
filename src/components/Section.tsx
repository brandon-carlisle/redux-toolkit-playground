interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <section className="flex flex-col items-center">
      {children}
      <div className="divider my-20"></div>
    </section>
  );
}
export default Section;
