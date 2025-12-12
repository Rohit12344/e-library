"use client";

import config from "@/lib/config";
import {
  Image as IkImage,
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitProvider,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import Image from "next/image";
import { useRef, useState } from "react";

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

const ImageUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortController = new AbortController();
  const [file, setFile] = useState<{ filePath: string } | null>(null);
  // const handleUpload = async () => {
  //   const fileInput = fileInputRef.current;
  //   if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
  //     alert("Please select a file to upload");
  //     return;
  //   }

  //   const file = fileInput.files[0];

  //   let authParams;
  //   try {
  //     authParams = await authenticator();
  //   } catch (authError) {
  //     console.error("Failed to authenticate for upload:", authError);
  //     return;
  //   }
  //   const { signature, expire, token } = authParams;

  //   try {
  //     const uploadResponse = await upload({
  //       expire,
  //       token,
  //       signature,
  //       publicKey,
  //       file,
  //       fileName: file.name,
  //       abortSignal: abortController.signal,
  //     });
  //     console.log("Upload response:", uploadResponse);
  //   } catch (error) {
  //     if (error instanceof ImageKitAbortError) {
  //       console.error("Upload aborted:", error.reason);
  //     } else if (error instanceof ImageKitInvalidRequestError) {
  //       console.error("Invalid request:", error.message);
  //     } else if (error instanceof ImageKitUploadNetworkError) {
  //       console.error("Network error:", error.message);
  //     } else if (error instanceof ImageKitServerError) {
  //       console.error("Server error:", error.message);
  //     } else {
  //       console.error("Upload error:", error);
  //     }
  //   }
  // };

  const onError = () => {};
  const onSuccess = (res: unknown) => {};
  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <input type="file" ref={fileInputRef} className="hidden" />
      <button
        type="button"
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();

          if (fileInputRef.current) {
            fileInputRef.current.click();
          }
        }}
        onError={onError}
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
