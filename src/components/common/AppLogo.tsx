import { useMemo } from "react";

export default function AppLogo() {
  const isDark =
    document.documentElement.classList.contains(
      "dark"
    );

  const logo = useMemo(() => {
    return isDark
      ? "https://vtxinxfwveovezogzfjb.supabase.co/storage/v1/object/public/Website%20Image/e6320a1a-32a8-43ba-bdc8-3de0d931e6f6-Photoroom%20(1).png"
      : "https://vtxinxfwveovezogzfjb.supabase.co/storage/v1/object/public/Website%20Image/logo__1_-removebg-preview.png";
  }, [isDark]);

  return (
    <img
      src={logo}
      alt="Atithi Hub"
      className="h-14 object-contain"
    />
  );
}