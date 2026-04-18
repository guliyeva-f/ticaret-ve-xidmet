export default async function NewsDetailPage({ params }) {
    const { slug } = await params;
    return <div className="h-screen flex justify-center items-center text-2xl font-normal">Xəbər: {slug}</div>
}