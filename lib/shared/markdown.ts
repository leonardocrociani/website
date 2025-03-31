export const renderMarkdown = (text: string) => {
    let html = text
        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-5 mb-3">$1</h2>')
        .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-6 mb-4">$1</h1>')
    html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>").replace(/\*(.*?)\*/gim, "<em>$1</em>")
    html = html.replace(/\[([^\]]+)\]$$([^)]+)$$/gim, '<a href="$2" class="text-primary hover:underline">$1</a>')
    html = html.replace(
        /```([\s\S]*?)```/gim,
        '<pre class="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code>$1</code></pre>',
    )
    html = html.replace(/`(.*?)`/gim, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>')
    html = html.replace(/^\* (.*$)/gim, '<li class="ml-6 list-disc">$1</li>')
    html = html.replace(/^\d\. (.*$)/gim, '<li class="ml-6 list-decimal">$1</li>')
    html = html.replace(/<li class="ml-6 list-disc">([\s\S]*?)(?=<li class="ml-6 list-decimal">|$)/gim, "<ul>$&</ul>")
    html = html.replace(/<li class="ml-6 list-decimal">([\s\S]*?)(?=<li class="ml-6 list-disc">|$)/gim, "<ol>$&</ol>")
    html = html.replace(/^(?!<[hou]|<li|\s*$)(.*$)/gim, '<p class="my-2">$1</p>')
    html = html.replace(/!\[(.*?)\]$$(.*?)$$/gim, '<img src="$2" alt="$1" class="max-w-full my-4 rounded-md" />')
    return html
}