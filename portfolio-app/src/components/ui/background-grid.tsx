"use client"
import React from 'react';

export function BackgroundGrid() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Radial Mask for "Uneven/Shadowy" effect */}
            {/* We use a mask that makes the center visible and fades out towards edges, or vice versa. 
            User said "shadowy... showing on some parts".
            Let's make spots of visibility.
        */}
            <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,black)]"></div>
            {/* Wait, standard approach is: Grid is everywhere, Mask hides it. 
            If I want grid to SHOW only in some parts (like a spotlight), I use black (visible) in mask.
            radial-gradient(black, transparent) -> Center visible, edges hidden.
        */}

            <div className="absolute inset-0 bg-background/90 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,transparent_20%,black)]">
                {/* This layer sits ON TOP of grid to fade it out? No. */}
            </div>
        </div>
    )
}

// Improved version based on "Uneven grid... on some parts"
export function UnevenGridBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base Grid */}
            <div className="absolute inset-0 h-full w-full bg-background dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            {/* Secondary "Shadowy" patches */}
            <div className="absolute top-0 left-0 w-full h-full bg-transparent">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>
        </div>
    )
}
