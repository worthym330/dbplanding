"use client";

import { ArrowDownAZ, ArrowUpAZ } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PriceSortProps {
  sortOrder: "asc" | "desc" | "";
  onSort: (order: "asc" | "desc") => void;
}

export function PriceSort({ sortOrder, onSort }: PriceSortProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Button
          variant={sortOrder === "asc" ? "default" : "outline"}
          size="sm"
          onClick={() => onSort("asc")}
          className="flex items-center gap-2"
        >
          <ArrowUpAZ className="h-4 w-4" />
          Low to High
        </Button>
      </div>
    </div>
  );
}

// interface DistanceSortProps {
//   sortOrder: "asc" | "desc" | "";
//   onSort: (order: "asc" | "desc") => void;
// }

// export function DistanceSort({ sortOrder, onSort }: DistanceSortProps) {
//   return (
//     <div className="space-y-4">
//       <div className="flex gap-4">
//         <Button
//           variant={sortOrder === "asc" ? "default" : "outline"}
//           size="sm"
//           onClick={() => onSort("asc")}
//           className="flex items-center gap-2"
//         >
//           <ArrowUpAZ className="h-4 w-4" />
//           Near to Far
//         </Button>
//         <Button
//           variant={sortOrder === "desc" ? "default" : "outline"}
//           size="sm"
//           onClick={() => onSort("desc")}
//           className="flex items-center gap-2"
//         >
//           <ArrowDownAZ className="h-4 w-4" />
//           Far to Near
//         </Button>
//       </div>
//     </div>
//   );
// }

// interface DistanceRangeSortProps {
//   selectedRange: [number, number];
//   onRangeSelect: (range: [number, number]) => void;
// }

// const distanceRanges: [number, number][] = [
//   [0, 5],
//   [5, 10],
//   [10, 20],
//   [20, 50],
//   [50, 100],
//   [100, Infinity],
// ];

// export function DistanceRangeSort({
//   selectedRange,
//   onRangeSelect,
// }: DistanceRangeSortProps) {
//   return (
//     <div className="space-y-4">
//       <div className="flex gap-4 flex-wrap">
//         {distanceRanges.map((range, index) => (
//           <Button
//             key={index}
//             variant={
//               selectedRange[0] === range[0] && selectedRange[1] === range[1]
//                 ? "default"
//                 : "outline"
//             }
//             size="sm"
//             onClick={() => onRangeSelect(range)}
//           >
//             {range[0]} - {range[1] === Infinity ? "∞" : range[1]} miles
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// }

export function PremiumFilter({
  ispremium,
  setIspremium,
}: {
  ispremium: boolean | undefined;
  setIspremium: (value: boolean) => void;
}) {
  return (
    <div className="gap-4">
      <div className="flex flex-wrap gap-4 ">
        <Button
          variant={ispremium !== undefined && ispremium ? "default" : "outline"}
          size="sm"
          onClick={() => setIspremium(true)}
          className="flex items-center gap-2"
        >
          Premium
        </Button>
        <Button
          variant={
            ispremium !== undefined && !ispremium ? "default" : "outline"
          }
          size="sm"
          onClick={() => setIspremium(false)}
          className="flex items-center gap-2"
        >
          {/* <ArrowUpAZ className="h-4 w-4" /> */}
          Budget Friendly
        </Button>
      </div>
    </div>
  );
}
