'use client'

import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation";
import { ReactNode } from "react"

interface AnimationLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
    className: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const AnimationLink = ({
    children,
    href,
    className,
    ...props
}: AnimationLinkProps ) => {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const body = document.querySelector('body');
        body?.classList.add('page-transition');

        await sleep(400)

        router.push(href);

        await sleep(400)

        body?.classList.remove('page-transition');
    }

  return (
    <Link 
    onClick={handleTransition}
    href={href} className={className} {...props}>{children}</Link>
  )
}

export default AnimationLink