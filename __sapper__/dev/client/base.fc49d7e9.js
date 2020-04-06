import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, b as detach_dev, c as claim_space, h as claim_text, j as attr_dev, k as add_location, F as toggle_class, l as insert_dev, m as append_dev, G as listen_dev, n as noop } from './client.54432420.js';
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
			add_location(img, file, 86, 12, 1867);
			attr_dev(a0, "class", "navbar-item svelte-10nssdk");
			add_location(a0, file, 85, 10, 1831);
			add_location(span0, file, 89, 12, 2036);
			add_location(span1, file, 90, 12, 2062);
			add_location(span2, file, 91, 12, 2088);
			attr_dev(span3, "class", "navbar-burger burger svelte-10nssdk");
			attr_dev(span3, "data-target", "navbarMenuHeroC");
			add_location(span3, file, 88, 10, 1958);
			attr_dev(div0, "class", "navbar-brand is-hidden-tablet svelte-10nssdk");
			add_location(div0, file, 84, 8, 1777);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 83, 6, 1745);
			attr_dev(header, "class", "navbar");
			add_location(header, file, 82, 4, 1715);
			attr_dev(div2, "class", "modal-background");
			add_location(div2, file, 101, 10, 2258);
			attr_dev(a1, "href", "pages/morocco.html");
			attr_dev(a1, "class", "svelte-10nssdk");
			add_location(a1, file, 106, 20, 2484);
			attr_dev(div3, "class", "column");
			add_location(div3, file, 105, 18, 2443);
			attr_dev(a2, "href", "pages/morocco.html");
			attr_dev(a2, "class", "svelte-10nssdk");
			add_location(a2, file, 109, 20, 2609);
			attr_dev(div4, "class", "column");
			add_location(div4, file, 108, 18, 2568);
			attr_dev(a3, "href", "pages/morocco.html");
			attr_dev(a3, "class", "svelte-10nssdk");
			add_location(a3, file, 112, 20, 2735);
			attr_dev(div5, "class", "column");
			add_location(div5, file, 111, 18, 2694);
			attr_dev(a4, "href", "pages/morocco.html");
			attr_dev(a4, "class", "svelte-10nssdk");
			add_location(a4, file, 115, 20, 2857);
			attr_dev(div6, "class", "column");
			add_location(div6, file, 114, 18, 2816);
			attr_dev(div7, "class", "columns has-text-centered");
			add_location(div7, file, 104, 16, 2385);
			attr_dev(div8, "class", "container");
			add_location(div8, file, 103, 12, 2345);
			attr_dev(button, "class", "modal-close is-large");
			attr_dev(button, "aria-label", "close");
			add_location(button, file, 119, 14, 2980);
			attr_dev(div9, "class", "modal-content");
			add_location(div9, file, 102, 10, 2305);
			attr_dev(div10, "class", "modal is-clipped");
			toggle_class(div10, "is-active", /*active*/ ctx[0]);
			add_location(div10, file, 100, 8, 2192);
			attr_dev(div11, "class", "hero-head");
			add_location(div11, file, 81, 2, 1687);
			attr_dev(h1, "class", "svelte-10nssdk");
			add_location(h1, file, 134, 8, 3400);
			attr_dev(div12, "class", "container");
			add_location(div12, file, 133, 6, 3368);
			attr_dev(div13, "class", "shoes hero-body svelte-10nssdk");
			add_location(div13, file, 132, 4, 3332);
			attr_dev(div14, "class", "hero-image svelte-10nssdk");
			add_location(div14, file, 131, 2, 3303);
			attr_dev(a5, "class", "svelte-10nssdk");
			add_location(a5, file, 144, 32, 3657);
			attr_dev(li0, "class", "is-active");
			add_location(li0, file, 144, 10, 3635);
			attr_dev(a6, "href", "travel");
			attr_dev(a6, "class", "svelte-10nssdk");
			add_location(a6, file, 145, 14, 3688);
			add_location(li1, file, 145, 10, 3684);
			attr_dev(a7, "href", "travel");
			attr_dev(a7, "class", "svelte-10nssdk");
			add_location(a7, file, 146, 14, 3736);
			add_location(li2, file, 146, 10, 3732);
			attr_dev(a8, "href", "travel");
			attr_dev(a8, "class", "svelte-10nssdk");
			add_location(a8, file, 147, 14, 3785);
			add_location(li3, file, 147, 10, 3781);
			attr_dev(a9, "href", "travel");
			attr_dev(a9, "class", "svelte-10nssdk");
			add_location(a9, file, 148, 14, 3832);
			add_location(li4, file, 148, 10, 3828);
			attr_dev(ul, "class", "svelte-10nssdk");
			add_location(ul, file, 143, 8, 3620);
			attr_dev(div15, "class", "container");
			add_location(div15, file, 142, 6, 3588);
			attr_dev(nav, "class", "tabs is-fullwidth");
			add_location(nav, file, 141, 4, 3550);
			attr_dev(div16, "class", "hero-foot is-hidden-mobile svelte-10nssdk");
			add_location(div16, file, 140, 2, 3505);
			attr_dev(section, "class", "hero is-success is-fullheight svelte-10nssdk");
			add_location(section, file, 79, 0, 1593);
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
			if (remount) dispose();
			dispose = listen_dev(button, "click", /*click_handler*/ ctx[1], false, false, false);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*active*/ 1) {
				toggle_class(div10, "is-active", /*active*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
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
	let { active = true } = $$props;
	const writable_props = ["active"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Base> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Base", $$slots, []);
	const click_handler = () => $$invalidate(0, active = !active);

	$$self.$set = $$props => {
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	$$self.$capture_state = () => ({ destination, chapter, active });

	$$self.$inject_state = $$props => {
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [active, click_handler];
}

class Base extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { active: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Base",
			options,
			id: create_fragment.name
		});
	}

	get active() {
		throw new Error("<Base>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set active(value) {
		throw new Error("<Base>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5mYzQ5ZDdlOS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9iYXNlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0ID5cbiAgaW1wb3J0IHsgZGVzdGluYXRpb24sIGNoYXB0ZXIgfSBmcm9tICcuL21vcm9jY28uanMnO1xuICBleHBvcnQgbGV0IGFjdGl2ZSA9IHRydWU7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbWVkaWE9XCJzY3JlZW5cIiBsYW5nPVwic2Nzc1wiPlxuXHRAaW1wb3J0IFwiLi9zdHlsZS90aGVtZS5zY3NzXCI7XG4gIC5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGgxIHtcbiAgZm9udC1mYW1pbHk6ICdFbmdhZ2VtZW50JztcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxldHRlci1zcGFjaW5nOiAtNi4yNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cblxuICAuaGVyby1ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogOHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcbiAgfVxuXG4gIC5oZXJvLWltYWdlIHtcbiAgICBtYXJnaW4tbGVmdDogOHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhyZW07XG4gIH1cblxuICAuc2hvZXMsXG4gIC5ob21lLXBpYyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL3Nob2VzLmpwZ1wiKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG5cblxuICAvLyBib3R0b20gbmF2XG5cbiAgLmhlcm8tZm9vdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5oZXJvIC50YWJzIHVsLFxuICAuaGVybyAuaGVyby1mb290IC50YWJzIHVsLCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHJlbTtcbiAgfVxuXG4gIC5oZXJvIC5oZXJvLWZvb3QgLnRhYnMgdWwge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICB9XG5cbiAgLmhlcm8tZm9vdCAuaGVyby1ib2R5IGgxIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG5cbiAgLmhlcm8gLmhlcm8tZm9vdCAudGFicyBhIHtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5oZXJvIC5oZXJvLWZvb3QgLnRhYnMgYTpob3ZlciB7XG4gICAgY29sb3I6ICRncmV5O1xuICB9XG5cbiAgLmNoYXB0ZXItY2xvc2UgaDMge1xuICAgIGNvbG9yOiAkZ3JleTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdFbmdhZ2VtZW50JztcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgbWFyZ2luOiAxMHJlbSA1cmVtO1xuICB9XG5cbiAgLy8gUmVzcG9uaXN2ZSBzaXplc1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAuaGVyby1pbWFnZSB7XG4gICAgICBtYXJnaW46IGF1dG8gMnJlbTtcbiAgICB9XG5cbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuXG4gICAgLm5hdmJhci1idXJnZXIge1xuICAgICAgY29sb3I6ICRibGFjayAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5oZXJvLWJvZHkgaDEge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgIC5zaG9lcyB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZXMvc2hvZXMtcG9ydHJhaXQuanBnXCIpICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuICB9XG5cbjwvc3R5bGU+XG5cbjxzZWN0aW9uIGNsYXNzPVwiaGVybyBpcy1zdWNjZXNzIGlzLWZ1bGxoZWlnaHRcIj5cbiAgPCEtLSBIZXJvIGhlYWQ6IHdpbGwgc3RpY2sgYXQgdGhlIHRvcCAtLT5cbiAgPGRpdiBjbGFzcz1cImhlcm8taGVhZFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJuYXZiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1icmFuZCBpcy1oaWRkZW4tdGFibGV0XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJ3YW5kZXJsdXN0LnN2Z1wiIGFsdD0nbG9nb21hcmsnIHdpZHRoPVwiMTEyXCIgaGVpZ2h0PVwiMjhcIj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItYnVyZ2VyIGJ1cmdlclwiIGRhdGEtdGFyZ2V0PVwibmF2YmFyTWVudUhlcm9DXCI+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cblxuICAgIDwhLS0gbW9kYWwgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M6aXMtYWN0aXZlPXthY3RpdmV9IGNsYXNzPVwibW9kYWwgaXMtY2xpcHBlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicGFnZXMvbW9yb2Njby5odG1sXCI+TW9yb2NjbzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicGFnZXMvbW9yb2Njby5odG1sXCI+SXN0YW5idWw8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInBhZ2VzL21vcm9jY28uaHRtbFwiPlBlcnU8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInBhZ2VzL21vcm9jY28uaHRtbFwiPlJ1c3NpYTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17KCkgPT4gYWN0aXZlID0gIWFjdGl2ZX0gY2xhc3M9XCJtb2RhbC1jbG9zZSBpcy1sYXJnZVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgPC9kaXY+XG5cbiAgPCEtLSA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgYmluZDpjaGVja2VkPXthY3RpdmV9PiAtLT5cbiAgPCEtLSA8YnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBhY3RpdmUgPSAhYWN0aXZlfT50ZXh0PC9idXR0b24+IC0tPlxuXG5cbiAgPCEtLSBIZXJvIGNvbnRlbnQ6IHdpbGwgYmUgaW4gdGhlIG1pZGRsZSAtLT5cblxuICA8ZGl2IGNsYXNzPVwiaGVyby1pbWFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzaG9lcyBoZXJvLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxPldhbmRlcmx1c3Q8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS0gSGVybyBmb290ZXI6IHdpbGwgc3RpY2sgYXQgdGhlIGJvdHRvbSAtLT5cbiAgPGRpdiBjbGFzcz1cImhlcm8tZm9vdCBpcy1oaWRkZW4tbW9iaWxlXCI+XG4gICAgPG5hdiBjbGFzcz1cInRhYnMgaXMtZnVsbHdpZHRoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpcy1hY3RpdmVcIj48YT5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0cmF2ZWxcIj5Nb3JvY2NvPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0cmF2ZWxcIj5Jc3RhbmJ1bDwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwidHJhdmVsXCI+UnVzc2lhPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0cmF2ZWxcIj5QZXJ1PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBb0c4QixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBQU4sR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FsR3ZCLE1BQU0sR0FBRyxJQUFJOzs7Ozs7Ozs7NkNBcUhZLE1BQU0sSUFBSSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9