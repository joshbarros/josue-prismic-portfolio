"use client"

import { Content, isFilled } from "@prismicio/client"
import Link from "next/link";
import React from "react"
import { MdArrowOutward } from "react-icons/md";

type ContentListProps = {
  items: Content.BlogPostDocument[] | Content.ProjectDocument[] | Content.ServiceDocument[];
  contentType: Content.ContentIndexSlice["primary"]["content_type"];
  viewMoreText: Content.ContentIndexSlice["primary"]["view_more_text"];
}

export default function ContentList({
  items,
  contentType,
  viewMoreText = "Read More"
}: ContentListProps) {

  const urlPrefix = contentType === 'Blog' ? '/blog'
  : contentType === 'Project' ? '/projects'
  : contentType === 'Service' ? '/services'
  : [];

  return (
    <div>
      <ul className="grid border-b border-b-slate-100">
        {items.map((item, index) => (
        <>
          {isFilled.keyText(item.data.title) && (
            <li key={index} className="list-item opacity-0f">
              <Link
                href={urlPrefix + "/" + item.uid}
                className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
                aria-label={item.data.title}
              >
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">{item.data.title}</span>
                  <div className="flex gap-3 text-yellow-400">
                    {item.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                  {viewMoreText} <MdArrowOutward />
                </span>
              </Link>
            </li>
          )}
        </>
        ))}
      </ul>
    </div>
  )
}
