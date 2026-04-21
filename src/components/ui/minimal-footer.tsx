import Link from 'next/link';
import {
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Twitter,
	Youtube,
  Landmark
} from 'lucide-react';

export function MinimalFooter() {
	const year = new Date().getFullYear();

	const company = [
		{
			title: 'About Us',
			href: '#',
		},
		{
			title: 'Branding',
			href: '#',
		},
		{
			title: 'Audience',
			href: '#audience',
		},
		{
			title: 'Privacy Policy',
			href: '/privacy',
		},
		{
			title: 'Terms of Service',
			href: '/terms',
		},
	];

	const resources = [
		{
			title: 'How It Works',
			href: '#how-it-works',
		},
		{
			title: 'Features',
			href: '#features',
		},
		{
			title: 'Smart Poles',
			href: '#pole-system',
		},
		{
			title: 'Deployment',
			href: '#deployment',
		},
		{
			title: 'FAQ',
			href: '#faq',
		},
	];

	const socialLinks = [
		{
			icon: <Facebook className="size-4" />,
			link: '#',
		},
		{
			icon: <Github className="size-4" />,
			link: '#',
		},
		{
			icon: <Instagram className="size-4" />,
			link: '#',
		},
		{
			icon: <Linkedin className="size-4" />,
			link: '#',
		},
		{
			icon: <Twitter className="size-4" />,
			link: '#',
		},
		{
			icon: <Youtube className="size-4" />,
			link: '#',
		},
	];
	return (
		<footer className="relative bg-background border-t">
			<div className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12">
					<div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-6">
						<Link href="/" className="flex items-center gap-2 group">
							<div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
								<Landmark className="size-6" />
							</div>
							<span className="font-bold text-2xl tracking-tight">Grave<span className="text-primary italic font-serif">Ledger</span></span>
						</Link>
						<p className="text-muted-foreground max-w-sm text-lg font-light leading-relaxed">
							Digitizing burial records through high-precision mapping and smart identification systems. Preserving the past for the future.
						</p>
						<div className="flex gap-3">
							{socialLinks.map((item, i) => (
								<a
									key={i}
									className="w-10 h-10 flex items-center justify-center rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
									target="_blank"
									href={item.link}
								>
									{item.icon}
								</a>
							))}
						</div>
					</div>
					
					<div className="col-span-1">
						<h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-6">Product</h4>
						<div className="flex flex-col gap-3">
							{resources.map(({ href, title }, i) => (
								<a
									key={i}
									className="text-muted-foreground hover:text-primary transition-colors font-light"
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>

					<div className="col-span-1">
						<h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-6">Company</h4>
						<div className="flex flex-col gap-3">
							{company.map(({ href, title }, i) => (
								<a
									key={i}
									className="text-muted-foreground hover:text-primary transition-colors font-light"
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>

					<div className="col-span-1">
						<h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-6">Legal</h4>
						<div className="flex flex-col gap-3">
							<a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors font-light">Privacy Policy</a>
							<a href="/terms" className="text-muted-foreground hover:text-primary transition-colors font-light">Terms of Service</a>
							<a href="/cookie" className="text-muted-foreground hover:text-primary transition-colors font-light">Cookie Settings</a>
						</div>
					</div>
				</div>
				
				<div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-muted-foreground text-sm font-light">
						© {year} GraveLedger Team. All rights reserved. Built with reverence and precision.
					</p>
					<div className="flex items-center gap-6 text-sm text-muted-foreground">
             <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Systems Operational
             </span>
					</div>
				</div>
			</div>
		</footer>
	);
}
