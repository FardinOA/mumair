import React from "react";
import { cn } from "./lib";
import { cva, type VariantProps } from "class-variance-authority";
const buttonVariants = cva(
    "  rounded-[5px] lg:text-[21px] lg:leading-[31.5px] lg:tracking-[3%] text-justify ",
    {
        variants: {
            variant: {
                default: "bg-primary text-white hover:bg-primary/90 ",
            },
            size: {
                default: "py-[6px] lg:py-[10px] px-[18px] lg:px-[32px]",
                icon: "py-[6px] px-[6px] lg:py-[10px] lg:px-[10px] ",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, variant, size, ...props }, ref) => {
        return (
            <button
                ref={ref}
                {...props}
                className={cn(buttonVariants({ variant, size, className }))}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
export default Button;
