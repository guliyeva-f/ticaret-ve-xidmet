export default function NewsDetailPage({ params }) {
    return (
        <div className="h-screen flex justify-center items-center text-2xl font-normal">
            Xəbər: {params.slug}
        </div>
    );
}