export const Button = ({
    children,
    className,
    onClick,
    type = "button",
    disabled = false,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}>) => {
    return (
        <button
            type={type}
            className={`bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}