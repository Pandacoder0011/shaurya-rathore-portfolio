type SectionHeadingProps = {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  number?: string
}

export default function SectionHeading({ eyebrow, title, highlight, description, number }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading-copy">
        <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
        <h2>{title} {highlight && <span className="gradient-text">{highlight}</span>}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {number && <span className="section-index">{number}</span>}
    </div>
  )
}
