import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/DataTable";
import { icons } from "@/components/icons";
import { sentimentColumns } from "@/components/sentimentColumns";
import { type SentimentColumn } from "@/types/sentimentColums";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { set } from "react-hook-form";


export default function DashboardPage() { 

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page
  const [totalPages, setTotalPages] = useState(0); 
  
  
  //Function for changing page number
  const handlePageChange = (page: number) => { 
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    } else 
      setCurrentPage(1); 
  }

  const displayPage = () => {

    const pages = [];
    const maxPages = Math.ceil(sentimentData.length / itemsPerPage);

    for (let i = 1; i <= maxPages; i++) {
      pages.push(i);
    }
    return pages;

  }
  const itemsToDisplay = (sentimentData: SentimentColumn[]) => {
    if (sentimentData && sentimentData.length <= itemsPerPage) {
      return sentimentData;
    }
    else {
      const startIndex = (currentPage - 1) * itemsPerPage; //0
      const endIndex = startIndex + itemsPerPage;//3
      return sentimentData.slice(startIndex, endIndex);//(0,3) => [1,2]
    }
  }

    // Mock data for sentiment analysis
    const sentimentData: SentimentColumn[] = [
      {
        text: "ဒီ မျက်နှာသစ်ဆေးသုံးပီးထဲကမျက်နှာက ကြည်ပီး glow လာတာ တော်တော် အဆင်ပြေပီး ဈေးလဲ တော်တယ်ဈေးလဲ တော်တယ်",
        sentiment: "positive",
        confidence: 0.95,
      },
      {
        text: "ဒီခေါင်းလျှော်ရည်လေး ဘယ်မှာဝယ်လို့ရမလဲရှင့် ညွှန်းပေးပါအုံး",
        sentiment: "neutral",
        confidence: 0.45,
      },
      {
        text: "I hate waiting for updates.",
        sentiment: "negative",
        confidence: 0.85,
      },
      {
        text: "ဒီ ဈေးလဲ တော်တယ်ဈေးလဲ တော်တယ်",
        sentiment: "positive",
        confidence: 0.95,
      },
      {
        text: " ဘယ်မှာဝယ်လို့ရမလဲရှင့် ညွှန်းပေးပါအုံး",
        sentiment: "neutral",
        confidence: 0.45,
      },
      {
        text: "I hate waiting for updates.",
        sentiment: "negative",
        confidence: 0.85,
      },
      {
        text: " ဘယ်မှာဝယ်လို့ရမလဲရှင့် ညွှန်းပေးပါအုံး",
        sentiment: "neutral",
        confidence: 0.45,
      },
      {
        text: "I hate waiting for updates.",
        sentiment: "negative",
        confidence: 0.85,
      },
      {
        text: " ဘယ်မှာဝယ်လို့ရမလဲရှင့် ညွှန်းပေးပါအုံး",
        sentiment: "neutral",
        confidence: 0.45,
      },
      {
        text: "I hate waiting for updates.",
        sentiment: "negative",
        confidence: 0.85,
      },
      {
        text: " ဘယ်မှာဝယ်လို့ရမလဲရှင့် ညွှန်းပေးပါအုံး",
        sentiment: "neutral",
        confidence: 0.45,
      },
      {
        text: "I hate waiting for updates.",
        sentiment: "negative",
        confidence: 0.85,
      },
      {
        text: " ဘယ်မှာဝယ်လို့ရမလဲရှင့် ညွှန်းပေးပါအုံး",
        sentiment: "neutral",
        confidence: 0.45,
      },
      {
        text: "I hate waiting for updates.",
        sentiment: "negative",
        confidence: 0.85,
      },
      {
        text: " ဘယ်မှာဝယ်လို့ရမလဲရှင့် ညွှန်းပေးပါအုံး",
        sentiment: "neutral",
        confidence: 0.45,
      },
      {
        text: "I hate waiting for updates.",
        sentiment: "negative",
        confidence: 0.85,
      },
      {
        text: " ဘယ်မှာဝယ်လို့ရမလဲရှင့် ညွှန်းပေးပါအုံး",
        sentiment: "neutral",
        confidence: 0.45,
      },
      {
        text: "I hate waiting for updates.",
        sentiment: "negative",
        confidence: 0.85,
      },
      {
        text: " ဘယ်မှာဝယ်လို့ရမလဲရှင့် ညွှန်းပေးပါအုံး",
        sentiment: "neutral",
        confidence: 0.45,
      },
      {
        text: "I hate waiting for updates.",
        sentiment: "negative",
        confidence: 0.85,
      },
    ];


  const noCase =
    "<b>No results yet!</b><br> Upload a file or paste text in the 'File Upload' tab to see sentiment analysis results here</br > ";
    return (
      <>
        <div className="mx-3 py-5 flex justify-between">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Sentiment Dashboard
          </h2>
          <div>
            <Button className="bg-teal-700 text-white hover:bg-teal-600">
              <icons.export className="mr-2" />
              Export Data
            </Button>
            <Button
              variant="outline"
              className="outline text-teal-600 hover:bg-teal-600 hover:text-white ml-4"
            >
              <icons.loop className="mr-2" />
              Retrain Model
            </Button>
          </div>
        </div>
        <div>
          <DataTable
            columns={sentimentColumns}
            data={itemsToDisplay(sentimentData)}
            noCase={noCase}
          />
          <Pagination className="mt-5 flex justify-end">
            <PaginationContent className="flex">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={
                    currentPage == 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              
              {displayPage().map((page, index) => {
                return (
                  <PaginationItem>
                    <PaginationLink isActive={page == currentPage} href="#" key={index}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
             
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={
                    currentPage == totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </>
    );
}