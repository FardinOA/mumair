import React from "react";

const SectionHeader = ({
    title,
    subtitle,
}: {
    title?: string;
    subtitle?: string;
}) => {
    return (
        <div>
            <h4 className="title text-center">{title}</h4>
            <p className="subtitle !text-center lg:max-w-[880px] mx-auto ">
                {subtitle}
            </p>
        </div>
    );
};

export default SectionHeader;
