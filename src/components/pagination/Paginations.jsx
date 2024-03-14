"use client";
import React, { useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Paginations({
    page,
    setPage,
    total,
    showRecord,
    setShowRecord,
    totalPages,
    allState,
}) {
    const lastPage = totalPages;
    const pagesToShow = 5;
    const generatePages = () => {
        const pages = [];
        if (lastPage <= pagesToShow) {
            for (let i = 1; i <= lastPage; i++) {
                pages.push(i);
            }
        } else {
            if (page <= pagesToShow - 1) {
                for (let i = 1; i <= pagesToShow; i++) {
                    pages.push(i);
                }
            } else if (page >= lastPage - pagesToShow + 1) {
                for (let i = lastPage - pagesToShow + 1; i <= lastPage; i++) {
                    pages.push(i);
                }
            } else {
                for (let i = page - 1; i <= page + 1; i++) {
                    pages.push(i);
                }
            }
            if (pages[0] !== 1) {
                pages.unshift("...");
            }
            if (pages[pages.length - 1] !== lastPage) {
                pages.push("...");
                pages.push("1246")
            }
        }
        return pages;
    };
    useEffect(() => {
        setPage(1);
    }, [showRecord]);

    return (
       
        <div className="md:flex  md:justify-between mb-5">
            {/* // <div className="flex justify-between"> */}
            <div className="flex justify-center md:justify-between">
                <div className="flex items-center my-4 md:my-0">
                    <div>
                        <select
                            className="border border-gray-500 py-2 px-2 rounded shadow text-sm"
                            value={showRecord}
                            onChange={(e) => setShowRecord(e.target.value)}
                        >
                            <option value={5}>5 Rows</option>
                            <option value={10}>10 Rows </option>
                            {allState && <option value={total}>All </option>}
                            {/* <option value="">All</option> */}
                        </select>
                    </div>

                    <div className="text-sm w-[100px] ml-2">
                       
                        per page
                    </div>

                </div>

            </div>
            <div className="flex justify-center items-center overflow-y-auto overflow-scroll">
                <span>
                    <MdOutlineKeyboardDoubleArrowLeft
                        onClick={() => {
                            setPage(1);
                        }}
                        className="cursor-pointer"
                        size={25}
                    />
                </span>
                <span>
                    <MdOutlineKeyboardArrowLeft
                        size={25}
                        className={`cursor-pointer${page === 1 ? "disabled-button" : ""}`}
                        onClick={() => {
                            if (page > 1) {
                                setPage(page - 1);
                            }
                        }}
                        disabled={page === 1}
                    />
                </span>
                {generatePages()?.map((pageNumber, index) => (
                    <button
                        key={index}
                        // disabled={page === lastPage}
                        className={`relative ${page === pageNumber
                            ? "z-10  text-black"
                            : "text-zinc-300"
                            } inline-flex items-center px-2 rounded-full mx-1 py-1 text-sm font-semibold`}
                        onClick={() => {
                            if (typeof pageNumber === "number") {
                                setPage(pageNumber);
                            }
                        }}
                    >
                        {pageNumber}
                    </button>
                ))}
                <span
                    onClick={() => {
                        if (page < lastPage) {
                            setPage(page + 1);
                        }
                    }}
                    disabled={page === lastPage}
                >
                    <MdOutlineKeyboardArrowRight className="cursor-pointer" size={25} />
                </span>
                <span>
                    <MdOutlineKeyboardDoubleArrowRight
                        onClick={() => {
                            setPage(totalPages);
                        }}
                        className="cursor-pointer "
                        size={25}
                    />
                </span>
            </div>
        </div>
    );
}
