"use client";

import { useState } from "react";
import { ArrowDownAZ, ArrowUpAZ, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface PriceSortProps {
    sortOrder: "asc" | "desc" | "";
    onSort: (order: "asc" | "desc") => void;
}

export function PriceSort({ sortOrder, onSort }: PriceSortProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="space-y-4">
            {/* <Label>Sort by Price</Label> */}
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                        {sortOrder === "asc" ? <ArrowUpAZ className="h-4 w-4" /> : <ArrowDownAZ className="h-4 w-4" />}
                        {sortOrder === "asc" ? "Low to High" : "High to Low"}
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => onSort("asc")}>
                        <ArrowUpAZ className="h-4 w-4 mr-2" />
                        Low to High
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onSort("desc")}>
                        <ArrowDownAZ className="h-4 w-4 mr-2" />
                        High to Low
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
interface DistanceSortProps {
    sortOrder: "asc" | "desc" | "";
    onSort: (order: "asc" | "desc") => void;
}

export function DistanceSort({ sortOrder, onSort }: DistanceSortProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="space-y-4">
            {/* <Label>Sort by Distance</Label> */}
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                        {sortOrder === "asc" ? <ArrowUpAZ className="h-4 w-4" /> : <ArrowDownAZ className="h-4 w-4" />}
                        {sortOrder === "asc" ? "Near to Far" : "Far to Near"}
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => onSort("asc")}>
                        <ArrowUpAZ className="h-4 w-4 mr-2" />
                        Near to Far
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onSort("desc")}>
                        <ArrowDownAZ className="h-4 w-4 mr-2" />
                        Far to Near
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
interface DistanceRangeSortProps {
    selectedRange: [number, number];
    onRangeSelect: (range: [number, number]) => void;
}

const distanceRanges: [number, number][] = [
    [0, 5],
    [5, 10],
    [10, 20],
    [20, 50],
    [50, 100],
    [100, Infinity],
];

export function DistanceRangeSort({ selectedRange, onRangeSelect }: DistanceRangeSortProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="space-y-4">
            {/* <Label>Sort by Distance Range</Label> */}
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                        {selectedRange[0]} - {selectedRange[1] === Infinity ? "∞" : selectedRange[1]} km
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {distanceRanges.map((range, index) => (
                        <DropdownMenuItem key={index} onClick={() => onRangeSelect(range)}>
                            {range[0]} - {range[1] === Infinity ? "∞" : range[1]} km
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}