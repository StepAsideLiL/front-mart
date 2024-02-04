"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationUi = ({
  pages,
  currentPage,
}: {
  pages: number;
  currentPage: number;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const pagesArr = Array.from({ length: pages }, (_, i) => i + 1);

  const handlePervious = (page: string | number) => {
    const params = new URLSearchParams(searchParams);

    if (currentPage !== 1) {
      params.set("page", page.toString());
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const handleNext = (page: string | number) => {
    const params = new URLSearchParams(searchParams);

    if (currentPage !== pages) {
      params.set("page", page.toString());
      replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <section className="py-10">
      <Pagination>
        <PaginationContent>
          <PaginationItem onClick={() => handlePervious(currentPage - 1)}>
            <PaginationPrevious href={``} />
          </PaginationItem>

          {/* When number of page is equal or less than 5 (page <= 5) */}
          {pages <= 5 &&
            pagesArr.map((list) => (
              <PaginationItem key={list}>
                <PaginationPage
                  page={list}
                  isActive={list === currentPage ? true : false}
                />
              </PaginationItem>
            ))}

          {/* When number of page are greater than 5 (page > 5) */}
          {pages > 5 && (
            <>
              <PaginationPage
                page={1}
                isActive={currentPage === 1 ? true : false}
              />

              {/* If current page is 4 or greater than 4 put an ellipsis. (currentPage >= 4) */}
              {currentPage >= 4 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* When number of pages is 6. (pages === 6 && currentPage <= 3) */}
              {pages === 6 ? (
                <>
                  {/* If current page is 3 or less then 3. (currentPage <= 3) */}
                  {currentPage <= 3 ? (
                    <>
                      <PaginationPage
                        page={2}
                        isActive={currentPage === 2 ? true : false}
                      />
                      <PaginationPage
                        page={3}
                        isActive={currentPage === 3 ? true : false}
                      />
                      <PaginationPage page={4} />
                    </>
                  ) : (
                    <>
                      <PaginationPage page={3} />
                      <PaginationPage
                        page={4}
                        isActive={currentPage === 4 ? true : false}
                      />
                      <PaginationPage
                        page={5}
                        isActive={currentPage === 5 ? true : false}
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  {/* If current page is 3 or less then 3. (currentPage <= 3) */}
                  {currentPage <= 3 ? (
                    <>
                      <PaginationPage
                        page={2}
                        isActive={currentPage === 2 ? true : false}
                      />
                      <PaginationPage
                        page={3}
                        isActive={currentPage === 3 ? true : false}
                      />
                      <PaginationPage page={4} />
                    </>
                  ) : (
                    <>
                      {currentPage >= pages - 2 ? (
                        <>
                          <PaginationPage page={pages - 3} />
                          <PaginationPage
                            page={pages - 2}
                            isActive={currentPage === pages - 2 ? true : false}
                          />
                          <PaginationPage
                            page={pages - 1}
                            isActive={currentPage === pages - 1 ? true : false}
                          />
                        </>
                      ) : (
                        <>
                          <PaginationPage page={currentPage - 1} />
                          <PaginationPage page={currentPage} isActive={true} />
                          <PaginationPage page={currentPage + 1} />
                        </>
                      )}
                    </>
                  )}
                </>
              )}

              {/* If current page is (pages - 3) or less than (pages - 3) put an ellipsis. (currentPage <= pages - 3) */}
              {currentPage <= pages - 3 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              <PaginationPage
                page={pages}
                isActive={currentPage === pages ? true : false}
              />
            </>
          )}

          <PaginationItem onClick={() => handleNext(currentPage + 1)}>
            <PaginationNext href={``} />
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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = (page: string | number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", page.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <PaginationItem onClick={() => handleClick(page)}>
      <PaginationLink href={``} isActive={isActive}>
        {page}
      </PaginationLink>
    </PaginationItem>
  );
};

export default PaginationUi;
