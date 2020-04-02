import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, b as detach_dev, c as claim_space, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.3875ca26.js';

/* src/components/Truman.svelte generated by Svelte v3.20.1 */

const file = "src/components/Truman.svelte";

function create_fragment(ctx) {
	let div4;
	let nav;
	let div0;
	let a0;
	let img;
	let img_src_value;
	let t0;
	let a1;
	let span0;
	let t1;
	let span1;
	let t2;
	let span2;
	let t3;
	let div3;
	let div2;
	let div1;
	let a2;
	let t4;
	let t5;
	let a3;
	let t6;
	let t7;
	let a4;
	let t8;
	let t9;
	let a5;
	let t10;

	const block = {
		c: function create() {
			div4 = element("div");
			nav = element("nav");
			div0 = element("div");
			a0 = element("a");
			img = element("img");
			t0 = space();
			a1 = element("a");
			span0 = element("span");
			t1 = space();
			span1 = element("span");
			t2 = space();
			span2 = element("span");
			t3 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			a2 = element("a");
			t4 = text("Morocco");
			t5 = space();
			a3 = element("a");
			t6 = text("Istanbul");
			t7 = space();
			a4 = element("a");
			t8 = text("Peru");
			t9 = space();
			a5 = element("a");
			t10 = text("Russia");
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			nav = claim_element(div4_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			div0 = claim_element(nav_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			a0 = claim_element(div0_nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);

			img = claim_element(a0_nodes, "IMG", {
				alt: true,
				src: true,
				width: true,
				height: true
			});

			a0_nodes.forEach(detach_dev);
			t0 = claim_space(div0_nodes);

			a1 = claim_element(div0_nodes, "A", {
				role: true,
				class: true,
				"aria-label": true,
				"aria-expanded": true
			});

			var a1_nodes = children(a1);
			span0 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			children(span0).forEach(detach_dev);
			t1 = claim_space(a1_nodes);
			span1 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			children(span1).forEach(detach_dev);
			t2 = claim_space(a1_nodes);
			span2 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			children(span2).forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(nav_nodes);
			div3 = claim_element(nav_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a2 = claim_element(div1_nodes, "A", { class: true, href: true });
			var a2_nodes = children(a2);
			t4 = claim_text(a2_nodes, "Morocco");
			a2_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			a3 = claim_element(div1_nodes, "A", { class: true, href: true });
			var a3_nodes = children(a3);
			t6 = claim_text(a3_nodes, "Istanbul");
			a3_nodes.forEach(detach_dev);
			t7 = claim_space(div1_nodes);
			a4 = claim_element(div1_nodes, "A", { class: true, href: true });
			var a4_nodes = children(a4);
			t8 = claim_text(a4_nodes, "Peru");
			a4_nodes.forEach(detach_dev);
			t9 = claim_space(div1_nodes);
			a5 = claim_element(div1_nodes, "A", { class: true, href: true });
			var a5_nodes = children(a5);
			t10 = claim_text(a5_nodes, "Russia");
			a5_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "alt", "logomark");
			if (img.src !== (img_src_value = "../wanderlust-white.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "width", "112");
			attr_dev(img, "height", "28");
			add_location(img, file, 4, 8, 154);
			attr_dev(a0, "class", "navbar-item");
			attr_dev(a0, "href", "shoes");
			add_location(a0, file, 3, 6, 109);
			attr_dev(span0, "aria-hidden", "true");
			add_location(span0, file, 7, 8, 352);
			attr_dev(span1, "aria-hidden", "true");
			add_location(span1, file, 8, 8, 393);
			attr_dev(span2, "aria-hidden", "true");
			add_location(span2, file, 9, 8, 434);
			attr_dev(a1, "role", "button");
			attr_dev(a1, "class", "navbar-burger is-hidden-tablet");
			attr_dev(a1, "aria-label", "menu");
			attr_dev(a1, "aria-expanded", "false");
			add_location(a1, file, 6, 6, 247);
			attr_dev(div0, "class", "navbar-brand");
			add_location(div0, file, 2, 4, 76);
			attr_dev(a2, "class", "navbar-item");
			attr_dev(a2, "href", "travel");
			add_location(a2, file, 16, 10, 617);
			attr_dev(a3, "class", "navbar-item");
			attr_dev(a3, "href", "istanbul");
			add_location(a3, file, 17, 10, 676);
			attr_dev(a4, "class", "navbar-item");
			attr_dev(a4, "href", "peru");
			add_location(a4, file, 18, 10, 738);
			attr_dev(a5, "class", "navbar-item");
			attr_dev(a5, "href", "russia");
			add_location(a5, file, 19, 10, 792);
			attr_dev(div1, "class", "field is-grouped");
			add_location(div1, file, 15, 8, 576);
			attr_dev(div2, "class", "navbar-item");
			add_location(div2, file, 14, 6, 542);
			attr_dev(div3, "class", "navbar-end is-hidden-mobile");
			add_location(div3, file, 13, 4, 494);
			attr_dev(nav, "class", "navbar is-transparent is-spaced");
			add_location(nav, file, 1, 2, 26);
			attr_dev(div4, "class", "hero-head");
			add_location(div4, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, nav);
			append_dev(nav, div0);
			append_dev(div0, a0);
			append_dev(a0, img);
			append_dev(div0, t0);
			append_dev(div0, a1);
			append_dev(a1, span0);
			append_dev(a1, t1);
			append_dev(a1, span1);
			append_dev(a1, t2);
			append_dev(a1, span2);
			append_dev(nav, t3);
			append_dev(nav, div3);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div1, a2);
			append_dev(a2, t4);
			append_dev(div1, t5);
			append_dev(div1, a3);
			append_dev(a3, t6);
			append_dev(div1, t7);
			append_dev(div1, a4);
			append_dev(a4, t8);
			append_dev(div1, t9);
			append_dev(div1, a5);
			append_dev(a5, t10);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
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

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Truman> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Truman", $$slots, []);
	return [];
}

class Truman extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Truman",
			options,
			id: create_fragment.name
		});
	}
}

export { Truman as T };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJ1bWFuLmIzMzM5ODliLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
