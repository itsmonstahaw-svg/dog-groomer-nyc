import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href: string };

// Visible breadcrumb trail. The last crumb is the current page.
export const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="text-sm text-gray-300">
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 justify-start">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={item.href} className="flex items-center gap-2">
            {isLast ? (
              <span aria-current="page" className="font-bold text-white">{item.name}</span>
            ) : (
              <a href={item.href} className="hover:text-white underline-offset-4 hover:underline transition-colors">{item.name}</a>
            )}
            {!isLast && <ChevronRight className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />}
          </li>
        );
      })}
    </ol>
  </nav>
);
