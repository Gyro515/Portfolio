"use cliet"

export default function Footer() {
    const y = new Date().getFullYear()

    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-screen-xl px-5 py-10">
                Data analytics • full-stack • automation. Winnipeg, MB.
            </div>
        </footer>
    )
}