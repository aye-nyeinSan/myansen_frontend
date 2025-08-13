import { PreSignPutObjResponse } from "@/types/AWS";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";
const API_VERSION = "/api/v1/"


async function fetchPresignedUrl(file: File): Promise<PreSignPutObjResponse> { 
    const url = new URL(`${API_BASE_URL}${API_VERSION}upload/presigned_url`);
    console.log(">> Calling URL:", url.toString());
    
     const form = new FormData();
        form.append("file", file); 
    const presign_url = await fetch(url, {
        method: "POST",
        body: form
    });
    if (!presign_url.ok) {
    const errText = await presign_url.text(); 
    console.error("S3 error:", errText);
    throw new Error(
      `S3 upload failed: ${presign_url.text()} ${presign_url.status} ${
        presign_url.statusText
      }. ${errText}`
    );
}
    const data: PreSignPutObjResponse = await presign_url.json();
   return data; 
}
export async function uploadDatasetToS3(file?: File) {
    console.log("Upload to S3 clicked - implement your logic here");
    const f = file ?? new File(["hello"], "dummy.txt", { type: "text/plain" });

    const { url, key, bucket }: PreSignPutObjResponse = await fetchPresignedUrl(f);
    
    //put file to S3
    const uploadtoS3 = await fetch(url, {
      method: "PUT",
      body: f,
      headers: {
        "Content-Type": f.type || "application/octet-stream",
      },
    });
    if (uploadtoS3.ok)
    { console.log("Uploaded! S3 key:"); }
    else {
        const errText = await uploadtoS3.text();
        console.error("S3 PUT error:", errText);
        throw new Error(
        `S3 upload failed: ${uploadtoS3.status} ${uploadtoS3.statusText}`
        );
    }
    
    return { key, bucket };
}
