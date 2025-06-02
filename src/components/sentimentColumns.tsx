import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { type SentimentColumn } from "@/types/sentimentColums";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "./ui/badge";


export const sentimentColumns: ColumnDef<SentimentColumn>[] = [
  {
    accessorKey: "text",
    header: "Text",
  },
  {
    accessorKey: "sentiment",
    header: "Sentiment",
      cell: ({ row }) => {
          const sentiment: string = row.getValue("sentiment") as string;
          // Determine the sentiment color
          let positive = "text-green-500";
          let negative = "text-red-500";
          let neutral = "text-yellow-500";
          let sentimentClass = "";
            if (sentiment === "positive") {
                sentimentClass = positive;
            } else if (sentiment === "negative") {
                sentimentClass = negative;
            } else if (sentiment === "neutral") {
                sentimentClass = neutral;
            }

      return <span className={sentimentClass}>{sentiment}</span>;
    },
  },
  {
    accessorKey: "confidence",
    header: "Confidence",
    cell: ({ row }) => {
        const confidence: number = row.getValue("confidence") as number;
        return <Badge variant={"secondary"} className="hover:cursor-default">{confidence}</Badge>;
    },
  },
  {
    id: "feedback",
    header: "Feedback",
    cell: ({ row }) => {


        return (
          <div className="inline-block">
    
              <RadioGroup defaultValue="positive" className="flex flex-row mb-3">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="positive" id="r1" />
                  <Label htmlFor="r1">Positive</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="neutral" id="r2" />
                  <Label htmlFor="r2">Neutral</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="negative" id="r3" />
                  <Label htmlFor="r3">Negative</Label>
                </div>
              </RadioGroup>
            
            <Button
                variant="default"
                disabled={false}
              onClick={() => alert("Feedback submitted!")}
              className=" bg-teal-600  text-white hover:bg-teal-700 px-0 cursor-pointer px-3 "
            >
              Submit Feedback
            </Button>
          </div>
        );
    },
  },
];
