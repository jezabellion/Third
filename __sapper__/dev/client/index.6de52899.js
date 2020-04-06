import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, f as detach_dev, g as claim_space, h as claim_text, j as attr_dev, k as add_location, l as toggle_class, m as insert_dev, n as append_dev, o as listen_dev, p as noop, q as create_component, r as claim_component, u as mount_component, w as transition_in, x as transition_out, y as destroy_component } from './client.5d682e71.js';
import { d as destination, c as chapter } from './morocco.348cdf80.js';

/* src/components/ModalNav.svelte generated by Svelte v3.20.1 */
const file = "src/components/ModalNav.svelte";

function create_fragment(ctx) {
	let div8;
	let div0;
	let t0;
	let div7;
	let div6;
	let div5;
	let div1;
	let a0;
	let t1_value = destination.one + "";
	let t1;
	let t2;
	let div2;
	let a1;
	let t3_value = destination.two + "";
	let t3;
	let t4;
	let div3;
	let a2;
	let t5;
	let t6;
	let div4;
	let a3;
	let t7;
	let t8;
	let button;
	let dispose;

	const block = {
		c: function create() {
			div8 = element("div");
			div0 = element("div");
			t0 = space();
			div7 = element("div");
			div6 = element("div");
			div5 = element("div");
			div1 = element("div");
			a0 = element("a");
			t1 = text(t1_value);
			t2 = space();
			div2 = element("div");
			a1 = element("a");
			t3 = text(t3_value);
			t4 = space();
			div3 = element("div");
			a2 = element("a");
			t5 = text("Peru");
			t6 = space();
			div4 = element("div");
			a3 = element("a");
			t7 = text("Russia");
			t8 = space();
			button = element("button");
			this.h();
		},
		l: function claim(nodes) {
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div0 = claim_element(div8_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t0 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div1 = claim_element(div5_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a0 = claim_element(div1_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t1 = claim_text(a0_nodes, t1_value);
			a0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div5_nodes);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a1 = claim_element(div2_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t3 = claim_text(a1_nodes, t3_value);
			a1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			a2 = claim_element(div3_nodes, "A", { href: true });
			var a2_nodes = children(a2);
			t5 = claim_text(a2_nodes, "Peru");
			a2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t6 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			a3 = claim_element(div4_nodes, "A", { href: true });
			var a3_nodes = children(a3);
			t7 = claim_text(a3_nodes, "Russia");
			a3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t8 = claim_space(div7_nodes);
			button = claim_element(div7_nodes, "BUTTON", { class: true, "aria-label": true });
			children(button).forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "modal-background");
			add_location(div0, file, 6, 2, 166);
			attr_dev(a0, "href", "morocco");
			add_location(a0, file, 11, 12, 352);
			attr_dev(div1, "class", "column");
			add_location(div1, file, 10, 10, 319);
			attr_dev(a1, "href", "morocco");
			add_location(a1, file, 14, 12, 452);
			attr_dev(div2, "class", "column");
			add_location(div2, file, 13, 10, 419);
			attr_dev(a2, "href", "peru");
			add_location(a2, file, 17, 12, 552);
			attr_dev(div3, "class", "column");
			add_location(div3, file, 16, 10, 519);
			attr_dev(a3, "href", "russia");
			add_location(a3, file, 20, 12, 636);
			attr_dev(div4, "class", "column");
			add_location(div4, file, 19, 10, 603);
			attr_dev(div5, "class", "columns has-text-centered");
			add_location(div5, file, 9, 8, 269);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 8, 4, 237);
			attr_dev(button, "class", "modal-close is-large");
			attr_dev(button, "aria-label", "close");
			add_location(button, file, 24, 6, 715);
			attr_dev(div7, "class", "modal-content");
			add_location(div7, file, 7, 2, 205);
			attr_dev(div8, "class", "modal is-clipped");
			toggle_class(div8, "is-active", /*showModal*/ ctx[0]);
			add_location(div8, file, 5, 0, 105);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, div8, anchor);
			append_dev(div8, div0);
			append_dev(div8, t0);
			append_dev(div8, div7);
			append_dev(div7, div6);
			append_dev(div6, div5);
			append_dev(div5, div1);
			append_dev(div1, a0);
			append_dev(a0, t1);
			append_dev(div5, t2);
			append_dev(div5, div2);
			append_dev(div2, a1);
			append_dev(a1, t3);
			append_dev(div5, t4);
			append_dev(div5, div3);
			append_dev(div3, a2);
			append_dev(a2, t5);
			append_dev(div5, t6);
			append_dev(div5, div4);
			append_dev(div4, a3);
			append_dev(a3, t7);
			append_dev(div7, t8);
			append_dev(div7, button);
			if (remount) dispose();
			dispose = listen_dev(button, "click", /*click_handler*/ ctx[1], false, false, false);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*showModal*/ 1) {
				toggle_class(div8, "is-active", /*showModal*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div8);
			dispose();
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
	let { showModal = true } = $$props;
	const writable_props = ["showModal"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ModalNav> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ModalNav", $$slots, []);
	const click_handler = () => $$invalidate(0, showModal = true);

	$$self.$set = $$props => {
		if ("showModal" in $$props) $$invalidate(0, showModal = $$props.showModal);
	};

	$$self.$capture_state = () => ({ destination, showModal });

	$$self.$inject_state = $$props => {
		if ("showModal" in $$props) $$invalidate(0, showModal = $$props.showModal);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [showModal, click_handler];
}

class ModalNav extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { showModal: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ModalNav",
			options,
			id: create_fragment.name
		});
	}

	get showModal() {
		throw new Error("<ModalNav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showModal(value) {
		throw new Error("<ModalNav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/index.svelte generated by Svelte v3.20.1 */
const file$1 = "src/routes/index.svelte";

function create_fragment$1(ctx) {
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
	let t4;
	let div5;
	let div4;
	let div3;
	let h1;
	let t5;
	let t6;
	let div7;
	let nav;
	let div6;
	let ul;
	let li0;
	let a1;
	let t7_value = destination.one + "";
	let t7;
	let t8;
	let li1;
	let a2;
	let t9_value = destination.two + "";
	let t9;
	let t10;
	let li2;
	let a3;
	let t11_value = destination.three + "";
	let t11;
	let t12;
	let li3;
	let a4;
	let t13_value = destination.four + "";
	let t13;
	let current;
	let dispose;
	const modalnav = new ModalNav({ $$inline: true });

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
			create_component(modalnav.$$.fragment);
			t4 = space();
			div5 = element("div");
			div4 = element("div");
			div3 = element("div");
			h1 = element("h1");
			t5 = text("Wanderlust");
			t6 = space();
			div7 = element("div");
			nav = element("nav");
			div6 = element("div");
			ul = element("ul");
			li0 = element("li");
			a1 = element("a");
			t7 = text(t7_value);
			t8 = space();
			li1 = element("li");
			a2 = element("a");
			t9 = text(t9_value);
			t10 = space();
			li2 = element("li");
			a3 = element("a");
			t11 = text(t11_value);
			t12 = space();
			li3 = element("li");
			a4 = element("a");
			t13 = text(t13_value);
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
			t3 = claim_space(div2_nodes);
			claim_component(modalnav.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(section_nodes);
			div5 = claim_element(section_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h1 = claim_element(div3_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t5 = claim_text(h1_nodes, "Wanderlust");
			h1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t6 = claim_space(section_nodes);
			div7 = claim_element(section_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			nav = claim_element(div7_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			div6 = claim_element(nav_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			ul = claim_element(div6_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			a1 = claim_element(li0_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t7 = claim_text(a1_nodes, t7_value);
			a1_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t8 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			a2 = claim_element(li1_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t9 = claim_text(a2_nodes, t9_value);
			a2_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t10 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			a3 = claim_element(li2_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);
			t11 = claim_text(a3_nodes, t11_value);
			a3_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t12 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			a4 = claim_element(li3_nodes, "A", { href: true, class: true });
			var a4_nodes = children(a4);
			t13 = claim_text(a4_nodes, t13_value);
			a4_nodes.forEach(detach_dev);
			li3_nodes.forEach(detach_dev);
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
			add_location(img, file$1, 102, 12, 2163);
			attr_dev(a0, "class", "navbar-item svelte-1dgq7fg");
			add_location(a0, file$1, 101, 10, 2127);
			add_location(span0, file$1, 105, 12, 2366);
			add_location(span1, file$1, 106, 12, 2392);
			add_location(span2, file$1, 107, 12, 2418);
			attr_dev(span3, "class", "navbar-burger burger svelte-1dgq7fg");
			attr_dev(span3, "data-target", "navbarMenuHeroC");
			add_location(span3, file$1, 104, 10, 2254);
			attr_dev(div0, "class", "navbar-brand is-hidden-tablet svelte-1dgq7fg");
			add_location(div0, file$1, 100, 8, 2073);
			attr_dev(div1, "class", "container");
			add_location(div1, file$1, 99, 6, 2041);
			attr_dev(header, "class", "navbar");
			add_location(header, file$1, 98, 4, 2011);
			attr_dev(div2, "class", "hero-head");
			add_location(div2, file$1, 97, 2, 1983);
			attr_dev(h1, "class", "svelte-1dgq7fg");
			add_location(h1, file$1, 125, 8, 2686);
			attr_dev(div3, "class", "container");
			add_location(div3, file$1, 124, 6, 2654);
			attr_dev(div4, "class", "shoes hero-body svelte-1dgq7fg");
			add_location(div4, file$1, 123, 4, 2618);
			attr_dev(div5, "class", "hero-image svelte-1dgq7fg");
			add_location(div5, file$1, 122, 2, 2589);
			attr_dev(a1, "href", "morocco");
			attr_dev(a1, "class", "svelte-1dgq7fg");
			add_location(a1, file$1, 136, 14, 2983);
			add_location(li0, file$1, 136, 10, 2979);
			attr_dev(a2, "href", "travel");
			attr_dev(a2, "class", "svelte-1dgq7fg");
			add_location(a2, file$1, 137, 14, 3042);
			add_location(li1, file$1, 137, 10, 3038);
			attr_dev(a3, "href", "travel");
			attr_dev(a3, "class", "svelte-1dgq7fg");
			add_location(a3, file$1, 138, 14, 3100);
			add_location(li2, file$1, 138, 10, 3096);
			attr_dev(a4, "href", "travel");
			attr_dev(a4, "class", "svelte-1dgq7fg");
			add_location(a4, file$1, 139, 14, 3160);
			add_location(li3, file$1, 139, 10, 3156);
			attr_dev(ul, "class", "svelte-1dgq7fg");
			add_location(ul, file$1, 134, 8, 2906);
			attr_dev(div6, "class", "container");
			add_location(div6, file$1, 133, 6, 2874);
			attr_dev(nav, "class", "tabs is-fullwidth");
			add_location(nav, file$1, 132, 4, 2836);
			attr_dev(div7, "class", "hero-foot is-hidden-mobile svelte-1dgq7fg");
			add_location(div7, file$1, 131, 2, 2791);
			attr_dev(section, "class", "hero is-success is-fullheight svelte-1dgq7fg");
			add_location(section, file$1, 95, 0, 1889);
		},
		m: function mount(target, anchor, remount) {
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
			append_dev(div2, t3);
			mount_component(modalnav, div2, null);
			append_dev(section, t4);
			append_dev(section, div5);
			append_dev(div5, div4);
			append_dev(div4, div3);
			append_dev(div3, h1);
			append_dev(h1, t5);
			append_dev(section, t6);
			append_dev(section, div7);
			append_dev(div7, nav);
			append_dev(nav, div6);
			append_dev(div6, ul);
			append_dev(ul, li0);
			append_dev(li0, a1);
			append_dev(a1, t7);
			append_dev(ul, t8);
			append_dev(ul, li1);
			append_dev(li1, a2);
			append_dev(a2, t9);
			append_dev(ul, t10);
			append_dev(ul, li2);
			append_dev(li2, a3);
			append_dev(a3, t11);
			append_dev(ul, t12);
			append_dev(ul, li3);
			append_dev(li3, a4);
			append_dev(a4, t13);
			current = true;
			if (remount) dispose();
			dispose = listen_dev(span3, "click", /*click_handler*/ ctx[0], false, false, false);
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(modalnav.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(modalnav.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(modalnav);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	const click_handler = () => showModal = true;
	$$self.$capture_state = () => ({ destination, chapter, ModalNav });
	return [click_handler];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmRlNTI4OTkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsTmF2LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGRlc3RpbmF0aW9uIH0gZnJvbSAnLi4vcm91dGVzL21vcm9jY28uanMnO1xuICBleHBvcnQgbGV0IHNob3dNb2RhbCA9IHRydWU7XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzczppcy1hY3RpdmU9e3Nob3dNb2RhbH0gY2xhc3M9XCJtb2RhbCBpcy1jbGlwcGVkXCI+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZ3JvdW5kXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJtb3JvY2NvXCI+e2Rlc3RpbmF0aW9uLm9uZX08L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIm1vcm9jY29cIj57ZGVzdGluYXRpb24udHdvfTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwicGVydVwiPlBlcnU8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cInJ1c3NpYVwiPlJ1c3NpYTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gb246Y2xpY2s9eygpID0+IHNob3dNb2RhbCA9IHRydWV9IGNsYXNzPVwibW9kYWwtY2xvc2UgaXMtbGFyZ2VcIiBhcmlhLWxhYmVsPVwiY2xvc2VcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4iLCI8c2NyaXB0ID5cbiAgaW1wb3J0IHsgZGVzdGluYXRpb24sIGNoYXB0ZXIgfSBmcm9tICcuL21vcm9jY28uanMnO1xuICBpbXBvcnQgTW9kYWxOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbE5hdi5zdmVsdGUnO1xuICAvLyBleHBvcnQgbGV0IHNob3dNb2RhbCA9IGZhbHNlO1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIG1lZGlhPVwic2NyZWVuXCIgbGFuZz1cInNjc3NcIj5cblx0QGltcG9ydCBcIi4vc3R5bGUvdGhlbWUuc2Nzc1wiO1xuICAuaGVybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICBoMSB7XG4gIGZvbnQtZmFtaWx5OiAnRW5nYWdlbWVudCc7XG4gIGZvbnQtc2l6ZTogMTUwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogLTYuMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG5cbiAgLmhlcm8tYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDhyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDhyZW07XG4gIH1cblxuICAuaGVyby1pbWFnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA4cmVtO1xuICB9XG5cbiAgLnNob2VzLFxuICAuaG9tZS1waWMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9zaG9lcy5qcGdcIikgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuXG5cbiAgLy8gYm90dG9tIG5hdlxuXG4gIC5oZXJvLWZvb3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICAuaGVybyAudGFicyB1bCxcbiAgLmhlcm8gLmhlcm8tZm9vdCAudGFicyB1bCwge1xuICAgIHBhZGRpbmctbGVmdDogMTRyZW07XG4gICAgcGFkZGluZy1yaWdodDogMTRyZW07XG4gIH1cblxuICAuaGVybyAuaGVyby1mb290IC50YWJzIHVsIHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgfVxuXG4gIC5oZXJvLWZvb3QgLmhlcm8tYm9keSBoMSB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxuXG4gIC5oZXJvIC5oZXJvLWZvb3QgLnRhYnMgYSB7XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuaGVybyAuaGVyby1mb290IC50YWJzIGE6aG92ZXIge1xuICAgIGNvbG9yOiAkZ3JleTtcbiAgfVxuXG4gIC5jaGFwdGVyLWNsb3NlIGgzIHtcbiAgICBjb2xvcjogJGdyZXk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnRW5nYWdlbWVudCc7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICAgIG1hcmdpbjogMTByZW0gNXJlbTtcbiAgfVxuXG4gIC8vIE1vZGFsIE5hdlxuXG4gIC5tb2RhbCBhIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAubW9kYWwgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogNTAlO1xuICB9XG5cbiAgLmhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cbiAgLy8gUmVzcG9uaXN2ZSBzaXplc1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAuaGVyby1pbWFnZSB7XG4gICAgICBtYXJnaW46IGF1dG8gMnJlbTtcbiAgICB9XG5cbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuXG4gICAgLm5hdmJhci1idXJnZXIge1xuICAgICAgY29sb3I6ICRibGFjayAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5oZXJvLWJvZHkgaDEge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgIC5zaG9lcyB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZXMvc2hvZXMtcG9ydHJhaXQuanBnXCIpICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgLmhlcm8tYm9keSBoMSB7XG4gICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTRweDtcbiAgICB9XG4gIH1cblxuPC9zdHlsZT5cblxuPHNlY3Rpb24gY2xhc3M9XCJoZXJvIGlzLXN1Y2Nlc3MgaXMtZnVsbGhlaWdodFwiPlxuICA8IS0tIEhlcm8gaGVhZDogd2lsbCBzdGljayBhdCB0aGUgdG9wIC0tPlxuICA8ZGl2IGNsYXNzPVwiaGVyby1oZWFkXCI+XG4gICAgPGhlYWRlciBjbGFzcz1cIm5hdmJhclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWJyYW5kIGlzLWhpZGRlbi10YWJsZXRcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIndhbmRlcmx1c3Quc3ZnXCIgYWx0PSdsb2dvbWFyaycgd2lkdGg9XCIxMTJcIiBoZWlnaHQ9XCIyOFwiPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8c3BhbiBvbjpjbGljaz17KCkgPT4gc2hvd01vZGFsID0gdHJ1ZX0gY2xhc3M9XCJuYXZiYXItYnVyZ2VyIGJ1cmdlclwiIGRhdGEtdGFyZ2V0PVwibmF2YmFyTWVudUhlcm9DXCI+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cblxuICAgIDwhLS0gbW9kYWwgLS0+XG4gIDxNb2RhbE5hdi8+XG5cbiAgPC9kaXY+XG5cbiAgPCEtLSBIZXJvIGNvbnRlbnQ6IHdpbGwgYmUgaW4gdGhlIG1pZGRsZSAtLT5cblxuICA8ZGl2IGNsYXNzPVwiaGVyby1pbWFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzaG9lcyBoZXJvLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxPldhbmRlcmx1c3Q8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS0gSGVybyBmb290ZXI6IHdpbGwgc3RpY2sgYXQgdGhlIGJvdHRvbSAtLT5cbiAgPGRpdiBjbGFzcz1cImhlcm8tZm9vdCBpcy1oaWRkZW4tbW9iaWxlXCI+XG4gICAgPG5hdiBjbGFzcz1cInRhYnMgaXMtZnVsbHdpZHRoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8IS0tIDxsaSBjbGFzcz1cImlzLWFjdGl2ZVwiPjxhPkhvbWU8L2E+PC9saT4gLS0+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJtb3JvY2NvXCI+e2Rlc3RpbmF0aW9uLm9uZX08L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cInRyYXZlbFwiPntkZXN0aW5hdGlvbi50d299PC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0cmF2ZWxcIj57ZGVzdGluYXRpb24udGhyZWV9PC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0cmF2ZWxcIj57ZGVzdGluYXRpb24uZm91cn08L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Z0JBVytCLFdBQVcsQ0FBQyxHQUFHOzs7OztnQkFHZixXQUFXLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aURBVHhCLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFULEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BSGxCLFNBQVMsR0FBRyxJQUFJOzs7Ozs7Ozs7NkNBc0JDLFNBQVMsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkNnSGIsV0FBVyxDQUFDLEdBQUc7Ozs7O2dCQUNoQixXQUFXLENBQUMsR0FBRzs7Ozs7aUJBQ2YsV0FBVyxDQUFDLEtBQUs7Ozs7O2lCQUNqQixXQUFXLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQW5DaEIsU0FBUyxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
