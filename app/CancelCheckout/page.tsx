import Link from 'next/link';

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-48">
          <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
          <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
          <Link href="/">
            <div className="text-blue-500 hover:underline">Go back to home page</div>
          </Link>
        </div>
      );
}

export default page