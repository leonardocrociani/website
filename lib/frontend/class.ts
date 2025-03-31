export const cn = (...inputs: any[]) => {
    return inputs
        .filter(Boolean)
        .map((className) => {
            if (typeof className === "object") {
                return Object.entries(className)
                    .filter(([_, value]) => Boolean(value))
                    .map(([key]) => key)
                    .join(" ");
            }
            return className;
        })
        .join(" ");
}