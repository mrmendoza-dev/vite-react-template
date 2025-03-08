import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { AlertCircle, FileText, Upload, X } from "lucide-react";
import { useRef, useState } from "react";

interface FileUploaderProps {
  label?: string;
  value?: File | null;
  onValueChange: (file: File | null) => void;
  accept?: string;
  displayAccept?: boolean;
  maxSize?: number; // in bytes
  className?: string;
}

export const FileUploader = ({
  label = "Upload file",
  value,
  onValueChange,
  accept = "*",
  maxSize = 5 * 1024 * 1024, // 5MB default
  displayAccept = true,
  className,
}: FileUploaderProps) => {
  const [error, setError] = useState<string>("");
  const fileInputRef: any = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setError("");
      onValueChange(null);
      return;
    }

    // Check file size
    if (maxSize && file.size > maxSize) {
      setError(`File is too large. Max size is ${formatFileSize(maxSize)}`);
      onValueChange(null);
      return;
    }

    setError("");
    onValueChange(file);
  };

  const handleRemove = () => {
    onValueChange(null);
    setError("");
    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  // Format accept string into readable format
  const formatAcceptedTypes = (accept: string): string => {
    if (accept === "*") return "All files";

    const types = accept.split(",").map((type) => {
      const trimmed = type.trim();
      return trimmed
        .replace("image/", "")
        .replace("audio/", "")
        .replace("video/", "")
        .replace("application/", "")
        .toUpperCase();
    });
    return types.join(", ");
  };

  const acceptedTypes = formatAcceptedTypes(accept);

  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label>{label}</Label>}

      <div className="grid gap-2">
        <div className="relative">
          {/* Add a key prop here to force re-render on file change */}
          <Input
            key={value ? value.name : "file-input"} // force re-render when value changes
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="peer opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
          />

          <div
            className={cn(
              "flex items-center justify-center border rounded-md px-3 py-2 min-h-10 transition-colors",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
              "peer-hover:bg-muted/50",
              error ? "border-destructive" : "border-input"
            )}
          >
            {value ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate max-w-[200px]">{value.name}</span>
                  <span className="text-muted-foreground">
                    ({formatFileSize(value.size)})
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleRemove}
                  className="h-7 w-7 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-2">
                <Upload className="h-6 w-6 text-muted-foreground mb-1" />
                <div className="text-sm font-medium">
                  Drop file here or click to upload
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Max size: {formatFileSize(maxSize)}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Accepted file types - placed under the dropzone */}
        {!value && displayAccept && (
          <div className="text-xs text-muted-foreground -mt-1 ml-1">
            Accepted file types: {acceptedTypes}
          </div>
        )}

        {error && (
          <div className="flex items-center text-destructive text-sm gap-1">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};
