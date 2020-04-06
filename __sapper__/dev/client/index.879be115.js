import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, f as detach_dev, g as claim_space, h as claim_text, j as attr_dev, k as add_location, l as toggle_class, m as insert_dev, n as append_dev, r as run_all, o as listen_dev, p as noop } from './client.ac02362c.js';
import { d as destination, c as chapter } from './morocco.8502293d.js';

/* src/routes/index.svelte generated by Svelte v3.20.1 */
const file = "src/routes/index.svelte";

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
	let t5_value = chapter.one + "";
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
	let dispose;

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
			t5 = text(t5_value);
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
			t5 = claim_text(a1_nodes, t5_value);
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
			add_location(img, file, 86, 12, 1872);
			attr_dev(a0, "class", "navbar-item svelte-1xhc3gr");
			add_location(a0, file, 85, 10, 1836);
			add_location(span0, file, 89, 12, 2075);
			add_location(span1, file, 90, 12, 2101);
			add_location(span2, file, 91, 12, 2127);
			attr_dev(span3, "class", "navbar-burger burger svelte-1xhc3gr");
			attr_dev(span3, "data-target", "navbarMenuHeroC");
			add_location(span3, file, 88, 10, 1963);
			attr_dev(div0, "class", "navbar-brand is-hidden-tablet svelte-1xhc3gr");
			add_location(div0, file, 84, 8, 1782);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 83, 6, 1750);
			attr_dev(header, "class", "navbar");
			add_location(header, file, 82, 4, 1720);
			attr_dev(div2, "class", "modal-background");
			add_location(div2, file, 101, 10, 2300);
			attr_dev(a1, "href", "pages/morocco.html");
			attr_dev(a1, "class", "svelte-1xhc3gr");
			add_location(a1, file, 106, 20, 2526);
			attr_dev(div3, "class", "column");
			add_location(div3, file, 105, 18, 2485);
			attr_dev(a2, "href", "pages/morocco.html");
			attr_dev(a2, "class", "svelte-1xhc3gr");
			add_location(a2, file, 109, 20, 2657);
			attr_dev(div4, "class", "column");
			add_location(div4, file, 108, 18, 2616);
			attr_dev(a3, "href", "pages/morocco.html");
			attr_dev(a3, "class", "svelte-1xhc3gr");
			add_location(a3, file, 112, 20, 2783);
			attr_dev(div5, "class", "column");
			add_location(div5, file, 111, 18, 2742);
			attr_dev(a4, "href", "pages/morocco.html");
			attr_dev(a4, "class", "svelte-1xhc3gr");
			add_location(a4, file, 115, 20, 2905);
			attr_dev(div6, "class", "column");
			add_location(div6, file, 114, 18, 2864);
			attr_dev(div7, "class", "columns has-text-centered");
			add_location(div7, file, 104, 16, 2427);
			attr_dev(div8, "class", "container");
			add_location(div8, file, 103, 12, 2387);
			attr_dev(button, "class", "modal-close is-large");
			attr_dev(button, "aria-label", "close");
			add_location(button, file, 119, 14, 3028);
			attr_dev(div9, "class", "modal-content");
			add_location(div9, file, 102, 10, 2347);
			attr_dev(div10, "class", "modal is-clipped");
			toggle_class(div10, "is-active", /*showModal*/ ctx[0]);
			add_location(div10, file, 100, 8, 2231);
			attr_dev(div11, "class", "hero-head");
			add_location(div11, file, 81, 2, 1692);
			attr_dev(h1, "class", "svelte-1xhc3gr");
			add_location(h1, file, 130, 8, 3323);
			attr_dev(div12, "class", "container");
			add_location(div12, file, 129, 6, 3291);
			attr_dev(div13, "class", "shoes hero-body svelte-1xhc3gr");
			add_location(div13, file, 128, 4, 3255);
			attr_dev(div14, "class", "hero-image svelte-1xhc3gr");
			add_location(div14, file, 127, 2, 3226);
			attr_dev(a5, "class", "svelte-1xhc3gr");
			add_location(a5, file, 140, 32, 3580);
			attr_dev(li0, "class", "is-active");
			add_location(li0, file, 140, 10, 3558);
			attr_dev(a6, "href", "travel");
			attr_dev(a6, "class", "svelte-1xhc3gr");
			add_location(a6, file, 141, 14, 3611);
			add_location(li1, file, 141, 10, 3607);
			attr_dev(a7, "href", "travel");
			attr_dev(a7, "class", "svelte-1xhc3gr");
			add_location(a7, file, 142, 14, 3659);
			add_location(li2, file, 142, 10, 3655);
			attr_dev(a8, "href", "travel");
			attr_dev(a8, "class", "svelte-1xhc3gr");
			add_location(a8, file, 143, 14, 3708);
			add_location(li3, file, 143, 10, 3704);
			attr_dev(a9, "href", "travel");
			attr_dev(a9, "class", "svelte-1xhc3gr");
			add_location(a9, file, 144, 14, 3755);
			add_location(li4, file, 144, 10, 3751);
			attr_dev(ul, "class", "svelte-1xhc3gr");
			add_location(ul, file, 139, 8, 3543);
			attr_dev(div15, "class", "container");
			add_location(div15, file, 138, 6, 3511);
			attr_dev(nav, "class", "tabs is-fullwidth");
			add_location(nav, file, 137, 4, 3473);
			attr_dev(div16, "class", "hero-foot is-hidden-mobile svelte-1xhc3gr");
			add_location(div16, file, 136, 2, 3428);
			attr_dev(section, "class", "hero is-success is-fullheight svelte-1xhc3gr");
			add_location(section, file, 79, 0, 1598);
		},
		m: function mount(target, anchor, remount) {
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
			if (remount) run_all(dispose);

			dispose = [
				listen_dev(span3, "click", /*click_handler*/ ctx[1], false, false, false),
				listen_dev(button, "click", /*click_handler_1*/ ctx[2], false, false, false)
			];
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*showModal*/ 1) {
				toggle_class(div10, "is-active", /*showModal*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			run_all(dispose);
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
	let { showModal = false } = $$props;
	const writable_props = ["showModal"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	const click_handler = () => $$invalidate(0, showModal = true);
	const click_handler_1 = () => $$invalidate(0, showModal = false);

	$$self.$set = $$props => {
		if ("showModal" in $$props) $$invalidate(0, showModal = $$props.showModal);
	};

	$$self.$capture_state = () => ({ destination, chapter, showModal });

	$$self.$inject_state = $$props => {
		if ("showModal" in $$props) $$invalidate(0, showModal = $$props.showModal);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [showModal, click_handler, click_handler_1];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { showModal: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODc5YmUxMTUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgPlxuICBpbXBvcnQgeyBkZXN0aW5hdGlvbiwgY2hhcHRlciB9IGZyb20gJy4vbW9yb2Njby5qcyc7XG4gIGV4cG9ydCBsZXQgc2hvd01vZGFsID0gZmFsc2U7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbWVkaWE9XCJzY3JlZW5cIiBsYW5nPVwic2Nzc1wiPlxuXHRAaW1wb3J0IFwiLi9zdHlsZS90aGVtZS5zY3NzXCI7XG4gIC5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGgxIHtcbiAgZm9udC1mYW1pbHk6ICdFbmdhZ2VtZW50JztcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxldHRlci1zcGFjaW5nOiAtNi4yNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cblxuICAuaGVyby1ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogOHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcbiAgfVxuXG4gIC5oZXJvLWltYWdlIHtcbiAgICBtYXJnaW4tbGVmdDogOHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhyZW07XG4gIH1cblxuICAuc2hvZXMsXG4gIC5ob21lLXBpYyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL3Nob2VzLmpwZ1wiKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG5cblxuICAvLyBib3R0b20gbmF2XG5cbiAgLmhlcm8tZm9vdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5oZXJvIC50YWJzIHVsLFxuICAuaGVybyAuaGVyby1mb290IC50YWJzIHVsLCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHJlbTtcbiAgfVxuXG4gIC5oZXJvIC5oZXJvLWZvb3QgLnRhYnMgdWwge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICB9XG5cbiAgLmhlcm8tZm9vdCAuaGVyby1ib2R5IGgxIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG5cbiAgLmhlcm8gLmhlcm8tZm9vdCAudGFicyBhIHtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5oZXJvIC5oZXJvLWZvb3QgLnRhYnMgYTpob3ZlciB7XG4gICAgY29sb3I6ICRncmV5O1xuICB9XG5cbiAgLmNoYXB0ZXItY2xvc2UgaDMge1xuICAgIGNvbG9yOiAkZ3JleTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdFbmdhZ2VtZW50JztcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgbWFyZ2luOiAxMHJlbSA1cmVtO1xuICB9XG5cbiAgLy8gUmVzcG9uaXN2ZSBzaXplc1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAuaGVyby1pbWFnZSB7XG4gICAgICBtYXJnaW46IGF1dG8gMnJlbTtcbiAgICB9XG5cbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuXG4gICAgLm5hdmJhci1idXJnZXIge1xuICAgICAgY29sb3I6ICRibGFjayAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5oZXJvLWJvZHkgaDEge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgIC5zaG9lcyB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZXMvc2hvZXMtcG9ydHJhaXQuanBnXCIpICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuICB9XG5cbjwvc3R5bGU+XG5cbjxzZWN0aW9uIGNsYXNzPVwiaGVybyBpcy1zdWNjZXNzIGlzLWZ1bGxoZWlnaHRcIj5cbiAgPCEtLSBIZXJvIGhlYWQ6IHdpbGwgc3RpY2sgYXQgdGhlIHRvcCAtLT5cbiAgPGRpdiBjbGFzcz1cImhlcm8taGVhZFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJuYXZiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1icmFuZCBpcy1oaWRkZW4tdGFibGV0XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJ3YW5kZXJsdXN0LnN2Z1wiIGFsdD0nbG9nb21hcmsnIHdpZHRoPVwiMTEyXCIgaGVpZ2h0PVwiMjhcIj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHNwYW4gb246Y2xpY2s9eygpID0+IHNob3dNb2RhbCA9IHRydWV9IGNsYXNzPVwibmF2YmFyLWJ1cmdlciBidXJnZXJcIiBkYXRhLXRhcmdldD1cIm5hdmJhck1lbnVIZXJvQ1wiPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8IS0tIG1vZGFsIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzOmlzLWFjdGl2ZT17c2hvd01vZGFsfSBjbGFzcz1cIm1vZGFsIGlzLWNsaXBwZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInBhZ2VzL21vcm9jY28uaHRtbFwiPntjaGFwdGVyLm9uZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInBhZ2VzL21vcm9jY28uaHRtbFwiPklzdGFuYnVsPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwYWdlcy9tb3JvY2NvLmh0bWxcIj5QZXJ1PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwYWdlcy9tb3JvY2NvLmh0bWxcIj5SdXNzaWE8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gb246Y2xpY2s9eygpID0+IHNob3dNb2RhbCA9IGZhbHNlfSBjbGFzcz1cIm1vZGFsLWNsb3NlIGlzLWxhcmdlXCIgYXJpYS1sYWJlbD1cImNsb3NlXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICA8L2Rpdj5cblxuICA8IS0tIEhlcm8gY29udGVudDogd2lsbCBiZSBpbiB0aGUgbWlkZGxlIC0tPlxuXG4gIDxkaXYgY2xhc3M9XCJoZXJvLWltYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cInNob2VzIGhlcm8tYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+V2FuZGVybHVzdDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPCEtLSBIZXJvIGZvb3Rlcjogd2lsbCBzdGljayBhdCB0aGUgYm90dG9tIC0tPlxuICA8ZGl2IGNsYXNzPVwiaGVyby1mb290IGlzLWhpZGRlbi1tb2JpbGVcIj5cbiAgICA8bmF2IGNsYXNzPVwidGFicyBpcy1mdWxsd2lkdGhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImlzLWFjdGl2ZVwiPjxhPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cInRyYXZlbFwiPk1vcm9jY288L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cInRyYXZlbFwiPklzdGFuYnVsPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0cmF2ZWxcIj5SdXNzaWE8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cInRyYXZlbFwiPlBlcnU8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQTBHa0QsT0FBTyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQU4vQixHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21EQUFULEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbEcxQixTQUFTLEdBQUcsS0FBSzs7Ozs7Ozs7OzZDQXNGRSxTQUFTLEdBQUcsSUFBSTsrQ0ErQlYsU0FBUyxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
