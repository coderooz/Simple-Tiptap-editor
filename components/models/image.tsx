/** @format */
"use client";

import { useState, useEffect, useCallback } from "react";
import { Editor } from "@tiptap/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // optional helper if you use className utils

interface ImageAsset {
  id: string;
  url: string;
  name?: string;
}

export default function ImageModel({ editor }: { editor: Editor }) {
  const [activeTab, setActiveTab] = useState("url");

  // Basic Inputs
  const [image, setImage] = useState<string>("");
  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(300);

  // File Upload
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // Asset List
  const [assets, setAssets] = useState<ImageAsset[]>([]);
  const [loadingAssets, setLoadingAssets] = useState(false);

  // --- Fetch existing assets ---
  useEffect(() => {
    if (activeTab !== "assets") return;
    const fetchAssets = async () => {
      try {
        setLoadingAssets(true);
        const res = await fetch("/api/private/asset?type=image");
        const data = await res.json();
        setAssets(data || []);
      } catch (err) {
        console.error("Error fetching assets:", err);
      } finally {
        setLoadingAssets(false);
      }
    };
    fetchAssets();
  }, [activeTab]);

  // --- Insert image to editor ---
  const insertImage = useCallback(
    (src: string) => {
      if (!src) return;
      editor
        .chain()
        .focus()
        .setImage({
          src,
          width,
          height,
        })
        .run();
    },
    [editor, width, height]
  );

  // --- Handle URL Insert ---
  const handleInsertFromUrl = () => {
    if (!image.trim()) return;
    insertImage(image);
    setImage("");
  };

  // --- Handle File Upload (Mock Example) ---
  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    try {
      const localPreviewUrl = URL.createObjectURL(file);
      insertImage(localPreviewUrl);
      //   const formData = new FormData();
      //   formData.append("file", file);

      //   const res = await fetch("/api/private/asset/upload", {
      //     method: "POST",
      //     body: formData,
      //   });
      //   const data = await res.json();
      //   if (data?.url) {
      //     insertImage(data.url);
      //   }
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
      setFile(null);
    }
  };

  // --- Handle selecting existing asset ---
  const handleSelectAsset = (url: string) => {
    insertImage(url);
  };

  return (
    <div className='space-y-4 py-2'>
      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        <TabsList className='grid grid-cols-3 w-full'>
          <TabsTrigger value='url'>From URL</TabsTrigger>
          <TabsTrigger value='upload'>Upload</TabsTrigger>
          <TabsTrigger value='assets'>My Assets</TabsTrigger>
        </TabsList>

        {/* --- From URL --- */}
        <TabsContent value='url' className='mt-4 space-y-4'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Image URL</label>
            <Input
              type='url'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder='https://example.com/image.png'
            />
          </div>

          <div className='flex gap-3'>
            <div className='flex flex-col'>
              <label className='text-xs text-muted-foreground'>Width</label>
              <Input
                type='number'
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className='w-20'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-xs text-muted-foreground'>Height</label>
              <Input
                type='number'
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className='w-20'
              />
            </div>
          </div>

          <Button onClick={handleInsertFromUrl} className='w-full'>
            Insert Image
          </Button>
        </TabsContent>

        {/* --- Upload Image --- */}
        <TabsContent value='upload' className='mt-4 space-y-4'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Select File</label>
            <Input
              type='file'
              accept='image/*'
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
          <div className='flex gap-3'>
            <div className='flex flex-col'>
              <label className='text-xs text-muted-foreground'>Width</label>
              <Input
                type='number'
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className='w-20'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-xs text-muted-foreground'>Height</label>
              <Input
                type='number'
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className='w-20'
              />
            </div>
          </div>
          <Button
            onClick={handleUpload}
            disabled={uploading}
            className='w-full'
          >
            {uploading ? "Uploading..." : "Upload & Insert"}
          </Button>
        </TabsContent>

        {/* --- My Assets --- */}
        <TabsContent value='assets' className='mt-4 space-y-4'>
          {loadingAssets ? (
            <p className='text-sm text-muted-foreground text-center'>
              Loading images...
            </p>
          ) : assets.length > 0 ? (
            <div className='grid grid-cols-3 gap-3 max-h-72 overflow-y-auto p-1'>
              {assets.map((asset) => (
                <div
                  key={asset.id}
                  className={cn(
                    "relative group cursor-pointer border rounded-md overflow-hidden hover:ring-2 hover:ring-primary"
                  )}
                  onClick={() => handleSelectAsset(asset.url)}
                >
                  <img
                    src={asset.url}
                    alt={asset.name || "asset"}
                    className='object-cover w-full h-24'
                  />
                  <div className='absolute bottom-0 bg-black/50 text-white text-xs w-full text-center opacity-0 group-hover:opacity-100 transition'>
                    Insert
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-sm text-muted-foreground text-center'>
              No assets found.
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
