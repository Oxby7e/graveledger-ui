'use client';
import React from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { Scroll, ArrowRight } from 'lucide-react';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(20);

	const links = [
		{ label: 'Problem', href: '#' },
		{ label: 'How It Works', href: '#how-it-works' },
		{ label: 'Features', href: '#features' },
		{ label: 'Smart Poles', href: '#pole-system' },
		{ label: 'Deployment', href: '#deployment' },
	];

	React.useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	}, [open]);

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
				scrolled && !open
					? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm shadow-black/5'
					: 'bg-transparent',
			)}
		>
			<nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
				{/* Wordmark */}
				<WordmarkIcon />

				{/* Desktop nav */}
				<div className="hidden items-center gap-1 md:flex">
					{links.map((link, i) => (
						<a
							key={i}
							href={link.href}
							className={cn(
								buttonVariants({ variant: 'ghost' }),
								'text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full px-4',
							)}
						>
							{link.label}
						</a>
					))}
				</div>

				{/* Desktop CTA */}
				<div className="hidden md:flex items-center gap-3">
					<Button variant="ghost" className="rounded-full text-sm">
						Sign In
					</Button>
					<Button className="rounded-full text-sm gap-2 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-shadow">
						Get Started
						<ArrowRight className="w-3.5 h-3.5" />
					</Button>
				</div>

				{/* Mobile hamburger */}
				<Button
					size="icon"
					variant="ghost"
					onClick={() => setOpen(!open)}
					className="md:hidden rounded-xl"
					id="mobile-menu-toggle"
				>
					<MenuToggleIcon open={open} className="size-5" duration={280} />
				</Button>
			</nav>

			{/* Mobile drawer */}
			<div
				className={cn(
					'fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl border-t border-border/50 md:hidden transition-all duration-300',
					open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none',
				)}
			>
				<div className="flex h-full flex-col justify-between gap-4 p-6">
					<div className="grid gap-1">
						{links.map((link) => (
							<a
								key={link.label}
								href={link.href}
								onClick={() => setOpen(false)}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-base h-12 rounded-xl',
								})}
							>
								{link.label}
							</a>
						))}
					</div>
					<div className="flex flex-col gap-3 pb-8">
						<Button variant="outline" className="w-full h-12 rounded-xl text-base">
							Sign In
						</Button>
						<Button className="w-full h-12 rounded-xl text-base gap-2">
							Get Started
							<ArrowRight className="w-4 h-4" />
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}

export const WordmarkIcon = (props: React.ComponentProps<'div'>) => (
	<Link href="/" className={cn('flex items-center gap-2.5 group', props.className)}>
		<div className="relative w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
			<Scroll className="h-4 w-4 text-primary-foreground" />
		</div>
		<span className="text-lg font-black tracking-tight text-foreground">
			Grave<span className="text-primary">Ledger</span>
		</span>
	</Link>
);
