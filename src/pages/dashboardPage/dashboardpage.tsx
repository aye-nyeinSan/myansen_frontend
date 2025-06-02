import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/DataTable";
import { icons } from "@/components/icons";
import { sentimentColumns } from "@/components/sentimentColumns";
import {type SentimentColumn} from "@/types/sentimentColums";


export default function DashboardPage() { 

    // Mock data for sentiment analysis
    const sentimentData: SentimentColumn[] = [
      { text: "I love this product!", sentiment: "positive", confidence: 0.95 },
      { text: "This is okay, not great.", sentiment: "neutral", confidence: 0.65 },
      { text: "I hate waiting for updates.", sentiment: "negative", confidence: 0.85 },
    ];
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
                <DataTable columns={sentimentColumns} data={sentimentData} />
        </div>
      </>
    );
}