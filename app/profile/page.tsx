import Image from "next/image"

export default function ProfileScreen() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4 bg-white">
          <h1 className="text-xl font-medium">Account Settings</h1>
        </div>

        <div className="bg-gray-100 flex-1 flex flex-col">
          <div className="p-4 flex items-center space-x-4">
            <div className="relative">
              <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/profile.png"
                  alt="Profile picture"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs">
                📷
              </div>
            </div>
            <div>
              <h2 className="font-medium">Marry Doe</h2>
              <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
            </div>
          </div>

          <div className="px-4 pb-4 text-sm text-gray-700">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
              Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>

          <div className="border-t border-dashed border-gray-300"></div>

          <div className="flex-grow"></div>

          <div className="border-t border-dashed border-gray-300 mb-10"></div>
        </div>
      </div>
    </div>
  )
}
