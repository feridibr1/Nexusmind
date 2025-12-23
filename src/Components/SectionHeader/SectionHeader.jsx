import './SectionHeader.scss'

export default function SectionHeader ({children, title, subtitle}) {
    <div className="header">
        <p className="subtitle">{subtitle}</p>
        <p>{title}</p>
    </div>
}