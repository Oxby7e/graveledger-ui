import Link from 'next/link';
import { Scroll, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export function MinimalFooter() {
	const year = new Date().getFullYear();

	const product = [
		{ title: 'How It Works', href: '#how-it-works' },
		{ title: 'Smart Poles', href: '#pole-system' },
		{ title: 'Features', href: '#features' },
		{ title: 'Deployment', href: '#deployment' },
		{ title: 'FAQ', href: '#faq' },
	];

	const company = [
		{ title: 'About Us', href: '#' },
		{ title: 'Audience', href: '#audience' },
		{ title: 'Privacy Policy', href: '/privacy' },
		{ title: 'Terms of Service', href: '/terms' },
	];

	const socialLinks = [
		{ icon: <Github className="size-4" />, link: '#', label: 'GitHub' },
		{ icon: <Linkedin className="size-4" />, link: '#', label: 'LinkedIn' },
		{ icon: <Twitter className="size-4" />, link: '#', label: 'Twitter' },
	];

	return (
		<footer className="relative bg-card border-t border-border/50 overflow-hidden">
			{/* Background detail */}
			<div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />

			<div className="container mx-auto px-4 py-16 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
					{/* Brand column */}
					<div className="col-span-1 md:col-span-5 flex flex-col gap-6">
						<Link href="/" className="flex items-center gap-2.5 group w-fit">
							<div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
								<Scroll className="size-5" />
							</div>
							<span className="font-black text-xl tracking-tight">
								Grave<span className="text-primary">Ledger</span>
							</span>
						</Link>

						<p className="text-foreground font-light leading-relaxed max-w-sm text-sm">
							Digitizing cemetery infrastructure through high-precision mapping
							and smart physical identification. Every grave, identified.
							Every record, preserved.
						</p>

						{/* Social links */}
						<div className="flex gap-2.5">
							{socialLinks.map((item, i) => (
								<a
									key={i}
									href={item.link}
									aria-label={item.label}
									className="w-9 h-9 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
								>
									{item.icon}
								</a>
							))}
						</div>

						{/* CTA row */}
						<div className="pt-2">
							<a
								href="#"
								className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/25 bg-primary/5 rounded-full px-5 py-2.5 hover:bg-primary/10 transition-colors group"
							>
								Request a Demo
								<ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
							</a>
						</div>
					</div>

					{/* Links columns */}
					<div className="col-span-1 md:col-span-3 md:col-start-7">
						<h4 className="font-bold text-xs uppercase tracking-widest text-foreground mb-5">
							Product
						</h4>
						<div className="flex flex-col gap-3">
							{product.map(({ href, title }, i) => (
								<a
									key={i}
									href={href}
									className="text-sm text-foreground/80 hover:text-foreground transition-colors font-light"
								>
									{title}
								</a>
							))}
						</div>
					</div>

					<div className="col-span-1 md:col-span-3">
						<h4 className="font-bold text-xs uppercase tracking-widest text-foreground mb-5">
							Company
						</h4>
						<div className="flex flex-col gap-3">
							{company.map(({ href, title }, i) => (
								<a
									key={i}
									href={href}
									className="text-sm text-foreground/80 hover:text-foreground transition-colors font-light"
								>
									{title}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-xs text-muted-foreground font-light">
						© {year} GraveLedger. Built with reverence and precision.
					</p>
					<div className="flex items-center gap-2 text-xs text-muted-foreground">
						<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
						<span>All systems operational</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
