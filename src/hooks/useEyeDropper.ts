import { useCallback, useState } from "react";

export const useEyeDropper = () => {
  const [color, setColor] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const openEyeDropper = useCallback(async () => {
    if (!(window as any).EyeDropper) {
      setError("EyeDropper API not supported in this browser.");
      return null;
    }

    try {
      const eyeDropper = new (window as any).EyeDropper();
      const result = await eyeDropper.open();
      setColor(result.sRGBHex);
      setError(null);
      return result.sRGBHex;
    } catch (err) {
      setError("Color picking was canceled or failed.");
      return null;
    }
  }, []);

  return { color, error, openEyeDropper };
};
