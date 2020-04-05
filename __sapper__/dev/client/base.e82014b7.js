import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, b as detach_dev, c as claim_space, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.82a8a5d4.js';
import { d as destination, c as chapter } from './morocco.8502293d.js';

/* src/routes/base.svelte generated by Svelte v3.20.1 */
const file = "src/routes/base.svelte";

function create_fragment(ctx) {
	let section;
	let div2;
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
	let div5;
	let div4;
	let div3;
	let h1;
	let t4;
	let t5;
	let div7;
	let nav;
	let div6;
	let ul;
	let li0;
	let a1;
	let t6;
	let t7;
	let li1;
	let a2;
	let t8;
	let t9;
	let li2;
	let a3;
	let t10;
	let t11;
	let li3;
	let a4;
	let t12;
	let t13;
	let li4;
	let a5;
	let t14;

	const block = {
		c: function create() {
			section = element("section");
			div2 = element("div");
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
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");
			h1 = element("h1");
			t4 = text("Wanderlust");
			t5 = space();
			div7 = element("div");
			nav = element("nav");
			div6 = element("div");
			ul = element("ul");
			li0 = element("li");
			a1 = element("a");
			t6 = text("Home");
			t7 = space();
			li1 = element("li");
			a2 = element("a");
			t8 = text("Morocco");
			t9 = space();
			li2 = element("li");
			a3 = element("a");
			t10 = text("Istanbul");
			t11 = space();
			li3 = element("li");
			a4 = element("a");
			t12 = text("Russia");
			t13 = space();
			li4 = element("li");
			a5 = element("a");
			t14 = text("Peru");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div2 = claim_element(section_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			header = claim_element(div2_nodes, "HEADER", { class: true });
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
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div5 = claim_element(section_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h1 = claim_element(div3_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t4 = claim_text(h1_nodes, "Wanderlust");
			h1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			div7 = claim_element(section_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			nav = claim_element(div7_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			div6 = claim_element(nav_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			ul = claim_element(div6_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			a1 = claim_element(li0_nodes, "A", { class: true });
			var a1_nodes = children(a1);
			t6 = claim_text(a1_nodes, "Home");
			a1_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t7 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			a2 = claim_element(li1_nodes, "A", { class: true });
			var a2_nodes = children(a2);
			t8 = claim_text(a2_nodes, "Morocco");
			a2_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t9 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			a3 = claim_element(li2_nodes, "A", { class: true });
			var a3_nodes = children(a3);
			t10 = claim_text(a3_nodes, "Istanbul");
			a3_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t11 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			a4 = claim_element(li3_nodes, "A", { class: true });
			var a4_nodes = children(a4);
			t12 = claim_text(a4_nodes, "Russia");
			a4_nodes.forEach(detach_dev);
			li3_nodes.forEach(detach_dev);
			t13 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", {});
			var li4_nodes = children(li4);
			a5 = claim_element(li4_nodes, "A", { class: true });
			var a5_nodes = children(a5);
			t14 = claim_text(a5_nodes, "Peru");
			a5_nodes.forEach(detach_dev);
			li4_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "wanderlust.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logomark");
			attr_dev(img, "width", "112");
			attr_dev(img, "height", "28");
			add_location(img, file, 81, 12, 1645);
			attr_dev(a0, "class", "navbar-item svelte-y07oi4");
			add_location(a0, file, 80, 10, 1609);
			add_location(span0, file, 84, 12, 1814);
			add_location(span1, file, 85, 12, 1840);
			add_location(span2, file, 86, 12, 1866);
			attr_dev(span3, "class", "navbar-burger burger");
			attr_dev(span3, "data-target", "navbarMenuHeroC");
			add_location(span3, file, 83, 10, 1736);
			attr_dev(div0, "class", "navbar-brand is-hidden-tablet");
			add_location(div0, file, 79, 8, 1555);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 78, 6, 1523);
			attr_dev(header, "class", "navbar");
			add_location(header, file, 77, 4, 1493);
			attr_dev(div2, "class", "hero-head");
			add_location(div2, file, 76, 2, 1465);
			attr_dev(h1, "class", "title svelte-y07oi4");
			add_location(h1, file, 99, 8, 2116);
			attr_dev(div3, "class", "container has-text-centered");
			add_location(div3, file, 98, 6, 2066);
			attr_dev(div4, "class", "shoes hero-body svelte-y07oi4");
			add_location(div4, file, 97, 4, 2030);
			attr_dev(div5, "class", "hero-image svelte-y07oi4");
			add_location(div5, file, 96, 2, 2001);
			attr_dev(a1, "class", "svelte-y07oi4");
			add_location(a1, file, 111, 32, 2407);
			attr_dev(li0, "class", "is-active");
			add_location(li0, file, 111, 10, 2385);
			attr_dev(a2, "class", "svelte-y07oi4");
			add_location(a2, file, 112, 14, 2438);
			add_location(li1, file, 112, 10, 2434);
			attr_dev(a3, "class", "svelte-y07oi4");
			add_location(a3, file, 113, 14, 2472);
			add_location(li2, file, 113, 10, 2468);
			attr_dev(a4, "class", "svelte-y07oi4");
			add_location(a4, file, 114, 14, 2507);
			add_location(li3, file, 114, 10, 2503);
			attr_dev(a5, "class", "svelte-y07oi4");
			add_location(a5, file, 115, 14, 2540);
			add_location(li4, file, 115, 10, 2536);
			attr_dev(ul, "class", "svelte-y07oi4");
			add_location(ul, file, 110, 8, 2370);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 109, 6, 2338);
			attr_dev(nav, "class", "tabs is-fullwidth");
			add_location(nav, file, 108, 4, 2300);
			attr_dev(div7, "class", "hero-foot is-hidden-mobile svelte-y07oi4");
			add_location(div7, file, 107, 2, 2255);
			attr_dev(section, "class", "hero is-success is-fullheight svelte-y07oi4");
			add_location(section, file, 74, 0, 1371);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div2);
			append_dev(div2, header);
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
			append_dev(section, t3);
			append_dev(section, div5);
			append_dev(div5, div4);
			append_dev(div4, div3);
			append_dev(div3, h1);
			append_dev(h1, t4);
			append_dev(section, t5);
			append_dev(section, div7);
			append_dev(div7, nav);
			append_dev(nav, div6);
			append_dev(div6, ul);
			append_dev(ul, li0);
			append_dev(li0, a1);
			append_dev(a1, t6);
			append_dev(ul, t7);
			append_dev(ul, li1);
			append_dev(li1, a2);
			append_dev(a2, t8);
			append_dev(ul, t9);
			append_dev(ul, li2);
			append_dev(li2, a3);
			append_dev(a3, t10);
			append_dev(ul, t11);
			append_dev(ul, li3);
			append_dev(li3, a4);
			append_dev(a4, t12);
			append_dev(ul, t13);
			append_dev(ul, li4);
			append_dev(li4, a5);
			append_dev(a5, t14);
		},
		p: noop,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5lODIwMTRiNy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
