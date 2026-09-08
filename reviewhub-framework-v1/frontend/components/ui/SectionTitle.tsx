type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "8px" }}>
        {title}
      </h2>

      {subtitle && (
        <p style={{ color: "#94A3B8" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
                  }
