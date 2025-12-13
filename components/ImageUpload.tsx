"use client";

import config from "@/lib/config";
import { Image as IkImage, ImageKitProvider, upload } from "@imagekit/next";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";

const {
  env: {
    imageKit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText} `
      );
    }

    const data = await response.json();
    const { token, expire, signature } = data;
    return { token, expire, signature };
  } catch (error) {
    throw new Error("Authentication request failed : ${error.message");
  }
};

const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortController = new AbortController();
  const [file, setFile] = useState<{ filePath: string } | null>(null);
  const handleUpload = async () => {
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      return;
    }

    const currentFile = fileInput.files[0];

    let authParams;
    try {
      authParams = await authenticator();
    } catch (authError) {
      console.error("Failed to authenticate for upload:", authError);
      return;
    }
    const { signature, expire, token } = authParams;

    try {
      const uploadResponse = await upload({
        expire,
        token,
        signature,
        publicKey,
        file: currentFile,
        fileName: currentFile.name,
        abortSignal: abortController.signal,
      });
      if (uploadResponse.filePath) {
        setFile({ filePath: uploadResponse.filePath });
      }
      toast("Image uploaded successfully", {
        description: `${file?.filePath} uploaded successfully.`,
      });
    } catch (error) {
      toast.error("Image uploaded failed", {
        description: `Your image upload could not be uploaded. Please try again.`,
      });
    }
  };

  const onError = (error: unknown) => {
    toast("Image uploaded failed", {
      description: `Your image upload could not be uploaded. Please try again.`,
    });
  };
  const onChange = async (res: File | null) => {
    if (res !== null) {
      onFileChange(res.name);
      handleUpload();
    }
  };
  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onError={onError}
        onChange={(e) => {
          onChange(e.target.files ? e.target.files[0] : null);
        }}
      />
      <button
        type="button"
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();

          if (fileInputRef.current) {
            fileInputRef.current.click();
          }
        }}
      >
        <Image
          src="/icons/upload.svg"
          width={20}
          height={20}
          alt="upload-icon"
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a File</p>

        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>

      {file && (
        <IkImage
          src={file.filePath}
          height={500}
          width={500}
          alt={"file.filePath"}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
