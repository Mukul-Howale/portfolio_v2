'use client';

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

const slugs = [
  "java",
  "spring boot",
  "kubernetes",
  "react",
  "html5",
  "css3",
  "javascript",
  "amazonaws",
  "postgresql",
  "mysql",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "apachekafka",
  "prometheus",
  "keycloak",
  "grafana"
];

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;
  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export function IconCloud({ iconSlugs = slugs }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}

export function IconCloudDemo() {
  return (
    <div className="flex justify-center items-center w-full h-full py-16">
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden bg-background">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}

export default IconCloud;