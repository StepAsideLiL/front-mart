"use client";

import { useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ShopPagination = ({
  pages,
  currentPage,
}: {
  pages: number;
  currentPage: number;
}) => {
  const searchParams = useSearchParams();
  console.log(searchParams.get("page"));
  console.log("pages =>", pages);

  const pagesArr = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <section className="py-10">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`/shop?page=${currentPage !== 1 ? currentPage - 1 : 1}`}
            />
          </PaginationItem>

          <PaginationPage
            page={1}
            isActive={currentPage === 1 ? true : false}
          />

          {/* {pages > 6 && currentPage >= 4 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {pages > 6 && (
            <>
              <PaginationPage
                page={currentPage < 4 ? 2 : currentPage - 1}
                isActive={currentPage === 1 ? true : false}
              />

              <PaginationPage
                page={1}
                isActive={currentPage === 1 ? true : false}
              />

              <PaginationPage
                page={1}
                isActive={currentPage === 1 ? true : false}
              />
            </>
          )}

          {pagesArr.map((list) => (
            <PaginationItem key={list}>
              <PaginationLink
                href={`/shop?page=${list}`}
                isActive={list === currentPage ? true : false}
              >
                {list}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}

          <PaginationPage
            page={pages}
            isActive={currentPage === pages ? true : false}
          />

          <PaginationItem>
            <PaginationNext
              href={`/shop?page=${
                currentPage !== pages ? currentPage + 1 : pages
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

const PaginationPage = ({
  page,
  isActive,
}: {
  page: string | number;
  isActive?: boolean;
}) => {
  return (
    <PaginationItem>
      <PaginationLink href={`/shop?page=${page}`} isActive={isActive}>
        {page}
      </PaginationLink>
    </PaginationItem>
  );
};

export default ShopPagination;
