export const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="g">
            <stop stop-color="#ededed" offset="20%" />
            <stop stop-color="#e5e5e5" offset="50%" />
            <stop stop-color="#dadada" offset="70%" />
        </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#1a2c38" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" fill-opacity="0.1" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str) =>
	typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

export const imageLoader = (src) => {
	return src;
};
