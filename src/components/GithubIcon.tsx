import React from "react";

/**
 * Official GitHub "octocat" mark as an inline SVG. lucide-react ships no
 * brand glyph for GitHub (GitBranch is a generic VCS icon, not the GitHub
 * logo), so every "follow/watch on GitHub" link uses this instead — it
 * needs to read unambiguously as GitHub, not as a generic branch icon.
 */
export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.724-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.757-1.333-1.757-1.089-0.745 0.084-0.729 0.084-0.729 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.775 0.417-1.305 0.76-1.605-2.665-0.303-5.466-1.332-5.466-5.93 0-1.31 0.469-2.381 1.236-3.221-0.124-0.303-0.535-1.524 0.117-3.176 0 0 1.008-0.322 3.302 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.552 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.874 0.118 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 0.43 0.372 0.814 1.103 0.814 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.322 0.216 0.694 0.824 0.576 4.765-1.588 8.199-6.082 8.199-11.385 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
