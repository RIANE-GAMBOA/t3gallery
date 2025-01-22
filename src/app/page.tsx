import Link from "next/link";

const mockUrls = [
  "https://ezlhdp1z8l.ufs.sh/f/rVNTt4c6mQKZYrgI7ft4iMe7rGOpU9WXkozH8P0mLDtKByCS",
  "https://ezlhdp1z8l.ufs.sh/f/rVNTt4c6mQKZ01LkJXUqQ9nFr2GtNR8i6WHhdEo0SVXmkblz",
  "https://ezlhdp1z8l.ufs.sh/f/rVNTt4c6mQKZhfytW9G3O1sNARPiyT8bQrl7emB2ZELMjIU9",
]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-1">
            <img
              src={image.url} className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
