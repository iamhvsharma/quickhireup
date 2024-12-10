import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

function Resume({ onNext, onBack }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Please upload a file smaller than 5MB");
        return;
      }
      setSelectedFile(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">
          Upload your Resume/CV
        </h1>
        <p className="text-slate-600">
          Upload your resume to help us better understand your experience and skills
        </p>
      </div>

      <div className="space-y-4">
        <div
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed rounded-lg p-12 transition-all duration-200",
            "flex flex-col items-center justify-center",
            isDragActive ? "border-primary bg-primary/5" : "border-border",
            selectedFile ? "bg-muted/30" : "hover:bg-muted/30"
          )}
        >
          <input {...getInputProps()} />
          <div className="space-y-4 text-center">
            {selectedFile ? (
              <>
                <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7 text-green-600" />
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-green-600">File uploaded successfully!</p>
                  <p className="text-sm text-muted-foreground">{selectedFile.name}</p>
                </div>
              </>
            ) : (
              <>
                <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <Upload className="w-7 h-7 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium">Drag & drop your resume here</p>
                  <p className="text-sm text-muted-foreground">
                    or <span className="text-primary hover:underline cursor-pointer">browse files</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supported formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={(e) => onBack(e)}
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Resume;
