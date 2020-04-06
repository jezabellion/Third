import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, f as detach_dev, g as claim_space, h as claim_text, j as attr_dev, k as add_location, l as toggle_class, m as insert_dev, n as append_dev, o as listen_dev, p as noop, q as create_component, r as claim_component, u as mount_component, w as transition_in, x as transition_out, y as destroy_component } from './client.75dd43e8.js';
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
			add_location(div0, file, 6, 2, 152);
			attr_dev(a0, "href", "morocco");
			add_location(a0, file, 11, 12, 338);
			attr_dev(div1, "class", "column");
			add_location(div1, file, 10, 10, 305);
			attr_dev(a1, "href", "morocco");
			add_location(a1, file, 14, 12, 438);
			attr_dev(div2, "class", "column");
			add_location(div2, file, 13, 10, 405);
			attr_dev(a2, "href", "peru");
			add_location(a2, file, 17, 12, 538);
			attr_dev(div3, "class", "column");
			add_location(div3, file, 16, 10, 505);
			attr_dev(a3, "href", "russia");
			add_location(a3, file, 20, 12, 622);
			attr_dev(div4, "class", "column");
			add_location(div4, file, 19, 10, 589);
			attr_dev(div5, "class", "columns has-text-centered");
			add_location(div5, file, 9, 8, 255);
			attr_dev(div6, "class", "container");
			add_location(div6, file, 8, 4, 223);
			attr_dev(button, "class", "modal-close is-large");
			attr_dev(button, "aria-label", "close");
			add_location(button, file, 24, 6, 701);
			attr_dev(div7, "class", "modal-content");
			add_location(div7, file, 7, 2, 191);
			attr_dev(div8, "class", "modal is-clipped");
			toggle_class(div8, "is-active", /*showModal*/ ctx[0]);
			add_location(div8, file, 5, 0, 91);
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
	let showModal;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ModalNav> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ModalNav", $$slots, []);
	const click_handler = () => $$invalidate(0, showModal = true);
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
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ModalNav",
			options,
			id: create_fragment.name
		});
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
			add_location(img, file$1, 102, 12, 2160);
			attr_dev(a0, "class", "navbar-item svelte-1dgq7fg");
			add_location(a0, file$1, 101, 10, 2124);
			add_location(span0, file$1, 105, 12, 2363);
			add_location(span1, file$1, 106, 12, 2389);
			add_location(span2, file$1, 107, 12, 2415);
			attr_dev(span3, "class", "navbar-burger burger svelte-1dgq7fg");
			attr_dev(span3, "data-target", "navbarMenuHeroC");
			add_location(span3, file$1, 104, 10, 2251);
			attr_dev(div0, "class", "navbar-brand is-hidden-tablet svelte-1dgq7fg");
			add_location(div0, file$1, 100, 8, 2070);
			attr_dev(div1, "class", "container");
			add_location(div1, file$1, 99, 6, 2038);
			attr_dev(header, "class", "navbar");
			add_location(header, file$1, 98, 4, 2008);
			attr_dev(div2, "class", "hero-head");
			add_location(div2, file$1, 97, 2, 1980);
			attr_dev(h1, "class", "svelte-1dgq7fg");
			add_location(h1, file$1, 125, 8, 2683);
			attr_dev(div3, "class", "container");
			add_location(div3, file$1, 124, 6, 2651);
			attr_dev(div4, "class", "shoes hero-body svelte-1dgq7fg");
			add_location(div4, file$1, 123, 4, 2615);
			attr_dev(div5, "class", "hero-image svelte-1dgq7fg");
			add_location(div5, file$1, 122, 2, 2586);
			attr_dev(a1, "href", "morocco");
			attr_dev(a1, "class", "svelte-1dgq7fg");
			add_location(a1, file$1, 136, 14, 2980);
			add_location(li0, file$1, 136, 10, 2976);
			attr_dev(a2, "href", "travel");
			attr_dev(a2, "class", "svelte-1dgq7fg");
			add_location(a2, file$1, 137, 14, 3039);
			add_location(li1, file$1, 137, 10, 3035);
			attr_dev(a3, "href", "travel");
			attr_dev(a3, "class", "svelte-1dgq7fg");
			add_location(a3, file$1, 138, 14, 3097);
			add_location(li2, file$1, 138, 10, 3093);
			attr_dev(a4, "href", "travel");
			attr_dev(a4, "class", "svelte-1dgq7fg");
			add_location(a4, file$1, 139, 14, 3157);
			add_location(li3, file$1, 139, 10, 3153);
			attr_dev(ul, "class", "svelte-1dgq7fg");
			add_location(ul, file$1, 134, 8, 2903);
			attr_dev(div6, "class", "container");
			add_location(div6, file$1, 133, 6, 2871);
			attr_dev(nav, "class", "tabs is-fullwidth");
			add_location(nav, file$1, 132, 4, 2833);
			attr_dev(div7, "class", "hero-foot is-hidden-mobile svelte-1dgq7fg");
			add_location(div7, file$1, 131, 2, 2788);
			attr_dev(section, "class", "hero is-success is-fullheight svelte-1dgq7fg");
			add_location(section, file$1, 95, 0, 1886);
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
			dispose = listen_dev(span3, "click", /*click_handler*/ ctx[1], false, false, false);
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
	let { showModal = false } = $$props;
	const writable_props = ["showModal"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	const click_handler = () => $$invalidate(0, showModal = true);

	$$self.$set = $$props => {
		if ("showModal" in $$props) $$invalidate(0, showModal = $$props.showModal);
	};

	$$self.$capture_state = () => ({
		destination,
		chapter,
		ModalNav,
		showModal
	});

	$$self.$inject_state = $$props => {
		if ("showModal" in $$props) $$invalidate(0, showModal = $$props.showModal);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [showModal, click_handler];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { showModal: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$1.name
		});
	}

	get showModal() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showModal(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMzYwMDVhNTIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsTmF2LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGRlc3RpbmF0aW9uIH0gZnJvbSAnLi4vcm91dGVzL21vcm9jY28uanMnO1xuICBsZXQgc2hvd01vZGFsO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M6aXMtYWN0aXZlPXtzaG93TW9kYWx9IGNsYXNzPVwibW9kYWwgaXMtY2xpcHBlZFwiPlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZFwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwibW9yb2Njb1wiPntkZXN0aW5hdGlvbi5vbmV9PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJtb3JvY2NvXCI+e2Rlc3RpbmF0aW9uLnR3b308L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cInBlcnVcIj5QZXJ1PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJydXNzaWFcIj5SdXNzaWE8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBzaG93TW9kYWwgPSB0cnVlfSBjbGFzcz1cIm1vZGFsLWNsb3NlIGlzLWxhcmdlXCIgYXJpYS1sYWJlbD1cImNsb3NlXCI+PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuIiwiPHNjcmlwdCA+XG4gIGltcG9ydCB7IGRlc3RpbmF0aW9uLCBjaGFwdGVyIH0gZnJvbSAnLi9tb3JvY2NvLmpzJztcbiAgaW1wb3J0IE1vZGFsTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWxOYXYuc3ZlbHRlJztcbiAgZXhwb3J0IGxldCBzaG93TW9kYWwgPSBmYWxzZTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBtZWRpYT1cInNjcmVlblwiIGxhbmc9XCJzY3NzXCI+XG5cdEBpbXBvcnQgXCIuL3N0eWxlL3RoZW1lLnNjc3NcIjtcbiAgLmhlcm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgaDEge1xuICBmb250LWZhbWlseTogJ0VuZ2FnZW1lbnQnO1xuICBmb250LXNpemU6IDE1MHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGV0dGVyLXNwYWNpbmc6IC02LjI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxuXG4gIC5oZXJvLWJvZHkge1xuICAgIHBhZGRpbmctdG9wOiA4cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xuICB9XG5cbiAgLmhlcm8taW1hZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiA4cmVtO1xuICAgIG1hcmdpbi1yaWdodDogOHJlbTtcbiAgfVxuXG4gIC5zaG9lcyxcbiAgLmhvbWUtcGljIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZXMvc2hvZXMuanBnXCIpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cblxuXG4gIC8vIGJvdHRvbSBuYXZcblxuICAuaGVyby1mb290IHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG5cbiAgLmhlcm8gLnRhYnMgdWwsXG4gIC5oZXJvIC5oZXJvLWZvb3QgLnRhYnMgdWwsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE0cmVtO1xuICB9XG5cbiAgLmhlcm8gLmhlcm8tZm9vdCAudGFicyB1bCB7XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG4gIH1cblxuICAuaGVyby1mb290IC5oZXJvLWJvZHkgaDEge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cblxuICAuaGVybyAuaGVyby1mb290IC50YWJzIGEge1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmhlcm8gLmhlcm8tZm9vdCAudGFicyBhOmhvdmVyIHtcbiAgICBjb2xvcjogJGdyZXk7XG4gIH1cblxuICAuY2hhcHRlci1jbG9zZSBoMyB7XG4gICAgY29sb3I6ICRncmV5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0VuZ2FnZW1lbnQnO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcbiAgICBtYXJnaW46IDEwcmVtIDVyZW07XG4gIH1cblxuICAvLyBNb2RhbCBOYXZcblxuICAubW9kYWwgYSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm1vZGFsIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgfVxuXG4gIC5oaWRkZW4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4gIC8vIFJlc3BvbmlzdmUgc2l6ZXNcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgLmhlcm8taW1hZ2Uge1xuICAgICAgbWFyZ2luOiBhdXRvIDJyZW07XG4gICAgfVxuXG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cblxuICAgIC5uYXZiYXItYnVyZ2VyIHtcbiAgICAgIGNvbG9yOiAkYmxhY2sgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaGVyby1ib2R5IGgxIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuc2hvZXMge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL3Nob2VzLXBvcnRyYWl0LmpwZ1wiKSAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIC5oZXJvLWJvZHkgaDEge1xuICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC00cHg7XG4gICAgfVxuICB9XG5cbjwvc3R5bGU+XG5cbjxzZWN0aW9uIGNsYXNzPVwiaGVybyBpcy1zdWNjZXNzIGlzLWZ1bGxoZWlnaHRcIj5cbiAgPCEtLSBIZXJvIGhlYWQ6IHdpbGwgc3RpY2sgYXQgdGhlIHRvcCAtLT5cbiAgPGRpdiBjbGFzcz1cImhlcm8taGVhZFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJuYXZiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1icmFuZCBpcy1oaWRkZW4tdGFibGV0XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJ3YW5kZXJsdXN0LnN2Z1wiIGFsdD0nbG9nb21hcmsnIHdpZHRoPVwiMTEyXCIgaGVpZ2h0PVwiMjhcIj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHNwYW4gb246Y2xpY2s9eygpID0+IHNob3dNb2RhbCA9IHRydWV9IGNsYXNzPVwibmF2YmFyLWJ1cmdlciBidXJnZXJcIiBkYXRhLXRhcmdldD1cIm5hdmJhck1lbnVIZXJvQ1wiPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8IS0tIG1vZGFsIC0tPlxuICA8TW9kYWxOYXYvPlxuXG4gIDwvZGl2PlxuXG4gIDwhLS0gSGVybyBjb250ZW50OiB3aWxsIGJlIGluIHRoZSBtaWRkbGUgLS0+XG5cbiAgPGRpdiBjbGFzcz1cImhlcm8taW1hZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2hvZXMgaGVyby1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5XYW5kZXJsdXN0PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8IS0tIEhlcm8gZm9vdGVyOiB3aWxsIHN0aWNrIGF0IHRoZSBib3R0b20gLS0+XG4gIDxkaXYgY2xhc3M9XCJoZXJvLWZvb3QgaXMtaGlkZGVuLW1vYmlsZVwiPlxuICAgIDxuYXYgY2xhc3M9XCJ0YWJzIGlzLWZ1bGx3aWR0aFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPCEtLSA8bGkgY2xhc3M9XCJpcy1hY3RpdmVcIj48YT5Ib21lPC9hPjwvbGk+IC0tPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwibW9yb2Njb1wiPntkZXN0aW5hdGlvbi5vbmV9PC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0cmF2ZWxcIj57ZGVzdGluYXRpb24udHdvfTwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwidHJhdmVsXCI+e2Rlc3RpbmF0aW9uLnRocmVlfTwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwidHJhdmVsXCI+e2Rlc3RpbmF0aW9uLmZvdXJ9PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O2dCQVcrQixXQUFXLENBQUMsR0FBRzs7Ozs7Z0JBR2YsV0FBVyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lEQVR4QixHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFBVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUh6QixTQUFTOzs7Ozs7Ozs7NkNBc0JlLFNBQVMsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQ2dIYixXQUFXLENBQUMsR0FBRzs7Ozs7Z0JBQ2hCLFdBQVcsQ0FBQyxHQUFHOzs7OztpQkFDZixXQUFXLENBQUMsS0FBSzs7Ozs7aUJBQ2pCLFdBQVcsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeEluQyxTQUFTLEdBQUcsS0FBSzs7Ozs7Ozs7OzZDQXFHRSxTQUFTLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
