export const palette = {
    blue600:      "#2563eb",
    blueGray100:  "#e7edf5",
    blueGray200:  "#d8e3f0",
    blueGray400:  "#a7b0bf",
    blueGray500:  "#728096",
    gray900:      "#111827",
    red700:       "#b91c1c",
    slate50:      "#f8fafc",
    slate500:     "#64748b",
    slate600:     "#475569",
    slate900:     "#0f172a",
    text900:      "#101827",
    white:        "#ffffff",
    whiteAlpha82: "rgba(255, 255, 255, 0.82)",
} as const;

export const colors = {
    background: {
        default:       palette.slate50,
    },
    border: {
        default:       palette.blueGray100,
        hover:         palette.blueGray200,
        inverseSubtle: palette.whiteAlpha82,
    },
    brand: {
        primary:       palette.blue600,
    },
    feedback: {
        danger:        palette.red700,
    },
    icon: {
        muted:         palette.blueGray400,
    },
    shadow: {
        default:       palette.slate500,
    },
    surface: {
        default:       palette.white,
    },
    text: {
        heading:       palette.gray900,
        inverse:       palette.white,
        muted:         palette.blueGray500,
        primary:       palette.text900,
        secondary:     palette.slate600,
        strong:        palette.slate900,
    },
} as const;

export type CategoryAccent = {
    backgroundColor: string;
    color: string;
};

export const CATEGORY_ACCENTS: CategoryAccent[] = [
    { backgroundColor: "#fff0fa", color: "#ec5fb8" },
    { backgroundColor: "#f5efff", color: "#8b5cf6" },
    { backgroundColor: "#eef6ff", color: "#3b82f6" },
    { backgroundColor: "#edfdf3", color: "#4fbf76" },
    { backgroundColor: "#fff6e8", color: "#f59e0b" },
    { backgroundColor: "#eafafa", color: "#21b8c7" },
    { backgroundColor: "#f0f2ff", color: "#6366f1" },
];
