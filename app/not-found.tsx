export default function NotFound() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-[50svh] to-white">
            <h1 className="text-4xl font-bold text-gray-800 mono">404</h1>
            <p className="mb-2 text-lg text-gray-600 mono">Page Not Found</p>
            <div className="flex flex-col gap-2 items-center">
                <p className="text-gray-500">Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    );
}