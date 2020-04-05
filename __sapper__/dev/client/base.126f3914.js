import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, b as detach_dev, c as claim_space, h as claim_text, j as attr_dev, k as add_location, F as toggle_class, l as insert_dev, m as append_dev, n as noop } from './client.9e78c822.js';
import { d as destination, c as chapter } from './morocco.8502293d.js';

/* src/routes/base.svelte generated by Svelte v3.20.1 */
const file = "src/routes/base.svelte";

function create_fragment(ctx) {
	let section;
	let div11;
	let header;
	let div1;
	let div0;
	let a0;
	let img;
	let img_src_value;
	let t0;
	let span3;
	let span0;
	let t1;
	let span1;
	let t2;
	let span2;
	let t3;
	let div10;
	let div2;
	let t4;
	let div9;
	let div8;
	let div7;
	let div3;
	let a1;
	let t5;
	let t6;
	let div4;
	let a2;
	let t7;
	let t8;
	let div5;
	let a3;
	let t9;
	let t10;
	let div6;
	let a4;
	let t11;
	let t12;
	let button;
	let t13;
	let div14;
	let div13;
	let div12;
	let h1;
	let t14;
	let t15;
	let div16;
	let nav;
	let div15;
	let ul;
	let li0;
	let a5;
	let t16;
	let t17;
	let li1;
	let a6;
	let t18;
	let t19;
	let li2;
	let a7;
	let t20;
	let t21;
	let li3;
	let a8;
	let t22;
	let t23;
	let li4;
	let a9;
	let t24;

	const block = {
		c: function create() {
			section = element("section");
			div11 = element("div");
			header = element("header");
			div1 = element("div");
			div0 = element("div");
			a0 = element("a");
			img = element("img");
			t0 = space();
			span3 = element("span");
			span0 = element("span");
			t1 = space();
			span1 = element("span");
			t2 = space();
			span2 = element("span");
			t3 = space();
			div10 = element("div");
			div2 = element("div");
			t4 = space();
			div9 = element("div");
			div8 = element("div");
			div7 = element("div");
			div3 = element("div");
			a1 = element("a");
			t5 = text("Morocco");
			t6 = space();
			div4 = element("div");
			a2 = element("a");
			t7 = text("Istanbul");
			t8 = space();
			div5 = element("div");
			a3 = element("a");
			t9 = text("Peru");
			t10 = space();
			div6 = element("div");
			a4 = element("a");
			t11 = text("Russia");
			t12 = space();
			button = element("button");
			t13 = space();
			div14 = element("div");
			div13 = element("div");
			div12 = element("div");
			h1 = element("h1");
			t14 = text("Wanderlust");
			t15 = space();
			div16 = element("div");
			nav = element("nav");
			div15 = element("div");
			ul = element("ul");
			li0 = element("li");
			a5 = element("a");
			t16 = text("Home");
			t17 = space();
			li1 = element("li");
			a6 = element("a");
			t18 = text("Morocco");
			t19 = space();
			li2 = element("li");
			a7 = element("a");
			t20 = text("Istanbul");
			t21 = space();
			li3 = element("li");
			a8 = element("a");
			t22 = text("Russia");
			t23 = space();
			li4 = element("li");
			a9 = element("a");
			t24 = text("Peru");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div11 = claim_element(section_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			header = claim_element(div11_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			div1 = claim_element(header_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			a0 = claim_element(div0_nodes, "A", { class: true });
			var a0_nodes = children(a0);

			img = claim_element(a0_nodes, "IMG", {
				src: true,
				alt: true,
				width: true,
				height: true
			});

			a0_nodes.forEach(detach_dev);
			t0 = claim_space(div0_nodes);
			span3 = claim_element(div0_nodes, "SPAN", { class: true, "data-target": true });
			var span3_nodes = children(span3);
			span0 = claim_element(span3_nodes, "SPAN", {});
			children(span0).forEach(detach_dev);
			t1 = claim_space(span3_nodes);
			span1 = claim_element(span3_nodes, "SPAN", {});
			children(span1).forEach(detach_dev);
			t2 = claim_space(span3_nodes);
			span2 = claim_element(span3_nodes, "SPAN", {});
			children(span2).forEach(detach_dev);
			span3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t3 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div2 = claim_element(div10_nodes, "DIV", { class: true });
			children(div2).forEach(detach_dev);
			t4 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div3 = claim_element(div7_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			a1 = claim_element(div3_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t5 = claim_text(a1_nodes, "Morocco");
			a1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t6 = claim_space(div7_nodes);
			div4 = claim_element(div7_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			a2 = claim_element(div4_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t7 = claim_text(a2_nodes, "Istanbul");
			a2_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t8 = claim_space(div7_nodes);
			div5 = claim_element(div7_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			a3 = claim_element(div5_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);
			t9 = claim_text(a3_nodes, "Peru");
			a3_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t10 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			a4 = claim_element(div6_nodes, "A", { href: true, class: true });
			var a4_nodes = children(a4);
			t11 = claim_text(a4_nodes, "Russia");
			a4_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			t12 = claim_space(div9_nodes);
			button = claim_element(div9_nodes, "BUTTON", { class: true, "aria-label": true });
			children(button).forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			t13 = claim_space(section_nodes);
			div14 = claim_element(section_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			h1 = claim_element(div12_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t14 = claim_text(h1_nodes, "Wanderlust");
			h1_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			t15 = claim_space(section_nodes);
			div16 = claim_element(section_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			nav = claim_element(div16_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			div15 = claim_element(nav_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			ul = claim_element(div15_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			a5 = claim_element(li0_nodes, "A", { class: true });
			var a5_nodes = children(a5);
			t16 = claim_text(a5_nodes, "Home");
			a5_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t17 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			a6 = claim_element(li1_nodes, "A", { href: true, class: true });
			var a6_nodes = children(a6);
			t18 = claim_text(a6_nodes, "Morocco");
			a6_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t19 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			a7 = claim_element(li2_nodes, "A", { href: true, class: true });
			var a7_nodes = children(a7);
			t20 = claim_text(a7_nodes, "Istanbul");
			a7_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t21 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			a8 = claim_element(li3_nodes, "A", { href: true, class: true });
			var a8_nodes = children(a8);
			t22 = claim_text(a8_nodes, "Russia");
			a8_nodes.forEach(detach_dev);
			li3_nodes.forEach(detach_dev);
			t23 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", {});
			var li4_nodes = children(li4);
			a9 = claim_element(li4_nodes, "A", { href: true, class: true });
			var a9_nodes = children(a9);
			t24 = claim_text(a9_nodes, "Peru");
			a9_nodes.forEach(detach_dev);
			li4_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div15_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			div16_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "wanderlust.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logomark");
			attr_dev(img, "width", "112");
			attr_dev(img, "height", "28");
			add_location(img, file, 84, 12, 1837);
			attr_dev(a0, "class", "navbar-item svelte-10nssdk");
			add_location(a0, file, 83, 10, 1801);
			add_location(span0, file, 87, 12, 2006);
			add_location(span1, file, 88, 12, 2032);
			add_location(span2, file, 89, 12, 2058);
			attr_dev(span3, "class", "navbar-burger burger svelte-10nssdk");
			attr_dev(span3, "data-target", "navbarMenuHeroC");
			add_location(span3, file, 86, 10, 1928);
			attr_dev(div0, "class", "navbar-brand is-hidden-tablet svelte-10nssdk");
			add_location(div0, file, 82, 8, 1747);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 81, 6, 1715);
			attr_dev(header, "class", "navbar");
			add_location(header, file, 80, 4, 1685);
			attr_dev(div2, "class", "modal-background");
			add_location(div2, file, 98, 10, 2218);
			attr_dev(a1, "href", "pages/morocco.html");
			attr_dev(a1, "class", "svelte-10nssdk");
			add_location(a1, file, 103, 20, 2444);
			attr_dev(div3, "class", "column");
			add_location(div3, file, 102, 18, 2403);
			attr_dev(a2, "href", "pages/morocco.html");
			attr_dev(a2, "class", "svelte-10nssdk");
			add_location(a2, file, 106, 20, 2569);
			attr_dev(div4, "class", "column");
			add_location(div4, file, 105, 18, 2528);
			attr_dev(a3, "href", "pages/morocco.html");
			attr_dev(a3, "class", "svelte-10nssdk");
			add_location(a3, file, 109, 20, 2695);
			attr_dev(div5, "class", "column");
			add_location(div5, file, 108, 18, 2654);
			attr_dev(a4, "href", "pages/morocco.html");
			attr_dev(a4, "class", "svelte-10nssdk");
			add_location(a4, file, 112, 20, 2817);
			attr_dev(div6, "class", "column");
			add_location(div6, file, 111, 18, 2776);
			attr_dev(div7, "class", "columns has-text-centered");
			add_location(div7, file, 101, 16, 2345);
			attr_dev(div8, "class", "container");
			add_location(div8, file, 100, 12, 2305);
			attr_dev(button, "class", "modal-close is-large");
			attr_dev(button, "aria-label", "close");
			add_location(button, file, 116, 14, 2940);
			attr_dev(div9, "class", "modal-content");
			add_location(div9, file, 99, 10, 2265);
			attr_dev(div10, "class", "modal is-clipped");
			toggle_class(div10, "is-active", is-active);
			add_location(div10, file, 97, 8, 2161);
			attr_dev(div11, "class", "hero-head");
			add_location(div11, file, 79, 2, 1657);
			attr_dev(h1, "class", "svelte-10nssdk");
			add_location(h1, file, 127, 8, 3200);
			attr_dev(div12, "class", "container");
			add_location(div12, file, 126, 6, 3168);
			attr_dev(div13, "class", "shoes hero-body svelte-10nssdk");
			add_location(div13, file, 125, 4, 3132);
			attr_dev(div14, "class", "hero-image svelte-10nssdk");
			add_location(div14, file, 124, 2, 3103);
			attr_dev(a5, "class", "svelte-10nssdk");
			add_location(a5, file, 137, 32, 3457);
			attr_dev(li0, "class", "is-active");
			add_location(li0, file, 137, 10, 3435);
			attr_dev(a6, "href", "travel");
			attr_dev(a6, "class", "svelte-10nssdk");
			add_location(a6, file, 138, 14, 3488);
			add_location(li1, file, 138, 10, 3484);
			attr_dev(a7, "href", "travel");
			attr_dev(a7, "class", "svelte-10nssdk");
			add_location(a7, file, 139, 14, 3536);
			add_location(li2, file, 139, 10, 3532);
			attr_dev(a8, "href", "travel");
			attr_dev(a8, "class", "svelte-10nssdk");
			add_location(a8, file, 140, 14, 3585);
			add_location(li3, file, 140, 10, 3581);
			attr_dev(a9, "href", "travel");
			attr_dev(a9, "class", "svelte-10nssdk");
			add_location(a9, file, 141, 14, 3632);
			add_location(li4, file, 141, 10, 3628);
			attr_dev(ul, "class", "svelte-10nssdk");
			add_location(ul, file, 136, 8, 3420);
			attr_dev(div15, "class", "container");
			add_location(div15, file, 135, 6, 3388);
			attr_dev(nav, "class", "tabs is-fullwidth");
			add_location(nav, file, 134, 4, 3350);
			attr_dev(div16, "class", "hero-foot is-hidden-mobile svelte-10nssdk");
			add_location(div16, file, 133, 2, 3305);
			attr_dev(section, "class", "hero is-success is-fullheight svelte-10nssdk");
			add_location(section, file, 77, 0, 1563);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div11);
			append_dev(div11, header);
			append_dev(header, div1);
			append_dev(div1, div0);
			append_dev(div0, a0);
			append_dev(a0, img);
			append_dev(div0, t0);
			append_dev(div0, span3);
			append_dev(span3, span0);
			append_dev(span3, t1);
			append_dev(span3, span1);
			append_dev(span3, t2);
			append_dev(span3, span2);
			append_dev(div11, t3);
			append_dev(div11, div10);
			append_dev(div10, div2);
			append_dev(div10, t4);
			append_dev(div10, div9);
			append_dev(div9, div8);
			append_dev(div8, div7);
			append_dev(div7, div3);
			append_dev(div3, a1);
			append_dev(a1, t5);
			append_dev(div7, t6);
			append_dev(div7, div4);
			append_dev(div4, a2);
			append_dev(a2, t7);
			append_dev(div7, t8);
			append_dev(div7, div5);
			append_dev(div5, a3);
			append_dev(a3, t9);
			append_dev(div7, t10);
			append_dev(div7, div6);
			append_dev(div6, a4);
			append_dev(a4, t11);
			append_dev(div9, t12);
			append_dev(div9, button);
			append_dev(section, t13);
			append_dev(section, div14);
			append_dev(div14, div13);
			append_dev(div13, div12);
			append_dev(div12, h1);
			append_dev(h1, t14);
			append_dev(section, t15);
			append_dev(section, div16);
			append_dev(div16, nav);
			append_dev(nav, div15);
			append_dev(div15, ul);
			append_dev(ul, li0);
			append_dev(li0, a5);
			append_dev(a5, t16);
			append_dev(ul, t17);
			append_dev(ul, li1);
			append_dev(li1, a6);
			append_dev(a6, t18);
			append_dev(ul, t19);
			append_dev(ul, li2);
			append_dev(li2, a7);
			append_dev(a7, t20);
			append_dev(ul, t21);
			append_dev(ul, li3);
			append_dev(li3, a8);
			append_dev(a8, t22);
			append_dev(ul, t23);
			append_dev(ul, li4);
			append_dev(li4, a9);
			append_dev(a9, t24);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*is-active*/ 0) {
				toggle_class(div10, "is-active", is-active);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Base> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Base", $$slots, []);
	$$self.$capture_state = () => ({ destination, chapter });
	return [];
}

class Base extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Base",
			options,
			id: create_fragment.name
		});
	}
}

export default Base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS4xMjZmMzkxNC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
