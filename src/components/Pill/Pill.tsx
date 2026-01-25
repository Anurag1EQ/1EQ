import './Pill.css';

interface PillProps {
    children: React.ReactNode;
    color?: string;
}

export const Pill = ({ children, color = 'var(--color-primary)' }: PillProps) => (
    <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium "
        style={{
            background: `${color}15`,
            border: `1px solid ${color}`,
            color: color
        }}
    >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
        {children}
    </div>
);
