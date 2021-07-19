import React from 'react';
import "./loadingpage.css";

export default function LoadingPage({ loading = false }) {
    const clasString = `loading-page ${loading ? "show" : ""}`
    return (
        <div className={clasString.trim()}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', display: 'block'}} width="133px" height="133px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="translate(50 50)">
                    <g transform="scale(0.86)">
                    <g transform="translate(-50 -50)">
                        <g>
                        <animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" times="0;1" dur="0.9009009009009008s" repeatCount="indefinite" />
                        <path fill="#0bbcff" d="M44.711 10.952c10.24-5.964 23.181-4.614 32.071 3.151l4.839 4.276l-6.414-1.238 c-8.102-1.688-16.88-0.113-24.532 4.276S37.284 32.67 34.696 40.547l-2.026 6.189l-1.238-6.414 C29.069 28.732 34.471 16.916 44.711 10.952z">
                            <animate attributeName="fill" repeatCount="indefinite" dur="0.9009009009009008s" values="#0bbcff;#36ff44;#7df5ff;#d5f5ff;#0bbcff" keyTimes="0;0.25;0.5;0.75;1" begin="-0.6756756756756757s" />
                        </path>
                        <path fill="#36ff44" d="M32.333 61.253l6.189 2.138l-4.276-4.839c-5.514-6.189-8.552-14.517-8.552-23.406s3.038-17.217 8.552-23.406 l4.276-4.839l-6.189 2.138C21.079 12.865 13.54 23.33 13.54 35.258C13.54 46.849 21.079 57.427 32.333 61.253z">
                            <animate attributeName="fill" repeatCount="indefinite" dur="0.9009009009009008s" values="#0bbcff;#36ff44;#7df5ff;#d5f5ff;#0bbcff" keyTimes="0;0.25;0.5;0.75;1" begin="-0.4504504504504504s" />
                        </path>
                        <path fill="#7df5ff" d="M32.67 77.795c6.527 0 13.054-2.363 18.23-6.864l4.839-4.276l-6.414 1.238 c-8.102 1.688-16.88 0.113-24.532-4.276c-7.652-4.389-13.391-11.253-15.979-19.13l-2.026-6.189L5.55 44.711 C3.187 56.302 8.588 68.118 18.829 74.082C23.105 76.557 27.944 77.795 32.67 77.795z">
                            <animate attributeName="fill" repeatCount="indefinite" dur="0.9009009009009008s" values="#0bbcff;#36ff44;#7df5ff;#d5f5ff;#0bbcff" keyTimes="0;0.25;0.5;0.75;1" begin="-0.2252252252252252s" />
                        </path>
                        <path fill="#0bbcff" d="M68.568 59.678l-1.238-6.414l-2.026 6.189c-2.588 7.877-8.327 14.629-15.979 19.13 c-7.652 4.389-16.43 5.964-24.532 4.276l-6.414-1.238l4.839 4.276c5.176 4.501 11.703 6.864 18.23 6.864 c4.726 0 9.565-1.238 13.841-3.714C65.529 83.084 70.931 71.268 68.568 59.678z">
                            <animate attributeName="fill" repeatCount="indefinite" dur="0.9009009009009008s" values="#0bbcff;#36ff44;#7df5ff;#d5f5ff;#0bbcff" keyTimes="0;0.25;0.5;0.75;1" begin="-0.6756756756756757s" />
                        </path>
                        <path fill="#36ff44" d="M67.667 38.747l-6.189-2.138l4.276 4.839c5.514 6.189 8.552 14.517 8.552 23.406s-3.038 17.217-8.552 23.406 l-4.276 4.839l6.189-2.138C78.921 87.135 86.46 76.67 86.46 64.742C86.46 53.151 78.921 42.573 67.667 38.747z">
                            <animate attributeName="fill" repeatCount="indefinite" dur="0.9009009009009008s" values="#0bbcff;#36ff44;#7df5ff;#d5f5ff;#0bbcff" keyTimes="0;0.25;0.5;0.75;1" begin="-0.4504504504504504s" />
                        </path>
                        <path fill="#7df5ff" d="M81.171 25.918c-10.24-5.964-23.181-4.614-32.071 3.151l-4.839 4.276l6.414-1.238 c8.102-1.688 16.88-0.113 24.532 4.276c7.652 4.389 13.391 11.253 15.979 19.13l2.026 6.189l1.238-6.414 C96.813 43.698 91.412 31.882 81.171 25.918z">
                            <animate attributeName="fill" repeatCount="indefinite" dur="0.9009009009009008s" values="#0bbcff;#36ff44;#7df5ff;#d5f5ff;#0bbcff" keyTimes="0;0.25;0.5;0.75;1" begin="-0.2252252252252252s" />
                        </path>
                        </g>
                    </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}